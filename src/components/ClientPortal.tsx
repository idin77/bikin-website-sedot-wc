import React, { useState } from 'react';
import { Check } from 'lucide-react';

const projects = {
  "WC-Karawang-001": { name: "Sedot WC Lancar", status: 2 }, // 0: Design, 1: Content, 2: Review, 3: Completed
  "WC-Karawang-002": { name: "Jasa Sedot WC Barokah", status: 1 },
};

const phases = ["Desain", "Upload Konten", "Review Akhir", "Selesai"];

export const ClientPortal = () => {
  const [projectId, setProjectId] = useState('');
  const [project, setProject] = useState<null | { name: string; status: number }>(null);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (projects[projectId as keyof typeof projects]) {
      setProject(projects[projectId as keyof typeof projects]);
      setError('');
    } else {
      setError('ID Proyek tidak ditemukan.');
      setProject(null);
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Portal Klien: Pantau Proyek Anda</h2>
        {!project ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              placeholder="Masukkan Project ID (contoh: WC-Karawang-001)"
              className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition">
              Masuk
            </button>
          </form>
        ) : (
          <div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">Proyek: {project.name}</h3>
            <div className="flex justify-between items-center mt-8">
              {phases.map((phase, i) => (
                <div key={i} className={`flex flex-col items-center ${i <= project.status ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 border-2 ${i <= project.status ? 'border-blue-600 bg-blue-100 dark:bg-blue-900' : 'border-gray-300 dark:bg-gray-700'}`}>
                    {i < project.status ? <Check size={20} /> : i + 1}
                  </div>
                  <span className="text-xs font-semibold">{phase}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
