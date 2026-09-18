// src/data/partners.ts
// Data partner / rekomendasi tools ekosistem digital marketing Tentaklik

export interface PartnerItem {
  id: string;
  category: string;
  category_en: string;
  title: string;
  title_en: string;
  image: string;
  url: string;
  btnText: string;
  btnText_en: string;
}

export const PARTNER_ITEMS: PartnerItem[] = [
  {
    id: 'domainesia',
    category: 'Hosting',
    category_en: 'Hosting',
    title: 'Hosting Stabil Support Terbaik',
    title_en: 'Stable Web Hosting with Best Support',
    image: '/assets/partner/domainesia.jpg',
    url: 'https://ahzelan.com/go/domainesia',
    btnText: 'Lihat Detail',
    btnText_en: 'View Details',
  },
  {
    id: 'gapurahoster',
    category: 'Hosting',
    category_en: 'Hosting',
    title: 'Hosting Harga Murah Buat Pemula',
    title_en: 'Affordable Web Hosting for Beginners',
    image: '/assets/partner/gapurahoster.jpg',
    url: 'https://gapurahoster.co.id/member/aff.php?aff=1458',
    btnText: 'Lihat Detail',
    btnText_en: 'View Details',
  },
  {
    id: 'warnahost',
    category: 'Hosting',
    category_en: 'Hosting',
    title: 'Hosting Murah Renewal Tetap Sama',
    title_en: 'Budget Hosting with Fixed Renewal Price',
    image: '/assets/partner/warnahost.jpg',
    url: 'https://ahzelan.com/go/warnahost',
    btnText: 'Lihat Detail',
    btnText_en: 'View Details',
  },
  {
    id: 'donasiaja',
    category: 'Plugin',
    category_en: 'Plugin',
    title: 'Plugin Donasi Online Terbaik',
    title_en: 'Best Online Donation Plugin',
    image: '/assets/partner/donasiaja.jpg',
    url: 'https://member.donasiaja.id/ref/8nl1i2?view=lp_donasiaja',
    btnText: 'Lihat Detail',
    btnText_en: 'View Details',
  },
  {
    id: 'tripay',
    category: 'Payment Gateway',
    category_en: 'Payment Gateway',
    title: 'Payment Gateway Channel Lengkap',
    title_en: 'Complete Channel Payment Gateway',
    image: '/assets/partner/tripay.jpg',
    url: 'https://ahzelan.com/go/tripay',
    btnText: 'Lihat Detail',
    btnText_en: 'View Details',
  },
];
