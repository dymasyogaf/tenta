// Webinar Meta LP — Content Data with normal sentence casing (huruf kapital di depan)
import bilalPhoto from '../assets/webinar/bilal-fb.avif';

export const WEBINAR_META = {
  seo: {
    title: 'Punya iklan yang tadinya untung? Pas di-scale kok malah boncos? — Webinar Meta Ads Tentaklik',
    description: 'Bedah kesalahan scaling yang bikin campaign profitable kehilangan performanya. Live session 100% FREE via Zoom.',
    keywords: [
      'webinar meta ads gratis',
      'scaling meta ads',
      'kesalahan scaling facebook ads',
      'belajar meta ads',
      'optimasi meta ads',
      'tentaklik webinar'
    ],
  },
  event: {
    date: 'Jumat, 25 September 2026',
    time: '20.00 WIB',
    platform: 'Live via Zoom',
    isoDate: '2026-09-25T20:00:00+07:00',
  },
  telegramUrl: 'https://t.me/dapurMeta',
  hero: {
    badge: 'Live Session 100% Free via Zoom',
    title: 'Punya iklan yang tadinya untung?',
    titleAccent: 'Pas di-scale kok malah buntung?',
    subtitle: 'Bedah kesalahan scaling yang bikin campaign profitable kehilangan performanya',
    story: [
      'Campaign sudah profitable.',
      'ROAS bagus. Order mulai stabil.',
      'Tapi begitu budget dinaikkan...',
      'CPA naik. ROAS turun. Cost membengkak.',
      'Sebenarnya apa yang terjadi?'
    ],
    ctaText: 'Gabung Webinar Gratis',
    ctaSub: '100% Gratis · Live via Zoom',
    ctaHref: '#komunitas',
    mockupSrc: '/assets/meta/sewa-akun-meta-ads-whitelist.avif',
  },
  problems: {
    eyebrow: 'Kendala utama',
    heading: 'Pernah mengalami ini?',
    items: [
      'Campaign awalnya profitable, tapi setelah budget dinaikkan performanya turun?',
      'ROAS bagus di budget kecil, tapi mulai berantakan ketika spending diperbesar?',
      'CPA tiba-tiba naik setelah melakukan scaling?',
      'Bingung kapan harus Stop, Wait, atau Scale?',
      'Sudah mencoba vertical maupun horizontal scaling, tapi hasilnya belum konsisten?',
      'Takut menaikkan budget karena khawatir campaign yang tadinya untung malah boncos?'
    ],
    closer: 'Kalau pernah mengalami ini, webinar ini untuk kamu.',
  },
  curriculum: {
    eyebrow: 'Materi sesi',
    heading: 'Yang akan kamu pelajari',
    items: [
      {
        num: '01',
        title: '01 — Pahami kenapa campaign bisa ambruk saat di-scale',
        lead: 'Bukan cuma soal budget terlalu kecil atau terlalu besar.',
        desc: 'Kita akan membahas bagaimana algoritma, data, delivery, dan perubahan volume dapat memengaruhi performa campaign ketika scaling dilakukan.'
      },
      {
        num: '02',
        title: '02 — Bedah 5 kesalahan scaling yang sering bikin boncos',
        lead: 'Cari tahu kesalahan yang sering terjadi ketika advertiser mencoba memperbesar campaign yang sebelumnya sudah profitable.',
        desc: 'Mulai dari salah membaca data, timing yang kurang tepat, sampai perubahan campaign yang terlalu agresif.'
      },
      {
        num: '03',
        title: '03 — Framework STOP – WAIT – SCALE',
        lead: 'Pelajari cara membaca kondisi campaign sebelum mengambil keputusan:',
        framework: [
          {
            label: 'STOP',
            desc: 'Kapan campaign sebaiknya tidak dipaksa untuk scale?'
          },
          {
            label: 'WAIT',
            desc: 'Kapan campaign sebenarnya membutuhkan waktu dan data tambahan?'
          },
          {
            label: 'SCALE',
            desc: 'Kapan campaign menunjukkan sinyal yang lebih siap untuk dinaikkan volumenya?'
          }
        ]
      },
      {
        num: '04',
        title: '04 — Teknik scaling yang lebih aman',
        lead: 'Kita akan membahas pendekatan:',
        bullets: [
          'Vertical Scaling',
          'Horizontal Scaling',
          'CBO vs ABO',
          'Creative Freshness'
        ],
        desc: 'Termasuk bagaimana menjaga campaign tetap memiliki ruang untuk berkembang ketika volume mulai meningkat.'
      },
      {
        num: '05',
        title: '05 — Studi kasus before → after',
        lead: 'Kita akan melihat contoh campaign yang mengalami perubahan performa setelah scaling.',
        sublead: 'Kemudian membedah:',
        questions: [
          'Apa yang berubah?',
          'Apa yang menyebabkan performa turun?',
          'Apa yang perlu diperbaiki?',
          'Bagaimana proses scaling dilakukan?'
        ]
      }
    ]
  },
  audience: {
    eyebrow: 'Target peserta',
    heading: 'Siapa yang wajib hadir?',
    sub: 'Sesi ini dirancang untuk kamu yang sudah menjalankan Meta Ads dan ingin memahami scaling dengan pendekatan yang lebih terstruktur.',
    items: [
      {
        role: 'Business Owner',
        desc: 'Sudah beriklan dan ingin meningkatkan volume tanpa asal menaikkan budget.'
      },
      {
        role: 'Performance Marketer',
        desc: 'Ingin memahami lebih dalam proses scaling dan membaca perubahan performa campaign.'
      },
      {
        role: 'Digital Marketer',
        desc: 'Ingin memperdalam strategi Meta Ads setelah memahami basic campaign setup.'
      },
      {
        role: 'Media Buyer',
        desc: 'Sering menemukan campaign profitable tetapi kesulitan mempertahankan performanya ketika scale.'
      },
      {
        role: 'Advertiser',
        desc: 'Sudah memiliki campaign yang berjalan dan ingin meningkatkan volume dengan lebih terukur.'
      }
    ]
  },
  speaker: {
    eyebrow: 'Pembicara',
    name: 'Bilal Abdurrahman',
    titleLine1: 'Meta Ads Specialist',
    titleLine2: 'Performance Marketing',
    bio: 'Berpengalaman dalam mengelola dan menganalisis campaign digital advertising serta membantu advertiser memahami strategi scaling berdasarkan data dan kondisi campaign.',
    photoSrc: bilalPhoto.src,
  },
  agenda: {
    eyebrow: 'Agenda webinar',
    heading: 'Yang akan kita bedah',
    items: [
      { num: '01', title: 'Kenapa campaign bisa ambruk?', desc: 'Pahami kenapa campaign profitable bisa ambruk saat di-scale.' },
      { num: '02', title: '5 kesalahan saat scaling', desc: 'Kesalahan paling sering yang menyebabkan performa turun.' },
      { num: '03', title: 'Framework STOP – WAIT – SCALE', desc: 'Baca timing scaling berdasarkan kondisi campaign.' },
      { num: '04', title: 'Strategi & struktur scaling', desc: 'Vertical vs Horizontal Scaling, CBO vs ABO, dan creative freshness.' },
      { num: '05', title: 'Studi kasus before-after', desc: 'Bedah campaign yang mengalami proses scaling.' }
    ]
  },
  valueProp: {
    badge: 'Live session · 100% gratis',
    heading: 'Bukan cuma dengar materi.',
    subheading: 'Kamu juga akan mendapatkan:',
    perks: [
      'Live Zoom Session',
      'Materi Webinar',
      'Pembahasan Tactical Scaling',
      'Studi Kasus Campaign',
      'Sesi Tanya Jawab Interaktif'
    ],
    note: 'Tidak ada biaya pendaftaran.',
    ctaText: 'Gabung Webinar Sekarang',
  },
  closingHook: {
    heading: 'Siap scale tanpa asal naikkan budget?',
    lead: 'Campaign yang profitable belum tentu siap untuk langsung di-scale.',
    prompt: 'Sebelum menaikkan budget, kamu perlu tahu:',
    bullets: [
      'Apakah campaign memang sudah siap?',
      'Apa sinyal yang harus diperhatikan?',
      'Dan teknik scaling apa yang paling sesuai dengan kondisi campaign?'
    ],
    warningLines: [
      'Jangan sampai campaign yang tadinya menghasilkan...',
      'justru kehilangan performa karena salah langkah saat scaling.'
    ],
    ctaText: 'Amankan Tempat Webinar',
    ctaSub: '100% Gratis · Live via Zoom'
  },
  community: {
    badge: 'Grup resmi peserta',
    title: 'Webinar Meta Ads Tentaklik',
    desc: 'Setelah mendaftar, kamu akan mendapatkan akses ke komunitas peserta untuk memperoleh informasi webinar dan materi yang dibagikan oleh Tentaklik.',
    perksHeading: 'Yang akan kamu dapatkan:',
    perks: [
      {
        title: 'Akses Live Webinar',
        desc: 'Ikuti sesi secara langsung melalui Zoom pada Jumat, 25 September 2026 Pukul 20.00 WIB.'
      },
      {
        title: 'Materi Webinar',
        desc: 'Dapatkan materi yang digunakan selama sesi.'
      },
      {
        title: 'Informasi & Reminder',
        desc: 'Tidak perlu khawatir ketinggalan jadwal webinar.'
      }
    ],
    ctaText: 'Gabung di Telegram',
    footnote: '100% Gratis · Akses Peserta via Komunitas'
  }
};
