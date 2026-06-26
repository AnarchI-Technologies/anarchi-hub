'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import PaymentGate from "./intake/PaymentGate";
import IntakeForm from "./intake/IntakeForm";

export default function IntakeModal({ sessionId, email, onClose }) {
    const modalRef = useRef(null);

    // Handle clicks outside the modal to close it
    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalRef, onClose]);

    // Handle Escape key to close the modal
    useEffect(() => {
        function handleKeydown(event) {
            if (event.key === 'Escape') {
                onClose();
            }
        }
        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, [onClose]);

    return (
        <div className="modal-overlay">
            <div className="modal-content" ref={modalRef}>
                <button className="modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
                <header className="topbar" style={{ padding: '0 0 20px 0', border: 'none' }}>
                    <div className="brand">
                        <Image
                            src="/brand/anarchi-transparent.png"
                            alt="AnarchI"
                            width={44}
                            height={44}
                            className="brand-image"
                            priority
                        />
                        <div>
                            <div>AnarchI Intake</div>
                            <div className="mini">Secure Session: {sessionId}</div>
                        </div>
                    </div>
                </header>

                <section className="panel" style={{ padding: 0, border: 'none', background: 'transparent' }}>
                    <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", margin: "0 0 10px", letterSpacing: "-0.04em" }}>
                        Finish the intake to start your report.
                    </h1>
                    <p className="muted" style={{ maxWidth: "70ch", marginTop: 0 }}>
                        This secure window will guide you through payment and data submission. If payment is still confirming, we&apos;ll keep checking and unlock the form as soon as it is confirmed.
                    </p>

                    <div className="section">
                        <PaymentGate sessionId={sessionId} initialPaymentStatus={"waiting"} email={email}>
                            <IntakeForm sessionId={sessionId} email={email} />
                        </PaymentGate>
                    </div>
                </section>
            </div>
        </div>
    );
}