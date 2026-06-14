import React, { useState, useEffect } from 'react';
import { Skeleton } from './Skeleton';

const mockups = [
  { title: "Layout Modern Berwarna Biru", desc: "Fokus pada kepercayaan dan profesionalisme dengan warna biru korporat." },
  { title: "Layout Hijau & Segar", desc: "Ekspektasi bersih, higienis, dan terpercaya bagi lingkungan." },
  { title: "Layout Minimalis Hitam-Putih", desc: "Desain elegan dan langsung fokus pada tombol tindakan (Chat)." },
];

export const PortfolioSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">Pratinjau Desain Website</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {isLoading
            ? [...Array(3)].map((_, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-6 transition-colors">
                  <Skeleton className="h-40 mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))
            : mockups.map((m, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-lg overflow-hidden transition hover:scale-105">
                  <div className="h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 italic transition-colors">
                    [Mockup Desain {i + 1}]
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-400 mb-2">{m.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{m.desc}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};
