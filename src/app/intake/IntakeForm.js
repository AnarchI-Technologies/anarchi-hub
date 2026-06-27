"use client";

import { backendApi } from '@/lib/backend-api';

import { useState } from "react";
import { listSupportedChains } from "@/lib/adapters/registry";
import { buildProofChallenge } from "@/lib/proof-control";

const chainLabels = {
  ethereum: "Ethereum",
  base: "Base",
  arbitrum: "Arbitrum",
  optimism: "Optimism",
  polygon: "Polygon",
  bsc: "BSC / Binance Smart Chain",
  avalanche: "Avalanche",
  tron: "Tron",
  bitcoin: "Bitcoin",
  ton: "TON",
  wax: "WAX",
  eos: "EOS",
  solana: "Solana",
};

const supportedChains = listSupportedChains()
  .filter((entry) => ["evm", "solana", "bitcoin", "tron", "ton", "wax", "eos"].includes(entry.kind))
  .map((entry) => ({
    value: entry.id,
    label: chainLabels[entry.id] || entry.id.charAt(0).toUpperCase() + entry.id.slice(1),
  }));

const initialForm = {
  walletAddress: "",
  chain: "ethereum",
  accountType: "Solo holder",
  recentSuspiciousActivity: "No",
  unknownApprovals: "No",
  hotWalletStorage: "No",
  backupSeedSafe: "Yes",
  sharedDevice: "No",
  usesHardwareWallet: "No",
  highValueAssets: "No",
  singleWalletForEverything: "No",
  sharedBrowserProfile: "No",
  usesBurnerWalletForMints: "No",
  teamUsesMultisig: "No",
  biggestConcern: "",
  deepAnalysisOptIn: "No",
  privacyPolicyAccepted: "No",
  privateKeyRiskAcknowledged: "No",
  readOnlyProofPreferred: "Yes",
  proofMessage: "",
  proofSignature: "",
  proofAcknowledged: "No",
};

export default function IntakeForm({ sessionId, email }) {
  const [form, setForm] = useState(() => ({
    ...initialForm,
    proofMessage: buildProofChallenge({
      sessionId,
      walletAddress: initialForm.walletAddress,
      chain: initialForm.chain,
      email,
    }),
  }));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  function updateField(name, value) {
    setForm((current) => {
      const next = { ...current, [name]: value };
      if (["walletAddress", "chain", "accountType"].includes(name)) {
        next.proofMessage = buildProofChallenge({
          sessionId,
          walletAddress: name === "walletAddress" ? value : next.walletAddress,
          chain: name === "chain" ? value : next.chain,
          email,
        });
      }
      return next;
    });
  }

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(backendApi("/api/intake"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          email,
          ...form,
          proofChallenge: buildProofChallenge({
            sessionId,
            walletAddress: form.walletAddress,
            chain: form.chain,
            email,
          }),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "We could not submit your intake right now.");
      }

      setResult(data);
    } catch (err) {
      setError("We could not submit your intake right now. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  if (result) {
    const sent = result.status === "sent";
    return (
      <div className="status">
        <strong>{sent ? "Report sent." : "Intake received and queued."}</strong>
        <p className="muted" style={{ color: "inherit" }}>
          {sent
            ? "Your encrypted report has been emailed and the password was sent separately."
            : "Payment and intake are saved. The report will generate automatically as soon as payment is confirmed."}
        </p>
      </div>
    );
  }

  return (
    <form className="form-shell" onSubmit={onSubmit}>
      {error ? <div className="status error">{error}</div> : null}

      <div className="field-grid">
        <div className="field">
          <label htmlFor="walletAddress">Wallet address</label>
          <input
            id="walletAddress"
            value={form.walletAddress}
            onChange={(event) => updateField("walletAddress", event.target.value)}
            placeholder="0x..."
            required
          />
        </div>

        <div className="field">
          <label htmlFor="chain">Chain</label>
          <select id="chain" value={form.chain} onChange={(event) => updateField("chain", event.target.value)}>
            {supportedChains.map((chain) => (
              <option key={chain.value} value={chain.value}>
                {chain.label}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="accountType">Account type</label>
          <select
            id="accountType"
            value={form.accountType}
            onChange={(event) => updateField("accountType", event.target.value)}
          >
            <option>Solo holder</option>
            <option>Gamer</option>
            <option>Founder</option>
            <option>Small team</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="recentSuspiciousActivity">Recent suspicious DMs or links?</label>
          <select
            id="recentSuspiciousActivity"
            value={form.recentSuspiciousActivity}
            onChange={(event) => updateField("recentSuspiciousActivity", event.target.value)}
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="unknownApprovals">Unknown approvals?</label>
          <select
            id="unknownApprovals"
            value={form.unknownApprovals}
            onChange={(event) => updateField("unknownApprovals", event.target.value)}
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="hotWalletStorage">Do you keep all assets in one hot wallet?</label>
          <select
            id="hotWalletStorage"
            value={form.hotWalletStorage}
            onChange={(event) => updateField("hotWalletStorage", event.target.value)}
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="backupSeedSafe">Is your seed phrase backed up safely?</label>
          <select
            id="backupSeedSafe"
            value={form.backupSeedSafe}
            onChange={(event) => updateField("backupSeedSafe", event.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="sharedDevice">Is this wallet used on a shared device?</label>
          <select
            id="sharedDevice"
            value={form.sharedDevice}
            onChange={(event) => updateField("sharedDevice", event.target.value)}
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="usesHardwareWallet">Do you use a hardware wallet for meaningful value?</label>
          <select
            id="usesHardwareWallet"
            value={form.usesHardwareWallet}
            onChange={(event) => updateField("usesHardwareWallet", event.target.value)}
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="highValueAssets">Does this wallet hold meaningful value?</label>
          <select
            id="highValueAssets"
            value={form.highValueAssets}
            onChange={(event) => updateField("highValueAssets", event.target.value)}
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="singleWalletForEverything">Is this your one wallet for everything?</label>
          <select
            id="singleWalletForEverything"
            value={form.singleWalletForEverything}
            onChange={(event) => updateField("singleWalletForEverything", event.target.value)}
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="sharedBrowserProfile">Do you use a shared browser profile for wallet activity?</label>
          <select
            id="sharedBrowserProfile"
            value={form.sharedBrowserProfile}
            onChange={(event) => updateField("sharedBrowserProfile", event.target.value)}
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="usesBurnerWalletForMints">Do you use a burner wallet for mints and claims?</label>
          <select
            id="usesBurnerWalletForMints"
            value={form.usesBurnerWalletForMints}
            onChange={(event) => updateField("usesBurnerWalletForMints", event.target.value)}
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="teamUsesMultisig">If this is a team or founder wallet, is multisig used?</label>
          <select
            id="teamUsesMultisig"
            value={form.teamUsesMultisig}
            onChange={(event) => updateField("teamUsesMultisig", event.target.value)}
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="biggestConcern">What worries you most?</label>
        <textarea
          id="biggestConcern"
          value={form.biggestConcern}
          onChange={(event) => updateField("biggestConcern", event.target.value)}
          placeholder="Example: I minted on a bunch of sites and want to know if I messed up approvals."
          required
        />
      </div>

      <div className="panel" style={{ marginTop: 20 }}>
        <h3 style={{ marginTop: 0 }}>Optional deep analysis</h3>
        <p className="muted" style={{ marginTop: 0 }}>
          This section is optional. It does not block normal reports. We do not want private keys, and the safer path
          is a read-only proof or signed message instead.
        </p>

        <div className="field-grid">
          <div className="field">
            <label htmlFor="deepAnalysisOptIn">Request deeper chain analysis?</label>
            <select
              id="deepAnalysisOptIn"
              value={form.deepAnalysisOptIn}
              onChange={(event) => updateField("deepAnalysisOptIn", event.target.value)}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="privacyPolicyAccepted">Privacy policy reviewed?</label>
            <select
              id="privacyPolicyAccepted"
              value={form.privacyPolicyAccepted}
              onChange={(event) => updateField("privacyPolicyAccepted", event.target.value)}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="privateKeyRiskAcknowledged">Private key risk acknowledged?</label>
            <select
              id="privateKeyRiskAcknowledged"
              value={form.privateKeyRiskAcknowledged}
              onChange={(event) => updateField("privateKeyRiskAcknowledged", event.target.value)}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="readOnlyProofPreferred">Use read-only proof instead of private key sharing?</label>
            <select
              id="readOnlyProofPreferred"
              value={form.readOnlyProofPreferred}
              onChange={(event) => updateField("readOnlyProofPreferred", event.target.value)}
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label htmlFor="proofMessage">Proof challenge to sign</label>
          <textarea id="proofMessage" value={form.proofMessage} readOnly />
        </div>

        <div className="field">
          <label htmlFor="proofSignature">Signed message / signature</label>
          <input
            id="proofSignature"
            value={form.proofSignature}
            onChange={(event) => updateField("proofSignature", event.target.value)}
            placeholder="Paste the signed message or signature here"
          />
        </div>

        <div className="field">
          <label htmlFor="proofAcknowledged">I understand this is read-only proof, not private-key sharing</label>
          <select
            id="proofAcknowledged"
            value={form.proofAcknowledged}
            onChange={(event) => updateField("proofAcknowledged", event.target.value)}
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <p className="mini" style={{ marginBottom: 0 }}>
          If you request deeper analysis, we will only use proof-of-control style data and never ask for a private key.
        </p>
      </div>

      <div className="mini">
        Checkout email: <strong>{email || "the email used at checkout"}</strong>
      </div>

      <div className="cta-row">
        <button className="button" type="submit" disabled={loading}>
          {loading ? "Generating encrypted report..." : "Submit intake and start report"}
        </button>
      </div>
    </form>
  );
}


