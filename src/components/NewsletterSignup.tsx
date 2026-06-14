import React, { useState } from 'react';

export const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih! Email ${email} telah terdaftar untuk menerima Tips & Trik Digital Marketing.`);
    setEmail('');
  };

  return (
    <section className="py-16 px-6 bg-gray-900 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Ingin Tahu Cara Menarik Lebih Banyak Pelanggan?</h3>
        <p className="text-gray-400 mb-6">Dapatkan tips & trik digital marketing khusus untuk bisnis sedot WC langsung di inbox Anda.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan alamat email Anda"
            className="flex-grow px-4 py-3 rounded text-gray-900 placeholder-gray-500"
            required
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition">
            Daftar Sekarang
          </button>
        </form>
      </div>
    </section>
  );
};
