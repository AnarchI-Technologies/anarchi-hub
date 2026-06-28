import "../policy.css";
export const metadata = {
  title: "FAQ | AnarchI Technologies",
  description: "Frequently asked questions about AnarchI Wallet Safety Reports.",
};
export default function FAQPage() {
  return (
    <main className="policy-page">
      <article className="policy-card">
        <p className="policy-eyebrow">AnarchI Technologies</p>
        <h1>FAQ</h1>
        <h2>What is a Wallet Safety Report?</h2>
        <p>
          A Wallet Safety Report is a personalized, read-only technical report based on a public wallet address,
          selected chain, customer concerns, questionnaire answers, public blockchain data, and available risk sources.
        </p>
        <h2>Do you need my seed phrase or private key?</h2>
        <p>
          No. Never send AnarchI your seed phrase, private key, recovery phrase, wallet backup file, or exchange
          password. We do not need them and do not want them.
        </p>
        <h2>Do you take custody of my funds?</h2>
        <p>
          No. AnarchI does not take custody of customer wallets, funds, tokens, NFTs, or private keys.
        </p>
        <h2>Can the report prove my wallet is safe?</h2>
        <p>
          No report can guarantee wallet safety. Reports reduce uncertainty by reviewing available signals, but
          blockchain risk changes over time and data sources can be incomplete.
        </p>
        <h2>What chains do you support?</h2>
        <p>
          The order form may list multiple chains including Ethereum, Base, Arbitrum, Optimism, Polygon, BNB Smart
          Chain, Avalanche, Solana, Bitcoin, Tron, TON, WAX, and EOS. Depth of analysis can vary by chain and available data.
        </p>
        <h2>What does optional wallet proof mean?</h2>
        <p>
          Optional wallet proof means signing a message to show control of a wallet. It should never reveal your seed
          phrase or private key. Future ownership-confirmed categories may require this proof.
        </p>
        <h2>What are action cards?</h2>
        <p>
          Action cards are customer-controlled recommendations, such as reviewing or revoking token approvals. They
          may include links, contract details, or transaction hints. You must verify everything before signing.
        </p>
        <h2>Can I pay with card or crypto?</h2>
        <p>
          AnarchI may offer both card/bank checkout and crypto checkout options. Available payment methods may vary
          by provider, region, and service status.
        </p>
        <h2>What happens if I consent to internal research?</h2>
        <p>
          If you consent, AnarchI may create a sanitized internal research version after your report is delivered.
          This should remove personal identifiers and preserve useful generalized safety patterns.
        </p>
        <h2>What happens if I do not consent?</h2>
        <p>
          If you do not consent, AnarchI will not intentionally create a sanitized research version for internal
          knowledge-family sorting, except where limited retention is needed for payment, legal, security, accounting,
          dispute, support, or operational reasons.
        </p>
        <h2>Who do I contact for support?</h2>
        <p>
          Email <strong>admin@anarchi-tech.com</strong>. Do not include private keys, seed phrases, or recovery phrases.
        </p>
      </article>
    </main>
  );
}
