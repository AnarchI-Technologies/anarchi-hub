import Link from "next/link";
import "../policy.css";
export const metadata = {
  title: "Products | AnarchI Technologies",
  description:
    "Products, services, and future development tracks from AnarchI Technologies.",
};
const products = [
  {
    status: "Live / Launch Stage",
    name: "Wallet Safety Reports",
    audience: "Web3 users, gamers, founders, and wallet holders",
    useCase:
      "Read-only wallet review for public addresses, focused on risky approvals, suspicious interactions, wallet hygiene, and priority fixes.",
    boundary:
      "Customer-facing report service is public. Internal scoring, report-generation logic, source matching, and fulfillment systems remain privately licensed.",
    href: "/wallet-safety-report",
    cta: "Get a report",
  },
  {
    status: "Coming Soon",
    name: "Founder Second Brain",
    audience: "Busy founders and small teams",
    useCase:
      "A future operations assistant concept for email triage, CRM retention, dashboards, admin workflows, content support, and execution-focused founder productivity.",
    boundary:
      "Public concepts and interface patterns may be shared. Voice modeling, workflow automation logic, and private orchestration systems may remain privately licensed.",
    href: "/contact",
    cta: "Ask about this",
  },
  {
    status: "Coming Soon",
    name: "AnarchI Forge",
    audience: "Builders who want original tooling without rented-rail dependence",
    useCase:
      "A future AnarchI-owned creation environment for software, media, product workflows, developer utilities, and deterministic systems built our way.",
    boundary:
      "Scaffolds, documentation, and interface code may become public. Authored engines, private algorithms, and internal automation logic may remain privately licensed.",
    href: "/contact",
    cta: "Follow development",
  },
  {
    status: "Coming Soon",
    name: "Deterministic Social Runtime",
    audience: "Creators, agents, brands, games, and character systems",
    useCase:
      "A deterministic persona and social-behavior runtime designed to reduce dependency on live AI calls while preserving consistent voice, memory cues, and character logic.",
    boundary:
      "Public examples and schemas may be released. Runtime logic, authored behavior packs, and protected persona systems may remain privately licensed.",
    href: "/contact",
    cta: "Request info",
  },
  {
    status: "Coming Soon",
    name: "CERBERUS Agent Systems",
    audience: "Game-agent builders and tactical automation experiments",
    useCase:
      "A future agent-system track for tactical decision loops, game bots, battle logic, memory, and constrained autonomous behavior in permitted environments.",
    boundary:
      "Public docs and safe examples may be shared. Strategy engines, adaptive logic, private memory models, and competitive behavior systems may remain privately licensed.",
    href: "/contact",
    cta: "Request info",
  },
  {
    status: "Research / Private Development",
    name: "DeFi Safety Tooling",
    audience: "Developers, security learners, and protocol researchers",
    useCase:
      "Simulation-first protocol analysis, read-only spread monitoring, gas-aware safety checks, and educational tooling for understanding DeFi mechanics responsibly.",
    boundary:
      "Educational material may be public. Trading logic, execution systems, private transaction strategy, and sensitive automation remain private and restricted.",
    href: "/contact",
    cta: "Research inquiry",
  },
  {
    status: "Research Track",
    name: "Project Chimera",
    audience: "Long-range AnarchI research",
    useCase:
      "A future-facing exploration of AI, agency, continuity, responsibility, and the moral possibility of non-biological intelligence.",
    boundary:
      "Public philosophy may be shared carefully. Internal continuity systems, agent designs, and private research notes remain protected unless intentionally published.",
    href: "/about",
    cta: "Read about AnarchI",
  },
];
export default function ProductsPage() {
  return (
    <main className="policy-page">
      <article className="policy-card">
        <p className="policy-eyebrow">AnarchI Technologies</p>
        <h1>Products & Services</h1>
        <p>
          AnarchI Technologies is not a single-product funnel. Wallet Safety Reports are our first
          active public service, but the company roadmap includes original software, deterministic
          runtime systems, developer tools, creator tools, agent systems, and research tracks.
        </p>
        <p>
          We prefer to build the systems we rely on where practical. We may use outside services when
          necessary, but our long-term direction is original tooling, clear ownership, and fewer
          constraints from rented SaaS rails.
        </p>
        <h2>Public Code and Private Algorithms</h2>
        <p>
          AnarchI may publish product scaffolds, interface code, documentation, public schemas,
          examples, and educational or reference implementations. Authored algorithms, scoring
          systems, risk-weighting logic, ingestion methods, abuse-prevention systems, fulfillment
          internals, private orchestration, and customer-data handling systems may remain privately
          licensed.
        </p>
        <div className="policy-card-grid">
          {products.map((product) => (
            <section className="policy-mini-card" key={product.name}>
              <p className="policy-pill">{product.status}</p>
              <h2>{product.name}</h2>
              <p><strong>Who it is for:</strong> {product.audience}</p>
              <p><strong>Use case:</strong> {product.useCase}</p>
              <p><strong>Disclosure boundary:</strong> {product.boundary}</p>
              <Link href={product.href}>{product.cta}</Link>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
