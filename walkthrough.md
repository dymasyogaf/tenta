# Walkthrough - Implementasi Tracking Conversion (Leads) & High EMQ

Dokumentasi lengkap implementasi conversion tracking di website Tentaklik untuk **Meta Ads**, **TikTok Ads**, dan **Google Ads** dengan target **High EMQ (Event Match Quality)** dan **Enhanced Conversions**.

---

## 1. Perubahan yang Dilakukan

### A. Core Tracking Helper (`src/lib/tracking.ts`)
Telah dibuat modul terpusat [`src/lib/tracking.ts`](file:///c:/Users/ThinkPad/tenta/src/lib/tracking.ts) yang mengelola:
- **Hashing SHA-256 Client-Side:** Fungsi `hashSha256()` menggunakan browser native `crypto.subtle.digest` untuk mengenkripsi email dan nomor telepon (syarat wajib skor EMQ Meta/TikTok 9-10/10 dan Google Enhanced Conversions).
- **Normalisasi Nomor Telepon:** Format standar internasional (E.164: `628xxxxxxxx`).
- **Deteksi Otomatis Kategori Layanan:** Mendeteksi `meta`, `tiktok`, `google`, `website`, atau `konsultasi` berdasarkan URL halaman aktif.
- **Multi-Platform Dispatcher:** Fungsi `trackLead()` sekaligus mengirim event ke:
  1. **Google Tag Manager / dataLayer:** `event: 'lead_conversion'` dengan user data.
  2. **Meta Pixel (`fbq`):** Inisialisasi Advanced Matching (`em`, `ph`, `fn`) + trigger event `'Lead'`.
  3. **Meta Conversions API (CAPI):** Request langsung ke Meta Graph API endpoint dengan Access Token yang diberikan.
  4. **TikTok Pixel (`ttq`):** Identifikasi `ttq.identify({ email, phone_number })` + trigger event `'SubmitForm'` & `'Contact'`.
  5. **Google Ads (`gtag`):** `gtag('set', 'user_data', ...)` + trigger `'conversion'`.

---

### B. Global Base Layout Integration (`src/layouts/BaseLayout.astro`)
Di file [`src/layouts/BaseLayout.astro`](file:///c:/Users/ThinkPad/tenta/src/layouts/BaseLayout.astro):
- **GTM:** Default container resmi `GTM-N6FD2GVL`.
- **Target LP Scoping:** Meta Pixel & TikTok Pixel **hanya dimuat (injected)** dan tracking tombol Lead **hanya berjalan** di 5 Landing Page ini:
  1. `https://tentaklik.com/layanan/akun-meta-ads-whitelist` → **`Meta leads`**
  2. `https://tentaklik.com/layanan/akun-google-ads-whitelist` → **`Google leads`**
  3. `https://tentaklik.com/layanan/akun-tiktok-ads-whitelist` → **`Tiktok leads`**
  4. `https://tentaklik.com/layanan/jasa-pembuatan-website-after-sales-terbaik/` → **`Website leads`**
  5. `https://tentaklik.com/layanan/konsultasi-digital-marketing/` → **`Konsultasi leads`**
- Halaman di luar 5 LP ini (seperti blog, karir, tentang, dll.) tidak akan memuat tag pixel iklan ataupun menembakkan konversi iklan sehingga data iklan tetap murni dan tidak tercampur (clean attribution).

---

### C. Form Submission Integration (High EMQ)
Data pengguna yang dimasukkan pada form di-hash dan dikirimkan saat submit:
1. **Halaman Kontak ID & EN** ([`src/pages/kontak.astro`](file:///c:/Users/ThinkPad/tenta/src/pages/kontak.astro) & [`src/pages/en/kontak.astro`](file:///c:/Users/ThinkPad/tenta/src/pages/en/kontak.astro)):
   - Menangkap Nama, Email, No HP/WA, dan Pilihan Layanan.
2. **Landing Page Short Form** ([`src/components/sections/lp/LpShortForm.astro`](file:///c:/Users/ThinkPad/tenta/src/components/sections/lp/LpShortForm.astro)):
   - Menangkap Nama & No WhatsApp, lalu menembakkan `tentaklikTrackLead`.
3. **Landing Page Whitelist Full Form** ([`src/components/sections/lp/WhitelistFullForm.astro`](file:///c:/Users/ThinkPad/tenta/src/components/sections/lp/WhitelistFullForm.astro)):
   - Menangkap Email & Data KTP, lalu menembakkan `tentaklikTrackLead`.

---

## 2. Cara Verifikasi & Testing di Browser

1. **Meta Pixel Helper (Extension Chrome):**
   - Buka website, klik ikon Meta Pixel Helper.
   - Klik tombol WhatsApp atau submit formulir kontak.
   - Pastikan muncul event **`Lead`** hijau, dan di bagian *Advanced Matching* terisi field hash email & phone.
2. **TikTok Pixel Helper (Extension Chrome):**
   - Pastikan pixel `DAOI0C3C77U88MSNV1I0` terdeteksi.
   - Saat submit form / klik tombol, event **`SubmitForm`** dan **`Contact`** akan terpanggil.
3. **Google Tag Assistant:**
   - Masukkan URL website ke [tagassistant.google.com](https://tagassistant.google.com).
   - Pastikan Container `GTM-N6FD2GVL` dan `AW-304997094` aktif.
   - Periksa status *Enhanced Conversions* terdeteksi dengan status valid.
