import React, { memo } from 'react';

export const NoResults: React.FC = memo(() => (
  <div className="w-full flex flex-col items-center justify-center py-16">
    <div className="w-24 h-24 bg-lightText/10 rounded-full flex items-center justify-center mb-6">
      <svg
        className="w-12 h-12 text-lightText"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <h3 className="text-2xl font-bold text-text mb-2">Brak wyników</h3>
    <p className="text-lightText text-center max-w-md">
      Nie znaleziono produktów spełniających wybrane kryteria. Spróbuj zmienić
      filtry lub wyszukiwanie.
    </p>
  </div>
));

NoResults.displayName = 'NoResults';
