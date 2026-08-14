const variables = [
  ["ANARCHI_BUILD_ID", "optional", "server"],
  ["PORT", "optional", "server"],
  ["MONGODB_URI", "optional", "server"],
  ["MONGODB_DB", "optional", "server"],
  ["SENDGRID_API_KEY", "optional", "server"],
  ["SENDGRID_FROM_EMAIL", "optional", "server"],
  ["GA_MEASUREMENT_ID", "optional", "server"],
  ["GA_API_SECRET", "optional", "server"],
  ["NEXT_PUBLIC_GA_MEASUREMENT_ID", "optional", "public"],
  ["NEXT_PUBLIC_BACKEND_URL", "optional", "public"],
  ["NEXT_PUBLIC_ETHERSCAN_API_KEY", "do-not-set", "public"],
  ["NEXT_PUBLIC_BASESCAN_API_KEY", "do-not-set", "public"],
  ["NEXT_PUBLIC_ARBISCAN_API_KEY", "do-not-set", "public"],
  ["NEXT_PUBLIC_OPTIMISM_API_KEY", "do-not-set", "public"],
  ["NEXT_PUBLIC_POLYGONSCAN_API_KEY", "do-not-set", "public"],
  ["NEXT_PUBLIC_BSCSCAN_API_KEY", "do-not-set", "public"],
  ["NEXT_PUBLIC_SNOWTRACE_API_KEY", "do-not-set", "public"],
  ["NEXT_PUBLIC_TRONGRID_API_KEY", "do-not-set", "public"],
  ["NEXT_PUBLIC_TONCENTER_API_KEY", "do-not-set", "public"],
  ["NEXT_PUBLIC_WAX_API_KEY", "do-not-set", "public"],
  ["NEXT_PUBLIC_EOS_API_KEY", "do-not-set", "public"],
];

for (const [name, requirement, scope] of variables) {
  const status = process.env[name] ? "set" : "unset";
  console.log(`${name}: ${status} (${requirement}, ${scope})`);
}

const riskyPublicNames = Object.keys(process.env).filter(
  (name) => name.startsWith("NEXT_PUBLIC_") && /(SECRET|PRIVATE|TOKEN|KEY|PASSWORD|SEED|WALLET)/i.test(name),
);

if (riskyPublicNames.length) {
  console.error(`Unsafe public variable names detected: ${riskyPublicNames.sort().join(", ")}`);
  process.exitCode = 1;
}
