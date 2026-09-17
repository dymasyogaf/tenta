import { PUBLIC_SITE_URL, PUBLIC_WA_NUMBER } from 'astro:env/client';

export const site = {
  name: 'Tentaklik',
  legalName: 'Tentaklik Digital Agency',
  // Entitas hukum (badan usaha) yang mengelola & memiliki brand Tentaklik.
  // Ditampilkan di footer + dipakai structured data agar konsisten dengan verifikasi Google.
  legalEntity: 'PT. Tentakel Bisnis Digital',
  url: PUBLIC_SITE_URL,
  wa: PUBLIC_WA_NUMBER,
  email: 'hi@tentaklik.com',
  emailKarir: 'karir@tentaklik.com',
  phone: '+62 822-1998-7770',
  phoneIntl: '+6282219987770',
  address: 'Indonesia',
  foundingDate: '2023-01-01',

  geo: {
    streetAddress: 'Indonesia',
    addressLocality: 'Indonesia',
    addressRegion: 'Indonesia',
    postalCode: '50000',
    addressCountry: 'ID',
    latitude: -6.9666,
    longitude: 110.4167,
  },

  areaServed: [
    'Jakarta', 'Surabaya', 'Bandung', 'Yogyakarta', 'Bali',
    'Medan', 'Makassar', 'Solo', 'Indonesia',
  ],

  openingHours: [
    'Mo-Th 08:00-16:00',
    'Fr 08:00-17:00',
    'Sa 08:00-15:00',
  ],

  social: {
    youtube: 'https://www.youtube.com/@tentaklikaja',
    instagram: 'https://www.instagram.com/tentaklikaja?igsh=cW5yMTZmZWtoaGw2',
    tiktok: 'https://www.tiktok.com/@tentaklikaja',
    facebook: 'https://facebook.com/tentaklik',
    linkedin: 'https://linkedin.com/company/tentaklik',
    twitter: 'https://twitter.com/tentaklik',
    telegram: 'https://t.me/komunitastentaklik',
  },
  twitterHandle: '@tentaklik',

  description: 'Agensi digital marketing untuk jasa pembuatan website, Google Ads, Meta Ads (Facebook & Instagram), dan konsultasi digital marketing untuk UMKM dan brand di Indonesia.',
  description_en: 'Digital marketing agency for website development, Google Ads, Meta Ads (Facebook & Instagram), and digital marketing consulting for SMEs and brands in Indonesia.',
  shortDescription: 'Agensi untuk website, Google Ads, Meta Ads, dan konsultasi digital marketing.',
  shortDescription_en: 'Agency for websites, Google Ads, Meta Ads, and digital marketing consulting.',
  footerTagline: 'Tentaklik bantu kebutuhan digital marketing bisnis kamu, mulai dari sewa akun iklan, pembuatan website dan landing page, sampai konsultasi strategi. Dengan tim yang bisa diajak diskusi, kamu punya teman untuk menentukan langkah berikutnya.',
  footerTagline_en: 'Tentaklik supports your business\'s digital marketing needs, from ad account rentals, website and landing page creation, to strategy consulting. With a team ready for discussion, you have a partner to navigate your next steps.',

  defaultOgImage: '/assets/kraken-hero.png',
  logoUrl: '/logo-full.png',

  keywords: [
    'jasa digital marketing semarang',
    'agensi digital marketing semarang',
    'jasa pembuatan website semarang',
    'jasa google ads semarang',
    'jasa meta ads',
    'jasa facebook ads',
    'jasa instagram ads',
    'konsultan digital marketing',
    'jasa seo semarang',
    'agensi iklan online indonesia',
    'tentaklik',
  ],

  keywords_en: [
    'digital marketing agency semarang',
    'semarang digital marketing',
    'website development agency indonesia',
    'google ads agency',
    'meta ads agency',
    'facebook ads services',
    'instagram ads services',
    'digital marketing consultant',
    'seo agency semarang',
    'online advertising agency indonesia',
    'tentaklik',
  ],

  rating: {
    value: 4.9,
    count: 172,
    bestRating: 5,
    worstRating: 1,
  },

  verification: {
    google: 'fhvj-kqOLg580zSOwN8stYGLH2TQeOUwKwFHJCJ2wbM',
  },
} as const;

export function waLink(message = 'Halo Tentaklik') {
  return `https://wa.me/${PUBLIC_WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
