import React, { useState, useEffect } from 'react';
import { LanguageToggle } from './LanguageToggle';

export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [lang, setLang] = useState('id');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <span className="font-bold text-xl text-gray-900 dark:text-white transition-colors duration-300">
          Sedot WC Karawang
        </span>
        <div className="flex gap-6 text-sm font-medium items-center">
            <a href="#layanan" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">Layanan</a>
            <a href="#kontak" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">Hubungi Kami</a>
            <LanguageToggle lang={lang} toggle={() => setLang(lang === 'id' ? 'en' : 'id')} />
        </div>
      </div>
    </nav>
  );
};
