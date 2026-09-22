/**
 * Tracking Helper Module for Tentaklik
 * Handles conversion tracking across Meta Ads (Pixel + CAPI), TikTok Ads, Google Ads (Enhanced Conversions), and GTM dataLayer.
 */

export type LeadService = 'meta' | 'tiktok' | 'google' | 'website' | 'konsultasi';

export interface LeadUserData {
  email?: string;
  phone?: string;
  name?: string;
}

export interface TrackLeadOptions {
  service?: LeadService;
  action: 'click_button' | 'submit_form';
  userData?: LeadUserData;
  label?: string;
  sourceUrl?: string;
}

export const META_PIXEL_ID = '1341980327384883';
export const META_CAPI_TOKEN = 'EAAJf0o2jAOkBSkQtssh103uBa7h8L2KAhZB93FxwZA569DE8wz3H0pgXDt1THh0B5THsHgDtwYP86RFZBQbpd6HpvXt56pEbJpksG60dOVH0qYhmuiEKvUYqIp98aFN9u0anZBhk1oyzXJwAVW6gu5A1JrVHLJyZCUtigKy9dhMzVKqYk5rY79M4s9C9TCZBZCS8AZDZD';
export const TIKTOK_PIXEL_ID = 'DAOI0C3C77U88MSNV1I0';
export const GOOGLE_ADS_ID = 'AW-304997094';

/**
 * Normalizes and hashes text with SHA-256 (client-side SubtleCrypto)
 * Required for Meta & TikTok EMQ (Advanced Matching) and Google Enhanced Conversions
 */
export async function hashSha256(value: string): Promise<string> {
  if (!value || !value.trim()) return '';
  const clean = value.trim().toLowerCase();
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(clean);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  } catch {
    return '';
  }
}

/**
 * Normalizes phone number into international format digits (e.g. 628123456789)
 */
export function normalizePhone(phone: string): string {
  if (!phone) return '';
  let clean = phone.replace(/\D/g, '');
  if (clean.startsWith('0')) {
    clean = '62' + clean.slice(1);
  } else if (clean.startsWith('8')) {
    clean = '62' + clean;
  }
  return clean;
}

/**
 * Detects service type from URL pathname
 */
export function detectServiceFromUrl(urlPath = typeof window !== 'undefined' ? window.location.pathname : ''): LeadService {
  const p = urlPath.toLowerCase();
  if (p.includes('meta')) return 'meta';
  if (p.includes('tiktok')) return 'tiktok';
  if (p.includes('google') || p.includes('gads')) return 'google';
  if (p.includes('website') || p.includes('web-development')) return 'website';
  return 'konsultasi';
}

export const TARGET_LP_SLUGS = [
  'akun-meta-ads-whitelist',
  'akun-google-ads-whitelist',
  'akun-tiktok-ads-whitelist',
  'jasa-pembuatan-website-after-sales-terbaik',
  'konsultasi-digital-marketing',
];

export function isTargetLpUrl(pathname: string): boolean {
  if (!pathname) return false;
  const p = pathname.toLowerCase().replace(/\/+$/, '');
  return TARGET_LP_SLUGS.some((slug) => p.endsWith(slug) || p.includes('/' + slug));
}

/**
 * Dispatches lead conversion events to all platforms with high EMQ / Enhanced Conversion matching
 */
export async function trackLead(opts: TrackLeadOptions): Promise<void> {
  if (typeof window === 'undefined') return;

  const currentPath = opts.sourceUrl || window.location.pathname;

  // Strict Guard: Hanya tembak konversi jika user berada di salah satu dari 5 Landing Page target!
  if (!isTargetLpUrl(currentPath)) {
    return;
  }

  const service = opts.service || detectServiceFromUrl(currentPath);
  const action = opts.action;
  const eventId = 'lead_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
  const eventCategory = `${service} leads`;
  const contentName = `${service.toUpperCase()} Lead`;

  // 1. Prepare User Data & Hashing for EMQ
  let rawEmail = opts.userData?.email?.trim().toLowerCase() || '';
  let cleanPhone = normalizePhone(opts.userData?.phone || '');
  let rawName = opts.userData?.name?.trim() || '';

  let hashedEmail = '';
  let hashedPhone = '';
  let hashedFirstName = '';

  if (rawEmail) hashedEmail = await hashSha256(rawEmail);
  if (cleanPhone) hashedPhone = await hashSha256(cleanPhone);
  if (rawName) hashedFirstName = await hashSha256(rawName.split(' ')[0] || rawName);

  // 2. Push to GTM DataLayer
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: 'lead_conversion',
    event_id: eventId,
    lead_service: service,
    lead_category: eventCategory,
    lead_type: action,
    lead_label: opts.label || contentName,
    page_path: currentPath,
    user_data: opts.userData
      ? {
          email: rawEmail,
          phone_number: cleanPhone ? '+' + cleanPhone : undefined,
          first_name: rawName,
        }
      : undefined,
  });

  // 3. Meta Pixel Tracking (Advanced Matching for EMQ)
  if (typeof w.fbq === 'function') {
    w.fbq('set', 'autoConfig', false, META_PIXEL_ID);
    if (hashedEmail || hashedPhone || hashedFirstName) {
      w.fbq('init', META_PIXEL_ID, {
        em: hashedEmail || undefined,
        ph: hashedPhone || undefined,
        fn: hashedFirstName || undefined,
      });
    }

    w.fbq('track', 'Lead', {
      content_name: contentName,
      content_category: eventCategory,
      lead_service: service,
      action_type: action,
    }, {
      eventID: eventId,
    });
  }

  // 4. Meta Conversions API (CAPI) Server Direct for 9-10/10 EMQ
  if (META_CAPI_TOKEN && (hashedEmail || hashedPhone || action === 'submit_form')) {
    try {
      const capiPayload = {
        data: [
          {
            event_name: 'Lead',
            event_time: Math.floor(Date.now() / 1000),
            event_id: eventId,
            event_source_url: window.location.href,
            action_source: 'website',
            user_data: {
              em: hashedEmail ? [hashedEmail] : undefined,
              ph: hashedPhone ? [hashedPhone] : undefined,
              fn: hashedFirstName ? [hashedFirstName] : undefined,
              client_user_agent: navigator.userAgent,
            },
            custom_data: {
              content_name: contentName,
              content_category: eventCategory,
              service: service,
            },
          },
        ],
      };

      fetch(`https://graph.facebook.com/v20.0/${META_PIXEL_ID}/events?access_token=${META_CAPI_TOKEN}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(capiPayload),
        keepalive: true,
      }).catch(() => {});
    } catch {}
  }

  // 5. TikTok Pixel Tracking (EMQ Advanced Matching)
  if (typeof w.ttq === 'object' && typeof w.ttq.track === 'function') {
    if (typeof w.ttq.identify === 'function' && (hashedEmail || hashedPhone)) {
      w.ttq.identify({
        email: hashedEmail || undefined,
        phone_number: hashedPhone || undefined,
      });
    }

    w.ttq.track('SubmitForm', {
      content_name: contentName,
      content_category: eventCategory,
      lead_service: service,
    });

    w.ttq.track('Contact', {
      content_name: contentName,
    });
  }

  // 6. Google Tag / Google Ads Enhanced Conversions
  if (typeof w.gtag === 'function') {
    if (opts.userData && (rawEmail || cleanPhone)) {
      w.gtag('set', 'user_data', {
        email: rawEmail || undefined,
        phone_number: cleanPhone ? '+' + cleanPhone : undefined,
        address: rawName ? { first_name: rawName } : undefined,
      });
    }

    w.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_ID,
      event_category: 'leads',
      event_label: eventCategory,
    });

    w.gtag('event', 'generate_lead', {
      service: service,
      event_category: 'leads',
      event_label: eventCategory,
    });
  }

  // 7. Cloudflare Zaraz integration
  if (w.zaraz && typeof w.zaraz.track === 'function') {
    w.zaraz.track('generate_lead', {
      service: service,
      lead_category: eventCategory,
      type: action,
    });
  }
}

// Global exposure for non-bundled inline scripts
if (typeof window !== 'undefined') {
  (window as any).tentaklikTrackLead = trackLead;
  (window as any).detectServiceFromUrl = detectServiceFromUrl;
}
