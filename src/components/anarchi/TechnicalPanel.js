export default function TechnicalPanel({
  children,
  className = "",
  sticky = false,
  variant = "default",
}) {
  return (
    <section
      className={[
        "ai-technical-panel",
        sticky ? "ai-technical-panel-sticky" : "",
        variant === "blue" ? "ai-technical-panel-blue" : "",
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}
