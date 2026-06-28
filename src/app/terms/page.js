import "../policy.css";
export const metadata = {
  title: "Terms of Service | AnarchI Technologies",
  description: "Terms of Service for AnarchI Technologies and Wallet Safety Reports.",
};
export default function TermsPage() {
  return (
    <main className="policy-page">
      <article className="policy-card">
        <p className="policy-eyebrow">AnarchI Technologies</p>
        <h1>Terms of Service</h1>
        <p><strong>Effective Date:</strong> 6/28/2026</p>
        <p><strong>Business Name:</strong> AnarchI Technologies</p>
        <p><strong>Contact:</strong> admin@anarchi-tech.com</p>
        <p><strong>Business Address:</strong> 3850 S Meridian Ave, Wichita, KS 67217</p>
        <h2>1. Agreement to These Terms</h2>
        <p>
          These Terms of Service govern your access to and use of AnarchI Technologies websites,
          products, services, software, Wallet Safety Reports, report pages, checkout flows, and related
          communications. By using our services or purchasing a report, you agree to these Terms.
        </p>
        <h2>2. What AnarchI Provides</h2>
        <p>
          AnarchI provides deterministic software services, including read-only Wallet Safety Reports.
          Wallet Safety Reports may analyze public wallet addresses, public blockchain data, customer
          intake answers, public risk sources, approval patterns, and related technical signals.
        </p>
        <p>
          AnarchI does not provide wallet custody, exchange services, investment management, financial
          planning, legal advice, tax advice, forensic certification, insurance, asset recovery guarantees,
          or guaranteed wallet protection.
        </p>
        <h2>3. Wallet Safety Reports</h2>
        <p>
          A Wallet Safety Report is an informational technical report. It may include risk notes,
          observations, source matches, public-data findings, customer-specific recommendations, and
          customer-controlled action suggestions.
        </p>
        <p>
          Reports are based on information available at the time of analysis. Blockchain activity,
          public risk sources, token approvals, contract behavior, and threat signals may change after
          a report is generated.
        </p>
        <h2>4. No Seed Phrases, Private Keys, or Custody</h2>
        <p>
          You must never provide AnarchI with seed phrases, private keys, recovery phrases, wallet backup
          files, exchange passwords, or banking passwords. AnarchI does not need these items and does not
          want these items.
        </p>
        <p>
          AnarchI will never ask you to transfer wallet custody to us. You remain solely responsible for
          your wallet, assets, devices, passwords, security practices, transaction decisions, and signed
          wallet actions.
        </p>
        <h2>5. Customer-Controlled Actions</h2>
        <p>
          Reports may include action cards, transaction hints, links, scripts, or instructions for reviewing
          or revoking token approvals. These are informational and customer-controlled. You must verify
          contract addresses, spender addresses, chain selection, transaction data, wallet prompts, and gas
          costs before signing any transaction.
        </p>
        <p>
          AnarchI does not sign transactions for you, hold your private keys, or execute wallet actions on
          your behalf.
        </p>
        <h2>6. Your Responsibilities</h2>
        <p>You agree that you will:</p>
        <ul>
          <li>Provide accurate information to the best of your knowledge.</li>
          <li>Only submit wallet addresses and information you are authorized to submit.</li>
          <li>Protect your own wallet credentials, devices, email, and report password.</li>
          <li>Review all recommendations before taking action.</li>
          <li>Not use AnarchI to harass, defraud, impersonate, dox, abuse, or unlawfully monitor others.</li>
          <li>Not submit seed phrases, private keys, recovery phrases, or other prohibited secrets.</li>
        </ul>
        <h2>7. Payment</h2>
        <p>
          Payment may be processed through third-party payment providers such as Stripe or crypto payment
          processors. Prices are shown before purchase. Payment must be successfully confirmed before report
          generation and delivery are completed.
        </p>
        <h2>8. Refunds and Cancellations</h2>
        <p>
          Refunds and cancellations are governed by our Refund Policy. Because Wallet Safety Reports are
          digital, personalized services, refund eligibility may depend on whether analysis or fulfillment
          has started.
        </p>
        <h2>9. Consent for Internal Research</h2>
        <p>
          If you consent, AnarchI may create a sanitized internal research version after your customer
          report is delivered. If you do not consent, AnarchI will not intentionally create a sanitized
          research version for knowledge-family sorting, except where limited retention is necessary for
          payment, support, legal, security, accounting, dispute, or operational reasons.
        </p>
        <h2>10. Acceptable Use</h2>
        <p>You may not use AnarchI services to:</p>
        <ul>
          <li>Violate law or third-party rights.</li>
          <li>Submit stolen, unauthorized, or deceptive information.</li>
          <li>Attempt to access backend systems, secrets, databases, or non-public records.</li>
          <li>Interfere with website operations, abuse payment flows, or bypass security controls.</li>
          <li>Misrepresent AnarchI reports as legal, financial, tax, or forensic certification.</li>
        </ul>
        <h2>11. No Guarantees</h2>
        <p>
          AnarchI does not guarantee that a wallet is safe, compromised, recoverable, compliant, profitable,
          or free from future risk. Reports may contain incomplete, delayed, uncertain, or false-positive
          information. You should use reports as one input in your own security decision-making.
        </p>
        <h2>12. Third-Party Services</h2>
        <p>
          Our services may link to explorers, wallets, payment processors, token approval tools, and other
          third-party services. We are not responsible for third-party websites, policies, security,
          availability, accuracy, fees, or transaction outcomes.
        </p>
        <h2>13. Intellectual Property</h2>
        <p>
          AnarchI owns or licenses the website, software, brand materials, report templates, report logic,
          and service design. You may use your purchased report for your own personal or internal business
          purposes, but you may not resell, scrape, clone, or misrepresent AnarchI services.
        </p>
        <h2>14. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, AnarchI is not liable for indirect, incidental, special,
          consequential, exemplary, or punitive damages, including lost profits, lost assets, lost data,
          wallet compromise, missed opportunities, or transaction losses arising from use of our services
          or third-party tools.
        </p>
        <h2>15. Changes to Services or Terms</h2>
        <p>
          We may update our services or these Terms from time to time. Updates become effective when posted,
          unless stated otherwise.
        </p>
        <h2>16. Contact</h2>
        <p>
          Questions about these Terms can be sent to <strong>admin@anarchi-tech.com</strong>.
        </p>
      </article>
    </main>
  );
}
