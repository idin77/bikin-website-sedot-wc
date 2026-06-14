import React, { useEffect } from 'react';

const faqData = [
  { q: "Siapa pemilik website setelah selesai dibuat?", a: "Website sepenuhnya adalah hak milik Anda. Anda memegang kendali penuh atas domain dan hosting setelah proses pembayaran lunas." },
  { q: "Apakah website ini sulit dioperasikan?", a: "Sama sekali tidak. Kami mendesain website agar mudah dikelola oleh pemilik usaha. Kami juga memberikan panduan penggunaan sederhana." },
  { q: "Bagaimana dengan perpanjangan hosting dan domain?", a: "Kami akan memberikan pengingat 1 bulan sebelum masa aktif domain dan hosting tahunan Anda berakhir agar website tetap online tanpa gangguan." },
  { q: "Apakah ada biaya perawatan bulanan?", a: "Untuk web statis, perawatannya sangat minimal. Kami menawarkan paket dukungan teknis opsional jika Anda membutuhkan bantuan untuk update konten secara berkala." },
];

export const FAQStructuredData = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                }
            }))
        });
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return null;
};
