import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDropdowns } from '../useDropdowns.hook';

describe('useDropdowns', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(document, 'addEventListener').mockImplementation(() => {});
    vi.spyOn(document, 'removeEventListener').mockImplementation(() => {});
  });

  it('should initialize all dropdowns as closed', () => {
    const { result } = renderHook(() => useDropdowns());

    expect(result.current.openDropdowns).toEqual({
      sortBy: false,
      functions: false,
      energyClass: false,
      capacity: false,
    });
  });

  it('should toggle dropdown state', () => {
    const { result } = renderHook(() => useDropdowns());

    act(() => {
      result.current.toggleDropdown('sortBy');
    });

    expect(result.current.openDropdowns.sortBy).toBe(true);

    act(() => {
      result.current.toggleDropdown('sortBy');
    });

    expect(result.current.openDropdowns.sortBy).toBe(false);
  });

  it('should close specific dropdown', () => {
    const { result } = renderHook(() => useDropdowns());

    act(() => {
      result.current.toggleDropdown('sortBy');
      result.current.toggleDropdown('functions');
    });

    expect(result.current.openDropdowns.sortBy).toBe(true);
    expect(result.current.openDropdowns.functions).toBe(true);

    act(() => {
      result.current.closeDropdown('sortBy');
    });

    expect(result.current.openDropdowns.sortBy).toBe(false);
    expect(result.current.openDropdowns.functions).toBe(true);
  });
});
