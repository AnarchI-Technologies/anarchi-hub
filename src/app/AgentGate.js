"use client";

import { useState } from "react";

export default function AgentGate() {
    const [inputValue, setInputValue] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [error, setError] = useState("");

    const handleUnlock = () => {
        // The "password" is hardcoded for this preview
        if (inputValue.toLowerCase() === "deterministic") {
            setIsUnlocked(true);
            setError("");
        } else {
            setError("Incorrect phrase. Access denied.");
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleUnlock();
        }
    };

    return (
        <div className="gate">
            <div className="gate-copy">
                <p className="kicker">Private protocol</p>
                <h2>Neural highway entrypoint.</h2>
                <p>
                    This preview represents a future protected entrypoint where approved agents and LLM systems can discover AnarchI-authored skills, indexes, operating rules, and deterministic tool libraries. Owned agents get full internal access. Outside agents may eventually connect through a controlled handshake model.
                </p>
            </div>

            {!isUnlocked ? (
                <div id="lockedGate" className="gate-box">
                    <strong>Local preview gate</strong>
                    <div className="input-row">
                        <input
                            id="gateInput"
                            type="password"
                            placeholder="Preview phrase: deterministic"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button className="btn primary" onClick={handleUnlock}>Unlock</button>
                    </div>
                    {error && <p id="gateError" style={{ color: 'var(--gold)', marginBottom: 0 }}>{error}</p>}
                </div>
            ) : (
                <div id="unlockedGate" className="agent-grid">
                    <article className="card">
                        <div className="row"><span>Private lane</span><span className="pill private">Hidden</span></div>
                        <h3>Agent Knowledge Dock</h3>
                        <p>Training bay for agent instructions, deterministic logic packs, memory maps, and operating rules.</p>
                        <strong>Enter →</strong>
                    </article>
                    <article className="card">
                        <div className="row"><span>Private lane</span><span className="pill private">Hidden</span></div>
                        <h3>Wallet Report Brain</h3>
                        <p>Internal risk categories, scoring rules, whitelist overrides, evidence handling, and report policies.</p>
                        <strong>Enter →</strong>
                    </article>
                    <article className="card">
                        <div className="row"><span>Private lane</span><span className="pill private">Hidden</span></div>
                        <h3>Admin Review Queue</h3>
                        <p>User submissions, disputed flags, suspicious wallet reports, false-positive checks, and evidence cleanup.</p>
                        <strong>Enter →</strong>
                    </article>
                </div>
            )}
        </div>
    );
}