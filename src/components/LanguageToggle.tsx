import React from 'react';

export const LanguageToggle = ({ lang, toggle }: { lang: string; toggle: () => void }) => {
  return (
    <button
      onClick={toggle}
      className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-xs font-bold text-gray-700 dark:text-gray-200 transition-colors"
    >
      {lang.toUpperCase()}
    </button>
  );
};
