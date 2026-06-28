const DEFAULT_BACKEND_URL = "https://wallet-safety-report-services.onrender.com";
export function getBackendUrl() {
  const raw = process.env.NEXT_PUBLIC_BACKEND_URL || DEFAULT_BACKEND_URL;
  try {
    const parsed = new URL(raw);
    if (
      parsed.hostname === "wallet-safety-report-services.onrender.com" &&
      parsed.protocol === "https:"
    ) {
      return parsed.origin;
    }
    console.warn("Invalid NEXT_PUBLIC_BACKEND_URL host. Falling back to default backend.");
    return DEFAULT_BACKEND_URL;
  } catch {
    console.warn("Invalid NEXT_PUBLIC_BACKEND_URL format. Falling back to default backend.");
    return DEFAULT_BACKEND_URL;
  }
}
export function backendApi(path) {
  const cleanPath = String(path || "").startsWith("/")
    ? path
    : `/${path}`;
  return `${getBackendUrl()}${cleanPath}`;
}
