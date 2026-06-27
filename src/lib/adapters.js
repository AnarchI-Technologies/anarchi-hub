export async function refreshKnownWalletSnapshots(options = {}) {
  return {
    ok: true,
    status: "refreshed",
    source: "local-adapter-registry",
    refreshedAt: new Date().toISOString(),
    options
  };
}
