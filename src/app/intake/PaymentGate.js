"use client";

import { backendApi } from '@/lib/backend-api';

import { useEffect, useState } from "react";

const READY_STATES = new Set(["finished"]);

export default function PaymentGate({ sessionId, initialPaymentStatus, email, children }) {
  const [status, setStatus] = useState(initialPaymentStatus || "missing");
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function poll() {
      try {
        const response = await fetch(backendApi(`/api/status?session_id=${encodeURIComponent(sessionId)}`), {
          cache: "no-store",
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.error || "We could not confirm the payment yet.");
        }

        if (!cancelled) {
          const nextStatus = data?.paymentStatus || "missing";
          setStatus(nextStatus);
          setError("");
        }
      } catch (pollError) {
        if (!cancelled) {
          setError("We are checking your payment now. If you already completed checkout, give it a moment and refresh.");
        }
      }
    }

    if (!READY_STATES.has(String(status).toLowerCase())) {
      poll();
      const interval = setInterval(poll, 8000);
      return () => {
        cancelled = true;
        clearInterval(interval);
      };
    }

    return () => {
      cancelled = true;
    };
  }, [sessionId, status]);

  const ready = READY_STATES.has(String(status).toLowerCase());

  if (!ready) {
    return (
      <div className="status">
        <strong>Waiting for payment confirmation.</strong>
        <p className="muted" style={{ color: "inherit" }}>
          We&apos;re checking the payment record for {email || "your session"}. Once the payment is confirmed, the intake
          form will unlock automatically.
        </p>
        {error ? (
          <p className="mini" style={{ color: "inherit", marginTop: 8 }}>
            {error}
          </p>
        ) : null}
      </div>
    );
  }

  return children;
}


