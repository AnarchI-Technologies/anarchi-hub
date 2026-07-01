import BrandLogo from "./BrandLogo";
export default function BrandHeader({
  eyebrow = "Wallet Safety Reports",
  price = "$50 Starter Report",
}) {
  return (
    <header className="ai-brand-header">
      <BrandLogo size="sm" />
      <div className="ai-brand-header-meta">
        <div>{eyebrow}</div>
        <span>{price}</span>
      </div>
    </header>
  );
}
