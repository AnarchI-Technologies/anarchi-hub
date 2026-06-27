import Link from "next/link";
export default function Navbar() {
  return (
    <nav style={{
      width: "100%",
      borderBottom: "1px solid rgba(255,255,255,0.12)",
      background: "rgba(0,0,0,0.9)",
      color: "white",
      position: "sticky",
      top: 0,
      zIndex: 50
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <Link href="/" style={{
          color: "white",
          textDecoration: "none",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          fontSize: "1.25rem"
        }}>
          AnarchI
        </Link>
        <div style={{
          display: "flex",
          gap: "18px",
          fontSize: "0.9rem"
        }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>
            Home
          </Link>
          <Link href="/#services" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>
            Services
          </Link>
          <Link href="/#contact" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
