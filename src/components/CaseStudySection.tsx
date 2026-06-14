import React from 'react';
import { motion } from 'motion/react';
import { Target, TrendingUp, Search, Zap } from 'lucide-react';

const timeline = [
  { title: "Titik Awal", desc: "Tidak ada website, pelanggan hanya dari mulut ke mulut.", icon: Zap },
  { title: "Optimasi SEO & Profil", desc: "Pembuatan website dan optimasi Google Business Profile.", icon: Search },
  { title: "Lonjakan Traffic", desc: "Peningkatan panggilan masuk sebesar 300% dalam 2 bulan.", icon: TrendingUp },
  { title: "Posisi #1 Lokal", desc: "Ranking teratas untuk kata kunci 'Sedot WC Karawang'.", icon: Target },
];

export const CaseStudySection = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">Studi Kasus: Sedot WC Barokah</h2>
        
        <div className="relative border-l-4 border-blue-500 ml-3 md:ml-0 md:border-l-0 md:border-t-4">
          <div className="grid md:grid-cols-4 gap-8">
            {timeline.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-8 md:pl-0 pt-0 md:pt-8"
              >
                <div className="absolute -left-[14px] md:left-0 md:-top-[22px] w-6 h-6 rounded-full bg-blue-500 border-4 border-white dark:border-gray-950"></div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm h-full">
                  <step.icon className="text-blue-600 dark:text-blue-400 mb-4" size={32} />
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
