import React, { useState } from 'react';

const options = {
  pages: { "1-3 Halaman": 1000000, "4-8 Halaman": 2000000, "9+ Halaman": 3500000 },
  cms: { "Tanpa CMS": 0, "Dengan CMS (WordPress)": 800000 },
  logo: { "Tanpa Desain Logo": 0, "Desain Logo Profesional": 500000 },
};

export const PriceEstimator = () => {
  const [selections, setSelections] = useState({ pages: "1-3 Halaman", cms: "Tanpa CMS", logo: "Tanpa Desain Logo" });

  const total = 
    options.pages[selections.pages as keyof typeof options.pages] +
    options.cms[selections.cms as keyof typeof options.cms] +
    options.logo[selections.logo as keyof typeof options.logo];

  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-900 border dark:border-gray-800 p-8 rounded-xl shadow-lg transition-colors">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Estimasi Harga Website</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Jumlah Halaman:</label>
            <select className="w-full p-3 rounded border dark:border-gray-700 dark:bg-gray-800 dark:text-white" value={selections.pages} onChange={(e) => setSelections({...selections, pages: e.target.value})}>
              {Object.keys(options.pages).map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Sistem (CMS):</label>
            <select className="w-full p-3 rounded border dark:border-gray-700 dark:bg-gray-800 dark:text-white" value={selections.cms} onChange={(e) => setSelections({...selections, cms: e.target.value})}>
              {Object.keys(options.cms).map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Desain Logo:</label>
            <select className="w-full p-3 rounded border dark:border-gray-700 dark:bg-gray-800 dark:text-white" value={selections.logo} onChange={(e) => setSelections({...selections, logo: e.target.value})}>
              {Object.keys(options.logo).map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          
          <div className="pt-6 border-t dark:border-gray-700 text-center">
            <p className="text-gray-600 dark:text-gray-400">Total Estimasi:</p>
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">Rp {total.toLocaleString('id-ID')}</p>
          </div>

          <a href="https://wa.me/628123456789" className="block w-full text-center bg-yellow-500 text-blue-900 font-bold py-3 rounded-full hover:bg-yellow-400 transition">
            Pesan Sekarang & Konsultasi
          </a>
        </div>
      </div>
    </section>
  );
};
