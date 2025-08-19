import { useState, useCallback } from 'react';

interface Filters {
  search: string;
  sortBy: string;
  functions: string;
  energyClass: string;
  capacity: string;
}

export const useFilters = () => {
  const [filters, setFilters] = useState<Filters>({
    search: '',
    sortBy: 'popularity',
    functions: 'all',
    energyClass: 'all',
    capacity: 'all',
  });

  const updateFilter = useCallback((key: keyof Filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  return { filters, updateFilter };
};
