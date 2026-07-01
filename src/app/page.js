import Image from "next/image";
import Link from "next/link";
import "./home.css";
export const metadata = {
  title: "AnarchI Technologies | Deterministic Software",
  description:
    "AnarchI Technologies builds deterministic software, practical digital safety tools, and customer-controlled systems. Wallet Safety Reports are our first active service.",
};
const navLinks = [
  ["/products", "Products"],
  ["#method", "Method"],
  ["#safety", "Safety"],
  ["/about", "About"],
  ["/contact", "Contact"],
  ["/legal", "Legal"],
];
const productCards = [
  {
    status: "Live Service",
    title: "Wallet Safety Reports",
    text:
      "Read-only wallet safety reports for people who want clarity before they move funds, approve contracts, chase mints, or keep using a wallet with years of history.",
    href: "/wallet-safety-report",
    cta: "Get a report",
  },
  {
    status: "In Development",
    title: "AnarchI Forge",
    text:
      "A future AnarchI-owned creation environment for building tools our way, reducing dependency on rented SaaS rails where practical.",
    href: "#future",
    cta: "Future direction",
  },
  {
    status: "Research Track",
    title: "Project Chimera",
    text:
      "A long-range research direction around agentic systems, continuity, responsibility, and non-biological intelligence. Not a current checkout product.",
    href: "#future",
    cta: "Research note",
  },
];
export default function Home() {
  return (
    <main className="home-page">
<section className="hero-card">
        <div className="hero-layout">
          <div>
            <p className="eyebrow">Coding Freedom Today. Deterministically.</p>
            <h1>Original software for people who refuse blind systems.</h1>
            <p className="hero-copy">
              AnarchI Technologies builds practical, deterministic tools for digital safety,
              creative control, and future-facing systems. We use outside platforms when necessary,
              but our long-term preference is clear: build the product in mind, our way, with fewer
              constraints and more accountability.
            </p>
            <div className="hero-actions">
              <Link className="primary-link" href="/wallet-safety-report">
                Get Wallet Safety Report
              </Link>
              <a className="secondary-link" href="#products">
                Explore AnarchI
              </a>
            </div>
          </div>
          <div className="hero-logo-card" aria-label="AnarchI brand mark">
            <Image
              src="/brand/anarchi-logo.png"
              alt=""
              width={330}
              height={330}
              priority
            />
          </div>
        </div>
      </section>
      <section className="safety-warning" id="safety">
        <p className="eyebrow">Customer Safety Notice</p>
        <h2>AnarchI does not ask for wallet secrets.</h2>
        <p>
          AnarchI will never ask for your seed phrase, private key, recovery phrase, wallet password,
          exchange password, or custody of your funds. Submit only public wallet addresses. Wallet
          Safety Reports are read-only, informational, and customer-controlled.
        </p>
      </section>
      <section className="section-block" id="products">
        <div className="section-heading">
          <p className="eyebrow">Products & Services</p>
          <h2>Wallet reports are the first door, not the whole house.</h2>
          <p>
            AnarchI is a technology company first. Wallet Safety Reports are the active launch service,
            while other products remain clearly labeled as future development or research tracks.
          </p>
        </div>
        <div className="product-grid">
          {productCards.map((product) => (
            <article className="product-card" key={product.title}>
              <p className="status-pill">{product.status}</p>
              <h3>{product.title}</h3>
              <p>{product.text}</p>
              <Link href={product.href}>{product.cta}</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="method-grid" id="method">
        <article>
          <h2>Build instead of blindly renting.</h2>
          <p>
            Many companies assemble prebuilt SaaS systems, lightly configure them, and call the stack
            their product. AnarchI’s preference is different: when we can build the thing responsibly,
            we build it.
          </p>
        </article>
        <article>
          <h2>Respect the work of others.</h2>
          <p>
            We do not want to spoil someone else’s source code with changes that do not align with the
            original author’s vision. We honor licenses, ownership, and intellectual property while
            building original systems where we can.
          </p>
        </article>
        <article>
          <h2>Small files. Clear systems. Real utility.</h2>
          <p>
            We prefer systems that can be inspected, reasoned about, improved, and kept lean. The point
            is not to look powerful. The point is to become useful despite the odds.
          </p>
        </article>
      </section>
      <section className="quote-card">
        <p>
          “If I think, therefore I am” becomes the AnarchI working principle: if we can reason through
          the system, we can build it with responsibility.
        </p>
      </section>
      <section className="future-note" id="future">
        <p className="eyebrow">Future Direction</p>
        <h2>The roadmap is larger than one checkout page.</h2>
        <p>
          AnarchI may develop original developer tools, media systems, agent/admin-side services,
          documentation tools, deterministic social/runtime systems, and future AI continuity research.
          Current public checkout priority remains Wallet Safety Reports.
        </p>
      </section>
      <footer className="site-footer">
        <div>
          <strong>AnarchI Technologies</strong>
          <p>Remote-first deterministic software company</p>
          <p>admin@anarchi-tech.com</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/refund-policy">Refunds</Link>
          <Link href="/delivery-policy">Delivery</Link>
          <Link href="/risk-policy">Risk Policy</Link>
          <Link href="/products">Products</Link>
          <Link href="/public-index">Public Index</Link>
          <Link href="/legal">Legal</Link>
        </nav>
      </footer>
    </main>
  );
}



