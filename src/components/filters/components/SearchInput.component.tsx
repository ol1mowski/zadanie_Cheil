import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  isSearching: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  isSearching,
}) => {
  return (
    <div className="mb-6 flex justify-center">
      <div className="relative w-full max-w-xs">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 bg-white text-sm text-text placeholder-lightText focus:outline-none transition-all duration-200 will-change-transform pr-10"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        {isSearching && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="w-4 h-4 border-2 border-lightBlue border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {!isSearching && value && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg
              className="w-4 h-4 text-lightText"
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
        )}
      </div>
    </div>
  );
};
