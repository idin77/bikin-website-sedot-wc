import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trackConversion } from '../lib/analytics';

export const WhatsAppFAB = () => (
  <a
    href="https://wa.me/6285716551653"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 text-white py-3 px-5 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 flex items-center justify-center gap-2 animate-bounce"
    aria-label="Chat via WhatsApp"
    onClick={() => trackConversion('Conversion', { type: 'WhatsAppFAB' })}
  >
    <MessageCircle size={24} />
    <span className="font-medium whitespace-nowrap">Chat Kami</span>
  </a>
);
