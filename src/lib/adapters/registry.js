export const WALLET_SOURCE_ADAPTERS = {
    etherscan: {
        name: "Etherscan",
        enabled: Boolean(process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY),
    },
    basescan: {
        name: "Basescan",
        enabled: Boolean(process.env.NEXT_PUBLIC_BASESCAN_API_KEY),
    },
    arbiscan: {
        name: "Arbiscan",
        enabled: Boolean(process.env.NEXT_PUBLIC_ARBISCAN_API_KEY),
    },
    optimism: {
        name: "Optimism",
        enabled: Boolean(process.env.NEXT_PUBLIC_OPTIMISM_API_KEY),
    },
    polygonscan: {
        name: "Polygonscan",
        enabled: Boolean(process.env.NEXT_PUBLIC_POLYGONSCAN_API_KEY),
    },
    bscscan: {
        name: "BscScan",
        enabled: Boolean(process.env.NEXT_PUBLIC_BSCSCAN_API_KEY),
    },
    snowtrace: {
        name: "Snowtrace",
        enabled: Boolean(process.env.NEXT_PUBLIC_SNOWTRACE_API_KEY),
    },
    trongrid: {
        name: "TronGrid",
        enabled: Boolean(process.env.NEXT_PUBLIC_TRONGRID_API_KEY),
    },
    toncenter: {
        name: "TonCenter",
        enabled: Boolean(process.env.NEXT_PUBLIC_TONCENTER_API_KEY),
    },
    wax: {
        name: "WAX",
        enabled: Boolean(process.env.NEXT_PUBLIC_WAX_API_KEY),
    },
    eos: {
        name: "EOS",
        enabled: Boolean(process.env.NEXT_PUBLIC_EOS_API_KEY),
    },
};

export function getAdapterRegistry() {
    return WALLET_SOURCE_ADAPTERS;
}

export function getEnabledAdapters() {
    return Object.entries(WALLET_SOURCE_ADAPTERS)
        .filter(([, adapter]) => adapter.enabled)
        .map(([key, adapter]) => ({
            key,
            ...adapter,
        }));
}

export async function refreshWalletSources() {
    const enabledAdapters = getEnabledAdapters();

    return {
        ok: true,
        refreshedAt: new Date().toISOString(),
        enabledAdapters,
        message:
            enabledAdapters.length > 0
                ? "Wallet source adapters refreshed."
                : "No wallet source API keys are currently configured.",
    };
}