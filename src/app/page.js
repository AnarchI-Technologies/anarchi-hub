'use client';
import { useState } from "react";
import { backendApi } from "@/lib/backend-api";
import "./home.css";
const trustPoints = [
  "No seed phrases",
  "No private keys",
  "No custody",
  "Read-only review",
];
const reportItems = [
  "Wallet risk summary",
  "Known blacklist and signal matching",
  "Approval and interaction warnings",
  "Evidence tags and limitations",
  "Deterministic report output",
];
export default function HomePage() {
  const [loadingProvider, setLoadingProvider] = useState("");
  const [error, setError] = useState("");
  const handleCheckout = async (provider) => {
    setLoadingProvider(provider);
    setError("");
    try {
      const response = await fetch(backendApi("/api/checkout"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          provider,
          product: "wallet-safety-report",
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.detail || data.error || "Could not start checkout.");
      }
      if (!data.url) {
        throw new Error("Checkout started, but no payment URL was returned.");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not start checkout.");
      setLoadingProvider("");
    }
  };
  return (
    <main className="anarchi-home">
      <section className="hero-panel">
        <div className="brand-row">
          <div className="logo-mark" aria-label="AnarchI logo mark">A-I</div>
          <div>
            <p className="eyebrow">AnarchI Technologies</p>
            <h1>Deterministic Wallet Safety Reports</h1>
          </div>
        </div>
        <p className="hero-copy">
          A read-only wallet risk review before users interact with funds,
          contracts, approvals, or unfamiliar addresses.
        </p>
        <div className="trust-strip">
          {trustPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
        <div className="checkout-card" id="checkout">
          <p className="price">$50 Wallet Safety Report</p>
          <div className="checkout-actions">
            <button
              className="btn primary"
              onClick={() => handleCheckout("stripe")}
              disabled={Boolean(loadingProvider)}
            >
              {loadingProvider === "stripe" ? "Opening Stripe..." : "Pay with Card / Debit / Bank"}
            </button>
            <button
              className="btn secondary"
              onClick={() => handleCheckout("crypto")}
              disabled={Boolean(loadingProvider)}
            >
              {loadingProvider === "crypto" ? "Opening Crypto Invoice..." : "Pay with Crypto"}
            </button>
          </div>
          {error && <p className="error">Error: {error}</p>}
          <p className="fine-print">
            Both payment options unlock the same intake flow after payment confirmation.
          </p>
        </div>
      </section>
      <section className="content-grid">
        <article className="info-card">
          <h2>What you get</h2>
          <ul>
            {reportItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="info-card">
          <h2>How it works</h2>
          <ol>
            <li>Choose fiat or crypto checkout.</li>
            <li>Complete payment through the provider.</li>
            <li>Submit wallet details through the secure intake.</li>
            <li>Receive a deterministic safety report.</li>
          </ol>
        </article>
        <article className="info-card">
          <h2>Built different</h2>
          <p>
            AnarchI is not trying to custody assets or become a crypto casino.
            The focus is deterministic software: clear inputs, auditable logic,
            practical outputs, and fewer wrong-wallet mistakes.
          </p>
        </article>
      </section>
    </main>
  );
}
