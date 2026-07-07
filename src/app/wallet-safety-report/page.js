"use client";
import { useMemo, useState } from "react";
import { backendApi } from "@/lib/backend-api";
import { event as gtagEvent } from '@/lib/gtag';
import styles from "./report-order.module.css";
const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  walletAddress: "",
  chain: "ethereum",
  concerns: "",
  additionalRemarks: "",
  reportPassword: "",
  confirmReportPassword: "",
  recentSuspiciousActivity: "No",
  unknownApprovals: "Not sure",
  hotWalletStorage: "Yes",
  usesHardwareWallet: "No",
  highValueAssets: "Not sure",
  singleWalletForEverything: "Not sure",
  sharedBrowserProfile: "No",
  usesBurnerWalletForMints: "No",
  proofSignature: "",
  proofMessage: "",
  connectWalletRequested: false,
  internalResearchConsent: false,
  termsAccepted: false,
  riskPolicyAcknowledged: false,
};
const chainOptions = [
  ["ethereum", "Ethereum"],
  ["base", "Base"],
  ["arbitrum", "Arbitrum"],
  ["optimism", "Optimism"],
  ["polygon", "Polygon"],
  ["bsc", "BNB Smart Chain"],
  ["avalanche", "Avalanche"],
  ["solana", "Solana"],
  ["bitcoin", "Bitcoin"],
  ["tron", "Tron"],
  ["ton", "TON"],
  ["wax", "WAX"],
  ["eos", "EOS"],
];
export default function WalletSafetyReportPage() {
  const [form, setForm] = useState(initialForm);
  const [loadingProvider, setLoadingProvider] = useState("");
  const [error, setError] = useState("");
  const canSubmit = useMemo(() => {
    return (
      form.firstName.trim() &&
      form.lastName.trim() &&
      form.email.trim().includes("@") &&
      form.walletAddress.trim() &&
      form.concerns.trim() &&
      form.reportPassword.length >= 8 &&
      form.reportPassword === form.confirmReportPassword &&
      form.termsAccepted &&
      form.riskPolicyAcknowledged
    );
  }, [form]);
  function updateField(name, value) {
    setForm((current) => ({ ...current, [name]: value }));
  }
  function buildPayload(provider) {
    return {
      provider,
      product: "wallet-safety-report",
      email: form.email.trim().toLowerCase(),
      customer: {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim() || null,
      },
      wallet: {
        chain: form.chain,
        walletAddress: form.walletAddress.trim(),
      },
      intake: {
        concerns: form.concerns.trim(),
        additionalRemarks: form.additionalRemarks.trim(),
        questionnaire: {
          recentSuspiciousActivity: form.recentSuspiciousActivity,
          unknownApprovals: form.unknownApprovals,
          hotWalletStorage: form.hotWalletStorage,
          usesHardwareWallet: form.usesHardwareWallet,
          highValueAssets: form.highValueAssets,
          singleWalletForEverything: form.singleWalletForEverything,
          sharedBrowserProfile: form.sharedBrowserProfile,
          usesBurnerWalletForMints: form.usesBurnerWalletForMints,
        },
      },
      proof: {
        requested: form.connectWalletRequested,
        message: form.proofMessage || null,
        signature: form.proofSignature || null,
      },
      consent: {
        internalResearch: form.internalResearchConsent,
        termsAccepted: form.termsAccepted,
        riskPolicyAcknowledged: form.riskPolicyAcknowledged,
      },
      password: form.reportPassword,
    };
  }
  async function startCheckout(provider) {
    setError("");
    if (!canSubmit) {
      setError("Please complete the required fields, match your report passwords, and accept the required policies.");
      return;
    }
    setLoadingProvider(provider);
    try {
      const response = await fetch(backendApi("/api/checkout"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload(provider)),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Checkout could not be started.");
      }
      if (!data?.url) {
        throw new Error("Checkout response did not include a payment URL.");
      }
      // Fire analytics event and capture a lightweight lead record
      try { gtagEvent({ action: 'checkout_started', category: 'purchase', label: provider, params: { provider } }); } catch (e) {}
      try { fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ source: 'checkout_start', email: form.email, payload: { provider, wallet: form.walletAddress } }) }); } catch (e) {}

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed.");
      setLoadingProvider("");
    }
  }
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>AnarchI Wallet Safety Report</p>
        <h1>One read-only wallet report. Built to become actionable.</h1>
        <p className={styles.lede}>
          Submit a public wallet address, tell us what worries you, choose card or crypto,
          and receive an encrypted personalized safety report.
        </p>
        <div className={styles.safetyNotice}>
          <strong>AnarchI never asks for wallet secrets.</strong>
          <p>
            Do not enter seed phrases, private keys, recovery phrases, wallet passwords,
            exchange passwords, or banking passwords. Submit only public wallet addresses.
            AnarchI does not take custody of wallets, tokens, NFTs, or funds.
          </p>
        </div>
        <div className={styles.guardrails}>
          <span>Read-only analysis.</span>
          <span>No seed phrases.</span>
          <span>No private keys.</span>
          <span>No custody.</span>
          <span>No asset transfer.</span>
          <span>Customer-controlled actions only.</span>
        </div>
      </section>
      <section className={styles.shell}>
        <div className={styles.formPanel}>
          <div className={styles.sectionHeader}>
            <p>Step 1</p>
            <h2>Customer details</h2>
          </div>
          <div className={styles.gridTwo}>
            <label>
              First name *
              <input value={form.firstName} onChange={(event) => updateField("firstName", event.target.value)} />
            </label>
            <label>
              Last name *
              <input value={form.lastName} onChange={(event) => updateField("lastName", event.target.value)} />
            </label>
            <label>
              Email *
              <input type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} />
            </label>
            <label>
              Phone, optional
              <input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} />
            </label>
          </div>
          <div className={styles.sectionHeader}>
            <p>Step 2</p>
            <h2>Wallet details</h2>
          </div>
          <div className={styles.fieldWarning}>
            <strong>Public address only.</strong>
            <span>
              This form is not a wallet login. Never paste a seed phrase, private key,
              recovery phrase, wallet password, exchange password, or secret backup here.
            </span>
          </div>
          <div className={styles.gridTwo}>
            <label>
              Chain *
              <select value={form.chain} onChange={(event) => updateField("chain", event.target.value)}>
                {chainOptions.map(([value, label]) => (
                  <option value={value} key={value}>{label}</option>
                ))}
              </select>
            </label>
            <label>
              Public wallet address *
              <input
                value={form.walletAddress}
                placeholder="Public address only, never a seed phrase"
                onChange={(event) => updateField("walletAddress", event.target.value)}
              />
            </label>
          </div>
          <label>
            What worries you most about this wallet? *
            <textarea value={form.concerns} onChange={(event) => updateField("concerns", event.target.value)} />
          </label>
          <label>
            Additional remarks
            <textarea value={form.additionalRemarks} onChange={(event) => updateField("additionalRemarks", event.target.value)} />
          </label>
          <div className={styles.sectionHeader}>
            <p>Step 3</p>
            <h2>Report tuning questionnaire</h2>
          </div>
          <div className={styles.gridTwo}>
            {[
              ["recentSuspiciousActivity", "Recent suspicious activity?"],
              ["unknownApprovals", "Unknown token approvals?"],
              ["hotWalletStorage", "Used as a hot wallet?"],
              ["usesHardwareWallet", "Uses a hardware wallet?"],
              ["highValueAssets", "High value assets?"],
              ["singleWalletForEverything", "Single wallet for everything?"],
              ["sharedBrowserProfile", "Shared browser/device profile?"],
              ["usesBurnerWalletForMints", "Uses burner wallet for mints?"],
            ].map(([name, label]) => (
              <label key={name}>
                {label}
                <select value={form[name]} onChange={(event) => updateField(name, event.target.value)}>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Not sure</option>
                </select>
              </label>
            ))}
          </div>
          <div className={styles.proofBox}>
            <div>
              <h3>Optional wallet proof</h3>
              <p>
                Later, an optional signed message may help confirm wallet ownership for
                additional report categories. This should never reveal your seed phrase,
                private key, wallet password, or recovery phrase.
              </p>
            </div>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={form.connectWalletRequested}
                onChange={(event) => updateField("connectWalletRequested", event.target.checked)}
              />
              I may want optional ownership-confirmed report categories later. I understand this must never require my seed phrase or private key.
            </label>
          </div>
          <div className={styles.sectionHeader}>
            <p>Step 4</p>
            <h2>Report password</h2>
          </div>
          <p className={styles.muted}>
            This password is used to encrypt your delivered report. Save it somewhere safe.
            AnarchI should not need your seed phrase or private key.
          </p>
          <div className={styles.gridTwo}>
            <label>
              Report unlock password *
              <input
                type="password"
                value={form.reportPassword}
                onChange={(event) => updateField("reportPassword", event.target.value)}
              />
            </label>
            <label>
              Confirm report password *
              <input
                type="password"
                value={form.confirmReportPassword}
                onChange={(event) => updateField("confirmReportPassword", event.target.value)}
              />
            </label>
          </div>
          <div className={styles.consentBox}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={form.internalResearchConsent}
                onChange={(event) => updateField("internalResearchConsent", event.target.checked)}
              />
              I consent to AnarchI creating a sanitized internal research version after my report is delivered.
            </label>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={form.termsAccepted}
                onChange={(event) => updateField("termsAccepted", event.target.checked)}
              />
              I agree to the Terms of Service. *
            </label>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={form.riskPolicyAcknowledged}
                onChange={(event) => updateField("riskPolicyAcknowledged", event.target.checked)}
              />
              I acknowledge AnarchI provides read-only safety analysis, not custody, legal advice, or guaranteed protection. *
            </label>
          </div>
        </div>
        <aside className={styles.checkoutPanel}>
          <div className={styles.priceCard}>
            <p className={styles.eyebrow}>Step 5</p>
            <h2>Complete purchase</h2>
            <p className={styles.price}>$50</p>
            <p className={styles.muted}>
              Choose card/bank or crypto. Your report starts after payment and intake are confirmed.
              Payments are handled through payment providers. AnarchI does not collect card numbers
              or wallet secrets in this form.
            </p>
            {error ? <div className={styles.error}>{error}</div> : null}
            <button
              type="button"
              disabled={Boolean(loadingProvider)}
              onClick={() => startCheckout("stripe")}
              className={styles.primaryButton}
            >
              {loadingProvider === "stripe" ? "Opening Stripe..." : "Pay with Card / Bank"}
            </button>
            <button
              type="button"
              disabled={Boolean(loadingProvider)}
              onClick={() => startCheckout("crypto")}
              className={styles.secondaryButton}
            >
              {loadingProvider === "crypto" ? "Opening Crypto Checkout..." : "Pay with Crypto"}
            </button>
            <div className={styles.smallPrint}>
              Every actionable recommendation must remain customer-controlled. No seed phrases.
              No private keys. No wallet passwords. No hidden wallet actions. No backend signing.
              No custody.
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}



