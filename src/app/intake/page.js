import PaymentGate from "./PaymentGate";
export const dynamic = "force-dynamic";
export default function IntakePage({ searchParams }) {
  const sessionId = searchParams?.session_id || searchParams?.sessionId || "";
  const email = searchParams?.email || "";
  return (
    <main>
      <PaymentGate
        sessionId={sessionId}
        initialPaymentStatus={sessionId ? "checking" : "missing"}
        email={email}
      >
        <section>
          <h1>AnarchI Wallet Safety Report Intake</h1>
          <p>Your payment session is being checked through the AnarchI backend.</p>
        </section>
      </PaymentGate>
    </main>
  );
}
