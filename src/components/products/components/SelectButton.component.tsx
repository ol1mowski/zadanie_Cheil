import React, { memo } from 'react';

interface SelectButtonProps {
  isSelected: boolean;
  onSelect: () => void;
}

export const SelectButton: React.FC<SelectButtonProps> = memo(
  ({ isSelected, onSelect }) => {
    return (
      <div className="flex justify-center">
        <button
          onClick={onSelect}
          className={`w-32 py-3 px-4 rounded-xl transition-colors duration-200 uppercase tracking-[0.15em] cursor-pointer text-sm ${
            isSelected
              ? 'bg-dark text-white hover:bg-dark/90'
              : 'bg-darkBlue text-white hover:bg-darkBlue/90'
          }`}
        >
          {isSelected ? 'Wybrane' : 'Wybierz'}
        </button>
      </div>
    );
  }
);

SelectButton.displayName = 'SelectButton';
