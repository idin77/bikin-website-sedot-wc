import React, { useState } from 'react';

const questions = [
  "Apakah bisnis Anda sudah memiliki website profesional?",
  "Apakah pelanggan mudah menemukan Anda saat mencari 'sedot wc karawang' di Google?",
  "Apakah Anda memiliki sistem untuk mencatat & melacak pertanyaan pelanggan dari internet?",
];

export const SEOQuiz = () => {
  const [answers, setAnswers] = useState<boolean[]>(Array(questions.length).fill(true));
  const [showResult, setShowResult] = useState(false);

  const score = answers.filter((a) => a === true).length;

  return (
    <section className="py-16 px-6 bg-blue-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Seberapa Siap Bisnis Sedot WC Anda?</h2>
        {!showResult ? (
          <div className="space-y-6">
            {questions.map((q, i) => (
              <div key={i} className="flex items-center justify-between">
                <p className="dark:text-gray-300">{q}</p>
                <div className="flex gap-2">
                  <button onClick={() => setAnswers(prev => {
                      const next = [...prev]; next[i] = true; return next;})} className={`px-4 py-2 rounded ${answers[i] ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-600'}`}>Ya</button>
                  <button onClick={() => setAnswers(prev => {
                      const next = [...prev]; next[i] = false; return next;})} className={`px-4 py-2 rounded ${!answers[i] ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-600'}`}>Tidak</button>
                </div>
              </div>
            ))}
            <button onClick={() => setShowResult(true)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition">
              Lihat Hasil
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Skor Anda: {score} / {questions.length}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {score === questions.length 
                ? "Bagus! Bisnis Anda sudah memiliki fondasi digital yang kuat." 
                : "Bisnis Anda berisiko kehilangan calon pelanggan. Website profesional akan membantu Anda mendominasi pencarian lokal di Karawang."}
            </p>
            <a href="https://wa.me/628123456789" className="inline-block bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition">
              Konsultasi Gratis Sekarang
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
