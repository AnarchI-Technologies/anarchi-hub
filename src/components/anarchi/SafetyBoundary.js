export default function SafetyBoundary({ title = "Hard safety boundary", children }) {
  return (
    <div className="ai-safety-boundary">
      <strong>{title}</strong>
      <p>{children}</p>
    </div>
  );
}
