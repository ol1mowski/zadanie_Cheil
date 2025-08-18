import { useState, useCallback } from 'react';

export interface Filters {
  search: string;
  sortBy: string;
  functions: string;
  energyClass: string;
  capacity: string;
}

const initialFilters: Filters = {
  search: '',
  sortBy: 'popularity',
  functions: 'all',
  energyClass: 'all',
  capacity: 'all',
};

export const useFilters = () => {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const updateFilter = useCallback((key: keyof Filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  const applyFilters = useCallback(() => {
    console.log('Applying filters:', filters);
  }, [filters]);

  return {
    filters,
    updateFilter,
    resetFilters,
    applyFilters,
  };
};
