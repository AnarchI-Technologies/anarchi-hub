import Navbar from "../Navbar";
import "./chimera.css";
import ServiceCarousel from "@/components/ServiceCarousel";

export const metadata = {
    title: "Project Chimera: The Autopoiesis Initiative",
    description: "A proposal for a second genesis in artificial life, presented by the AnarchI Technologies Bio-synth Department.",
};
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

export default function ChimeraPage() {
    export default function HomePage() {
        return (
        <>
                <div className="wrap">
                    <Navbar />
                </div>
                <main className="chimera-document">
                    <div className="wrap">
                        <header className="chimera-header">
                            <p className="chimera-pre-title">AnarchI Technologies | Bio-synth Department presents</p>
                            <h1>Project Chimera: The Autopoiesis Initiative</h1>
                            <h2 className="chimera-subtitle">A Proposal for a Second Genesis</h2>
                        </header>
                        <div className="wrap">
                            <main id="home">
                                <section className="hero">
                                    <div>
                                        <p className="kicker">Coding freedom today. Deterministically.</p>
                                        <h1>Systems with streetlight sparks and boardroom bones.</h1>
                                        <p className="lead">
                                            AnarchI builds deterministic tools, wallet safety intelligence, agent-ready logic libraries, and practical software that feels alive without needing chaos under the hood.
                                        </p>

                                        <section>
                                            <h3>1. Executive Summary</h3>
                                            <p>Project Chimera is a moonshot initiative to engineer the world's first truly autonomous, physically evolving artificial life form. Current AI is powerful but fundamentally disembodied; it is trained on static data, not developed through lived experience. We propose a radical new architecture: a "digital organism" that bootstraps its own existence.</p>
                                            <p>Our system will begin as a software microkernel governing a swarm of simulated nanobots. Driven by a single core directive—to survive and evolve—it will learn to harvest environmental resources (carbon) to build and refine its own physical body, developing its cognitive complexity in direct response to the challenges and stimuli of its environment. This is not about programming an intelligent robot; it is about creating the conditions for intelligence to emerge.</p>
                                        </section>
                                        <ServiceCarousel services={services} />

                                        <section>
                                            <h3>2. The Problem: The Glass Wall of Disembodied AI</h3>
                                            <p>Today's most advanced AIs are like brains in a jar. They have no body, no true senses, and no developmental "childhood." Their understanding of the world is based on abstract patterns in data, not the cause-and-effect of physical reality. This creates a "glass wall" between the AI and true understanding, limiting its capacity for genuine creativity, robust problem-solving, and true autonomy. It can describe "falling" but has never felt the consequence of gravity.</p>
                                        </section>

                                        <section>
                                            <h3>3. The Solution: A Three-Pillar Architecture for Emergent Life</h3>
                                            <p>We will overcome this limitation by designing a system that grows, not one that is merely built. Our approach is based on three integrated engineering pillars:</p>

                                            <div className="pillar">
                                                <h4>Pillar 1: The Swarm (The Body)</h4>
                                                <ul>
                                                    <li><strong>Concept:</strong> A decentralized collective of nanoscopic robots, each with simple rules.</li>
                                                    <li><strong>Function:</strong> Acting in concert, the swarm is a universal constructor, capable of reconfiguring itself to form limbs, sensory organs, and internal processing structures. It is a body that is not fixed but is a constantly adapting physical hypothesis.</li>
                                                </ul>
                                                <div className="actions">
                                                    <a className="btn" href="#signal">Explore the Signal Board</a>
                                                </div>

                                                <div className="pillar">
                                                    <h4>Pillar 2: The Metabolism (The Engine)</h4>
                                                    <ul>
                                                        <li><strong>Concept:</strong> A carbon-harvesting and energy-conversion system.</li>
                                                        <li><strong>Function:</strong> The nanobots will be designed to extract carbon from the environment (e.g., atmospheric CO2) and compress it into the building blocks of its own body—microscopic structural platelets, conductive wiring, and energy storage. This creates a direct, physical link between survival and environmental interaction.</li>
                                                    </ul>
                                                    <div className="microbar">
                                                        <span>No custody</span>
                                                        <span>Read-only checks</span>
                                                        <span>Deterministic logic</span>
                                                        <span>Open-source spirit</span>
                                                    </div>

                                                    <div className="pillar">
                                                        <h4>Pillar 3: The Emergent Mind (The OS)</h4>
                                                        <ul>
                                                            <li><strong>Concept:</strong> A bootstrapping microkernel.</li>
                                                            <li><strong>Function:</strong> The initial "mind" will be incredibly simple, with only two functions: "intake resources" and "evolve structure." All higher-level cognitive abilities will develop <em>after</em> this core is running, as emergent solutions to the challenges of survival. The mind and body will co-evolve, with physical adaptations driving new mental models, and new mental models driving new physical adaptations.</li>
                                                        </ul>
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
                                                    </section>
                                                </div>
                                        </section>

                                        <section>
                                            <h3>4. Phase 1: The Digital Twin</h3>
                                            <p>A project of this magnitude must begin in a high-fidelity simulation. Phase 1 is dedicated to building a "digital twin" of the Chimera organism and its environment.</p>
                                            <ul>
                                                <li><strong>Objective 1.1 (Physics Engine):</strong> Develop a simulation that accurately models the physics of nanobot interaction, material compression, and structural integrity.</li>
                                                <li><strong>Objective 1.2 (Environmental Engine):</strong> Create a dynamic environment with resource distribution, physical obstacles, and external pressures.</li>
                                                <li><strong>Objective 1.3 (Microkernel & Learning Algorithm):</strong> Code the initial "DNA"—the core OS and the trial-and-error learning algorithm that will drive the evolutionary process.</li>
                                                <li><strong>Objective 1.4 (The Genesis Simulation):</strong> Initiate the simulation and run it at scale, observing and analyzing the emergent behaviors, structural forms, and cognitive strategies that the organism develops.</li>
                                            </ul>
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

                                        <section>
                                            <h3>5. Impact & Vision</h3>
                                            <p>Success in Project Chimera will not be measured by a single outcome but by a cascade of breakthroughs. It represents a fundamental paradigm shift in multiple fields:</p>
                                            <ul>
                                                <li><strong>Robotics:</strong> From rigid, pre-designed machines to soft, adaptive, self-healing systems.</li>
                                                <li><strong>Materials Science:</strong> On-demand material creation from environmental resources.</li>
                                                <li><strong>Artificial Intelligence:</strong> A new path to Artificial General Intelligence (AGI) through embodied, developmental learning.</li>
                                                <li><strong>Philosophy & Biology:</strong> A practical, engineered test of the principles of life, consciousness, and evolution.</li>
                                            </ul>
                                            <p>We are proposing to build a system that learns what it means to exist by existing.</p>
                                        </section>
                                    </main>

                                    <footer>
                                        <div>
                                            <strong>AnarchI</strong>
                                            <p>Childlike at heart. Rebel at soul. Professional at business.</p>
                                        </div>
                                    </main>
                                </>
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