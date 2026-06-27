import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="nav" aria-label="Main navigation">
            <Link href="/" className="brand">
                <span className="nav-logo-mark" aria-hidden="true">
                    <Image src="/brand/anarchi-logo-mark-light.png" alt="AnarchI Logo" width={112} height={54} />
                </span>
            </Link>

            <div className="nav-links">
                <a href="/#signal">Signal Board</a>

                <div className="menu-group">
                    <button className="menu-button" type="button">Services ▾</button>
                    <div className="dropdown">
                        <Link href="/#wallet-safety-report">
                            <strong>Wallet Safety Report</strong>
                            <small>Read-only wallet risk review, blacklist/whitelist matching, and evidence-based safety summary.</small>
                        </Link>
                        <a href="/#anarchi-forge">
                            <strong>AnarchI Forge</strong>
                            <small>A deterministic IDE for building and testing agent-ready logic and skills.</small>
                        </a>
                        <a href="/#signal">
                            <strong>Deterministic Agent Systems</strong>
                            <small>Logic-first systems that feel intelligent without making live AI the baseline.</small>
                        </a>
                        <a href="/#signal">
                            <strong>Launch Preflight</strong>
                            <small>Project readiness checks before public launch, payments, wallets, and links go live.</small>
                        </a>
                    </div>
                </div>

                <div className="menu-group">
                    <button className="menu-button" type="button">Resources ▾</button>
                    <div className="dropdown">
                        <a href="/#documents">
                            <strong>Documents</strong>
                            <small>Manifest, methodology, terms, privacy, and service boundaries.</small>
                        </a>
                        <a href="/#socials">
                            <strong>Social Platforms</strong>
                            <small>Live channels for updates, proof, build logs, source code, and community signals.</small>
                        </a>
                        <a href="/#documents">
                            <strong>Methodology Library</strong>
                            <small>Rules, boundaries, report logic, and explainable documentation.</small>
                        </a>
                    </div>
                </div>
            </div>

            <Link className="top-cta" href="/intake">Run Report</Link>
        </nav>
    );
}