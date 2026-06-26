import Navbar from "./Navbar";
import ServiceCarousel from "./ServiceCarousel";

const services = [
    {
        kicker: "Featured service",
        title: "Wallet Safety Report",
        description: "Read-only wallet review for public addresses, blacklist and whitelist matching, approval warnings, evidence tags, and clear risk limitations before users interact with funds or contracts.",
        claims: ["No seed phrases", "No private keys", "No custody", "No signatures required"],
        links: [
            { href: "#documents", text: "Terms" },
            { href: "#documents", text: "Privacy" },
            { href: "#documents", text: "Methodology" },
        ],
        cta: { href: "/intake", text: "Start with Wallet Safety" }
    }
    // When you have more services, you can just add them here.
];

export default function HomePage() {
    return (
        <div className="wrap">
            <Navbar />

            <main id="home">
                <section className="hero">
                    <div>
                        <p className="kicker">Coding freedom today. Deterministically.</p>
                        <h1>Systems with streetlight sparks and boardroom bones.</h1>
                        <p className="lead">
                            AnarchI builds deterministic tools, wallet safety intelligence, agent-ready logic libraries, and practical software that feels alive without needing chaos under the hood.
                        </p>

                        <ServiceCarousel services={services} />

                        <div className="actions">
                            <a className="btn" href="#signal">Explore the Signal Board</a>
                        </div>
                        <div className="microbar">
                            <span>No custody</span>
                            <span>Read-only checks</span>
                            <span>Deterministic logic</span>
                            <span>Open-source spirit</span>
                        </div>
                    </div>
                    <div className="visual terminal-themed" aria-label="AnarchI logo themed deterministic systems console">
                        <div className="orbit one"></div>
                        <div className="orbit two"></div>
                        <div className="console">
                            <div className="console-top"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
                            <div className="console-body">
                                <p>&gt; boot anarchi.signal</p>
                                <p className="good">&gt; wallet_safety.report: ready</p>
                                <p>&gt; blacklist.matching: deterministic</p>
                                <p className="hot">&gt; skill_index: sealed</p>
                                <p className="red">&gt; chaos: aesthetic only</p>
                                <p className="good">&gt; freedom.compile()</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="socials">
                    <div className="section-head">
                        <p className="kicker">Signal channels</p>
                        <h2>Social doors wired live.</h2>
                        <p>X carries updates, GitHub carries source/proof, and Discord becomes the community door once fully configured.</p>
                    </div>
                    <div className="social-grid">
                        <a className="social" href="https://x.com/AnarchI_Tech" target="_blank" rel="noopener noreferrer" aria-label="Open AnarchI on X / Twitter">
                            <strong>X / Twitter</strong>
                            <span className="social-live-badge">Live</span>
                            <small>@AnarchI_Tech</small>
                        </a>
                        <a className="social" href="https://github.com/AnarchI-Technologies" target="_blank" rel="noopener noreferrer" aria-label="Open AnarchI Technologies on GitHub">
                            <strong>GitHub</strong>
                            <span className="social-live-badge">Live</span>
                            <small>AnarchI-Technologies</small>
                        </a>
                        <a className="social" href="https://discord.com/anarchi.tech" target="_blank" rel="noopener noreferrer" aria-label="Open AnarchI Discord">
                            <strong>Discord</strong>
                            <span className="social-live-badge">Ready</span>
                            <small>anarchi.tech</small>
                        </a>
                        <a className="social" href="https://github.com/AnarchI-Technologies" target="_blank" rel="noopener noreferrer" aria-label="Open AnarchI public repositories">
                            <strong>Public Builds</strong>
                            <span className="social-live-badge">GitHub</span>
                            <small>repos and proof</small>
                        </a>
                    </div>
                </section>

            </main>

            <footer>
                <div>
                    <strong>AnarchI</strong>
                    <p>Childlike at heart. Rebel at soul. Professional at business.</p>
                </div>
                <div>
                    <a href="#documents">Privacy</a> ·
                    <a href="#documents">Terms</a> ·
                    <a href="#documents">Manifest</a>
                </div>
            </footer>

            <div className="toast" id="toast">Clicked</div>
        </div>
    );
}