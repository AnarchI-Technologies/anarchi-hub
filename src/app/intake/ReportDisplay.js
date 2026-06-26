'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Mock decryption function - replace with your actual implementation
async function decryptReport(encryptedData, password) {
    console.log('Attempting to decrypt with password:', password);
    // In a real app, you'd use a library like @noble/hashes or Web Crypto API
    // For this example, we'll just check a hardcoded password.
    if (password === 'password123') {
        // Assuming encryptedData is a JSON string of the real report
        return JSON.parse(encryptedData);
    } else {
        throw new Error('Invalid password. Decryption failed.');
    }
}

export default function ReportDisplay({ encryptedReport }) {
    const [password, setPassword] = useState('');
    const [decryptedReport, setDecryptedReport] = useState(null);
    const [isDecrypting, setIsDecrypting] = useState(false);
    const [error, setError] = useState('');

    const handleDecrypt = async (e) => {
        e.preventDefault();
        setError('');
        setIsDecrypting(true);
        try {
            const report = await decryptReport(encryptedReport, password);
            setDecryptedReport(report);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsDecrypting(false);
        }
    };

    const isDecrypted = decryptedReport !== null;

    return (
        <section id="report" className="mt-12 w-full max-w-4xl mx-auto">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h2 className="text-3xl font-bold text-green-400">Analysis Report</h2>
                    <Button disabled={!isDecrypted} onClick={() => alert('Downloading PDF...')}>
                        Download as PDF
                    </Button>
                </div>

                {!isDecrypted ? (
                    <div className="mt-6 border-t border-gray-700 pt-6">
                        <h3 className="text-lg font-semibold">Report is Encrypted</h3>
                        <p className="text-gray-400 mt-2">Enter your password to decrypt and view the report.</p>
                        <form onSubmit={handleDecrypt} className="mt-4 flex flex-col sm:flex-row items-start gap-2">
                            <Input
                                type="password"
                                placeholder="Enter decryption password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="flex-grow bg-gray-900 border-gray-600"
                                disabled={isDecrypting}
                            />
                            <Button type="submit" className="bg-green-500 hover:bg-green-600" disabled={isDecrypting}>
                                {isDecrypting ? 'Decrypting...' : 'Decrypt Report'}
                            </Button>
                        </form>
                        {error && <p className="mt-4 text-red-500">{error}</p>}
                    </div>
                ) : (
                    <div className="mt-6 border-t border-gray-700 pt-6 grid gap-8">
                        {/* Overall Score & Blacklist */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-900/70 p-4 rounded-md">
                                <h4 className="font-semibold text-gray-300">Overall Score</h4>
                                <p className="text-5xl font-bold text-green-400 mt-2">{decryptedReport.overallScore}/100</p>
                            </div>
                            <div className="bg-gray-900/70 p-4 rounded-md">
                                <h4 className="font-semibold text-gray-300">Blacklist Check</h4>
                                <p
                                    className={`text-2xl font-bold mt-2 ${decryptedReport.blacklist.is_blacklisted ? 'text-red-500' : 'text-green-400'
                                        }`}
                                >
                                    {decryptedReport.blacklist.is_blacklisted ? 'Blacklisted' : 'Not Blacklisted'}
                                </p>
                            </div>
                        </div>

                        {/* Token Approvals */}
                        <div>
                            <h4 className="text-xl font-bold">Token Approvals</h4>
                            <p className="text-gray-400">Review contracts approved to spend your tokens.</p>
                            <div className="mt-4 space-y-4">
                                {decryptedReport.approvals.length > 0 ? (
                                    decryptedReport.approvals.map((approval, index) => (
                                        <div key={index} className="bg-gray-900/70 p-4 rounded-md flex flex-col md:flex-row justify-between items-start gap-4">
                                            <div>
                                                <p className="font-bold text-lg">
                                                    {approval.token}
                                                    <span
                                                        className={`ml-2 text-sm font-medium px-2 py-0.5 rounded-full ${approval.risk === 'High' ? 'bg-red-900 text-red-300' : 'bg-yellow-900 text-yellow-300'
                                                            }`}
                                                    >
                                                        {approval.risk} Risk
                                                    </span>
                                                </p>
                                                <p className="text-sm text-gray-400">
                                                    <span className="font-medium text-gray-300">Spender:</span> {approval.spender}
                                                </p>
                                                <p className="text-sm text-gray-400">
                                                    <span className="font-medium text-gray-300">Allowance:</span> {approval.allowance}
                                                </p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <Button
                                                    variant="destructive"
                                                    size="sm"
                                                    disabled={!approval.isMalicious}
                                                    onClick={() => alert(`Revoking approval for ${approval.token} from ${approval.spender}`)}
                                                    title={
                                                        !approval.isMalicious
                                                            ? 'Revoke action is only enabled for known malicious contracts.'
                                                            : 'Revoke this approval'
                                                    }
                                                >
                                                    Revoke
                                                </Button>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-400">No token approvals found.</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}