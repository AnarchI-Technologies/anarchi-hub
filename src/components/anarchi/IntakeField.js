export default function IntakeField({
  label,
  htmlFor,
  full = false,
  children,
}) {
  return (
    <div className={`ai-intake-field ${full ? "ai-intake-field-full" : ""}`}>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  );
}
