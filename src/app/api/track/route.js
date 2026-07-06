import { NextResponse } from 'next/server';

const MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;
const API_SECRET = process.env.GA_API_SECRET;

async function sendToGA(clientId, eventName, params) {
  if (!MEASUREMENT_ID || !API_SECRET) {
    console.warn('GA not configured: missing MEASUREMENT_ID or API_SECRET');
    return { ok: false, status: 500, text: 'GA not configured' };
  }
  const url = `https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`;
  const body = { client_id: clientId, events: [{ name: eventName, params: params || {} }] };
  const res = await fetch(url, { method: 'POST', body: JSON.stringify(body) });
  return { ok: res.ok, status: res.status, text: await res.text() };
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const eventName = payload.event_name || 'custom_event';
    const params = payload.params || {};
    let clientId = payload.client_id;
    if (!clientId) {
      // Use crypto.randomUUID if available
      clientId = (globalThis.crypto && globalThis.crypto.randomUUID && globalThis.crypto.randomUUID()) || Date.now().toString();
    }
    const result = await sendToGA(clientId, eventName, params);
    if (!result.ok) return NextResponse.json({ error: result.text }, { status: result.status });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error in /api/track', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
