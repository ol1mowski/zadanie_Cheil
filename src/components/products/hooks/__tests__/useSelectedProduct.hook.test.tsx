import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSelectedProduct } from '../useSelectedProduct.hook';

describe('useSelectedProduct', () => {
  it('should initialize with default product ID', () => {
    const { result } = renderHook(() => useSelectedProduct());

    expect(result.current.selectedProductId).toBe('3');
  });

  it('should initialize with custom default product ID', () => {
    const { result } = renderHook(() => useSelectedProduct('5'));

    expect(result.current.selectedProductId).toBe('5');
  });

  it('should update selected product ID when handleProductSelect is called', () => {
    const { result } = renderHook(() => useSelectedProduct());

    act(() => {
      result.current.handleProductSelect('7');
    });

    expect(result.current.selectedProductId).toBe('7');
  });

  it('should return correct selection state for different products', () => {
    const { result } = renderHook(() => useSelectedProduct('3'));

    expect(result.current.isProductSelected('3')).toBe(true);
    expect(result.current.isProductSelected('5')).toBe(false);
    expect(result.current.isProductSelected('7')).toBe(false);
  });

  it('should reset selection to default product ID', () => {
    const { result } = renderHook(() => useSelectedProduct('3'));

    act(() => {
      result.current.handleProductSelect('7');
    });

    expect(result.current.selectedProductId).toBe('7');

    act(() => {
      result.current.resetSelection();
    });

    expect(result.current.selectedProductId).toBe('3');
  });

  it('should maintain selection state across multiple selections', () => {
    const { result } = renderHook(() => useSelectedProduct('1'));

    act(() => {
      result.current.handleProductSelect('2');
    });

    expect(result.current.selectedProductId).toBe('2');
    expect(result.current.isProductSelected('2')).toBe(true);
    expect(result.current.isProductSelected('1')).toBe(false);

    act(() => {
      result.current.handleProductSelect('3');
    });

    expect(result.current.selectedProductId).toBe('3');
    expect(result.current.isProductSelected('3')).toBe(true);
    expect(result.current.isProductSelected('2')).toBe(false);
  });

  it('should handle empty string product ID', () => {
    const { result } = renderHook(() => useSelectedProduct(''));

    expect(result.current.selectedProductId).toBe('');

    act(() => {
      result.current.handleProductSelect('test');
    });

    expect(result.current.selectedProductId).toBe('test');
  });

  it('should handle numeric string product ID', () => {
    const { result } = renderHook(() => useSelectedProduct('123'));

    expect(result.current.selectedProductId).toBe('123');

    act(() => {
      result.current.handleProductSelect('456');
    });

    expect(result.current.selectedProductId).toBe('456');
  });

  it('should return stable function references', () => {
    const { result, rerender } = renderHook(() => useSelectedProduct());

    const initialHandleProductSelect = result.current.handleProductSelect;
    const initialIsProductSelected = result.current.isProductSelected;
    const initialResetSelection = result.current.resetSelection;

    rerender();

    expect(result.current.handleProductSelect).toBe(initialHandleProductSelect);
    expect(result.current.isProductSelected).toBe(initialIsProductSelected);
    expect(result.current.resetSelection).toBe(initialResetSelection);
  });
});
