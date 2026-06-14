import React, { useEffect, useState } from 'react';
import { Users, TrendingUp, CheckCircle } from 'lucide-react';
import { motion, useSpring, useTransform } from 'motion/react';

const Counter = ({ value, label }: { value: number; label: string }) => {
  const spring = useSpring(0, { duration: 2000 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return (
    <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg transition-colors">
      <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
        <motion.span>{display}</motion.span>+
      </div>
      <p className="text-gray-600 dark:text-gray-300 font-medium">{label}</p>
    </div>
  );
};

export const Metrics = () => (
  <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800 transition-colors">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">Hasil Nyata Bagi Mitra Kami</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
            <Users className="text-blue-500 mb-4" size={40} />
            <Counter value={50} label="Bisnis Lokal Dibantu" />
        </div>
        <div className="flex flex-col items-center">
            <TrendingUp className="text-blue-500 mb-4" size={40} />
            <Counter value={40} label="Peningkatan Orderan (%)" />
        </div>
        <div className="flex flex-col items-center">
            <CheckCircle className="text-blue-500 mb-4" size={40} />
            <Counter value={100} label="Website Mobile-Ready" />
        </div>
      </div>
    </div>
  </section>
);
