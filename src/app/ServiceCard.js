import Link from "next/link";

export default function ServiceCard({ service }) {
    const { kicker, title, description, claims, links, cta } = service;

    return (
        <div className="service-card">
            <p className="kicker">{kicker}</p>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="service-claims">
                {claims.map((claim, index) => (
                    <span key={index}>{claim}</span>
                ))}
            </div>
            <div className="inline-links">
                {links.map((link, index) => (
                    <Link key={index} href={link.href}>
                        {link.text}
                    </Link>
                ))}
            </div>
            <div className="actions">
                <Link className="btn primary" href={cta.href}>
                    {cta.text}
                </Link>
            </div>
        </div>
    );
}