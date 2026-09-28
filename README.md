# Tentaklik.com

Official website and high-performance advertising landing pages for **Tentaklik** — Digital Marketing Specialist & Ad Whitelist Accounts.

Built with **Astro 6**, **Tailwind CSS v4**, **TypeScript**, and deployed on **Cloudflare Pages**.

---

## 📖 Complete Handover Guidebook

Untuk panduan lengkap serah terima proyek, arsitektur sistem, struktur data, integrasi Google Apps Script, dan maintenance untuk tim baru:

👉 **[Baca Panduan Handover Lengkap (docs/HANDOVER_GUIDE.md)](./docs/HANDOVER_GUIDE.md)**

---

## 🚀 Quick Start

### 1. Prasyarat
- Node.js 20+ atau Bun
- Git

### 2. Setup & Jalankan Lokal

```bash
# Clone & masuk ke direktori proyek
cd tenta

# Setup Environment Variables
cp .env.example .env

# Install dependencies (Bun atau npm)
bun install
# ATAU
npm install

# Jalankan dev server (http://localhost:4321)
bun run dev
# ATAU
npm run dev
```

### 3. Build & Typecheck

```bash
# Type check TypeScript & Astro diagnostics
npm run check

# Full production build (check + build + currency validation)
npm run build

# Preview build lokal via Cloudflare Wrangler
npm run preview
```

---

## 🔑 Environment Variables

Pastikan file `.env` telah dikonfigurasi:

```env
PUBLIC_SITE_URL=https://tentaklik.com
PUBLIC_WA_NUMBER=6282219987770
PUBLIC_GA_ID=G-7TZENR9L4G
```

---

## 📁 Struktur Direktori Utama

- `src/pages/` — Rute halaman website (Bahasa Indonesia di root `/`, Bahasa Inggris di `/en/`).
- `src/components/` — Komponen UI modular (icons, layout, sections, lp, services, karir).
- `src/content/` — Astro Content Layer (Markdown untuk layanan & case studies, JSON untuk jobs, FAQs, testimoni).
- `src/data/` — Konfigurasi data statis (paket sewa akun `sewa-akun.ts`, landing page `whitelist-lp.ts`, info perusahaan `site.ts`).
- `src/middleware.ts` — Cloudflare Edge middleware untuk deteksi bahasa via Geo-IP (`cf-ipcountry`).
- `docs/apps-script/` — Kode & panduan setup Google Apps Script untuk lead capture form ke Google Sheets.
- `scripts/` — Skrip validasi mata uang (`check-en-currency.mjs`) & optimasi gambar (`optimize-images.mjs`).

---

## ☁️ Deployment

Website dihosting di **Cloudflare Pages** dengan adapter Cloudflare SSR.
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Deploy Command**: `npm run deploy`

Untuk instruksi detail pengelolaan konten, form CRM, dan integrasi pixel, silakan rujuk ke **[docs/HANDOVER_GUIDE.md](./docs/HANDOVER_GUIDE.md)**.
