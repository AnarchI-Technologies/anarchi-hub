// This script generates unique hexadecimal strings for authentication keys and worker processes.
// It uses Node.js's built-in 'crypto' module to generate cryptographically strong pseudo-random data.

// Function to generate a random hexadecimal string of a specified byte length
function generateRandomHexString(byteLength) {
    return require('crypto').randomBytes(byteLength).toString('hex');
}

// Example usage:
console.log("Authentication Key (32 bytes):", generateRandomHexString(32));
console.log("Worker Key (16 bytes):", generateRandomHexString(16));
