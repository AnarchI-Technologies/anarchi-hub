export default function CheckoutButton({ children = "Start Wallet Report", onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: "1px solid rgba(255,255,255,0.18)",
        background: "white",
        color: "black",
        padding: "12px 18px",
        borderRadius: "999px",
        fontWeight: 800,
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
}
