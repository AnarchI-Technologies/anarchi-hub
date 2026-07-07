export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Send pageview to client gtag and server endpoint (for Measurement Protocol)
export function pageview(url) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
  // Also send to server-side endpoint to record as server event
  try {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event_name: 'page_view', params: { page_path: url } }),
    });
  } catch (e) {
    // ignore
  }
}

export function event({ action, category, label, value, params = {} }) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, { event_category: category, event_label: label, value, ...params });
  }
  try {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event_name: action, params: { category, label, value, ...params } }),
    });
  } catch (e) {
    // ignore
  }
}
