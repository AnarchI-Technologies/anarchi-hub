import "../policy.css";
export const metadata = {
  title: "Refund Policy | AnarchI Technologies",
  description: "Refund and cancellation policy for AnarchI Wallet Safety Reports.",
};
export default function RefundPolicyPage() {
  return (
    <main className="policy-page">
      <article className="policy-card">
        <p className="policy-eyebrow">AnarchI Technologies</p>
        <h1>Refund Policy</h1>
        <p><strong>Effective Date:</strong> 6/28/2026</p>
        <p><strong>Contact:</strong> admin@anarchi-tech.com</p>
        <h2>1. Overview</h2>
        <p>
          AnarchI Wallet Safety Reports are personalized digital services. This policy explains when
          refunds or cancellations may be available.
        </p>
        <h2>2. Cancellations Before Report Generation</h2>
        <p>
          If you request cancellation before report generation, analysis, or fulfillment has started,
          you may be eligible for a full or partial refund, depending on payment processor status and
          any non-refundable processor fees.
        </p>
        <h2>3. After Report Generation Starts</h2>
        <p>
          Once AnarchI begins generating, preparing, or delivering a personalized Wallet Safety Report,
          the order may become non-refundable because the service is customized digital work.
        </p>
        <h2>4. Failed Delivery or Technical Error</h2>
        <p>
          If AnarchI receives confirmed payment but cannot generate or deliver the purchased report due
          to an error within AnarchI-controlled systems, we may provide a corrected report, retry delivery,
          provide store/service credit, or issue a refund at our discretion.
        </p>
        <h2>5. Customer Input Errors</h2>
        <p>
          Refunds are not guaranteed for incorrect wallet addresses, incorrect chain selection, inaccessible
          email accounts, lost report passwords, customer device issues, or customer misunderstanding of the
          service where AnarchI has already begun fulfillment.
        </p>
        <h2>6. Payment Processor Timing</h2>
        <p>
          Approved refunds may take time to appear depending on Stripe, bank, card network, or crypto
          payment processor timing. Crypto payments may be subject to network, provider, and currency
          limitations.
        </p>
        <h2>7. Disputes and Chargebacks</h2>
        <p>
          Please contact us first at <strong>admin@anarchi-tech.com</strong> so we can review and attempt
          to resolve the issue. We reserve the right to provide order records, delivery records, intake
          records, and relevant service evidence to payment processors during disputes.
        </p>
        <h2>8. How to Request a Refund</h2>
        <p>
          Email <strong>admin@anarchi-tech.com</strong> with your name, email used at checkout, payment date,
          order/session ID if available, and the reason for your request.
        </p>
      </article>
    </main>
  );
}
