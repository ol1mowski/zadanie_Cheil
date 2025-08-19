import { useState, useCallback } from 'react';
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

  const updateFilter = useCallback((key: keyof Filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const filterAndSortProducts = useCallback(
    (products: Product[]) => {
      let filteredProducts = [...products];

      if (filters.search) {
        filteredProducts = filteredProducts.filter(
          product =>
            product.model
              .toLowerCase()
              .includes(filters.search.toLowerCase()) ||
            product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
            product.features.some(feature =>
              feature.toLowerCase().includes(filters.search.toLowerCase())
            )
        );
      }

      if (filters.functions !== 'all') {
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

      if (filters.energyClass !== 'all') {
        filteredProducts = filteredProducts.filter(
          product => product.energyClass === filters.energyClass
        );
      }

      if (filters.capacity !== 'all') {
        filteredProducts = filteredProducts.filter(
          product =>
            product.capacity.toString() === filters.capacity.replace('kg', '')
        );
      }

      switch (filters.sortBy) {
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
    [filters]
  );

  return {
    filters,
    updateFilter,
    filterAndSortProducts,
    filteredProductsCount: 0,
  };
};
