import React, { useState } from 'react';
import { Search, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

export const SEORankTracker = () => {
  const [bizName, setBizName] = useState('');
  const [result, setResult] = useState<null | { rank: number; score: number }>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = () => {
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setResult({ rank: Math.floor(Math.random() * 10) + 1, score: Math.floor(Math.random() * 40) + 50 });
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Cek Peringkat SEO Lokal Anda</h2>
        {!result ? (
          <div className="space-y-4">
            <input
              type="text"
              value={bizName}
              onChange={(e) => setBizName(e.target.value)}
              placeholder="Masukkan nama bisnis Anda..."
              className="w-full p-3 rounded border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            <button 
              onClick={handleTrack} 
              disabled={loading || !bizName}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition flex items-center justify-center gap-2"
            >
              {loading ? 'Menganalisis...' : <><Search size={20} /> Cek Peringkat</>}
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300">Peringkat estimasi untuk "{bizName}"</p>
              <p className="text-5xl font-bold text-blue-600 dark:text-blue-400 my-2">#{result.rank}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Skor SEO Lokal: {result.score}/100</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-bold text-gray-800 dark:text-white flex items-center gap-2"><TrendingUp size={20} /> Tips Peningkatan:</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex gap-2"><CheckCircle size={16} className="text-green-500" /> Optimasi Google Business Profile Anda.</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-green-500" /> Tambahkan kata kunci "Sedot WC Karawang" di judul website.</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-green-500" /> Kumpulkan ulasan positif dari pelanggan lokal.</li>
              </ul>
            </div>
            <button onClick={() => setResult(null)} className="w-full text-blue-600 dark:text-blue-400 font-medium">Cek bisnis lain</button>
          </div>
        )}
      </div>
    </section>
  );
};
