import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "anarchi_wsrs";

if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable.");
}

const options = {};

/** @type {MongoClient} */
let client;
/** @type {Promise<MongoClient>} */
let clientPromise;

if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!globalThis._mongoClientPromise) {
        client = new MongoClient(uri, options);
        globalThis._mongoClientPromise = client.connect();
    }
    clientPromise = globalThis._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

/**
 * @returns {Promise<import('mongodb').Db>}
 */
export async function getDb() {
    const connectedClient = await clientPromise;
    return connectedClient.db(dbName);
}
/**
 * @param {string} collectionName
 * @returns {Promise<import('mongodb').Collection>}
 */
export async function getCollection(collectionName) {
    const db = await getDb();
    return db.collection(collectionName);
}

function normalizeId(id) {
    if (!id) return null;

    try {
        return new ObjectId(id);
    } catch {
        return id;
    }
}

/**
 * @template T
 * @param {import('mongodb').WithId<T> | null} document
 * @returns {(T & {id: string}) | null}
 */
function serializeDocument(document) {
    if (!document) return null;

    return {
        ...document,
        _id: document._id?.toString?.() || document._id,
        id: document.id || document._id?.toString?.() || document.id,
    };
}

/**
 * REPORTS
 */

/**
 * @param {object} report
 */
export async function saveReport(report = {}) {
    const reports = await getCollection("reports");

    const now = new Date().toISOString();

    const reportId =
        report.id ||
        report.reportId ||
        report._id?.toString?.() ||
        `report_${Date.now()}`;

    const document = {
        ...report,
        id: reportId,
        reportId,
        updatedAt: now,
        createdAt: report.createdAt || now,
    };

    await reports.updateOne(
        { id: reportId },
        { $set: document },
        { upsert: true }
    );

    return document;
}

/**
 * @param {string} id
 */
export async function getReport(id) {
    const reports = await getCollection("reports");

    const document = await reports.findOne({
        $or: [{ id }, { reportId: id }, { _id: normalizeId(id) }],
    });

    return serializeDocument(document);
}

/**
 * @param {number} [limit=100]
 */
export async function listReports(limit = 100) {
    const reports = await getCollection("reports");

    const documents = await reports
        .find({})
        .sort({ createdAt: -1 })
        .limit(limit)
        .toArray();

    return documents.map(serializeDocument);
}

/**
 * @param {string} id
 * @param {string} status
 * @param {object} [extra={}]
 */
export async function updateReportStatus(id, status, extra = {}) {
    const reports = await getCollection("reports");

    const now = new Date().toISOString();

    await reports.updateOne(
        {
            $or: [{ id }, { reportId: id }, { _id: normalizeId(id) }],
        },
        {
            $set: {
                status,
                updatedAt: now,
                ...extra,
            },
        }
    );

    return getReport(id);
}

/**
 * JOBS
 */

/**
 * @param {object} job
 */
export async function saveJob(job = {}) {
    const jobs = await getCollection("jobs");

    const now = new Date().toISOString();

    const jobId = job.id || job.jobId || `job_${Date.now()}`;

    const document = {
        ...job,
        id: jobId,
        jobId,
        updatedAt: now,
        createdAt: job.createdAt || now,
    };

    await jobs.updateOne(
        { id: jobId },
        { $set: document },
        { upsert: true }
    );

    return document;
}

/**
 * @param {string} id
 */
export async function getJob(id) {
    const jobs = await getCollection("jobs");

    const document = await jobs.findOne({
        $or: [{ id }, { jobId: id }, { _id: normalizeId(id) }],
    });

    return serializeDocument(document);
}

/**
 * @param {number} [limit=100]
 */
export async function listJobs(limit = 100) {
    const jobs = await getCollection("jobs");

    const documents = await jobs
        .find({})
        .sort({ createdAt: -1 })
        .limit(limit)
        .toArray();

    return documents.map(serializeDocument);
}

/**
 * @param {string} id
 * @param {string} status
 * @param {object} [extra={}]
 */
export async function updateJobStatus(id, status, extra = {}) {
    const jobs = await getCollection("jobs");

    const now = new Date().toISOString();

    await jobs.updateOne(
        {
            $or: [{ id }, { jobId: id }, { _id: normalizeId(id) }],
        },
        {
            $set: {
                status,
                updatedAt: now,
                ...extra,
            },
        }
    );

    return getJob(id);
}

/**
 * WALLET SOURCES
 */

/**
 * @param {object} source
 */
export async function saveWalletSource(source = {}) {
    const walletSources = await getCollection("wallet_sources");

    const now = new Date().toISOString();

    const key = source.key || source.name || `source_${Date.now()}`;

    const document = {
        ...source,
        key,
        updatedAt: now,
        createdAt: source.createdAt || now,
    };

    await walletSources.updateOne(
        { key },
        { $set: document },
        { upsert: true }
    );

    return document;
}

/**
 * @param {number} [limit=100]
 */
export async function listWalletSources(limit = 100) {
    const walletSources = await getCollection("wallet_sources");

    const documents = await walletSources
        .find({})
        .sort({ key: 1 })
        .limit(limit)
        .toArray();

    return documents.map(serializeDocument);
}

/**
 * AUDIT LOGS
 */

/**
 * @param {object} entry
 */
export async function writeAuditLog(entry = {}) {
    const auditLogs = await getCollection("audit_logs");

    const now = new Date().toISOString();

    const document = {
        ...entry,
        createdAt: entry.createdAt || now,
    };

    const result = await auditLogs.insertOne(document);

    return {
        ...document,
        _id: result.insertedId.toString(),
        id: result.insertedId.toString(),
    };
}

/**
 * @param {number} [limit=100]
 */
export async function listAuditLogs(limit = 100) {
    const auditLogs = await getCollection("audit_logs");

    const documents = await auditLogs
        .find({})
        .sort({ createdAt: -1 })
        .limit(limit)
        .toArray();

    return documents.map(serializeDocument);
}

/**
 * PROOFS
 */

/**
 * @param {object} proof
 */
export async function saveProof(proof = {}) {
    const proofs = await getCollection("proofs");

    const now = new Date().toISOString();

    const proofId =
        proof.id ||
        proof.proofId ||
        proof._id?.toString?.() ||
        `proof_${Date.now()}`;

    const document = {
        ...proof,
        id: proofId,
        proofId,
        updatedAt: now,
        createdAt: proof.createdAt || now,
    };

    await proofs.updateOne(
        { id: proofId },
        { $set: document },
        { upsert: true }
    );

    return document;
}

/**
 * @param {string} id
 */
export async function getProof(id) {
    const proofs = await getCollection("proofs");
    const document = await proofs.findOne({ $or: [{ id }, { proofId: id }, { _id: normalizeId(id) }] });
    return serializeDocument(document);
}