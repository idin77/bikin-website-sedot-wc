import React from 'react';

const benefits = [
  { title: "Desain Modern & Responsif", desc: "Tampil memukau di HP dan laptop pelanggan" },
  { title: "SEO-Friendly", desc: "Mudah ditemukan di pencarian Google untuk 'sedot WC Karawang'" },
  { title: "Harga Terjangkau", desc: "Investasi cerdas khusus untuk UMKM lokal" },
  { title: "Proses Kilat", desc: "Website siap online dalam 3-7 hari kerja" },
  { title: "Gratis Bonus", desc: "Domain .com & hosting gratis tahun pertama" },
  { title: "Support Penuh", desc: "Panduan penggunaan dan dukungan teknis" },
];

export const Benefits = () => (
  <section className="py-16 px-6 bg-white dark:bg-gray-800 transition-colors">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">Mengapa Memilih Kami?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((b, i) => (
          <div key={i} className="p-6 border rounded-lg shadow-sm dark:border-gray-700">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{b.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
