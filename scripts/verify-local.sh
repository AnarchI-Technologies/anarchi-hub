#!/usr/bin/env bash
set -euo pipefail

base_url="${ANARCHI_VERIFY_URL:-http://127.0.0.1:8080}"
health_json="$(curl --fail --silent --show-error --max-time 5 "${base_url}/healthz")"

HEALTH_JSON="${health_json}" node --input-type=module <<'NODE'
const health = JSON.parse(process.env.HEALTH_JSON);
const keys = Object.keys(health).sort();
const expected = ["ok", "service", "version"];
if (JSON.stringify(keys) !== JSON.stringify(expected)) throw new Error(`Unexpected health keys: ${keys.join(", ")}`);
if (health.ok !== true || health.service !== "anarchi-hub" || typeof health.version !== "string") throw new Error("Invalid health response");
NODE

curl --fail --silent --show-error --max-time 10 "${base_url}/products/cerberus" >/dev/null
curl --fail --silent --show-error --max-time 10 "${base_url}/cerberus" >/dev/null
echo "Local verification passed for ${base_url}"
