// src/data/whitelist-lp.ts
// Konten landing page: /layanan/akun-meta-ads-whitelist & /whitelist/gads (+ /en/*).
// Tanpa harga, tanpa WA — CTA mengarah ke /layanan/sewa-akun.
// Bilingual: akses via META_LP[lang] / GOOGLE_LP[lang] / INDUSTRIES_LP[lang].
import type { Industry } from '@data/sewa-akun';
import type { Lang } from '@i18n/utils';

export interface WhyItem { iconId: 'stable' | 'comfortable' | 'scale' | 'tax' | 'priority' | 'expert' | 'protection'; title: string; desc: string }
export interface LpProblem { iconId: string; title: string; desc: string }
export interface LpPhoto { src: string; alt: string; portrait?: boolean }
export interface LpTestimonial { stars: number; text: string; name: string; role: string; initials: string; avatar: string; }

export interface BaseLpData {
  platform: 'meta' | 'google' | 'tiktok';
  hero: { eyebrow: string; title: string; titleAccent: string; desc: string };
  photoHeading: string;
  photoSub: string;
  photos: LpPhoto[];
  testimonials: LpTestimonial[];
  cta: { title: string; desc: string; btn: string };
  seo: { title: string; description: string };
  keywords: string[];
}

export interface MetaLpData extends BaseLpData {
  platform: 'meta';
  problemHeading: string;
  problemSub: string;
  problems: LpProblem[];
  benefitHeading: string;
  benefits: string[];
  whyHeading: string;
  whySub: string;
  whyItems: WhyItem[];
}

export interface GoogleLpData extends BaseLpData {
  platform: 'google';
  problemHeading: string;
  problemSub: string;
  problems: LpProblem[];
  benefitHeading: string;
  benefits: string[];
  whyHeading: string;
  whySub: string;
  whyItems: WhyItem[];
}

export interface TikTokLpData extends BaseLpData {
  platform: 'tiktok';
  problemHeading: string;
  problemSub: string;
  problems: LpProblem[];
  benefitHeading: string;
  benefits: string[];
  whyHeading: string;
  whySub: string;
  whyItems: WhyItem[];
}

export type LpData = MetaLpData | GoogleLpData | TikTokLpData;

// Kategori industri khusus 2 LP whitelist (beda dari sewa-akun). Bilingual.
export const INDUSTRIES_LP: Record<Lang, Industry[]> = {
  id: [
    { label: 'UMKM',                 iconId: 'store', tint: '#FFF1E6' },
    { label: 'Produk Kecantikan',    iconId: 'sparkles', tint: '#F3E8FF' },
    { label: 'Travel',               iconId: 'plane', tint: '#E8F0FE' },
    { label: 'Konsultan Pendidikan', iconId: 'graduation-cap', tint: '#E7F6EC' },
    { label: 'Fashion',              iconId: 'shirt', tint: '#FCE7F3' },
    { label: 'FnB / Kuliner',        iconId: 'utensils', tint: '#E6F4F7' },
  ],
  en: [
    { label: 'SMEs',                 iconId: 'store', tint: '#FFF1E6' },
    { label: 'Beauty Products',      iconId: 'sparkles', tint: '#F3E8FF' },
    { label: 'Travel',               iconId: 'plane', tint: '#E8F0FE' },
    { label: 'Education Consultant', iconId: 'graduation-cap', tint: '#E7F6EC' },
    { label: 'Fashion',              iconId: 'shirt', tint: '#FCE7F3' },
    { label: 'F&B / Culinary',       iconId: 'utensils', tint: '#E6F4F7' },
  ],
};

export const INDUSTRY_LP_HEADING: Record<Lang, { title: string; sub: string }> = {
  id: {
    title: 'Cocok untuk <span style="color: var(--orange-500)">berbagai industri</span>',
    sub: 'Umumnya digunakan oleh advertiser di industri:',
  },
  en: {
    title: 'Fit for <span style="color: var(--orange-500)">various industries</span>',
    sub: 'Commonly used by advertisers in industries:',
  },
};

const CTA_HREF = '/layanan/sewa-akun-whitelist';

export const META_LP: Record<Lang, MetaLpData> = {
  id: {
    platform: 'meta',
    hero: {
      eyebrow: 'Tier 1 Meta Ad Account',
      title: 'Mau Sampai Kapan Ngiklan Dengan',
      titleAccent: 'Banyak Hambatan?',
      desc: 'Sudah saatnya beralih pakai akun iklan meta ads tier 1 yang lebih stabil, tahan restrict dan dapat dukungan langsung dari meta secara penuh supaya bisnis kamu makin tumbuh.',
    },
    whyHeading: 'Mengapa Memilih Akun Whitelist?',
    whySub: 'Solusi terbaik untuk scale-up iklan Anda dengan aman, nyaman, dan bebas hambatan.',
    whyItems: [
      { iconId: 'stable', title: 'Akun Stabil', desc: 'Akun stabil, Minim risiko pembatasan acak' },
      { iconId: 'comfortable', title: 'Lebih Nyaman', desc: 'Lebih nyaman untuk beriklan' },
      { iconId: 'scale', title: 'Bebas Scale', desc: 'Bebas scale limit spending harian' },
      { iconId: 'tax', title: 'Lebih Hemat 11%', desc: 'Tidak ada biaya tambahan 11%' },
      { iconId: 'priority', title: 'Jalur Prioritas', desc: 'Support appeal langsung melalui jalur Meta' },
      { iconId: 'expert', title: 'Support Expert', desc: 'Support teknis langsung ke tim expert Meta' },
      { iconId: 'protection', title: 'Proteksi Saldo', desc: 'Saldo otomatis pindah ke akun pengganti jika terjadi disable (s&k berlaku)' },
    ],
    problemHeading: 'Saat scale, masalah Meta Ads makin kompleks',
    problemSub: 'Hal-hal yang bikin advertiser kehilangan momentum:',
    problems: [
      { iconId: 'ban', title: 'Akun kena restrict', desc: 'Akun personal/BM biasa rawan random restrict saat spending naik.' },
      { iconId: 'clock', title: 'Review lambat', desc: 'Iklan stuck "in review" berjam-jam — momentum campaign hilang.' },
      { iconId: 'trending-down', title: 'Limit spending', desc: 'Limit harian bikin scale tersendat di momen paling penting.' },
      { iconId: 'help-circle', title: 'Eskalasi tak jelas', desc: 'Saat akun bermasalah, advertiser jalan sendirian tanpa jalur appeal.' },
    ],
    benefitHeading: 'Yang kamu dapat dengan akun Meta Whitelist',
    benefits: [
      'Akun stabil, **minim risiko** random restrict',
      'Tidak ada **limit spending** harian — bebas scale',
      '**Tidak dikenakan PPN**',
      'Support appeal melalui **jalur langsung** ke tim Meta',
      'Saldo otomatis pindah ke **akun pengganti** jika terjadi disable (syarat & ketentuan berlaku)',
      'Support teknis langsung ke **tim expert Meta**',
    ],
    photoHeading: 'Terhubung langsung <span style="color: var(--orange-500)">dengan Meta</span>',
    photoSub: 'Tentaklik aktif menjalin kerjasama dengan Meta dan kamu bisa jadi bagian barunya',
    photos: [
      { src: '/assets/galeri-meta/meta1.avif', alt: 'Tim Tentaklik di event Meta' },
      { src: '/assets/galeri-meta/meta2.avif', alt: 'Kunjungan ke kantor Meta' },
      { src: '/assets/galeri-meta/meta5.avif', alt: 'Kantor Meta Singapore', portrait: true },
    ],
    testimonials: [
      { stars: 5, text: "Sejak menggunakan Akun Whitelist, akun iklan kami jauh lebih stabil. Spending harian berjalan lancar tanpa kendala seperti sebelumnya.", name: "Fajar", role: "Owner Brand Fashion", initials: "F", avatar: "/assets/testimonials/review_fajar.png" },
      { stars: 5, text: "Campaign jadi lebih mudah di-scale karena akun memiliki trust yang lebih baik. Tim Tentaklik juga sangat membantu selama proses aktivasi.", name: "Rizka", role: "Konsultan Pendidikan", initials: "R", avatar: "/assets/testimonials/review_rizka.png" },
      { stars: 5, text: "Proses whitelist cepat, CS responsif, dan setiap kendala dibantu sampai selesai. Sangat membantu untuk menjaga performa iklan tetap optimal.", name: "Andi", role: "E-commerce Owner", initials: "A", avatar: "/assets/testimonials/review_andi.png" },
      { stars: 5, text: "Awalnya sering mengalami pembatasan akun. Setelah menggunakan layanan Akun Whitelist, operasional iklan menjadi jauh lebih konsisten dan spending meningkat tanpa hambatan.", name: "Sarah", role: "Owner Skincare Brand", initials: "S", avatar: "/assets/testimonials/review_sarah.png" },
      { stars: 5, text: "Akun iklan menjadi lebih stabil dan kami bisa meningkatkan budget campaign dengan lebih percaya diri. Proses aktivasi cepat dan tim support selalu siap membantu.", name: "Kevin", role: "Owner Travel", initials: "K", avatar: "/assets/testimonials/review_kevin.png" }
    ],
    cta: {
      title: 'Siap pakai akun Meta Whitelist?',
      desc: 'Lihat detail layanan, alur pendaftaran, dan struktur harga di halaman Sewa Akun.',
      btn: 'Dapatkan Akun Iklan',
    },
    seo: {
      title: 'Sewa Akun Meta Ads Whitelist (Facebook & Instagram) — Tentaklik',
      description: 'Sewa akun Meta Ads whitelist (Facebook & Instagram) di Tentaklik: akun stabil terverifikasi Business Manager resmi, tanpa limit spending, anti random restrict, dan support appeal jalur partner Meta.',
    },
    keywords: ['sewa akun meta ads', 'akun whitelist meta', 'sewa akun facebook ads', 'sewa akun instagram ads', 'akun facebook ads whitelist'],
  },
  en: {
    platform: 'meta',
    hero: {
      eyebrow: 'Tier 1 Meta Ad Account',
      title: 'How Long Will You Run Ads With',
      titleAccent: 'So Many Obstacles?',
      desc: 'It is time to switch to a tier 1 Meta ad account that is more stable, restrict-resistant, and fully supported directly by Meta so your business can grow faster.',
    },
    whyHeading: 'Why Choose a Whitelist Account?',
    whySub: 'The ultimate solution to scale your ads safely, comfortably, and without obstacles.',
    whyItems: [
      { iconId: 'stable', title: 'Stable Accounts', desc: 'Stable accounts, minimal risk of random restrictions' },
      { iconId: 'comfortable', title: 'More Comfortable', desc: 'More comfortable for advertising' },
      { iconId: 'scale', title: 'Scale Freely', desc: 'Scale freely with no daily spending limits' },
      { iconId: 'tax', title: 'No VAT', desc: 'No VAT charged' },
      { iconId: 'priority', title: 'Priority Route', desc: 'Direct appeal support through Meta channels' },
      { iconId: 'expert', title: 'Expert Support', desc: 'Direct technical support from Meta expert team' },
      { iconId: 'protection', title: 'Balance Protection', desc: 'Balance auto-moves to replacement account if disabled (T&C apply)' },
    ],
    problemHeading: 'As you scale, Meta Ads problems get more complex',
    problemSub: 'Things that make advertisers lose momentum:',
    problems: [
      { iconId: 'ban', title: 'Account restricted', desc: 'Personal/regular BM accounts are prone to random restricts as spending grows.' },
      { iconId: 'clock', title: 'Slow review', desc: 'Ads stuck "in review" for hours — campaign momentum lost.' },
      { iconId: 'trending-down', title: 'Spending limit', desc: 'Daily limits stall scaling at the most critical moment.' },
      { iconId: 'help-circle', title: 'Unclear escalation', desc: 'When an account has issues, advertisers are on their own with no appeal path.' },
    ],
    benefitHeading: 'What you get with a Meta Whitelist account',
    benefits: [
      'Stable account, **minimal risk** of random restricts',
      'No daily **spending limit** — scale freely',
      '**No VAT** charged',
      'Appeal support through a **direct line** to the Meta team',
      'Balance auto-moves to a **replacement account** if disabled (terms & conditions apply)',
      'Direct technical support from the **Meta expert team**',
    ],
    photoHeading: 'Directly connected <span style="color: var(--orange-500)">with Meta</span>',
    photoSub: 'Tentaklik actively collaborates with Meta, and you can be part of it.',
    photos: [
      { src: '/assets/galeri-meta/meta1.avif', alt: 'Tentaklik team at a Meta event' },
      { src: '/assets/galeri-meta/meta2.avif', alt: 'Visit to the Meta office' },
      { src: '/assets/galeri-meta/meta5.avif', alt: 'Meta Singapore Office', portrait: true },
    ],
    testimonials: [
      { stars: 5, text: "Since using a Whitelist Account, our ad accounts have been much more stable. Daily spending runs smoothly without the previous obstacles.", name: "Fajar", role: "Fashion Brand Owner", initials: "F", avatar: "/assets/testimonials/review_fajar.png" },
      { stars: 5, text: "Campaigns are much easier to scale because the account has better trust. The Tentaklik team was also very helpful during the activation process.", name: "Rizka", role: "Education Consultant", initials: "R", avatar: "/assets/testimonials/review_rizka.png" },
      { stars: 5, text: "The whitelist process is fast, customer service is responsive, and every issue is assisted until resolved. Very helpful in keeping ad performance optimal.", name: "Andi", role: "E-commerce Owner", initials: "A", avatar: "/assets/testimonials/review_andi.png" },
      { stars: 5, text: "We used to frequently experience account restrictions. After using the Whitelist Account service, ad operations became much more consistent and spending increased without hurdles.", name: "Sarah", role: "Skincare Brand Owner", initials: "S", avatar: "/assets/testimonials/review_sarah.png" },
      { stars: 5, text: "The ad account has become more stable and we can increase campaign budgets with more confidence. The activation process is fast and the support team is always ready to help.", name: "Kevin", role: "Travel Owner", initials: "K", avatar: "/assets/testimonials/review_kevin.png" }
    ],
    cta: {
      title: 'Ready to use a Meta Whitelist account?',
      desc: 'See service details, the registration flow, and pricing on the Account Rental page.',
      btn: 'Get Ad Account',
    },
    seo: {
      title: 'Meta Ads Whitelist Account Rental (Facebook & Instagram) — Tentaklik',
      description: 'Rent a Meta Ads whitelist account (Facebook & Instagram) at Tentaklik: stable account verified under an official Business Manager, no spending limit, anti random restrict, and appeal support via the Meta partner line.',
    },
    keywords: ['meta ads account rental', 'meta whitelist account', 'facebook ads account rental', 'instagram ads account rental', 'facebook ads whitelist account'],
  },
};

export const GOOGLE_LP: Record<Lang, GoogleLpData> = {
  id: {
    platform: 'google',
    hero: {
      eyebrow: 'Akun Google Ads Tier 1',
      title: 'Bisnis Kamu Lebih Maju',
      titleAccent: 'Dengan Akun Google Ads Terverifikasi Resmi',
      desc: 'Tentaklik bisa penuhi kebutuhan kamu untuk jalankan iklan Google Ads tanpa batas, tanpa hambatan dan tanpa halangan. Sudahi bayang-bayang akun banned, restrict dan dibatasi dengan akun iklan dari kami.',
    },
    whyHeading: 'Mengapa Memilih Akun Whitelist?',
    whySub: 'Solusi terbaik untuk scale-up iklan Google Ads dengan aman, nyaman dan tanpa hambatan.',
    whyItems: [
      { iconId: 'stable', title: 'Risiko Suspend Rendah', desc: 'Risiko Suspend lebih rendah dibanding akun Google Ads Personal biasa' },
      { iconId: 'comfortable', title: 'Lebih Nyaman', desc: 'Lebih nyaman untuk beriklan' },
      { iconId: 'scale', title: 'Bebas Scale', desc: 'Bebas scale limit spending harian' },
      { iconId: 'tax', title: 'Lebih Hemat 11%', desc: 'Tanpa biaya tambahan 11%' },
      { iconId: 'priority', title: 'Jalur Prioritas', desc: 'Support langsung melalui Google Partner' },
      { iconId: 'expert', title: 'Support Expert', desc: 'Support teknis langsung ke tim expert Google' },
      { iconId: 'protection', title: 'Proteksi Saldo', desc: 'Saldo otomatis pindah ke akun pengganti jika terjadi disable (s&k berlaku)' },
    ],
    problemHeading: 'Saat scale, masalah Google Ads makin kompleks',
    problemSub: 'Hal-hal yang bikin advertiser kehilangan momentum:',
    problems: [
      { iconId: 'ban', title: 'Akun kena suspend', desc: 'Akun Google Ads personal rawan suspend saat budget naik cepat.' },
      { iconId: 'clock', title: 'Appeal berbelit', desc: 'Proses banding lama tanpa jalur langsung ke Google.' },
      { iconId: 'trending-down', title: 'Batas spending', desc: 'Limit harian menghambat scale di kampanye yang sedang menang.' },
      { iconId: 'help-circle', title: 'Support minim', desc: 'Tidak ada pendampingan teknis yang paham kebijakan Google Ads.' },
    ],
    benefitHeading: 'Yang kamu dapat dengan akun Google Whitelist',
    benefits: [
      '**Risiko suspend** lebih rendah dibanding akun Google Ads personal biasa',
      'Tidak ada **batas maksimal spending** harian — cocok untuk skala besar',
      '**Tidak dikenakan PPN**',
      'Proses appeal lebih cepat karena **terhubung langsung** ke Google Partner',
      'Saldo otomatis pindah ke **akun pengganti** jika terjadi disable (syarat & ketentuan berlaku)',
      'Support teknis langsung ke **tim expert Google**',
    ],
    photoHeading: 'Terhubung langsung <span style="color: var(--orange-500)">dengan Google</span>',
    photoSub: 'Kami siap bantu kamu selalu terhubung dengan Google secara langsung',
    photos: [
      { src: '/assets/galeri/8.jpg', alt: 'Tim Tentaklik di kantor Google' },
      { src: '/assets/galeri/5.jpg', alt: 'Event Akselerasi Bisnis dengan Google Ads' },
      { src: '/assets/galeri/2.jpg', alt: 'Kunjungan tim ke Google Partner' },
    ],
    testimonials: [
      { stars: 5, text: "Sejak menggunakan Akun Whitelist, akun iklan kami jauh lebih stabil. Spending harian berjalan lancar tanpa kendala seperti sebelumnya.", name: "Fajar", role: "Owner Brand Fashion", initials: "F", avatar: "/assets/testimonials/review_fajar.png" },
      { stars: 5, text: "Campaign jadi lebih mudah di-scale karena akun memiliki trust yang lebih baik. Tim Tentaklik juga sangat membantu selama proses aktivasi.", name: "Rizka", role: "Konsultan Pendidikan", initials: "R", avatar: "/assets/testimonials/review_rizka.png" },
      { stars: 5, text: "Proses whitelist cepat, CS responsif, dan setiap kendala dibantu sampai selesai. Sangat membantu untuk menjaga performa iklan tetap optimal.", name: "Andi", role: "E-commerce Owner", initials: "A", avatar: "/assets/testimonials/review_andi.png" },
      { stars: 5, text: "Awalnya sering mengalami suspend akun. Setelah menggunakan layanan Akun Whitelist, operasional iklan menjadi jauh lebih konsisten dan spending meningkat tanpa hambatan.", name: "Sarah", role: "Owner Skincare Brand", initials: "S", avatar: "/assets/testimonials/review_sarah.png" },
      { stars: 5, text: "Akun iklan menjadi lebih stabil dan kami bisa meningkatkan budget campaign dengan lebih percaya diri. Proses aktivasi cepat dan tim support selalu siap membantu.", name: "Kevin", role: "Owner Travel", initials: "K", avatar: "/assets/testimonials/review_kevin.png" }
    ],
    cta: {
      title: 'Siap pakai akun Google Whitelist?',
      desc: 'Lihat detail layanan, alur pendaftaran, dan struktur harga di halaman Sewa Akun.',
      btn: 'Dapatkan Akun Sekarang',
    },
    seo: {
      title: 'Sewa Akun Google Ads Whitelist — Tentaklik',
      description: 'Sewa akun Google Ads whitelist di Tentaklik: dikelola Google Partner resmi, risiko suspend lebih rendah, tanpa batas spending harian, dan proses appeal lebih cepat untuk skala besar.',
    },
    keywords: ['sewa akun google ads', 'akun whitelist google', 'sewa akun google ads whitelist', 'akun google ads mcc', 'sewa akun iklan google'],
  },
  en: {
    platform: 'google',
    hero: {
      eyebrow: 'Tier 1 Google Ads Account',
      title: 'Grow Your Business Faster',
      titleAccent: 'With Officially Verified Google Ads Accounts',
      desc: 'Tentaklik fulfills your need to run Google Ads with no limits, no friction, and no obstacles. Leave behind worries of bans, restricts, and spending limits with our verified ad accounts.',
    },
    whyHeading: 'Why Choose a Whitelist Account?',
    whySub: 'The best solution to scale up your Google Ads safely, comfortably, and without obstacles.',
    whyItems: [
      { iconId: 'stable', title: 'Lower Suspension Risk', desc: 'Lower suspension risk compared to a regular personal Google Ads account' },
      { iconId: 'comfortable', title: 'More Comfortable', desc: 'More comfortable for advertising' },
      { iconId: 'scale', title: 'Scale Freely', desc: 'Scale freely with no daily spending limits' },
      { iconId: 'tax', title: 'Save 11%', desc: 'No additional 11% fee' },
      { iconId: 'priority', title: 'Priority Route', desc: 'Direct support through Google Partner' },
      { iconId: 'expert', title: 'Expert Support', desc: 'Direct technical support from the Google expert team' },
      { iconId: 'protection', title: 'Balance Protection', desc: 'Balance auto-moves to replacement account if disabled (T&C apply)' },
    ],
    problemHeading: 'As you scale, Google Ads problems get more complex',
    problemSub: 'Things that make advertisers lose momentum:',
    problems: [
      { iconId: 'ban', title: 'Account suspended', desc: 'Personal Google Ads accounts are prone to suspension when budgets rise quickly.' },
      { iconId: 'clock', title: 'Convoluted appeals', desc: 'A long appeal process with no direct line to Google.' },
      { iconId: 'trending-down', title: 'Spending cap', desc: 'Daily limits hold back scaling on campaigns that are winning.' },
      { iconId: 'help-circle', title: 'Minimal support', desc: 'No technical guidance from people who understand Google Ads policy.' },
    ],
    benefitHeading: 'What you get with a Google Whitelist account',
    benefits: [
      '**Lower suspend risk** than a regular personal Google Ads account',
      'No maximum daily **spending cap** — fit for large scale',
      '**No VAT** charged',
      'Faster appeals thanks to a **direct connection** with Google Partner',
      'Balance auto-moves to a **replacement account** if disabled (terms & conditions apply)',
      'Direct technical support from the **Google expert team**',
    ],
    photoHeading: 'Directly connected <span style="color: var(--orange-500)">with Google</span>',
    photoSub: 'We are ready to help you always stay directly connected with Google',
    photos: [
      { src: '/assets/galeri/8.jpg', alt: 'Tentaklik team at Google office' },
      { src: '/assets/galeri/5.jpg', alt: 'Business Acceleration Event with Google Ads' },
      { src: '/assets/galeri/2.jpg', alt: 'Team visit to Google Partner' },
    ],
    testimonials: [
      { stars: 5, text: "Since using a Whitelist Account, our ad accounts have been much more stable. Daily spending runs smoothly without the previous obstacles.", name: "Fajar", role: "Fashion Brand Owner", initials: "F", avatar: "/assets/testimonials/review_fajar.png" },
      { stars: 5, text: "Campaigns are much easier to scale because the account has better trust. The Tentaklik team was also very helpful during the activation process.", name: "Rizka", role: "Education Consultant", initials: "R", avatar: "/assets/testimonials/review_rizka.png" },
      { stars: 5, text: "The whitelist process is fast, customer service is responsive, and every issue is assisted until resolved. Very helpful in keeping ad performance optimal.", name: "Andi", role: "E-commerce Owner", initials: "A", avatar: "/assets/testimonials/review_andi.png" },
      { stars: 5, text: "We used to frequently experience account suspensions. After using the Whitelist Account service, ad operations became much more consistent and spending increased without hurdles.", name: "Sarah", role: "Skincare Brand Owner", initials: "S", avatar: "/assets/testimonials/review_sarah.png" },
      { stars: 5, text: "The ad account has become more stable and we can increase campaign budgets with more confidence. The activation process is fast and the support team is always ready to help.", name: "Kevin", role: "Travel Owner", initials: "K", avatar: "/assets/testimonials/review_kevin.png" }
    ],
    cta: {
      title: 'Ready to use a Google Whitelist account?',
      desc: 'See service details, the registration flow, and pricing on the Account Rental page.',
      btn: 'Get Ad Account Now',
    },
    seo: {
      title: 'Google Ads Whitelist Account Rental — Tentaklik',
      description: 'Rent a Google Ads whitelist account at Tentaklik: managed by an official Google Partner, lower suspend risk, no daily spending cap, and faster appeals for large scale.',
    },
    keywords: ['google ads account rental', 'google whitelist account', 'google ads whitelist account rental', 'google ads mcc account', 'google ads account rental service'],
  },
};

export const TIKTOK_LP: Record<Lang, TikTokLpData> = {
  id: {
    platform: 'tiktok',
    hero: {
      eyebrow: 'Akun Whitelist',
      title: 'Jangan Biarkan',
      titleAccent: 'Kendala Akun Menghambat Pertumbuhan Bisnis Anda',
      desc: 'Akun Whitelist TikTok Ads membantu bisnis yang aktif beriklan menjalankan campaign Spark Ads & GMV Max dengan nyaman dan bebas drama limit.',
    },
    whyHeading: 'Mengapa Memilih Akun Whitelist TikTok?',
    whySub: 'Solusi terbaik untuk scale-up iklan TikTok Anda dengan aman, nyaman, dan bebas hambatan.',
    whyItems: [
      { iconId: 'stable', title: 'Akun Stabil & Prioritas', desc: 'Akun agency resmi TikTok Partner, minim risiko banned acak' },
      { iconId: 'comfortable', title: 'Lebih Nyaman', desc: 'Review materi iklan lebih cepat dengan approval rate tinggi' },
      { iconId: 'scale', title: 'Bebas Scale', desc: 'Tanpa limit spending harian — bebas maksimalkan campaign viral' },
      { iconId: 'tax', title: 'Lebih Hemat 11%', desc: 'Tidak ada biaya tambahan 11%' },
      { iconId: 'priority', title: 'Jalur Prioritas', desc: 'Dukungan direct appeal ke perwakilan TikTok Partner' },
      { iconId: 'expert', title: 'Support Expert', desc: 'Pendampingan teknis langsung dari spesialis TikTok Ads Tentaklik' },
      { iconId: 'protection', title: 'Proteksi Saldo', desc: 'Saldo aman terlindungi dan otomatis pindah ke akun baru jika disable (s&k berlaku)' },
    ],
    problemHeading: 'Saat scale, masalah TikTok Ads makin kompleks',
    problemSub: 'Hal-hal yang bikin advertiser kehilangan momentum:',
    problems: [
      { iconId: 'ban', title: 'Akun sering kena suspend', desc: 'Akun TikTok personal sangat sensitif dan rentan ditutup saat baru scale.' },
      { iconId: 'clock', title: 'Review video lama', desc: 'Materi iklan tertahan berjam-jam bahkan berhari-hari, momentum tren terbuang.' },
      { iconId: 'trending-down', title: 'Limit spending harian', desc: 'Batas spend awal membatasi performa video yang sedang FYP & viral.' },
      { iconId: 'help-circle', title: 'Appeal tidak ditanggapi', desc: 'Tiket bantuan hanya dijawab bot tanpa solusi konkret.' },
    ],
    benefitHeading: 'Yang kamu dapat dengan akun TikTok Whitelist',
    benefits: [
      'Akses fitur **TikTok Whitelist & Spark Ads** tanpa batasan akun personal',
      'Tidak ada **limit spending** harian — maksimalkan momentum FYP & GMV',
      '**Bebas biaya PPN**',
      'Proses review iklan lebih cepat dengan **approval rate tinggi**',
      'Dukungan **direct appeal** ke tim partner resmi TikTok',
      'Saldo otomatis pindah ke **akun pengganti** jika terjadi kendala (syarat & ketentuan berlaku)',
    ],
    photoHeading: 'Didukung Partner Resmi <span style="color: var(--orange-500)">Meta, Google &amp; TikTok</span>',
    photoSub: 'Tim Tentaklik memiliki akses langsung ke perwakilan dan jaringan partner tier-1.',
    photos: [
      { src: '/assets/galeri-meta/meta1.avif', alt: 'Tim Tentaklik di event Meta' },
      { src: '/assets/galeri-meta/meta2.avif', alt: 'Kunjungan ke kantor Meta' },
      { src: '/assets/galeri/2.jpg', alt: 'Kunjungan tim ke kantor Google' },
      { src: '/assets/galeri/3.jpg', alt: 'Event resmi Partner' },
      { src: '/assets/galeri-meta/meta5.avif', alt: 'Tim Tentaklik', portrait: true },
    ],
    testimonials: [
      { stars: 5, text: "Setelah beralih ke Akun Whitelist TikTok Tentaklik, campaign Spark Ads kami bisa tembus omzet ratusan juta tanpa terhenti masalah limit spending harian.", name: "Dion", role: "TikTok Shop Merchant", initials: "D", avatar: "/assets/testimonials/review_fajar.png" },
      { stars: 5, text: "Video iklan kami yang viral langsung kami scale gila-gilaan dengan akun whitelist ini. Approval ad sangat cepat dan akun super stabil!", name: "Maya", role: "Brand Fashion & Hijab", initials: "M", avatar: "/assets/testimonials/review_rizka.png" },
      { stars: 5, text: "Layanan support Tentaklik juara. Ada tim yang siap bantu jika ada materi yang butuh penyesuaian kebijakan TikTok. Worth it banget.", name: "Budi", role: "Agency Media Buyer", initials: "B", avatar: "/assets/testimonials/review_andi.png" },
      { stars: 5, text: "Bebas PPN dan saldo pindah otomatis memberi rasa tenang luar biasa. Bisnis skincare kami sekarang 100% fokus ke konten dan sales.", name: "Sarah", role: "Owner Skincare Brand", initials: "S", avatar: "/assets/testimonials/review_sarah.png" },
      { stars: 5, text: "Proses setup ke TikTok Business Center cuma butuh beberapa jam. Sangat profesional dan rekomendasi utama untuk scale up!", name: "Kevin", role: "Dropship & E-commerce", initials: "K", avatar: "/assets/testimonials/review_kevin.png" }
    ],
    cta: {
      title: 'Siap pakai akun TikTok Whitelist?',
      desc: 'Lihat detail layanan, alur pendaftaran, dan struktur harga di halaman Sewa Akun.',
      btn: 'Ajukan Sekarang',
    },
    seo: {
      title: 'Sewa Akun TikTok Ads Whitelist (Agency Account) — Tentaklik',
      description: 'Sewa akun TikTok Ads Whitelist agency resmi di Tentaklik: tanpa limit spending, bebas PPN, approval kilat, proteksi saldo, dan appeal jalur partner TikTok.',
    },
    keywords: ['sewa akun tiktok ads', 'akun whitelist tiktok', 'tiktok agency account', 'tiktok ads whitelist', 'sewa tiktok ads partner'],
  },
  en: {
    platform: 'tiktok',
    hero: {
      eyebrow: 'Whitelist Account',
      title: "Don't Let",
      titleAccent: 'Account Limits Hinder Your Business Growth',
      desc: 'TikTok Ads Whitelist Accounts help active advertisers scale Spark Ads & GMV Max campaigns smoothly and free from spending caps.',
    },
    whyHeading: 'Why Choose a TikTok Whitelist Account?',
    whySub: 'The ultimate solution to scale your TikTok ads safely, comfortably, and without hurdles.',
    whyItems: [
      { iconId: 'stable', title: 'Stable & Priority Account', desc: 'Official TikTok Partner agency account with minimal random ban risk' },
      { iconId: 'comfortable', title: 'Smoother Advertising', desc: 'Faster ad creative review with high approval rates' },
      { iconId: 'scale', title: 'Scale Freely', desc: 'No daily spending limits — capitalize on viral campaign momentum' },
      { iconId: 'tax', title: 'No VAT Markup', desc: 'No VAT charged and no hidden administrative markups' },
      { iconId: 'priority', title: 'Priority Route', desc: 'Direct appeal route to TikTok Partner representatives' },
      { iconId: 'expert', title: 'Expert Support', desc: 'Direct technical guidance from Tentaklik TikTok Ads specialists' },
      { iconId: 'protection', title: 'Balance Protection', desc: 'Ad spend balance auto-migrates to a replacement account if disabled' },
    ],
    problemHeading: 'As you scale, TikTok Ads challenges grow fast',
    problemSub: 'Bottlenecks that cost advertisers momentum and revenue:',
    problems: [
      { iconId: 'ban', title: 'Frequent suspensions', desc: 'Personal TikTok ad accounts are highly sensitive and prone to sudden bans.' },
      { iconId: 'clock', title: 'Slow video review', desc: 'Creatives stuck in review for hours while viral trends fade away.' },
      { iconId: 'trending-down', title: 'Daily spending caps', desc: 'Strict early limits prevent scaling videos when conversion rates peak.' },
      { iconId: 'help-circle', title: 'Automated bot replies', desc: 'Support tickets handled by bots without any concrete appeal route.' },
    ],
    benefitHeading: 'What you get with a TikTok Whitelist account',
    benefits: [
      'Access **TikTok Whitelist & Spark Ads** without personal account limitations',
      'No daily **spending cap** — scale viral winning creatives instantly',
      '**No VAT markups** applied',
      'Faster creative reviews with **higher approval rates**',
      'Direct appeal support through **official TikTok partner lines**',
      'Automatic **balance transfer** to a replacement account (T&C apply)',
    ],
    photoHeading: 'Supported by Tier-1 Partners <span style="color: var(--orange-500)">Meta, Google &amp; TikTok</span>',
    photoSub: 'The Tentaklik team maintains direct access to partner managers and official programs.',
    photos: [
      { src: '/assets/galeri-meta/meta1.avif', alt: 'Tentaklik team at a partner event' },
      { src: '/assets/galeri-meta/meta2.avif', alt: 'Visit to partner office' },
      { src: '/assets/galeri/2.jpg', alt: 'Team visit to Google office' },
      { src: '/assets/galeri/3.jpg', alt: 'Official partner event' },
      { src: '/assets/galeri-meta/meta5.avif', alt: 'Tentaklik Team', portrait: true },
    ],
    testimonials: [
      { stars: 5, text: "Switching to Tentaklik's TikTok Whitelist account allowed our Spark Ads campaigns to reach 9-figure revenues without hitting daily spend caps.", name: "Dion", role: "TikTok Shop Merchant", initials: "D", avatar: "/assets/testimonials/review_fajar.png" },
      { stars: 5, text: "When our video went viral, we were able to scale aggressively with zero friction. Creative approvals are lightning fast and the account is rock-solid.", name: "Maya", role: "Fashion Brand Founder", initials: "M", avatar: "/assets/testimonials/review_rizka.png" },
      { stars: 5, text: "Tentaklik's support is unmatched. Real specialists help ensure creatives stay compliant with TikTok policies. Highly recommended!", name: "Budi", role: "Media Buyer Lead", initials: "B", avatar: "/assets/testimonials/review_andi.png" },
      { stars: 5, text: "No VAT and automatic balance protection provide incredible peace of mind. Our skincare business can now focus 100% on content and growth.", name: "Sarah", role: "Skincare Brand Owner", initials: "S", avatar: "/assets/testimonials/review_sarah.png" },
      { stars: 5, text: "Setup into our TikTok Business Center took only a few hours. Seamless, professional, and the best decision for scaling.", name: "Kevin", role: "E-Commerce Founder", initials: "K", avatar: "/assets/testimonials/review_kevin.png" }
    ],
    cta: {
      title: 'Ready to use a TikTok Whitelist account?',
      desc: 'Explore service details, onboarding process, and pricing on the Account Rental page.',
      btn: 'Apply Now',
    },
    seo: {
      title: 'TikTok Ads Whitelist Account Rental (Agency Account) — Tentaklik',
      description: 'Rent an official TikTok Ads Whitelist agency account at Tentaklik: no spending cap, no VAT, fast approvals, balance protection, and TikTok Partner appeal support.',
    },
    keywords: ['tiktok ads account rental', 'tiktok whitelist account', 'tiktok agency account rental', 'tiktok ads agency account', 'tiktok ads whitelist'],
  },
};

export { CTA_HREF };
