export async function handleIntake(payload = {}) {
  const now = new Date().toISOString();
  return {
    ok: true,
    message: "Intake received.",
    data: {
      name: payload.name || "",
      email: payload.email || "",
      walletAddress: payload.walletAddress || payload.address || "",
      chain: payload.chain || "",
      message: payload.message || "",
      source: "anarchi-tech.com",
      createdAt: now
    }
  };
}
export async function handleReportRequest(payload = {}) {
  const now = new Date().toISOString();
  return {
    ok: true,
    message: "Report request received.",
    report: {
      address: payload.walletAddress || payload.address || "",
      chain: payload.chain || "unknown",
      status: "queued",
      source: "anarchi-tech.com",
      createdAt: now
    }
  };
}
export default async function intakeHandler(payload = {}) {
  return handleIntake(payload);
}
export async function handleIntakeRequest(payload = {}) {
  if (typeof handleIntake === "function") {
    return handleIntake(payload);
  }
  const now = new Date().toISOString();
  const email = String(payload.email || "").trim().toLowerCase();
  const walletAddress = String(payload.walletAddress || payload.address || "").trim();
  if (!email) {
    return {
      ok: false,
      status: 400,
      error: "Email is required."
    };
  }
  if (!walletAddress) {
    return {
      ok: false,
      status: 400,
      error: "Wallet address is required."
    };
  }
  return {
    ok: true,
    status: 200,
    message: "Wallet report intake received.",
    intake: {
      id: `anar-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
      type: "wallet-safety-report-intake",
      name: String(payload.name || "").trim(),
      email,
      walletAddress,
      chain: String(payload.chain || "unknown").trim(),
      concern: String(payload.concern || payload.message || "").trim(),
      status: "received",
      source: "anarchi-tech.com",
      createdAt: now
    }
  };
}
