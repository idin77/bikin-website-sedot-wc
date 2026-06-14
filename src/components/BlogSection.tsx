import React from 'react';

const articles = [
  {
    title: "Cara SEO Lokal agar Pelanggan Mudah Menemukan Sedot WC Anda",
    snippet: "Pelajari teknik optimasi Google Maps dan pencarian lokal untuk mendominasi area Karawang dan sekitarnya.",
    readTime: "5 min baca"
  },
  {
    title: "Mengapa Bisnis Jasa Membutuhkan Website di Era Digital?",
    snippet: "Website bukan sekadar kartu nama online, tapi mesin pencari pelanggan 24 jam yang bekerja untuk Anda.",
    readTime: "4 min baca"
  },
  {
    title: "Strategi Konten untuk Membangun Kepercayaan Pelanggan",
    snippet: "Cara membuat konten yang meyakinkan pelanggan bahwa jasa sedot WC Anda profesional, aman, dan terpercaya.",
    readTime: "6 min baca"
  },
];

export const BlogSection = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">Tips & Panduan Digital</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-400 mb-3">{article.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{article.snippet}</p>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-500">{article.readTime}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
