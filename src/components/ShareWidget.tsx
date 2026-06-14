import React, { useState } from 'react';
import { Share2, MessageCircle, Facebook, Copy, Check } from 'lucide-react';

export const ShareWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const url = window.location.href;
  const text = 'Cek layanan jasa sedot WC di Karawang!';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isOpen && (
        <div className="flex flex-col gap-2 mb-2 animate-in slide-in-from-bottom-4">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all"
            aria-label="Share via WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all"
            aria-label="Share via Facebook"
          >
            <Facebook size={20} />
          </a>
          <button
            onClick={copyToClipboard}
            className="p-3 bg-gray-600 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all"
            aria-label="Copy link"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center animate-bounce"
        aria-label="Share website"
      >
        <Share2 size={24} />
      </button>
    </div>
  );
};
