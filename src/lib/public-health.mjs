export const HEALTH_SERVICE = "anarchi-hub";

function safeBuildId(value) {
  const normalized = String(value || "development").trim();
  return /^[a-zA-Z0-9._-]{1,64}$/.test(normalized) ? normalized : "unknown";
}

export function getPublicHealth(env = process.env) {
  return {
    ok: true,
    service: HEALTH_SERVICE,
    version: safeBuildId(env.ANARCHI_BUILD_ID || env.RAILWAY_GIT_COMMIT_SHA),
  };
}
