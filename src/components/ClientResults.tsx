import React from 'react';

export const ClientResults = () => {
  const results = [
    { metric: "+300%", label: "Panggilan Harian", business: "Sedot WC Karawang Barat" },
    { metric: "+250%", label: "Jangkauan Peta", business: "Sedot WC Karawang Timur" },
    { metric: "+400%", label: "Rating Google", business: "Sedot WC Cikampek" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Transformasi Bisnis Lokal Karawang
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((r, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:shadow-md transition-shadow">
              <div className="text-5xl font-extrabold text-blue-600 mb-2">{r.metric}</div>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1">{r.label}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{r.business}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
