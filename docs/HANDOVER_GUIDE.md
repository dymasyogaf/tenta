# 📘 Handover Guidebook — Tentaklik.com

Dokumen ini adalah panduan lengkap serah terima (handover) proyek **Tentaklik.com** untuk tim pengembang, operasional, dan konten yang baru.

---

## 📑 Daftar Isi

1. [Ringkasan Proyek & Tech Stack](#1-ringkasan-proyek--tech-stack)
2. [Struktur Direktori & File Proyek](#2-struktur-direktori--file-proyek)
3. [Setup Lingkungan Lokal & Workflow](#3-setup-lingkungan-lokal--workflow)
4. [Sistem Multi-Bahasa (i18n) & Geo-IP Edge Middleware](#4-sistem-multi-bahasa-i18n--geo-ip-edge-middleware)
5. [Arsitektur Halaman & Routing](#5-arsitektur-halaman--routing)
6. [Komponen & Desain UI](#6-komponen--desain-ui)
7. [Manajemen Konten & Data (Content Layer)](#7-manajemen-konten--data-content-layer)
8. [Formulir, CRM, & Google Apps Script](#8-formulir-crm--google-apps-script)
9. [Tracking, Analytics & Pixel](#9-tracking-analytics--pixel)
10. [Panduan Pemeliharaan & Update Rutin](#10-panduan-pemeliharaan--update-rutin)
11. [Deployment & Hosting (Cloudflare Pages)](#11-deployment--hosting-cloudflare-pages)
12. [Ringkasan File Cleanup & Pembersihan](#12-ringkasan-file-cleanup--pembersihan)

---

## 1. Ringkasan Proyek & Tech Stack

**Tentaklik** adalah website korporat & landing page performa tinggi untuk agensi digital marketing yang menyediakan:
- Layanan sewa akun whitelist ads (Meta Ads, Google Ads, TikTok Ads) tanpa limit & bebas PPN/VAT markup.
- Jasa pembuatan website & landing page konversi tinggi dengan after-sales support.
- Konsultasi digital marketing strategis.
- Event webinar & training periklanan digital.

### 🛠️ Tech Stack Utama

| Komponen | Teknologi | Keterangan |
| :--- | :--- | :--- |
| **Framework** | [Astro 6](https://astro.build/) | Static Site Generation (SSG) + selective SSR (Cloudflare adapter) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Tokens | `@tailwindcss/vite` plugin, design tokens (`src/styles/tokens.css`) |
| **Bahasa** | TypeScript | Strict type checking (`astro check`) |
| **Runtime / Package Manager** | Bun / Node.js 20+ | Mendukung `bun` atau `npm` / `pnpm` |
| **Hosting & CDN** | [Cloudflare Pages](https://pages.cloudflare.com/) / Workers | Hybrid static + SSR edge middleware (`@astrojs/cloudflare`) |
| **Fonts** | Fontsource | Plus Jakarta Sans & Inter variable fonts |
| **SEO & Sitemap** | `@astrojs/sitemap` + Schema.org JSON-LD | Auto-generated XML sitemaps, OpenGraph, Twitter Cards, Rich Snippets |
| **Integrasi Leads** | Google Apps Script Web App | Endpoint pengiriman leads dari form ke Google Sheets |

---

## 2. Struktur Direktori & File Proyek

```text
tenta/
├── dist/                      # Output build (dihasilkan saat build)
├── docs/                      # Dokumentasi & script integrasi
│   ├── HANDOVER_GUIDE.md      # Panduan serah terima (handover) lengkap proyek
│   └── apps-script/           # Script Google Apps Script (Leads CRM & Whitelist Form)
├── public/                    # Aset statis publik (favicon, manifest, robots, gambar)
│   ├── assets/                # Gambar layanan, galeri, partner, team, dsb.
│   │   ├── brand/
│   │   ├── galeri/
│   │   ├── google/
│   │   ├── icons/
│   │   ├── meta/
│   │   ├── partner/
│   │   ├── services/
│   │   ├── team/
│   │   ├── testimonials/
│   │   ├── tiktok/
│   │   └── why-us/
│   ├── _headers               # Header HTTP untuk Cloudflare/Netlify (Security & Cache)
│   ├── _redirects             # Fallback rules 301 redirects
│   ├── manifest.webmanifest   # PWA manifest
│   └── robots.txt             # Aturan crawling search engine
├── scripts/                   # Script build & validasi
│   ├── apps-script.js         # Master setup script Apps Script
│   ├── check-en-currency.mjs  # Validasi konsistensi mata uang IDR/USD pada build
│   └── optimize-images.mjs    # Utility kompresi & resize gambar menggunakan sharp
├── src/
│   ├── assets/                # Aset gambar internal yang dioptimasi via Astro Assets
│   ├── components/            # Komponen modular UI
│   │   ├── brand/             # Komponen logo
│   │   ├── icons/             # Icon SVG modular (WhatsApp, Arrow, Phone, dll.)
│   │   ├── layout/            # Header, Footer, LpHeader, StickyWA
│   │   └── sections/          # Section halaman (Hero, WhyUs, ServicesGrid, Karir, LP)
│   │       ├── karir/         # Section halaman karir
│   │       ├── lp/            # Section reusable landing page Whitelist
│   │       └── service/       # Section halaman detail layanan
│   ├── content/               # Content Layer (Markdown & JSON collections)
│   │   ├── case-studies/      # Case studies (emas-antam, jogja-ride, unnisula)
│   │   ├── services/          # Detail layanan (meta-ads, google-ads, website, konsul)
│   │   ├── faqs.json          # FAQ global
│   │   ├── jobs.json          # Data lowongan kerja
│   │   └── testimonials.json  # Data testimoni
│   ├── data/                  # Konfigurasi data statis & bilingual
│   │   ├── disclaimer-sections.ts
│   │   ├── partners.ts
│   │   ├── sewa-akun.ts       # Paket harga & tier sewa akun (IDR & USD)
│   │   ├── site.ts            # Metadata situs, nomor WA, alamat, media sosial
│   │   ├── terms-sections.ts
│   │   ├── webinar-gads.ts
│   │   ├── webinar-meta.ts
│   │   └── whitelist-lp.ts    # Data landing page whitelist ads (ID & EN)
│   ├── i18n/                  # Internasionalisasi (Bilingual ID / EN)
│   │   ├── ui.ts              # Kamus teks UI
│   │   └── utils.ts           # Helper i18n (getLang, useT, stripLocale)
│   ├── layouts/               # Layout wrapper
│   │   ├── BaseLayout.astro   # Master layout (SEO, GTM, Meta Pixel, Header, Footer)
│   │   └── ServiceLayout.astro# Layout template untuk detail layanan
│   ├── lib/                   # Utility fungsi
│   │   ├── reveal.ts          # Intersection observer untuk scroll animasi
│   │   ├── seo.ts             # Generator Schema.org JSON-LD & meta tag SEO
│   │   ├── toc-highlight.ts   # Scroll spy untuk table of contents
│   │   └── tracking.ts        # Helper event analytics & direct WhatsApp URL
│   ├── pages/                 # Routing file-based Astro
│   │   ├── en/                # Route versi Bahasa Inggris (/en/...)
│   │   ├── layanan/           # Detail layanan & landing page whitelist
│   │   ├── partner/           # Portofolio & studi kasus klien
│   │   ├── index.astro        # Beranda (Indonesia)
│   │   ├── kontak.astro       # Halaman Kontak & Form Konsultasi
│   │   ├── tentang.astro      # Tentang Kami & Galeri Kantor
│   │   ├── karir.astro        # Lowongan Karir
│   │   ├── ketentuan.astro    # Syarat & Ketentuan Layanan
│   │   ├── disclaimer.astro   # Disclaimer Resmi
│   │   ├── 404.astro          # Custom 404 Error Page
│   │   └── ...                # Halaman khusus ad pricing & USD
│   ├── styles/                # CSS Stylesheets
│   │   ├── components.css     # CSS class utility komponen
│   │   ├── global.css         # Reset & global styles
│   │   ├── tokens.css         # Variabel warna tema, border-radius, shadows
│   │   └── webinar-gads.css   # Style khusus halaman webinar Google Ads
│   ├── content.config.ts      # Schema Zod untuk Astro Content Collections
│   └── middleware.ts          # Cloudflare edge middleware (Geo-IP locale detection)
├── .env.example               # Template environment variables
├── astro.config.mjs           # Konfigurasi Astro (i18n, redirects, Cloudflare adapter)
├── package.json               # Dependensi & NPM scripts
├── tsconfig.json              # Konfigurasi TypeScript & path aliases
└── wrangler.jsonc             # Konfigurasi Cloudflare Workers / Pages deploy
```

---

## 3. Setup Lingkungan Lokal & Workflow

### 📋 Prasyarat
- **Node.js** v20.x atau lebih baru, ATAU **Bun** (direkomendasikan).
- **Git**.

### 🚀 Instalasi & Menjalankan Dev Server

```bash
# 1. Clone repository
git clone <URL_REPO>
cd tenta

# 2. Salin environment variables
cp .env.example .env

# 3. Install dependencies (bisa pakai bun atau npm)
bun install
# ATAU
npm install

# 4. Jalankan development server
bun run dev
# Server akan aktif di http://localhost:4321
```

### 🔑 Environment Variables (`.env`)

| Variabel | Deskripsi | Default / Contoh |
| :--- | :--- | :--- |
| `PUBLIC_SITE_URL` | Canonical URL domain website | `https://tentaklik.com` |
| `PUBLIC_WA_NUMBER` | Nomor WhatsApp resmi untuk CTA (format internasional tanpa `+`) | `6282219987770` |
| `PUBLIC_GA_ID` | ID Google Analytics 4 | `G-7TZENR9L4G` |

### 🔍 Skrip yang Tersedia (`package.json`)

```bash
# Menjalankan development server
npm run dev

# Pemeriksaan tipe data TypeScript & diagnostik Astro
npm run check

# Build produksi lengkap (melakukan check + build + validasi mata uang EN USD)
npm run build

# Preview hasil build secara lokal dengan Cloudflare emulator (Wrangler)
npm run preview

# Deploy langsung ke Cloudflare Workers/Pages via Wrangler
npm run deploy
```

> [!IMPORTANT]
> Skrip `npm run build` menjalankan `astro check`, `astro build`, dan script `node scripts/check-en-currency.mjs --require-build`. Jika ada ketidaksesuaian format harga USD pada halaman EN, build akan otomatis gagal untuk mencegah kesalahan harga tayang ke publik.

---

## 4. Sistem Multi-Bahasa (i18n) & Geo-IP Edge Middleware

### 🌐 Struktur Routing Bahasa
1. **Bahasa Indonesia (ID)**: Berada di root path (contoh: `/`, `/layanan/sewa-akun-whitelist`, `/kontak`).
2. **Bahasa Inggris (EN)**: Berada di subpath `/en/` (contoh: `/en`, `/en/layanan/sewa-akun-whitelist`, `/en/kontak`).

### 🛡️ Cloudflare Edge Middleware (`src/middleware.ts`)
Pada landing page whitelist on-demand (`export const prerender = false;`):
1. **Pendeteksian Geo-IP Otomatis**: Membaca header `cf-ipcountry` dari Cloudflare:
   - Pengunjung dari **Indonesia** (`ID`): diarahkan ke halaman Bahasa Indonesia (root).
   - Pengunjung dari **Luar Negeri**: diarahkan secara otomatis (HTTP 302) ke halaman Bahasa Inggris (`/en/...`).
2. **Cookie Preferensi**: Saat pengunjung berpindah bahasa manual, pilihan disimpan pada cookie `pref_lang` (berlaku 1 tahun). Middleware menghormati cookie ini tanpa melakukan redirect paksa kembali.

### 📝 Menggunakan Kamus Teks (`src/i18n/ui.ts`)
Komponen dapat mengambil teks terjemahan melalui helper:
```astro
---
import { getLang, useT } from '@i18n/utils';

const lang = getLang(Astro.currentLocale); // 'id' | 'en'
const t = useT(lang);
---
<h2>{t('nav.layanan')}</h2>
```

---

## 5. Arsitektur Halaman & Routing

### 🗺️ Peta Rute Halaman

| Rute (ID) | Rute (EN) | Deskripsi Halaman |
| :--- | :--- | :--- |
| `/` | `/en` | Beranda resmi Tentaklik |
| `/layanan/sewa-akun-whitelist` | `/en/layanan/sewa-akun-whitelist` | Landing page komprehensif sewa akun whitelist (Meta, Google, TikTok) |
| `/layanan/akun-meta-ads-whitelist` | `/en/layanan/akun-meta-ads-whitelist` | Dedicated landing page akun whitelist Meta Ads (Edge SSR Geo-IP) |
| `/layanan/akun-google-ads-whitelist` | `/en/layanan/akun-google-ads-whitelist` | Dedicated landing page akun whitelist Google Ads (Edge SSR Geo-IP) |
| `/layanan/akun-tiktok-ads-whitelist` | `/en/layanan/akun-tiktok-ads-whitelist` | Dedicated landing page akun whitelist TikTok Ads (Edge SSR Geo-IP) |
| `/layanan/jasa-pembuatan-website-after-sales-terbaik` | `/en/layanan/jasa-pembuatan-website-after-sales-terbaik` | Landing page jasa pembuatan website & after-sales |
| `/layanan/konsultasi-digital-marketing` | `/en/layanan/konsultasi-digital-marketing` | Halaman detail layanan konsultasi digital marketing |
| `/layanan/[slug]` | `/en/layanan/[slug]` | Dynamic service pages berbasis Content Layer |
| `/meta-whitelist-pricing` | `/en/meta-whitelist-pricing` | Halaman Meta Whitelist dengan tabel pricing transparan |
| `/google-whitelist-pricing` | `/en/google-whitelist-pricing` | Halaman Google Whitelist dengan tabel pricing transparan |
| `/meta-whitelist-usd` | `/en/meta-whitelist-usd` | LP khusus Meta Whitelist dengan harga USD (iklan internasional) |
| `/google-whitelist-usd` | `/en/google-whitelist-usd` | LP khusus Google Whitelist dengan harga USD (iklan internasional) |
| `/form-meta-whitelist` | `/en/form-meta-whitelist` | Full-form pengajuan akun whitelist Meta Ads |
| `/form-google-whitelist` | `/en/form-google-whitelist` | Full-form pengajuan akun whitelist Google Ads |
| `/partner` | `/en/partner` | Galeri portofolio & klien partner |
| `/partner/[slug]` | `/en/partner/[slug]` | Detail studi kasus klien (Emas Antam, Jogja Ride, Unnisula) |
| `/tentang` | `/en/tentang` | Profil perusahaan, tim, visi, dan galeri kantor |
| `/karir` | `/en/karir` | Info lowongan kerja aktif & form lamaran |
| `/kontak` | `/en/kontak` | Halaman kontak resmi & form inquiry |
| `/ketentuan` | `/en/ketentuan` | Syarat & Ketentuan Layanan (Terms of Service) |
| `/disclaimer` | `/en/disclaimer` | Pernyataan Disclaimer & Kepatuhan Platform Ads |
| `/webinar-meta` | `/en/webinar-meta` | Landing page pendaftaran Webinar Meta Ads |
| `/webinar-gads` | `/en/webinar-gads` | Landing page pendaftaran Webinar Google Ads |
| `/404` | `/en/404` | Halaman error 404 kustom |

### 🔀 Konfigurasi Redirect Terpusat (`astro.config.mjs`)
Semua legacy URL / shortlink iklan lama dialihkan secara permanen (HTTP 301) melalui konfigurasi `redirects` di `astro.config.mjs`:
- `/whitelist/metaads` &rarr; `/layanan/akun-meta-ads-whitelist`
- `/meta-whitelist` &rarr; `/layanan/akun-meta-ads-whitelist`
- `/whitelist/gads` &rarr; `/layanan/akun-google-ads-whitelist`
- `/google-whitelist` &rarr; `/layanan/akun-google-ads-whitelist`
- `/whitelist/tiktokads` &rarr; `/layanan/akun-tiktok-ads-whitelist`
- `/layanan/sewa-akun` &rarr; `/layanan/sewa-akun-whitelist`
- `/layanan/website` &rarr; `/layanan/jasa-pembuatan-website-after-sales-terbaik`
- `/layanan/konsultasi` &rarr; `/layanan/konsultasi-digital-marketing`

---

## 6. Komponen & Desain UI

### 🎨 Sistem Desain & Token Warna (`src/styles/tokens.css`)
- **Brand Primary**: Oranye Tentaklik (`--orange-500: #FF7A1A`, `--orange-600: #FF6600`, `--orange-700: #CC5200`).
- **Neutrals / Ink**: Skala gelap `--ink-900` (`#0B1527`), `--ink-700`, `--ink-500`, `--ink-100`.
- **Backgrounds**: `--bg-light` (`#FFFFFF`), `--bg-warm` (`#FFFBF8`), `--bg-dark` (`#070D18`).
- **Typography**: Plus Jakarta Sans (Headings) & Inter (Body).

### 🧩 Komponen Penting
1. **`BaseLayout.astro`**: Layout induk. Menangani meta SEO, OpenGraph, JSON-LD schema, canonical, script GTM, Meta Pixel, floating WhatsApp, Header, dan Footer.
2. **`Header.astro`**: Navigasi utama dengan menu dropdown layanan, switch bahasa ID/EN, dan mobile drawer menu.
3. **`LpHeader.astro`**: Header minimalis untuk landing page periklanan agar meminimalisir bounce rate.
4. **`LpShortForm.astro`**: Form singkat penangkapan lead pada LP Whitelist yang langsung tersambung ke Google Apps Script & WhatsApp.
5. **`WhitelistFullForm.astro`**: Form pendaftaran lengkap akun whitelist dengan field website/page, budget spending, dan platform.
6. **`IndustriesGrid.astro`**: Grid industri yang didukung akun whitelist dengan kartu interaktif.
7. **`StickyWA.astro`**: Tombol melayang WhatsApp dengan tracking event otomatis.

---

## 7. Manajemen Konten & Data (Content Layer)

Astro 6 menggunakan Content Layer API (`src/content.config.ts`) dengan validasi skema Zod.

### 📁 Koleksi Konten (`src/content/`)

1. **`services/` (`*.md`)**: Konten layanan dinamis.
   - Frontmatter berisi: `title`, `desc`, `features`, `plans`, `process`, `faqs`, `seo`.
   - Mendukung konten bilingual dengan field `*_en` (contoh: `title_en`, `desc_en`, `plans_en`).
2. **`case-studies/` (`*.md`)**: Studi kasus portofolio klien.
   - Frontmatter berisi: `brand`, `metric`, `desc`, `tags`, `industry`, `period`, `publishDate`.
3. **`testimonials.json`**: Data testimoni klien (rating bintang, nama, posisi, review ID & EN).
4. **`jobs.json`**: Data lowongan kerja untuk halaman `/karir` (posisi, tipe, lokasi, kualifikasi).
5. **`faqs.json`**: Pertanyaan umum global.

### 📊 Data Statis (`src/data/`)

1. **`sewa-akun.ts`**:
   - `SEWA_PLANS`: Paket biaya top-up akun whitelist (Starter 5%, Growth 4.5%, Scale 3.5%).
   - `SEWA_PLANS_EN`: Paket versi USD untuk pasar global ($0 - $10,000, dst.).
   - `SEWA_RENTAL` & `SEWA_RENTAL_EN`: Biaya sewa bulanan ($31 / Rp150.000, dst.).
2. **`whitelist-lp.ts`**:
   - `META_LP`, `GOOGLE_LP`, `TIKTOK_LP`: Teks hero, poin keunggulan, perbandingan fitur, foto kunjungan kantor HQ, dan SEO landing page.
3. **`site.ts`**:
   - URL website, nomor WhatsApp (`site.waNumber`), alamat kantor, link media sosial (Instagram, TikTok, YouTube, Telegram).

---

## 8. Formulir, CRM, & Google Apps Script

Semua formulir di website (form kontak, shortform LP whitelist, fullform whitelist, dan lamaran karir) mengalirkan data secara otomatis ke Google Sheets tanpa memerlukan server backend terpisah.

### 📄 File Skrip Terkait di `docs/apps-script/`:
- **`whitelist-shortform.gs`**: Handler untuk form lead cepat di landing page.
- **`whitelist-fullform.gs`**: Handler untuk pendaftaran detail akun whitelist.
- **`SETUP.md`**: Panduan langkah-demi-langkah setup Google Spreadsheet & deployment Apps Script.

### ⚙️ Cara Menghubungkan Form ke Google Sheet Baru:
1. Buat Spreadsheet baru di Google Drive.
2. Buka **Extensions → Apps Script**, lalu salin isi file `.gs` yang sesuai dari `docs/apps-script/`.
3. Jalankan fungsi `doSetup()` sekali untuk membuat header dan warna kolom otomatis.
4. Klik **Deploy → New deployment → Web app** (Access: *Anyone*).
5. Salin URL `/exec` yang dihasilkan dan pasang ke konstanta `SCRIPT_URL` pada komponen form terkait (misal di `LpShortForm.astro` atau `kontak.astro`).

---

## 9. Tracking, Analytics & Pixel

Sistem tracking dikonfigurasi pada `BaseLayout.astro` dan helper `src/lib/tracking.ts`:

1. **Google Tag Manager (GTM)**:
   - ID Default: `GTM-N6FD2GVL` (dapat di-override per halaman lewat prop `gtmId`).
   - GTM untuk Webinar: `GTM-T2FDL7NM`.
2. **Meta Pixel**:
   - ID Default: `1341980327384883`.
   - Event standar otomatis: `PageView`, `Lead` (saat form disubmit atau tombol WhatsApp diklik).
3. **WhatsApp Tracking**:
   - Fungsi `waLink(pesan, source)` di `src/data/site.ts` membuat URL `https://wa.me/...` dengan pesan pembuka otomatis sesuai konteks tombol/paket yang diklik.

---

## 10. Panduan Pemeliharaan & Update Rutin

### ✍️ Cara Menambah / Mengubah Harga Sewa Akun
1. Buka file `src/data/sewa-akun.ts`.
2. Edit array `SEWA_PLANS` (untuk IDR) dan `SEWA_PLANS_EN` (untuk USD).
3. Jalankan `npm run build` untuk memverifikasi konsistensi harga melalui script `check-en-currency.mjs`.

### 🏢 Cara Menambah Partner / Studi Kasus Baru
1. Buat file markdown baru di `src/content/case-studies/nama-klien.md`.
2. Masukkan frontmatter sesuai format yang ada (lihat contoh di `emas-antam.md`).
3. Tambahkan entri ringkas di `src/data/partners.ts` jika ingin ditampilkan di logo showcase beranda.

### 💼 Cara Menambah Lowongan Kerja
1. Buka file `src/content/jobs.json`.
2. Tambahkan objek lowongan baru dengan format `id`, `slug`, `title`, `type`, `location`, `requirements`, dsb.
3. Halaman `/karir` akan otomatis me-render lowongan baru tersebut.

### 📞 Cara Mengubah Nomor WhatsApp & Kontak Kantor
1. Buka `.env` dan ubah `PUBLIC_WA_NUMBER=628...`.
2. Buka `src/data/site.ts` untuk mengubah alamat fisik kantor, email, atau tautan akun sosial media.

### 🖼️ Cara Optimasi Gambar Baru
Jika menambahkan aset gambar berukuran besar ke `public/assets/`, jalankan:
```bash
node scripts/optimize-images.mjs
```
Script ini akan otomatis mengonversi gambar menjadi format WebP/JPEG terkompresi.

---

## 11. Deployment & Hosting (Cloudflare Pages)

Website dikonfigurasi untuk deployment di **Cloudflare Pages** dengan arsitektur SSR Adapter (`@astrojs/cloudflare`).

### ⚙️ Konfigurasi Build di Dashboard Cloudflare Pages:
- **Framework Preset**: `None` / `Astro`
- **Build Command**: `npm run build` (atau `bun run build`)
- **Build Output Directory**: `dist`
- **Environment Variables**:
  - `PUBLIC_SITE_URL`: `https://tentaklik.com`
  - `PUBLIC_WA_NUMBER`: `6282219987770`
  - `PUBLIC_GA_ID`: `G-7TZENR9L4G`
  - `NODE_VERSION`: `20`

### 🚀 Deploy via CLI (Wrangler)
```bash
# Login Cloudflare
npx wrangler login

# Deploy langsung
npm run deploy
```

---

## 12. Ringkasan File Cleanup & Pembersihan

Pada proses persiapan handover ini, pembersihan repository telah dilakukan secara menyeluruh:

1. 🗑️ **Menghapus Mockup / Halaman Uji Coba Usang**:
   - Dihapus: `src/pages/v2.astro` (halaman clone uji coba lama yang tidak dipakai).
2. 🗂️ **Membersihkan Aset Berat yang Tidak Terpakai**:
   - Dihapus: Direktori `public/assets/v2/` (~20 MB berisi video `.webm`, `.mp4`, GIF animasi lama).
   - Dimigrasikan: 8 icon SVG/PNG aktif yang dipakai oleh `WhyUs.astro` dan `ConsultationBooking.astro` ke lokasi bersih `public/assets/why-us/` dan `public/assets/icons/`.
3. 🧹 **Menghapus Komponen Mati (Dead Components)**:
   - Dihapus: `src/components/sections/FinalCTA.astro` (sudah digantikan oleh `CTABanner.astro` & `ConsultationBooking.astro`).
   - Dihapus: `src/components/sections/lp/LpProblem.astro` (sudah digantikan oleh `LpWhyPlatform.astro` & `LpComparison.astro`).
   - Dihapus: `src/components/sections/webinar/fb/WebinarPromoForm.astro` (unused draft form).
4. 🔀 **Menyederhanakan File Redirect Stub**:
   - Dihapus: File redirect stub redundan (`website-v2.astro`, `website.astro`, `konsultasi.astro`, `whitelist/gads.astro`, `whitelist/tiktokads.astro` baik di root maupun `/en/`).
   - Disatukan: Semua aturan redirect 301 kini tersentralisasi di `astro.config.mjs`.
5. 🛠️ **Perbaikan TypeScript & Diagnostic Check**:
   - Diperbaiki parameter tidak terpakai pada `src/layouts/BaseLayout.astro`.
   - Hasil `npm run check` & `npm run build`: **0 Errors, 0 Warnings, 0 Hints**.

---

*Dokumen handover ini disusun agar tim baru dapat langsung melanjutkan pengembangan dan pemeliharaan website Tentaklik dengan lancar dan terstruktur.*
