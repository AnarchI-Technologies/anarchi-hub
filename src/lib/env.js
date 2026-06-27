const ETHERSCAN_FAMILY_KEYS = {
  ethereum: "ETHERSCAN_API_KEY",
  base: "BASESCAN_API_KEY",
  arbitrum: "ARBISCAN_API_KEY",
  optimism: "OPTIMISM_API_KEY",
  polygon: "POLYGONSCAN_API_KEY",
  bsc: "BSCSCAN_API_KEY",
  avalanche: "SNOWTRACE_API_KEY"
};
const NON_ETHERSCAN_KEYS = {
  tron: "TRONGRID_API_KEY",
  ton: "TONCENTER_API_KEY",
  wax: "WAX_API_KEY",
  eos: "EOS_API_KEY"
};
function cleanEnv(value) {
  const cleaned = String(value || "").trim();
  if (!cleaned) return "";
  if (
    cleaned === "YOUR_API_KEY_HERE" ||
    cleaned === '"YOUR_API_KEY_HERE"' ||
    cleaned === "'YOUR_API_KEY_HERE'"
  ) {
    return "";
  }
  if (cleaned.startsWith("${") && cleaned.endsWith("}")) {
    return "";
  }
  return cleaned.replace(/^["']|["']$/g, "");
}
export function getEnv(name, fallback = "") {
  return cleanEnv(process.env[name]) || cleanEnv(fallback);
}
export function getExplorerApiKey(chain) {
  const normalized = String(chain || "").trim().toLowerCase();
  const familyKey = getEnv("ETHERSCAN_FAMILY_API_KEY");
  if (ETHERSCAN_FAMILY_KEYS[normalized]) {
    return (
      getEnv(ETHERSCAN_FAMILY_KEYS[normalized]) ||
      familyKey
    );
  }
  if (NON_ETHERSCAN_KEYS[normalized]) {
    return getEnv(NON_ETHERSCAN_KEYS[normalized]);
  }
  return "";
}
export function getExplorerConfig(chain) {
  const normalized = String(chain || "").trim().toLowerCase();
  const apiKey = getExplorerApiKey(normalized);
  const etherscanV2ChainIds = {
    ethereum: 1,
    base: 8453,
    arbitrum: 42161,
    optimism: 10,
    polygon: 137,
    bsc: 56,
    avalanche: 43114
  };
  if (etherscanV2ChainIds[normalized]) {
    return {
      chain: normalized,
      provider: "etherscan-v2",
      chainId: etherscanV2ChainIds[normalized],
      apiKey,
      enabled: Boolean(apiKey),
      baseUrl: "https://api.etherscan.io/v2/api"
    };
  }
  return {
    chain: normalized,
    provider: "custom",
    apiKey,
    enabled: Boolean(apiKey)
  };
}
export function listExplorerConfigs() {
  return [
    "ethereum",
    "base",
    "arbitrum",
    "optimism",
    "polygon",
    "bsc",
    "avalanche",
    "tron",
    "ton",
    "wax",
    "eos"
  ].map(getExplorerConfig);
}
export function assertRequiredServerEnv(requiredNames = []) {
  const missing = requiredNames.filter((name) => !getEnv(name));
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
  return true;
}
