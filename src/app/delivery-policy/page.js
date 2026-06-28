import "../policy.css";
export const metadata = {
  title: "Delivery Policy | AnarchI Technologies",
  description: "Digital delivery policy for AnarchI Wallet Safety Reports.",
};
export default function DeliveryPolicyPage() {
  return (
    <main className="policy-page">
      <article className="policy-card">
        <p className="policy-eyebrow">AnarchI Technologies</p>
        <h1>Delivery Policy</h1>
        <p><strong>Effective Date:</strong> 6/28/2026</p>
        <p><strong>Contact:</strong> admin@anarchi-tech.com</p>
        <h2>1. Digital Delivery</h2>
        <p>
          AnarchI Wallet Safety Reports are digital services delivered electronically. We do not ship
          physical goods.
        </p>
        <h2>2. Delivery Method</h2>
        <p>
          Reports may be delivered by email, secure link, encrypted report container, or another electronic
          method selected by AnarchI. Delivery requires confirmed payment and completed intake.
        </p>
        <h2>3. Report Password</h2>
        <p>
          Customers may be asked to create a report unlock password. You are responsible for saving this
          password. AnarchI should not need your seed phrase, private key, wallet password, or recovery phrase.
        </p>
        <h2>4. Timing</h2>
        <p>
          Reports are intended to generate after payment and intake are confirmed. Timing may vary based on
          chain availability, data provider availability, report queue status, payment confirmation, and
          technical conditions.
        </p>
        <h2>5. Delivery Problems</h2>
        <p>
          If you do not receive your report, contact <strong>admin@anarchi-tech.com</strong> with your email,
          payment date, and order/session ID if available.
        </p>
        <h2>6. No Physical Shipping</h2>
        <p>
          Because AnarchI provides digital services, shipping, physical returns, and physical delivery
          tracking do not apply.
        </p>
      </article>
    </main>
  );
}
