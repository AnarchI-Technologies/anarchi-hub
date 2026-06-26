import { NextResponse } from 'next/server';
import clientPromise from '@/lib/db';
import { verifyIPN } from '@/lib/nowpayments';

export async function POST(request) {
  try {
    const body = await request.json();
    const ipnHeader = request.headers.get('x-nowpayments-sig');

    // 1. Your backend verifies the IPN signature for security
    if (!verifyIPN(ipnHeader, body)) {
      return NextResponse.json({ message: 'Invalid IPN signature.' }, { status: 400 });
    }

    // 2. Your backend updates the payment status in the database
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    await db.collection('payments').updateOne(
      { _id: body.invoice_id },
      { $set: { status: body.payment_status, ipnData: body } }
    );

    // If payment is finished, trigger the report generation
    if (body.payment_status === 'finished') {
      // TODO: Trigger the on-chain listeners with the wallet address
      // This will require another piece of logic to get the wallet address
      // associated with this payment ID.
    }

    return NextResponse.json({ message: 'IPN received.' });
  } catch (error) {
    console.error('IPN Error:', error);
    return NextResponse.json({ message: 'Error processing IPN.' }, { status: 500 });
  }
}