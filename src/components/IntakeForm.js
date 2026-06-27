"use client";
import { useState } from "react";
export default function IntakeForm() {
  const [status, setStatus] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("Request captured locally. Live processing coming soon.");
  }
  return (
    <form onSubmit={handleSubmit} style={{
      display: "grid",
      gap: "12px",
      width: "100%",
      maxWidth: "520px"
    }}>
      <input
        name="walletAddress"
        placeholder="Wallet address"
        style={{
          padding: "12px 14px",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.18)",
          background: "rgba(255,255,255,0.06)",
          color: "white"
        }}
      />
      <input
        name="chain"
        placeholder="Chain, e.g. ETH, Base, Polygon"
        style={{
          padding: "12px 14px",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.18)",
          background: "rgba(255,255,255,0.06)",
          color: "white"
        }}
      />
      <button
        type="submit"
        style={{
          padding: "12px 16px",
          borderRadius: "999px",
          border: "none",
          background: "white",
          color: "black",
          fontWeight: 900,
          cursor: "pointer"
        }}
      >
        Request Report
      </button>
      {status ? (
        <p style={{ color: "rgba(255,255,255,0.7)", margin: 0 }}>
          {status}
        </p>
      ) : null}
    </form>
  );
}
