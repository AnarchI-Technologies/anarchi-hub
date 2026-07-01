import Image from "next/image";
export default function BrandLogo({
  variant = "transparent",
  size = "md",
  showText = true,
  className = "",
}) {
  const src =
    variant === "solid"
      ? "/brand/anarchi-solid.png"
      : "/brand/anarchi-transparent.png";
  const imageSize = size === "sm" ? 44 : size === "lg" ? 180 : 72;
  return (
    <div className={`ai-brand-logo ${className}`}>
      <Image
        src={src}
        alt="AnarchI Technologies"
        width={imageSize * 2}
        height={imageSize}
        className="ai-brand-logo-image"
        priority
      />
      {showText ? (
        <div className="ai-brand-logo-text">
          <div className="ai-brand-logo-title">AnarchI Technologies</div>
          <div className="ai-brand-logo-subtitle">Deterministically.</div>
        </div>
      ) : null}
    </div>
  );
}
