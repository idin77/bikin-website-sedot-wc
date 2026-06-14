import React from 'react';

const features = [
  "Tombol Chat WhatsApp Langsung (1-Klik)",
  "Galeri Foto Hasil Pekerjaan",
  "Halaman Detail Layanan & Harga",
  "Formulir Kontak Responsif",
  "Integrasi Peta Google Maps",
];

export const Features = () => (
  <section className="py-16 px-6 bg-blue-50 dark:bg-gray-900 transition-colors">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">Apa yang Anda Dapatkan?</h2>
      <ul className="grid md:grid-cols-2 gap-4">
        {features.map((f, i) => (
          <li key={i} className="flex items-center text-lg text-gray-700 dark:text-gray-300">
            <span className="mr-2 text-green-600 dark:text-green-400">✓</span> {f}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
