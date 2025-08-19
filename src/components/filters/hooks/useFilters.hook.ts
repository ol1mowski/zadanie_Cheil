import { useState, useCallback, useEffect, useMemo } from 'react';
import type { Product } from '@/data/products.data';

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
      let filteredProducts = [...products];

      if (debouncedSearch) {
        const searchLower = debouncedSearch.toLowerCase();
        filteredProducts = filteredProducts.filter(
          product =>
            product.model.toLowerCase().includes(searchLower) ||
            product.name.toLowerCase().includes(searchLower) ||
            product.features.some(feature =>
              feature.toLowerCase().includes(searchLower)
            )
        );
      }

      if (filters.functions && filters.functions !== 'all') {
        filteredProducts = filteredProducts.filter(product =>
          product.features.some(feature => {
            switch (filters.functions) {
              case 'addwash':
                return feature.includes('AddWash');
              case 'ai-control':
                return feature.includes('AI Control');
              case 'inverter':
                return feature.includes('inwerterowy');
              case 'display':
                return feature.includes('elektroniczny');
              default:
                return true;
            }
          })
        );
      }

      if (filters.energyClass && filters.energyClass !== 'all') {
        filteredProducts = filteredProducts.filter(
          product => product.energyClass === filters.energyClass
        );
      }

      if (filters.capacity && filters.capacity !== 'all') {
        filteredProducts = filteredProducts.filter(
          product =>
            product.capacity.toString() === filters.capacity.replace('kg', '')
        );
      }

      switch (filters.sortBy || 'popularity') {
        case 'price':
          filteredProducts.sort((a, b) => a.price.amount - b.price.amount);
          break;
        case 'capacity':
          filteredProducts.sort((a, b) => a.capacity - b.capacity);
          break;
        case 'popularity':
        default:
          filteredProducts.sort((a, b) => parseInt(a.id) - parseInt(b.id));
          break;
      }

      return filteredProducts;
    },
    [
      debouncedSearch,
      filters.functions,
      filters.energyClass,
      filters.capacity,
      filters.sortBy,
    ]
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

  return {
    filters,
    updateFilter,
    filterAndSortProducts,
    searchSuggestions,
    isSearching: filters.search !== debouncedSearch,
  };
};
