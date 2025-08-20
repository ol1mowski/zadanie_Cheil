import React from 'react';
import arrowIcon from '../../../assets/arrow.svg';
import type { FilterOption } from '@/components/filters/types/filters.types';

interface FilterDropdownProps {
  label: string;
  value: string;
  options: FilterOption[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
  getDisplayValue: (value: string) => string;
  resultsCount?: number;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  value,
  options,
  isOpen,
  onToggle,
  onSelect,
  getDisplayValue,
  resultsCount,
}) => {
  const handleSelect = (optionValue: string) => {
    onSelect(optionValue);
  };

  return (
    <div className="space-y-2">
      <label className="block text-base font-bold text-text">{label}</label>
      <div className="relative filter-dropdown">
        <div
          className="w-full px-3 py-2 bg-white text-text cursor-pointer shadow-sm font-sans border-none"
          onClick={onToggle}
          role="button"
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              onToggle();
            }
          }}
        >
          <div className="flex items-center justify-between">
            <span>{getDisplayValue(value)}</span>
            <img
              src={arrowIcon}
              alt="dropdown arrow"
              className="w-4 h-4 pointer-events-none"
            />
          </div>
        </div>

        {isOpen && (
          <ul className="absolute top-full left-0 right-0 bg-white shadow-lg z-10 mt-1">
            {options.map(option => (
              <li
                key={option.value}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {resultsCount !== undefined && (
        <p className="text-sm text-text mt-2">Liczba wyników: {resultsCount}</p>
      )}
    </div>
  );
};
