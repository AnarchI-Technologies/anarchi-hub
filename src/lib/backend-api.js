export function getBackendUrl() {
  const raw = process.env.NEXT_PUBLIC_BACKEND_URL || "https://wallet-safety-report-services.onrender.com";
  return raw.replace(/\/+$/, "");
}
export function backendApi(path) {
  const cleanPath = String(path || "").startsWith("/")
    ? path
    : `/${path}`;
  return `${getBackendUrl()}${cleanPath}`;
}
