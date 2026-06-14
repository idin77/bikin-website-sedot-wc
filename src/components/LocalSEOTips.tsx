import React, { useState } from 'react';
import { Lightbulb, Info } from 'lucide-react';

const seoTips = [
  { title: "Verifikasi Google Business Profile", desc: "Pastikan profil bisnis Anda terverifikasi penuh dan aktif." },
  { title: "Optimasi Nama Bisnis", desc: "Gunakan format nama yang jelas, contoh: Sedot WC Karawang - [Nama Bisnis]." },
  { title: "Kategori yang Tepat", desc: "Pilih kategori utama 'Septic System Service' atau 'Jasa Sedot WC' yang relevan." },
  { title: "Target Ulasan Lokal", desc: "Minta pelanggan menyertakan istilah 'sedot wc' atau 'septictank' dalam ulasan mereka." },
  { title: "Foto Aksi Lokal", desc: "Unggah foto truk sedot wc Anda dengan latar belakang landmark atau lokasi di Karawang." },
  { title: "NAP Konsisten", desc: "Pastikan Nama, Alamat, dan Nomor Telepon sama persis di Google Maps dan direktori lainnya." },
];

export const LocalSEOTips = () => {
  const [activeTip, setActiveTip] = useState<number | null>(0);

  return (
    <section className="py-20 px-6 bg-blue-50 dark:bg-blue-950/20 transition-colors">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Tips SEO Lokal untuk Jasa Sedot WC
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {seoTips.map((tip, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl cursor-pointer transition-all ${activeTip === index ? 'bg-white dark:bg-gray-800 shadow-md ring-2 ring-blue-500' : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'}`}
              onClick={() => setActiveTip(index)}
            >
              <div className="flex gap-4 items-start">
                <Lightbulb className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{tip.title}</h3>
                  {activeTip === index && (
                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm animate-fade-in">{tip.desc}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
