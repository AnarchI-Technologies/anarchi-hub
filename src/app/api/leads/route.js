import { NextResponse } from 'next/server';
import { getClient } from '@/lib/mongo';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_FROM = process.env.SENDGRID_FROM_EMAIL || 'no-reply@anarchi-tech.com';

async function sendEmailNotification(lead) {
  if (!SENDGRID_API_KEY) return false;
  const body = {
    personalizations: [{ to: [{ email: 'sales@anarchi-tech.com' }], subject: `New lead: ${lead.email || lead.payload?.email || 'unknown'}` }],
    from: { email: SENDGRID_FROM, name: 'AnarchI Website' },
    content: [{ type: 'text/plain', value: `New lead from website:\n\n${JSON.stringify(lead, null, 2)}` }],
  };
  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: { Authorization: `Bearer ${SENDGRID_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return res.ok;
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const lead = {
      source: payload.source || 'website',
      email: payload.email || payload.payload?.email || null,
      sessionId: payload.sessionId || null,
      payload: payload.payload || payload,
      createdAt: new Date().toISOString(),
    };
    // Persist to MongoDB when configured
    try {
      const client = getClient && getClient();
      if (client) {
        await client.connect();
        const db = client.db(process.env.MONGODB_DB || 'anarchi');
        await db.collection('leads').insertOne(lead);
      }
    } catch (e) {
      console.warn('Could not write lead to MongoDB', e);
    }

    // Send notification email (best-effort)
    try {
      await sendEmailNotification(lead);
    } catch (e) {
      console.warn('SendGrid notification failed', e);
    }

    // Forward a tracking event to GA via existing /api/track
    try {
      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event_name: 'lead_received', params: { source: lead.source, email: lead.email } }),
      });
    } catch (e) {}

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Error in /api/leads', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
