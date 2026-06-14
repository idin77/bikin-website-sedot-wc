import React, { useState, useEffect } from 'react';
import { Skeleton } from './Skeleton';

const testimonials = [
  { name: "Pak Budi", role: "Pemilik Sedot WC Lancar", text: "Sebelum punya website, order sepi. Setelah pakai jasa ini, pelanggan dari Google makin sering telepon!" },
  { name: "Ibu Sari", role: "Owner Sedot WC Karawang", text: "Proses cepat, harganya masuk akal. Sangat membantu usaha kecil seperti saya." },
];

export const Testimonials = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Apa Kata Mitra Kami?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {isLoading
            ? [...Array(2)].map((_, i) => (
                <div key={i} className="p-6 border-gray-200 border rounded bg-white">
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <Skeleton className="h-5 w-1/3" />
                </div>
              ))
            : testimonials.map((t, i) => (
                <blockquote key={i} className="p-6 border-l-4 border-blue-500 bg-gray-50 dark:bg-gray-700 transition-colors">
                  <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{t.text}"</p>
                  <p className="font-bold text-blue-900 dark:text-blue-400">- {t.name}, {t.role}</p>
                </blockquote>
              ))}
        </div>
      </div>
    </section>
  );
};
