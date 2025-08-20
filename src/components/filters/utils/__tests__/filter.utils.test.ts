import { describe, it, expect } from 'vitest';
import {
  filterProductsBySearch,
  filterProductsByFunction,
  filterProductsByEnergyClass,
  filterProductsByCapacity,
  sortProducts,
  getFilteredAndSortedProducts,
} from '../filter.utils';
import type { Product } from '@/data/products.data';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Samsung Washing Machine',
    model: 'WW90T554DAE',
    features: ['AddWash', 'Inverter Motor', 'Electronic Display'],
    capacity: 9,
    dimensions: { height: 85, depth: 60, width: 60 },
    energyClass: 'A',
    price: {
      amount: 2499.99,
      currency: 'PLN',
      validFrom: '2024-01-01',
      validTo: '2024-12-31',
      installment: { monthlyAmount: 208.33, months: 12 },
    },
    image: '/pralka1.jpg',
  },
  {
    id: '2',
    name: 'LG Washing Machine',
    model: 'F4V510RSE',
    features: ['AI Control', 'Inverter Motor'],
    capacity: 10.5,
    dimensions: { height: 85, depth: 60, width: 60 },
    energyClass: 'B',
    price: {
      amount: 1999.99,
      currency: 'PLN',
      validFrom: '2024-01-01',
      validTo: '2024-12-31',
      installment: { monthlyAmount: 166.67, months: 12 },
    },
    image: '/pralka2.jpg',
  },
  {
    id: '3',
    name: 'Bosch Washing Machine',
    model: 'WAT28460PL',
    features: ['Electronic Display'],
    capacity: 8,
    dimensions: { height: 85, depth: 60, width: 60 },
    energyClass: 'D',
    price: {
      amount: 1799.99,
      currency: 'PLN',
      validFrom: '2024-01-01',
      validTo: '2024-12-31',
      installment: { monthlyAmount: 150.0, months: 12 },
    },
    image: '/pralka3.jpg',
  },
];

describe('filter.utils', () => {
  describe('filterProductsBySearch', () => {
    it('should return all products when no search term', () => {
      const result = filterProductsBySearch(mockProducts, '');
      expect(result).toHaveLength(3);
      expect(result).toEqual(mockProducts);
    });

    it('should filter by model name', () => {
      const result = filterProductsBySearch(mockProducts, 'WW90T554DAE');
      expect(result).toHaveLength(1);
      expect(result[0].model).toBe('WW90T554DAE');
    });

    it('should filter by product name', () => {
      const result = filterProductsBySearch(mockProducts, 'Samsung');
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('Samsung Washing Machine');
    });

    it('should be case insensitive', () => {
      const result = filterProductsBySearch(mockProducts, 'samsung');
      expect(result).toHaveLength(1);
    });
  });

  describe('filterProductsByFunction', () => {
    it('should return all products when "all" is selected', () => {
      const result = filterProductsByFunction(mockProducts, 'all');
      expect(result).toHaveLength(3);
    });

    it('should filter by AddWash function', () => {
      const result = filterProductsByFunction(mockProducts, 'addwash');
      expect(result).toHaveLength(1);
      expect(result[0].features.some(f => f.includes('AddWash'))).toBe(true);
    });

    it('should filter by AI Control function', () => {
      const result = filterProductsByFunction(mockProducts, 'ai-control');
      expect(result).toHaveLength(1);
      expect(result[0].features.some(f => f.includes('AI Control'))).toBe(true);
    });
  });

  describe('filterProductsByEnergyClass', () => {
    it('should return all products when "all" is selected', () => {
      const result = filterProductsByEnergyClass(mockProducts, 'all');
      expect(result).toHaveLength(3);
    });

    it('should filter by energy class A', () => {
      const result = filterProductsByEnergyClass(mockProducts, 'A');
      expect(result).toHaveLength(1);
      expect(result[0].energyClass).toBe('A');
    });

    it('should return empty array for non-existent class', () => {
      const result = filterProductsByEnergyClass(mockProducts, 'C');
      expect(result).toHaveLength(0);
    });
  });

  describe('filterProductsByCapacity', () => {
    it('should return all products when "all" is selected', () => {
      const result = filterProductsByCapacity(mockProducts, 'all');
      expect(result).toHaveLength(3);
    });

    it('should filter by 9kg capacity', () => {
      const result = filterProductsByCapacity(mockProducts, '9kg');
      expect(result).toHaveLength(1);
      expect(result[0].capacity).toBe(9);
    });

    it('should return empty array for non-existent capacity', () => {
      const result = filterProductsByCapacity(mockProducts, '12kg');
      expect(result).toHaveLength(0);
    });
  });

  describe('sortProducts', () => {
    it('should sort by price ascending', () => {
      const result = sortProducts(mockProducts, 'price');
      expect(result[0].price.amount).toBe(1799.99);
      expect(result[1].price.amount).toBe(1999.99);
      expect(result[2].price.amount).toBe(2499.99);
    });

    it('should sort by capacity descending', () => {
      const result = sortProducts(mockProducts, 'capacity');
      expect(result[0].capacity).toBe(10.5);
      expect(result[1].capacity).toBe(9);
      expect(result[2].capacity).toBe(8);
    });

    it('should use default sorting for unknown criteria', () => {
      const result = sortProducts(mockProducts, 'unknown');
      expect(result[0].id).toBe('1');
      expect(result[1].id).toBe('2');
      expect(result[2].id).toBe('3');
    });
  });

  describe('getFilteredAndSortedProducts', () => {
    it('should return all products without filters', () => {
      const filters = {
        search: '',
        sortBy: 'popularity' as const,
        functions: 'all' as const,
        energyClass: 'all' as const,
        capacity: 'all' as const,
      };
      const result = getFilteredAndSortedProducts(mockProducts, filters);
      expect(result).toHaveLength(3);
    });

    it('should filter and sort products', () => {
      const filters = {
        search: 'Inverter',
        sortBy: 'price' as const,
        functions: 'all' as const,
        energyClass: 'all' as const,
        capacity: 'all' as const,
      };
      const result = getFilteredAndSortedProducts(mockProducts, filters);
      expect(result).toHaveLength(2);
      expect(result[0].price.amount).toBe(1999.99);
      expect(result[1].price.amount).toBe(2499.99);
    });

    it('should return empty array when filters do not match', () => {
      const filters = {
        search: 'Non-existent',
        sortBy: 'popularity' as const,
        functions: 'all' as const,
        energyClass: 'all' as const,
        capacity: 'all' as const,
      };
      const result = getFilteredAndSortedProducts(mockProducts, filters);
      expect(result).toHaveLength(0);
    });
  });
});
