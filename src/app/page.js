import Link from "next/link";
import "./home.css";
export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-card">
        <p className="eyebrow">AnarchI Technologies</p>
        <h1>Deterministic Wallet Safety Reports</h1>
        <p className="hero-copy">
          Read-only wallet safety reports built for people who want clarity before they move funds,
          approve contracts, chase mints, or keep using a wallet with years of history.
        </p>
        <div className="hero-actions">
          <Link className="primary-link" href="/wallet-safety-report">
            Get Wallet Safety Report
          </Link>
          <a className="secondary-link" href="#details">
            Learn what is included
          </a>
        </div>
        <div className="trust-row">
          <span>No seed phrases.</span>
          <span>No private keys.</span>
          <span>No custody.</span>
          <span>Customer-controlled actions.</span>
        </div>
      </section>
      <section className="info-grid" id="details">
        <article>
          <h2>What you get</h2>
          <p>
            A personalized wallet safety report with risk notes, public-address review,
            report tuning based on your concerns, and actionable next steps where available.
          </p>
        </article>
        <article>
          <h2>How it works</h2>
          <p>
            Submit your public wallet address, answer the report questionnaire, choose card or crypto,
            and receive an encrypted report after payment and intake are confirmed.
          </p>
        </article>
        <article>
          <h2>Built different</h2>
          <p>
            AnarchI focuses on deterministic software, customer control, and read-only analysis.
            Reports should become useful repair maps, not static novelty PDFs.
          </p>
        </article>
      </section>
    </main>
  );
}
