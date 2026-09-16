# TODO: Rencana Pembaruan Desktop Homepage & Komponen TentaKlik

Dokumen ini melacak daftar tugas, status, dan catatan teknis berdasarkan arahan pembaruan.
*Catatan: Sesuai instruksi, implementasi belum dieksekusi dan menunggu konfirmasi/perintah lebih lanjut.*

---

## Daftar Tugas (Checklist)

### 1. Header & Navigasi Desktop
- [x] **Posisi Navigasi ke Tengah**:
  - Pindahkan navigasi utama (`.nav-desktop`) agar berada di tengah secara visual (antara Logo di kiri dan tombol aksi di kanan).
  - File terkait: `src/components/layout/Header.astro`.
- [x] **Penyesuaian Menu Navigasi**:
  - Susunan menu di header: **Beranda**, **Tentang**, **Layanan** (dropdown: Sewa Akun, Website Development, Konsultasi Digital Marketing), dan **Partner**.
  - Menu **Karir** dipindahkan ke Footer di bawah kolom *Halaman*.
  - Hapus menu **FAQ** (`/#faq`) dan **Blog** (`https://mediawaktu.com`) dari navigasi header.
- [x] **Reposisi Tombol Ganti Bahasa**:
  - Pindahkan switcher bahasa (`nav-lang-wrap`) ke **sebelah kanan** tombol CTA header ("Hubungi Kami") dengan dropdown yang sejajar ke kanan.
  - File terkait: `src/components/layout/Header.astro`.
- [x] **Efek Hover Tombol Header**:
  - Ubah styling hover tombol header (`.nav-kontak-btn`) agar saat di-hover latar belakang berubah menjadi **putih** dan teks menjadi **hitam** (`#000000`) dengan border halus.
  - File terkait: `src/components/layout/Header.astro`.

---

### 2. Homepage: Konten & Section
- [x] **Gambar Layanan**:
  - Pindahkan 3 aset gambar dari root ke `public/assets/services/` (`tier-1-ad-account.avif`, `website-development.avif`, `konsultasi-digital-marketing.avif`).
  - Perbarui path gambar di `src/components/sections/ServicesGrid.astro`.
- [x] **Testimoni / Apa Kata Klien**:
  - Ganti judul section testimoni dari *"Apa kata klien"* menjadi *"Apa kata mereka?"*.
  - File terkait: `src/i18n/ui.ts` (`testi.title`).
- [x] **Form / Section Booking Konsultasi**:
  - Hapus kata *"konsultasi"* pada kalimat *"Pilih layanan konsultasi Anda:"* menjadi *"Pilih layanan Anda:"*.
  - File terkait: `src/components/sections/ConsultationBooking.astro`, `src/pages/v2.astro`.
- [x] **Interaktivitas & Perataan Tombol Kartu Layanan**:
  - Seluruh area kartu layanan (card) dapat diklik langsung mengarahkan user ke landing page masing-masing layanan dengan efek hover interaktif.
  - Posisi tombol "Selengkapnya" disamaratakan sejajar secara horizontal di semua kartu dengan `align-items: stretch`, `min-height: 68px` pada deskripsi, dan `margin-top: auto`.
  - File terkait: `src/components/sections/ServicesGrid.astro`.

---

### 3. Logo Partner & Penghapusan Tulisan "Official Partner"
- [x] **Logo Partner Homepage (Dihapus sesuai permintaan user)**:
  - Section marquee logo partner di homepage telah dihapus dari `src/pages/index.astro` dan `src/pages/en/index.astro`.
- [x] **Relokasi & Pengecilan Logo Partner di Footer**:
  - Logo partner (Google Partner, Meta Business Partner, TikTok Partner) diperkecil dan diposisikan tepat di bawah kolom Kontak pada footer. Baris partner terpisah di bagian bawah telah dihilangkan.
  - File terkait: `src/components/layout/Footer.astro`.

---

### 4. Landing Page & Footer Sewa Akun Iklan
- [x] **Konsolidasi Landing Page Sewa Akun**:
  - Menjadikan satu landing page utama untuk sewa akun (`/layanan/sewa-akun` dan `/en/layanan/sewa-akun`) yang memuat pilihan Meta Ads, Google Ads, dan TikTok Ads.
  - Kartu platform whitelist interaktif dengan anchor langsung (`#meta`, `#google`, `#tiktok`), badge mitra, benefit, dan direct CTA ke paket sewa.
  - Optimalisasi backlink & struktur SEO menyeluruh (JSON-LD Service Schema, metadata, keywords Meta, Google & TikTok).
  - File terkait: `src/pages/layanan/sewa-akun.astro`, `src/pages/en/layanan/sewa-akun.astro`, `src/data/sewa-akun.ts`.
- [x] **Penambahan TikTok Whitelist di Footer**:
  - Menambahkan item *"TikTok Whitelist"* di bawah submenu *Sewa Akun* pada Footer (`Footer.astro`).
  - Mengarahkan semua submenu whitelist footer langsung ke anchor kartu platform di landing page terpusat (`/layanan/sewa-akun#meta`, `#google`, `#tiktok`) untuk mengonsolidasikan backlink dan authority SEO.
  - File terkait: `src/components/layout/Footer.astro`, `src/i18n/ui.ts`.

### 5. Audit Kualitas, Pembersihan Dead Code, dan Optimasi
- [x] **Audit Duplikasi & Dead Code**:
  - Pemeriksaan duplikasi key kamus i18n (`src/i18n/ui.ts`): 0 duplicate key, 100% parity ID dan EN.
  - Pembersihan 36 file komponen mati/orphaned yang tidak pernah diimpor (`src/components/redesign/*`, `src/components/ui/*`, komponen webinar lama, `MobileDrawer.astro`, `Pin.astro`, dll).
  - Pembersihan 38 file aset gambar mockup tidak terpakai di `public/assets/redesign/` (menghemat ~1.8 MB).
  - Penghapusan folder dan script temporary (`scratch/test-gas.js`).
- [x] **Validasi & Verifikasi Build**:
  - `npx astro check`: 117 file lolos tanpa error, warning, ataupun hint.
  - `npm run build`: Kompilasi Cloudflare adapter dan verifikasi script harga multi-mata uang USD lolos 100%.

---

## Log Pertanyaan & Konfirmasi
*(Semua pertanyaan dan arahan telah terakomodasi dan terselesaikan dalam implementasi).*
