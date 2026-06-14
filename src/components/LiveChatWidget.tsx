import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAgentAvailable, setIsAgentAvailable] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    if (!isAgentAvailable) {
      setTimeout(() => setIsAgentAvailable(true), 1000);
    }
  };

  return (
    <>
      <button 
        onClick={handleOpen}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 transition"
        aria-label="Open chat"
      >
        <MessageCircle size={28} />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors">
          <div className="flex justify-between items-center bg-blue-600 p-4 text-white">
            <h3 className="font-bold">Chat Bantuan</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat"><X size={20} /></button>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            {!isAgentAvailable ? (
              <p className="text-gray-500 dark:text-gray-400 text-sm italic">Menghubungkan ke agen...</p>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-sm text-gray-800 dark:text-gray-200">
                Halo! Kami siap membantu. Ada yang bisa kami bantu terkait layanan Sedot WC Anda?
              </div>
            )}
          </div>
          <div className="p-2 border-t dark:border-gray-700">
            <input type="text" placeholder="Tulis pesan..." className="w-full p-2 text-sm border rounded dark:bg-gray-900 border-gray-300 dark:border-gray-600 dark:text-white"/>
          </div>
        </div>
      )}
    </>
  );
};
