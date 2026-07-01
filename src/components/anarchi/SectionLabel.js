export default function SectionLabel({ number, children }) {
  return (
    <div className="ai-section-label">
      {number ? <span className="ai-section-number">{number}</span> : null}
      <span>{children}</span>
    </div>
  );
}
