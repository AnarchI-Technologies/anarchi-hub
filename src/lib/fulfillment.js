import { getReport, saveReport, getProof } from "@/lib/store";

export async function processFulfillment({ reportId, action } = {}) {
    if (!reportId) {
        return {
            ok: false,
            error: "Missing reportId.",
        };
    }

    const report = await getReport(reportId);

    if (!report) {
        return {
            ok: false,
            error: "Report not found.",
        };
    }

    // If the report has a proofId, retrieve the proof to potentially update its status
    let proof = null;
    if (report.proofId) {
        proof = await getProof(report.proofId);
    }

    const updatedReport = await saveReport({
        ...report,
        status: action === "complete" ? "completed" : "processing",
        fulfilledAt: action === "complete" ? new Date().toISOString() : null,
        // If there's a proof and the action is complete, link the proof's status to the report's completion
        ...(proof && action === "complete" && {
            proofStatus: "completed", // Assuming proof also gets completed
            proofCompletedAt: new Date().toISOString(),
        }),
    });

    return {
        ok: true,
        report: updatedReport,
    };
}

export async function fulfillWalletSafetyReport(reportId) {
    return processFulfillment({
        reportId,
        action: "complete",
    });
}