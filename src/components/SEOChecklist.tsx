import React, { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';

const checklistItems = [
  'Terdaftar di Google Business Profile',
  'Kata kunci lokal di konten website',
  'Website ramah perangkat seluler (mobile-friendly)',
  'Aktif di media sosial',
  'Mengumpulkan ulasan pelanggan di Google',
];

export const SEOChecklist = () => {
    const [checkedItems, setCheckedItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        if (checkedItems.includes(index)) {
            setCheckedItems(checkedItems.filter(item => item !== index));
        } else {
            setCheckedItems([...checkedItems, index]);
        }
    };

    return (
        <section className="py-16 px-6 bg-white dark:bg-gray-950 transition-colors">
            <div className="max-w-2xl mx-auto rounded-2xl bg-gray-50 dark:bg-gray-900 p-8 shadow-lg border border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Quick SEO Checklist untuk Bisnis Lokal
                </h2>
                <div className="space-y-4">
                    {checklistItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="flex items-center gap-3 cursor-pointer group"
                            onClick={() => toggleItem(index)}
                        >
                            {checkedItems.includes(index) ? (
                                <CheckSquare className="text-blue-600 group-hover:scale-110 transition-transform" size={24} />
                            ) : (
                                <Square className="text-gray-400 group-hover:scale-110 transition-transform" size={24} />
                            )}
                            <span className={`text-gray-700 dark:text-gray-300 ${checkedItems.includes(index) ? 'line-through text-gray-500' : ''}`}>
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
