import React, { useState } from 'react';
import { Search } from 'lucide-react';

export const CompetitorAnalysis = () => {
  const [competitorUrl, setCompetitorUrl] = useState('');
  const [userUrl, setUserUrl] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/analyze-competitor", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ competitorUrl, userUrl }),
      });
      const data = await res.json();
      setAnalysis(data.analysis);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Analisis Kompetitor SEO
        </h2>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <input 
              type="text" 
              placeholder="URL Website Anda" 
              className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={userUrl}
              onChange={(e) => setUserUrl(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="URL Website Kompetitor" 
              className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={competitorUrl}
              onChange={(e) => setCompetitorUrl(e.target.value)}
            />
          </div>
          <button 
            onClick={analyze}
            disabled={loading}
            className="w-full bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition"
          >
            {loading ? 'Menganalisis...' : 'Mulai Analisis'}
          </button>
          
          {analysis && (
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg whitespace-pre-line text-gray-700 dark:text-gray-300">
              {analysis}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
