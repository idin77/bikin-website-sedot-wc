import React, { useState } from 'react';
import { Calendar, Phone, User, CheckCircle } from 'lucide-react';
import { trackConversion } from '../lib/analytics';

export const CallbackScheduler = () => {
    const [formData, setFormData] = useState({ name: '', whatsapp: '', dateTime: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        // Simulated API call
        trackConversion('Conversion', { type: 'CallbackScheduler', ...formData });
        setTimeout(() => setStatus('success'), 1500);
    };

    if (status === 'success') {
        return (
            <section className="py-16 px-6 text-center">
                <div className="max-w-xl mx-auto rounded-2xl bg-gray-50 dark:bg-gray-900 p-8 shadow-lg border border-gray-100 dark:border-gray-800">
                    <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Permintaan Terkirim!</h3>
                    <p className="text-gray-600 dark:text-gray-400">Terima kasih {formData.name}, kami akan segera menghubungi Anda di {formData.whatsapp} pada {new Date(formData.dateTime).toLocaleString()}.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 px-6 bg-white dark:bg-gray-950 transition-colors">
            <div className="max-w-xl mx-auto rounded-2xl bg-gray-50 dark:bg-gray-900 p-8 shadow-lg border border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Jadwalkan Konsultasi</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <User className="absolute top-3 left-3 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Nama Anda"
                            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                    <div className="relative">
                        <Phone className="absolute top-3 left-3 text-gray-400" size={20} />
                        <input
                            type="tel"
                            placeholder="Nomor WhatsApp"
                            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                            value={formData.whatsapp}
                            onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                        />
                    </div>
                    <div className="relative">
                        <Calendar className="absolute top-3 left-3 text-gray-400" size={20} />
                        <input
                            type="datetime-local"
                            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                            value={formData.dateTime}
                            onChange={(e) => setFormData({...formData, dateTime: e.target.value})}
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center"
                    >
                        {status === 'loading' ? 'Mengirim...' : 'Kirim Permintaan'}
                    </button>
                </form>
            </div>
        </section>
    );
};
