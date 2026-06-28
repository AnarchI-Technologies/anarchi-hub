import "../policy.css";
export const metadata = {
  title: "Safety and Risk Policy | AnarchI Technologies",
  description: "Safety and risk policy for AnarchI Wallet Safety Reports.",
};
export default function RiskPolicyPage() {
  return (
    <main className="policy-page">
      <article className="policy-card">
        <p className="policy-eyebrow">AnarchI Technologies</p>
        <h1>Safety and Risk Policy</h1>
        <p><strong>Effective Date:</strong> 6/28/2026</p>
        <p><strong>Contact:</strong> admin@anarchi-tech.com</p>
        <h2>1. Read-Only Analysis</h2>
        <p>
          AnarchI Wallet Safety Reports are designed around read-only analysis. We do not require seed
          phrases, private keys, wallet custody, or asset transfer.
        </p>
        <h2>2. No Private Keys or Seed Phrases</h2>
        <p>
          Never send AnarchI your seed phrase, private key, recovery phrase, wallet backup file, exchange
          password, banking password, or device unlock password. If any person or website claiming to be
          AnarchI asks for those items, treat it as suspicious and contact us directly.
        </p>
        <h2>3. No Guarantee of Safety</h2>
        <p>
          A report may reduce uncertainty, but it cannot guarantee safety. Threats can emerge after a report
          is generated. Public data can be incomplete. Blockchain tools, explorers, and risk sources may be
          delayed, inaccurate, unavailable, or incomplete.
        </p>
        <h2>4. Customer-Controlled Wallet Actions</h2>
        <p>
          Reports may recommend customer-controlled actions such as reviewing token approvals, revoking
          allowances, checking contracts, or using third-party tools. You must review and approve any wallet
          transaction yourself. AnarchI does not sign transactions for you.
        </p>
        <h2>5. Action Cards and Scripts</h2>
        <p>
          If a report includes action cards, transaction hints, scripts, links, or suggested revoke actions,
          they are informational. Verify chain, token contract, spender address, function call, gas cost, and
          wallet prompt before signing.
        </p>
        <h2>6. Not Financial, Legal, Tax, or Recovery Advice</h2>
        <p>
          Reports are technical and informational. They are not financial advice, investment advice, legal
          advice, tax advice, insurance, forensic certification, asset recovery, or a guarantee of outcomes.
        </p>
        <h2>7. Optional Wallet Proof</h2>
        <p>
          Optional wallet signing may be used in the future to unlock ownership-confirmed report categories.
          Signing a message should not require revealing private keys or seed phrases. Review wallet prompts
          carefully before signing anything.
        </p>
        <h2>8. Emergency Situations</h2>
        <p>
          If you believe a wallet is actively compromised, consider moving unaffected assets from a safe device,
          revoking approvals through trusted tools, contacting relevant platforms, and consulting qualified
          professionals. Do not rush into transactions you do not understand.
        </p>
      </article>
    </main>
  );
}
