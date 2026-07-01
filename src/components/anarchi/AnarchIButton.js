export default function AnarchIButton({
  children,
  loading = false,
  type = "button",
  ...props
}) {
  return (
    <button className="ai-button" type={type} disabled={loading || props.disabled} {...props}>
      {children}
    </button>
  );
}
