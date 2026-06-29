import Link from "next/link";
import "../policy.css";
export const metadata = {
  title: "Public Index | AnarchI Technologies",
  description:
    "Public-facing site, assets, services, and disclosure boundaries for AnarchI Technologies.",
};
const sitePages = [
  ["/", "Company homepage"],
  ["/products", "Products and services"],
  ["/wallet-safety-report", "Wallet Safety Report order page"],
  ["/about", "About AnarchI"],
  ["/contact", "Contact and support"],
  ["/faq", "Frequently asked questions"],
  ["/privacy", "Privacy Policy"],
  ["/terms", "Terms of Service"],
  ["/refund-policy", "Refund Policy"],
  ["/delivery-policy", "Delivery Policy"],
  ["/risk-policy", "Safety and Risk Policy"],
  ["/legal", "Legal and policy hub"],
  ["/public-index", "Public site and asset index"],
];
const publicAssets = [
  ["/brand/anarchi-logo.png", "Primary transparent AnarchI logo"],
  ["/brand/anarchi-logo-solid.png", "Solid AnarchI logo"],
];
export default function PublicIndexPage() {
  return (
    <main className="policy-page">
      <article className="policy-card">
        <p className="policy-eyebrow">AnarchI Technologies</p>
        <h1>Public Index</h1>
        <p>
          This index lists AnarchI Technologies public-facing pages, assets, services, and disclosure
          boundaries. It does not expose backend secrets, private customer data, proprietary
          algorithms, unpublished service internals, or security-sensitive implementation details.
        </p>
        <h2>Live Public Site Map</h2>
        <ul>
          {sitePages.map(([href, label]) => (
            <li key={href}>
              <Link href={href}>{href}</Link> — {label}
            </li>
          ))}
        </ul>
        <h2>Public Brand Assets</h2>
        <p>
          These are public-facing copies of AnarchI brand assets used by the website. Source files
          and private brand archives may be maintained separately in AnarchI-controlled IP storage.
        </p>
        <ul>
          {publicAssets.map(([href, label]) => (
            <li key={href}>
              <Link href={href}>{href}</Link> — {label}
            </li>
          ))}
        </ul>
        <h2>Current Public Service</h2>
        <p>
          <strong>Wallet Safety Reports</strong> are the current public launch service. The service is
          read-only, informational, and customer-controlled. AnarchI does not ask for seed phrases,
          private keys, recovery phrases, wallet passwords, exchange passwords, asset transfer, or
          wallet custody.
        </p>
        <h2>Coming Soon and Research Material</h2>
        <p>
          Coming-soon products and research tracks may be described publicly before they are available
          for purchase. Public descriptions are not guarantees of release date, feature scope, pricing,
          or availability.
        </p>
        <h2>Code Disclosure Boundary</h2>
        <p>
          AnarchI may provide public code, examples, schemas, documentation, front-end interfaces,
          templates, educational material, and product scaffolds. AnarchI may keep authored algorithms,
          scoring systems, ingestion methods, source-matching logic, internal orchestration,
          security-sensitive systems, customer-data handling systems, and fulfillment internals
          privately licensed.
        </p>
        <h2>Security and Customer Data Boundary</h2>
        <p>
          This public index is intentionally separate from backend services, payment secrets,
          database credentials, report fulfillment internals, customer reports, customer intake data,
          private logs, and security-sensitive implementation details.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about public assets, licensing, product status, or AnarchI services can be sent to
          <strong> admin@anarchi-tech.com</strong>.
        </p>
      </article>
    </main>
  );
}
