import "../policy.css";
export const metadata = {
  title: "About | AnarchI Technologies",
  description: "About AnarchI Technologies and Wallet Safety Reports.",
};
export default function AboutPage() {
  return (
    <main className="policy-page">
      <article className="policy-card">
        <p className="policy-eyebrow">AnarchI Technologies</p>
        <h1>About AnarchI</h1>
        <p>
          AnarchI Technologies builds deterministic software services for people who want practical tools,
          clear systems, and more control over the digital environments they depend on.
        </p>
        <h2>What We Are Building First</h2>
        <p>
          Our first active service is the AnarchI Wallet Safety Report: a read-only wallet analysis service
          that helps customers understand public wallet activity, potential approval risks, risk signals,
          and practical next steps.
        </p>
        <h2>What We Are Not</h2>
        <p>
          AnarchI is not a crypto exchange, wallet custodian, investment advisor, legal advisor, tax advisor,
          or asset recovery agency. We do not ask for seed phrases or private keys. We do not take custody of
          customer funds.
        </p>
        <h2>Our Product Philosophy</h2>
        <p>
          We focus on deterministic software: systems that can be inspected, reasoned about, improved, and
          made useful without relying on vague promises. Reports should become practical repair maps, not
          novelty paperwork.
        </p>
        <h2>Customer Control</h2>
        <p>
          AnarchI reports may include recommended actions or action cards, but the customer remains in control.
          Any wallet action must be reviewed and signed by the customer using their own wallet or chosen tool.
        </p>
        <h2>Future Direction</h2>
        <p>
          AnarchI may explore future projects involving agentic software, AI-assisted systems, and broader
          deterministic tools. Current public priority remains Wallet Safety Reports and reliable service delivery.
        </p>
        <h2>Contact</h2>
        <p>
          Email: <strong>admin@anarchi-tech.com</strong><br />
          Address: <strong>3850 S Meridian Ave, Wichita, KS 67217</strong>
        </p>
      </article>
    </main>
  );
}
