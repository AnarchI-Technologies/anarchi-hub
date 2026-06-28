import Link from "next/link";
import "../policy.css";
export const metadata = {
  title: "Legal | AnarchI Technologies",
  description: "Legal and policy documents for AnarchI Technologies.",
};
export default function LegalPage() {
  const links = [
    ["/privacy", "Privacy Policy"],
    ["/terms", "Terms of Service"],
    ["/refund-policy", "Refund Policy"],
    ["/delivery-policy", "Delivery Policy"],
    ["/risk-policy", "Safety and Risk Policy"],
    ["/contact", "Contact"],
    ["/about", "About AnarchI"],
    ["/faq", "FAQ"],
  ];
  return (
    <main className="policy-page">
      <article className="policy-card">
        <p className="policy-eyebrow">AnarchI Technologies</p>
        <h1>Legal & Policies</h1>
        <p>
          Review AnarchI Technologies policies, service terms, delivery information, refund rules,
          and safety disclosures.
        </p>
        <ul>
          {links.map(([href, label]) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
        <h2>Contact</h2>
        <p>
          Email: <strong>admin@anarchi-tech.com</strong><br />
          Address: <strong>3850 S Meridian Ave, Wichita, KS 67217</strong>
        </p>
      </article>
    </main>
  );
}
