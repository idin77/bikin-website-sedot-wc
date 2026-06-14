import React from 'react';

const faqs = [
  { q: "Siapa pemilik website setelah selesai dibuat?", a: "Website sepenuhnya adalah hak milik Anda. Anda memegang kendali penuh atas domain dan hosting setelah proses pembayaran lunas." },
  { q: "Apakah website ini sulit dioperasikan?", a: "Sama sekali tidak. Kami mendesain website agar mudah dikelola oleh pemilik usaha. Kami juga memberikan panduan penggunaan sederhana." },
  { q: "Bagaimana dengan perpanjangan hosting dan domain?", a: "Kami akan memberikan pengingat 1 bulan sebelum masa aktif domain dan hosting tahunan Anda berakhir agar website tetap online tanpa gangguan." },
  { q: "Apakah ada biaya perawatan bulanan?", a: "Untuk web statis, perawatannya sangat minimal. Kami menawarkan paket dukungan teknis opsional jika Anda membutuhkan bantuan untuk update konten secara berkala." },
];

export const FAQSection = () => (
  <section className="py-16 px-6 bg-white dark:bg-gray-950 transition-colors">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">Pertanyaan Umum (FAQ)</h2>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b pb-4 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-2">{faq.q}</h3>
            <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
