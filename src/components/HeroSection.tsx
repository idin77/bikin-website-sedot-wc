import React, { useState } from 'react';

export const HeroSection = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const headlines = [
    "JASA PEMBUATAN WEBSITE SEDOT WC KARAWANG",
    "Website Profesional untuk Bisnis Sedot WC Karawang"
  ];

  return (
    <header className="relative bg-blue-600 dark:bg-blue-900 text-white py-20 px-6 text-center transition-colors">
      <button 
        onClick={() => setHeadlineIndex(prev => (prev + 1) % headlines.length)}
        className="absolute top-4 right-4 bg-white/20 text-xs px-2 py-1 rounded hover:bg-white/40 transition"
      >
        Experiment: {headlineIndex + 1}
      </button>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{headlines[headlineIndex]}</h1>
      <p className="text-xl mb-8">Solusi cepat dan terpercaya untuk membuat bisnis sedot WC Anda mudah ditemukan pelanggan baru setiap hari.</p>
      <a href="https://wa.me/6285716551653" className="bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition">
        Konsultasi Gratis Sekarang
      </a>
    </header>
  );
};
