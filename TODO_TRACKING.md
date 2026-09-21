# TODO Tracking Implementation (Leads & High EMQ)

Dokumen panduan dan checklist implementasi tracking konversi iklan (Meta Ads, TikTok Ads, Google Ads) untuk website Tentaklik dengan target Event Match Quality (EMQ) dan Enhanced Conversions yang tinggi.

---

- [x] **Google Tag Manager Container ID**: `GTM-N6FD2GVL` *(Sudah didapatkan)*
- [x] **Meta Pixel ID**: `1341980327384883` *(Sudah didapatkan)*
- [x] **Meta Conversions API (CAPI) Token**: `EAAJf0o2jAOkBSkQtssh...` *(Sudah didapatkan - siap untuk EMQ tinggi)*
- [x] **TikTok Pixel ID**: `DAOI0C3C77U88MSNV1I0` *(Sudah didapatkan)*
- [x] **Google Ads Conversion ID**: `AW-304997094` *(Sudah terpasang di repo)*
- [x] **Google Analytics 4 (GA4) ID**: `G-7TZENR9L4G` *(Sudah terpasang di repo & .env)*
- [ ] **Konfirmasi Nomor / Teks Link WhatsApp** per masing-masing layanan jika ada format khusus.

---

## 2. Persiapan Sebelum Mulai
- [ ] **Screen Recording**: Siapkan OBS Studio / Loom / Windows Game Bar (`Win + Alt + R`) untuk merekam proses implementasi tracking sesuai permintaan.

---

## 3. Checklist Kodingan Website (Astro)

### A. Core Tracking Helper (`src/lib/tracking.ts`)
- [x] Buat inisialisasi `window.dataLayer = window.dataLayer || []`
- [x] Siapkan fungsi client-side SHA-256 Hashing untuk email & no HP (kunci skor EMQ & Enhanced Conversion tinggi)
- [x] Buat fungsi dispatcher `trackLead` (Meta Pixel, Meta CAPI, TikTok Pixel, Google Ads Enhanced Conversions, Zaraz, DataLayer)

---

### B. Tracking Tombol CTA & WhatsApp (Click Button = Lead)
Tracking dan Pixel **dikhususkan (scoped)** hanya aktif di 5 Landing Page ini sesuai permintaan:
- [x] **Meta Leads**:
  - `https://tentaklik.com/layanan/akun-meta-ads-whitelist`
- [x] **Google Leads**:
  - `https://tentaklik.com/layanan/akun-google-ads-whitelist`
- [x] **TikTok Leads**:
  - `https://tentaklik.com/layanan/akun-tiktok-ads-whitelist`
- [x] **Website Leads**:
  - `https://tentaklik.com/layanan/jasa-pembuatan-website-after-sales-terbaik/`
- [x] **Konsultasi Leads**:
  - `https://tentaklik.com/layanan/konsultasi-digital-marketing/`

---

### C. Tracking Form Submission (Submit Forms = Lead + High EMQ / Enhanced Conversions)
Tangkap data input user saat submit form, lakukan normalisasi & hash, lalu kirimkan:
- [x] Form Kontak (`src/pages/kontak.astro` & `src/pages/en/kontak.astro`)
  - Menangkap & hash Nama, Email, WhatsApp, Layanan
- [x] Form Landing Page (`src/components/sections/lp/LpShortForm.astro` & `WhitelistFullForm.astro`)
  - Menangkap & hash Nama, Email, WhatsApp
- [ ] Form Karir (`src/components/sections/karir/KarirApplyForm.astro`) *(Opsional)*
- [ ] Form Webinar (`src/components/sections/webinar/fb/WebinarPromoForm.astro`)

---

### D. Setup Tagging Platform (GTM / Direct Snippet)
- [x] Pasang Base Script di `src/layouts/BaseLayout.astro`:
  - Meta Pixel Code (`1341980327384883`)
  - TikTok Pixel Code (`DAOI0C3C77U88MSNV1I0`)
  - GTM Container Snippet (`GTM-N6FD2GVL`)
  - Google Ads Tag (`AW-304997094`)
- [x] Integrasikan payload parameter & CAPI:
  - `fbq('track', 'Lead', ...)` + Advanced Matching EMQ
  - Meta CAPI POST fetch dengan token CAPI
  - `ttq.identify(...)` + `ttq.track('SubmitForm', ...)`
  - `gtag('set', 'user_data', ...)` + `gtag('event', 'conversion', ...)`

---

## 4. Testing & Verifikasi (Quality Assurance)
- [ ] Cek dengan **Meta Pixel Helper**:
  - Event `Lead` aktif saat klik tombol / submit form.
  - Cek tab *Advanced Matching*: Email dan Phone terdeteksi (EMQ tinggi).
- [ ] Cek dengan **TikTok Pixel Helper**:
  - Event `SubmitForm` / `Lead` terpanggil dengan parameter service yang sesuai.
- [ ] Cek dengan **Google Tag Assistant**:
  - Conversion tag fired.
  - Status *Enhanced Conversions* muncul centang hijau / active.
- [ ] Validasi bahwa klik di halaman Meta menghasilkan "Meta Leads", halaman TikTok menghasilkan "TikTok Leads", dst.
