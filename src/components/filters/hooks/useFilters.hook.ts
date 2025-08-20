import { useState, useCallback, useEffect, useMemo } from 'react';
import type { Product } from '@/data/products.data';
import type { Filters } from '@/components/filters/types/filters.types';
import { getFilteredAndSortedProducts } from '@/components/filters/utils/filter.utils';

export const useFilters = () => {
  const [filters, setFilters] = useState<Filters>({
    search: '',
    sortBy: 'popularity',
    functions: 'all',
    energyClass: 'all',
    capacity: 'all',
  });

  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(filters.search);
    }, 300);

    return () => clearTimeout(timer);
  }, [filters.search]);

  const updateFilter = useCallback((key: keyof Filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const filterAndSortProducts = useCallback(
    (products: Product[]) => {
      const filtersWithDebouncedSearch = {
        ...filters,
        search: debouncedSearch,
      };

      return getFilteredAndSortedProducts(products, filtersWithDebouncedSearch);
    },
    [filters, debouncedSearch]
  );

  const searchSuggestions = useMemo(() => {
    return (products: Product[], maxSuggestions = 5) => {
      if (!debouncedSearch || debouncedSearch.length < 2) return [];

      const suggestions = new Set<string>();
      const searchLower = debouncedSearch.toLowerCase();

      products.forEach(product => {
        if (product.model.toLowerCase().includes(searchLower)) {
          suggestions.add(product.model);
        }
        if (product.name.toLowerCase().includes(searchLower)) {
          suggestions.add(product.name);
        }
        product.features.forEach(feature => {
          if (feature.toLowerCase().includes(searchLower)) {
            suggestions.add(feature);
          }
        });
      });

      return Array.from(suggestions).slice(0, maxSuggestions);
    };
  }, [debouncedSearch]);

  const resetFilters = useCallback(() => {
    setFilters({
      search: '',
      sortBy: 'popularity',
      functions: 'all',
      energyClass: 'all',
      capacity: 'all',
    });
    setDebouncedSearch('');
  }, []);

  return {
    filters,
    updateFilter,
    filterAndSortProducts,
    searchSuggestions,
    resetFilters,
    isSearching: filters.search !== debouncedSearch,
  };
};
