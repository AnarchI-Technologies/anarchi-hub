export default function ProcessStep({ number, title, children }) {
  return (
    <div className="ai-process-step">
      <div className="ai-process-step-number">{number}</div>
      <div>
        <div className="ai-process-step-title">{title}</div>
        <div className="ai-process-step-copy">{children}</div>
      </div>
    </div>
  );
}
