import Image from "next/image";
import Link from "next/link";
import styles from "./site-nav.module.css";
const navLinks = [
  ["/", "Home"],
  ["/products", "Products"],
  ["/wallet-safety-report", "Wallet Report"],
  ["/public-index", "Public Index"],
  ["/about", "About"],
  ["/faq", "FAQ"],
  ["/contact", "Contact"],
  ["/legal", "Legal"],
];
export default function SiteNav() {
  return (
    <header className={styles.navWrap}>
      <Link className={styles.brand} href="/" aria-label="AnarchI Technologies home">
        <Image
          src="/brand/anarchi-logo.png"
          alt="AnarchI Technologies logo"
          width={52}
          height={52}
          priority
        />
        <span>
          <strong>AnarchI</strong>
          <small>Technologies</small>
        </span>
      </Link>
      <nav className={styles.links} aria-label="Primary navigation">
        {navLinks.map(([href, label]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
