import "../policy.css";
export const metadata = {
  title: "Contact | AnarchI Technologies",
  description: "Contact AnarchI Technologies for support, privacy, billing, and Wallet Safety Report questions.",
};
export default function ContactPage() {
  return (
    <main className="policy-page">
      <article className="policy-card">
        <p className="policy-eyebrow">AnarchI Technologies</p>
        <h1>Contact</h1>
        <p>
          For support, privacy questions, billing questions, report delivery issues, refund requests,
          or safety concerns, contact AnarchI Technologies.
        </p>
        <h2>Email</h2>
        <p><strong>admin@anarchi-tech.com</strong></p>
        <h2>Business Address</h2>
        <p>
          <strong>AnarchI Technologies</strong><br />
          3850 S Meridian Ave<br />
          Wichita, KS 67217
        </p>
        <h2>Support Notes</h2>
        <ul>
          <li>Do not email seed phrases, private keys, recovery phrases, or wallet backup files.</li>
          <li>For report support, include the email used at checkout and order/session ID if available.</li>
          <li>For refund requests, include payment date, provider used, and reason for the request.</li>
          <li>For privacy requests, state whether you are requesting access, correction, deletion, or consent withdrawal.</li>
        </ul>
        <h2>Response Time</h2>
        <p>
          We aim to respond as soon as reasonably possible. Response times may vary based on workload,
          queue status, and the nature of the request.
        </p>
      </article>
    </main>
  );
}
