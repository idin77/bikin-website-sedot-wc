import React, { useState } from 'react';
import { Search, CheckCircle, XCircle } from 'lucide-react';

export const LocalSEOAudit = () => {
  const [url, setUrl] = useState('');
  const [audit, setAudit] = useState<{score: number, findings: string[]} | null>(null);
  const [loading, setLoading] = useState(false);

  const auditSite = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/seo-audit", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      setAudit(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Audit SEO Lokal Instan
        </h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex gap-4 mb-6">
            <input 
              type="text" 
              placeholder="Masukkan URL Website Anda" 
              className="flex-grow p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button 
              onClick={auditSite}
              disabled={loading}
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? 'Memproses...' : 'Audit Sekarang'}
            </button>
          </div>
          
          {audit && (
            <div className="mt-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-extrabold text-blue-600">{audit.score}/100</div>
                <div className="text-gray-500">Skor Kesiapan SEO Lokal</div>
              </div>
              <div className="space-y-4">
                {audit.findings.map((f, i) => (
                  <div key={i} className="flex gap-3 items-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <CheckCircle className="text-green-500" size={20}/>
                    <span className="text-gray-700 dark:text-gray-200">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
