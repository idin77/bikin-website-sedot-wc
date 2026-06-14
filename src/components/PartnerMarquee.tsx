import React from 'react';
import { motion } from 'motion/react';
import { Building2, Landmark, Waves, Droplet, User, CircleDot } from 'lucide-react';

const partners = [
  { name: "Sedot WC Lancar", icon: Building2 },
  { name: "Karawang Bersih", icon: Landmark },
  { name: "Mitra Sanitasi", icon: Waves },
  { name: "Jaya Septic", icon: Droplet },
  { name: "Warga Karawang", icon: User },
  { name: "Pusat Sedot", icon: CircleDot },
];

export const PartnerMarquee = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700 overflow-hidden transition-colors">
      <div className="max-w-6xl mx-auto mb-8 px-6 text-center">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">Dipercaya oleh</h3>
      </div>
      <div className="relative flex overflow-x-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex gap-16 min-w-full"
        >
          {/* Duplicating the list ensures seamless scrolling */}
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <partner.icon size={28} />
              <span className="font-medium whitespace-nowrap">{partner.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
