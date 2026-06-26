const NOWPAYMENTS_API_URL = 'https://api.nowpayments.io/v1';

/**
 * Creates a payment invoice on NowPayments.
 * This function will be called by your backend.
 */
export async function createPayment(priceAmount, priceCurrency = 'usd') {
    const response = await fetch(`${NOWPAYMENTS_API_URL}/invoice`, {
        method: 'POST',
        headers: {
            'x-api-key': process.env.NOWPAYMENTS_API_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            price_amount: priceAmount,
            price_currency: priceCurrency,
            ipn_callback_url: `${process.env.NEXT_PUBLIC_API_URL}/api/nowpayments-ipn`,
        }),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        console.error("NowPayments API Error:", errorBody);
        throw new Error('Failed to create payment invoice.');
    }

    return response.json();
}

/**
 * Verifies the IPN hash from NowPayments.
 * This will be used in your nowpayments-ipn API route.
 */
export function verifyIPN(ipnHeader, requestBody) {
    // Implementation for verifying the IPN signature goes here.
    // This is a critical security step.
    return true; // Placeholder
}