import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useFilters } from '../useFilters.hook';
import type { Product } from '@/data/products.data';

vi.mock('../utils/filter.utils', () => ({
  getFilteredAndSortedProducts: vi.fn(),
}));

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Samsung Washing Machine',
    model: 'WW90T554DAE',
    features: ['AddWash', 'Inverter Motor'],
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
    features: ['AI Control'],
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
];

describe('useFilters', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should initialize filters with default values', () => {
    const { result } = renderHook(() => useFilters());

    expect(result.current.filters).toEqual({
      search: '',
      sortBy: 'popularity',
      functions: 'all',
      energyClass: 'all',
      capacity: 'all',
    });
  });

  it('should update filters', () => {
    const { result } = renderHook(() => useFilters());

    act(() => {
      result.current.updateFilter('sortBy', 'price');
    });

    expect(result.current.filters.sortBy).toBe('price');
  });

  it('should debounce search input', () => {
    const { result } = renderHook(() => useFilters());

    act(() => {
      result.current.updateFilter('search', 'Samsung');
    });

    expect(result.current.isSearching).toBe(true);

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current.isSearching).toBe(false);
  });

  it('should filter and sort products', () => {
    const { result } = renderHook(() => useFilters());

    act(() => {
      vi.advanceTimersByTime(300);
    });

    const filteredProducts = result.current.filterAndSortProducts(mockProducts);

    expect(filteredProducts).toBeDefined();
    expect(Array.isArray(filteredProducts)).toBe(true);
  });

  it('should reset filters to default values', () => {
    const { result } = renderHook(() => useFilters());

    act(() => {
      result.current.updateFilter('sortBy', 'price');
      result.current.updateFilter('search', 'test');
    });

    expect(result.current.filters.sortBy).toBe('price');
    expect(result.current.filters.search).toBe('test');

    act(() => {
      result.current.resetFilters();
    });

    expect(result.current.filters.sortBy).toBe('popularity');
    expect(result.current.filters.search).toBe('');
  });
});
