# Local-first hosting runbook

## Architecture boundary

The public edge owns `anarchi-tech.com` and TLS. Its primary origin is a named outbound tunnel whose only target is Caddy on WSL loopback (`127.0.0.1:8080`). Caddy proxies to Next.js on WSL loopback (`127.0.0.1:3000`). Railway runs the same commit as the fallback origin.

Do not add router port forwarding. Do not place WSL, Windows, CERBERUS, Ollama, MongoDB, or SQLite addresses in public DNS. The tunnel service and the hub must use separate service identities. No CERBERUS credentials belong in this repository, the tunnel, the edge, or Railway.

CERBERUS public data must eventually arrive as a separately replicated, read-only allowlisted document. The site currently uses static public product content only and makes no CERBERUS network request.

## Local development

Prerequisites are Node 20.19 or newer and npm.

```bash
npm ci
npm run env:check
npm test
npm run dev
```

Open `http://127.0.0.1:3000`. The public health contract is `GET /healthz` and contains only `ok`, `service`, and `version`.

## WSL production installation

The template assumes the checkout is `/home/<user>/anarchi-hub` and distribution packages provide Node, npm, Caddy, and systemd. Adjust the unit if the checkout differs; do not hard-code a Windows-mounted path.

1. Check out the reviewed commit at `/home/<user>/anarchi-hub`.
2. Run `npm ci`, `npm run env:check`, `npm test`, and `npm run build` as the service user.
3. Create `/etc/anarchi-hub/anarchi-hub.env` owned by root with mode `0600`. Include only variables required by the hub. Do not include CERBERUS secrets. Set `ANARCHI_BUILD_ID` to the deployed commit SHA.
4. Copy `deploy/systemd/anarchi-hub@.service` to `/etc/systemd/system/anarchi-hub@.service`.
5. Copy `deploy/caddy/Caddyfile` to `/etc/caddy/Caddyfile`. Ensure `/var/log/caddy` is writable by Caddy.
6. Run `sudo systemctl daemon-reload`, `sudo systemctl enable --now anarchi-hub@<user>`, and `sudo systemctl reload caddy`.
7. Confirm listeners with `ss -ltn`: ports 3000 and 8080 must be bound only to `127.0.0.1`.
8. Run `bash scripts/verify-local.sh`.

The app uses `Restart=on-failure`, a 30-second graceful SIGTERM window, and journald for structured service metadata. Caddy writes JSON access logs with size, count, and age rotation.

## Secure tunnel requirements

Use a named outbound tunnel (for example, Cloudflare Tunnel) managed by its own systemd service. Route the tunnel only to `http://127.0.0.1:8080`. Store the tunnel credential outside the checkout and browser bundle with root-only permissions. Disable any default public tunnel hostname after the production edge route is attached.

At the edge:

- terminate TLS and enforce HTTPS;
- accept origin responses only through authenticated tunnel or Railway origin configuration;
- strip internal origin-selection headers from public responses and retain them in operator logs;
- cache content-hashed `/_next/static/*` assets for one year with `immutable`;
- use short or no caching for HTML, `/healthz`, and APIs;
- rate-limit POST APIs and enforce a 1 MB request-body ceiling;
- retain strict CORS for same-origin browser use and never treat a private source address as authentication.

Tunnel creation and live DNS changes are intentionally deferred until local and Railway origins independently serve the same tested commit.

## Railway fallback

Connect the new `AnarchI-Technologies/anarchi-hub` repository and deploy the exact reviewed commit. `railway.json` uses `npm ci && npm run build`, starts with `npm start`, and checks `/healthz`. Railway must provide `PORT`; Next.js listens on the platform interface for this fallback while `npm run start:local` remains loopback-only for WSL.

Copy only hub variables by name after reviewing them with `npm run env:check`. Do not copy CERBERUS credentials, wallets, private runtime URLs, MongoDB credentials that the fallback does not need, or any `.env` file. Set `ANARCHI_BUILD_ID` to the commit SHA if the platform SHA is unavailable.

Railway billing and sleep/scale-to-zero support depend on the active plan and service settings and were not changed by this slice. Before choosing a mode, verify the current dashboard:

- **Warm fallback:** fastest recovery and predictable health checks, but continuous minimum runtime cost.
- **Cold or scaled-to-zero fallback:** lowest idle cost, but recovery includes build or cold-start time and cannot satisfy fast request-level failover until awake.
- **Static edge survival:** cached immutable assets may remain available during a dual outage; uncached HTML and dynamic APIs will not. A future static marketing split could improve this, but the current App Router application includes server APIs and remains a Node deployment.

Do not downgrade, delete, or cancel the Railway service as part of deployment setup.

## Failover design for the second slice

Prefer a managed edge load balancer with health-checked primary and fallback pools. If an edge worker is used, keep circuit state in a consistent state service rather than per-isolate memory.

Recommended initial thresholds:

- probe `GET /healthz` every 15 seconds with a 2-second connect timeout and 5-second total timeout;
- remove local from service after 3 consecutive failures;
- hold a 60-second cooldown before considering failback;
- restore local only after 5 consecutive successful probes;
- retry a failed request against Railway only for `GET`, `HEAD`, and `OPTIONS`;
- never automatically retry POST, PUT, PATCH, or DELETE without an application idempotency key;
- cap a request to one fallback attempt;
- log selected origin, latency, circuit transition, and health result in private operator logs.

Use an edge-generated request ID at both origins. Do not expose local hostnames or addresses. Validate local failure, home-internet interruption, Railway failure, dual outage, recovery, and non-idempotent non-retry before making local primary.

## CERBERUS routes and projection

- `/products` uses the shared CERBERUS card model.
- `/products/cerberus` is the product profile inside the hub.
- `/cerberus` is the deeper standalone experience and can later back `cerberus.anarchi-tech.com` at the edge.

All three use `src/content/cerberus.js` and `src/components/cerberus/CerberusExperience.js`. A future status publisher must build a new object from an explicit field allowlist and replicate only that document. The frontend should show the last safe snapshot with its timestamp when publication is stale; it must never fall through to the private runtime.

## Rollback

1. At the edge, make Railway the sole active pool. This is the fastest operational rollback and needs no DNS change.
2. On WSL, stop the candidate with `sudo systemctl stop anarchi-hub@<user>`.
3. Check out the last known-good commit, run `npm ci && npm run build`, and restart the unit.
4. Run `bash scripts/verify-local.sh` against loopback.
5. Keep Railway primary until five consecutive local health checks and a manual page check pass; then restore traffic gradually.

The Git rollback for this slice is a normal revert of its single implementation commit. No database migration or CERBERUS-side rollback is required.
