import { useState, useEffect, useCallback } from 'react';
import type { DropdownState } from '@/components/filters/types/filters.types';

export const useDropdowns = () => {
  const [openDropdowns, setOpenDropdowns] = useState<DropdownState>({
    sortBy: false,
    functions: false,
    energyClass: false,
    capacity: false,
  });

  const toggleDropdown = useCallback((dropdownName: keyof DropdownState) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [dropdownName]: !prev[dropdownName],
    }));
  }, []);

  const closeAllDropdowns = useCallback(() => {
    setOpenDropdowns({
      sortBy: false,
      functions: false,
      energyClass: false,
      capacity: false,
    });
  }, []);

  const closeDropdown = useCallback((dropdownName: keyof DropdownState) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [dropdownName]: false,
    }));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.filter-dropdown')) {
        closeAllDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeAllDropdowns]);

  return {
    openDropdowns,
    toggleDropdown,
    closeDropdown,
    closeAllDropdowns,
  };
};
