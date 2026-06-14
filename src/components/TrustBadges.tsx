import React from 'react';
import { ShieldCheck, Award, ThumbsUp } from 'lucide-react';

export const TrustBadges = () => (
  <section className="py-8 bg-white dark:bg-gray-950 transition-colors">
    <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
        <ShieldCheck className="text-green-500" />
        <span className="font-semibold">SSL Secured</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
        <Award className="text-yellow-500" />
        <span className="font-semibold">Local Expert</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
        <ThumbsUp className="text-blue-500" />
        <span className="font-semibold">100% Guaranteed</span>
      </div>
    </div>
  </section>
);
