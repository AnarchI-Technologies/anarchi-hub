export function createProofControlPayload(input = {}) {
    return {
        // Unique identifier for this proof request
        proofId: input.proofId || cryptoSafeId("proof"),
        walletAddress: input.walletAddress || "",
        chain: input.chain || "unknown",
        requestedAt: new Date().toISOString(),
        status: "pending",
    };
}

export function validateWalletInput(input = {}) {
    const walletAddress = String(input.walletAddress || "").trim();

    if (!walletAddress) {
        return {
            ok: false,
            error: "Wallet address is required.",
        };
    }

    return {
        ok: true,
        walletAddress,
    };
}

export function cryptoSafeId(prefix = "id") {
    const randomPart =
        typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : Math.random().toString(36).slice(2);

    return `${prefix}_${randomPart}`;
}