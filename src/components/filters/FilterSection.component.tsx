import React, { useEffect, useState } from 'react';
import { useFilters } from './hooks/useFilters.hook';
import arrowIcon from '@/assets/arrow.svg';
import type { Product } from '@/data/products.data';

interface FilterSectionProps {
  products: Product[];
  onFiltersChange: (filteredProducts: Product[]) => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  products,
  onFiltersChange,
}) => {
  const { filters, updateFilter, filterAndSortProducts, isSearching } =
    useFilters();

  const [openDropdowns, setOpenDropdowns] = useState({
    sortBy: false,
    functions: false,
    energyClass: false,
    capacity: false,
  });

  const toggleDropdown = (dropdownName: keyof typeof openDropdowns) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [dropdownName]: !prev[dropdownName],
    }));
  };

  useEffect(() => {
    const filteredProducts = filterAndSortProducts(products);
    onFiltersChange(filteredProducts);
  }, [filters, products]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.filter-dropdown')) {
        setOpenDropdowns({
          sortBy: false,
          functions: false,
          energyClass: false,
          capacity: false,
        });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="w-full bg-background py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-6 flex justify-center">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 bg-white text-sm text-text placeholder-lightText focus:outline-none transition-all duration-200 will-change-transform pr-10"
              value={filters.search}
              onChange={e => updateFilter('search', e.target.value)}
            />
            {isSearching && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="w-4 h-4 border-2 border-lightBlue border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            {!isSearching && filters.search && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-4 h-4 text-lightText"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <label className="block text-base font-bold text-text">
              Sortuj po:
            </label>
            <div className="relative filter-dropdown">
              <div
                className="w-full px-3 py-2 bg-white text-text cursor-pointer shadow-sm font-sans border-none"
                onClick={() => toggleDropdown('sortBy')}
              >
                <div className="flex items-center justify-between">
                  <span>
                    {filters.sortBy === 'popularity'
                      ? 'Popularność'
                      : filters.sortBy === 'all'
                        ? 'Wszystkie'
                        : filters.sortBy === 'price'
                          ? 'Cena'
                          : filters.sortBy === 'capacity'
                            ? 'Pojemność'
                            : 'Wybierz'}
                  </span>
                  <img
                    src={arrowIcon}
                    alt="dropdown arrow"
                    className="w-4 h-4 pointer-events-none"
                  />
                </div>
              </div>

              {openDropdowns.sortBy && (
                <ul className="absolute top-full left-0 right-0 bg-white shadow-lg z-10 mt-1">
                  <li
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      updateFilter('sortBy', 'all');
                      toggleDropdown('sortBy');
                    }}
                  >
                    Wszystkie
                  </li>
                  <li
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      updateFilter('sortBy', 'price');
                      toggleDropdown('sortBy');
                    }}
                  >
                    Cena
                  </li>
                  <li
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      updateFilter('sortBy', 'capacity');
                      toggleDropdown('sortBy');
                    }}
                  >
                    Pojemność
                  </li>
                </ul>
              )}
            </div>
            <p className="text-sm text-text mt-2">Liczba wyników: 23</p>
          </div>

          <div className="space-y-2">
            <label className="block text-base font-bold text-text">
              Funkcje:
            </label>
            <div className="relative filter-dropdown">
              <div
                className="w-full px-3 py-2 bg-white text-text cursor-pointer shadow-sm font-sans border-none"
                onClick={() => toggleDropdown('functions')}
              >
                <div className="flex items-center justify-between">
                  <span>
                    {filters.functions === 'all'
                      ? 'Pokaż wszystkie'
                      : filters.functions === 'addwash'
                        ? 'Drzwi AddWash'
                        : filters.functions === 'ai-control'
                          ? 'Panel AI Control'
                          : filters.functions === 'inverter'
                            ? 'Silnik inwerterowy'
                            : filters.functions === 'display'
                              ? 'Wyświetlacz elektroniczny'
                              : 'Wybierz'}
                  </span>
                  <img
                    src={arrowIcon}
                    alt="dropdown arrow"
                    className="w-4 h-4 pointer-events-none"
                  />
                </div>
              </div>

              {openDropdowns.functions && (
                <ul className="absolute top-full left-0 right-0 bg-white shadow-lg z-10 mt-1">
                  <li
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      updateFilter('functions', 'addwash');
                      toggleDropdown('functions');
                    }}
                  >
                    Drzwi AddWash
                  </li>
                  <li
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      updateFilter('functions', 'ai-control');
                      toggleDropdown('functions');
                    }}
                  >
                    Panel AI Control
                  </li>
                  <li
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      updateFilter('functions', 'inverter');
                      toggleDropdown('functions');
                    }}
                  >
                    Silnik inwerterowy
                  </li>
                  <li
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      updateFilter('functions', 'display');
                      toggleDropdown('functions');
                    }}
                  >
                    Wyświetlacz elektroniczny
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-base font-bold text-text">
              Klasa energetyczna:
            </label>
            <div className="relative filter-dropdown">
              <div
                className="w-full px-3 py-2 bg-white text-text cursor-pointer shadow-sm font-sans border-none"
                onClick={() => toggleDropdown('energyClass')}
              >
                <div className="flex items-center justify-between">
                  <span>
                    {filters.energyClass === 'all'
                      ? 'Pokaż wszystkie'
                      : filters.energyClass === 'A'
                        ? 'A'
                        : filters.energyClass === 'B'
                          ? 'B'
                          : filters.energyClass === 'D'
                            ? 'D'
                            : 'Wybierz'}
                  </span>
                  <img
                    src={arrowIcon}
                    alt="dropdown arrow"
                    className="w-4 h-4 pointer-events-none"
                  />
                </div>
              </div>

              {openDropdowns.energyClass && (
                <ul className="absolute top-full left-0 right-0 bg-white shadow-lg z-10 mt-1">
                  <li
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      updateFilter('energyClass', 'A');
                      toggleDropdown('energyClass');
                    }}
                  >
                    A
                  </li>
                  <li
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      updateFilter('energyClass', 'B');
                      toggleDropdown('energyClass');
                    }}
                  >
                    B
                  </li>
                  <li
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      updateFilter('energyClass', 'D');
                      toggleDropdown('energyClass');
                    }}
                  >
                    D
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-base font-bold text-text">
              Pojemność:
            </label>
            <div className="relative filter-dropdown">
              <div
                className="w-full px-3 py-2 bg-white text-text cursor-pointer shadow-sm font-sans border-none"
                onClick={() => toggleDropdown('capacity')}
              >
                <div className="flex items-center justify-between">
                  <span>
                    {filters.capacity === 'all'
                      ? 'Pokaż wszystkie'
                      : filters.capacity === '9kg'
                        ? '9kg'
                        : filters.capacity === '8kg'
                          ? '8kg'
                          : filters.capacity === '10.5kg'
                            ? '10.5kg'
                            : 'Wybierz'}
                  </span>
                  <img
                    src={arrowIcon}
                    alt="dropdown arrow"
                    className="w-4 h-4 pointer-events-none"
                  />
                </div>
              </div>

              {openDropdowns.capacity && (
                <ul className="absolute top-full left-0 right-0 bg-white shadow-lg z-10 mt-1">
                  <li
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      updateFilter('capacity', '9kg');
                      toggleDropdown('capacity');
                    }}
                  >
                    9kg
                  </li>
                  <li
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      updateFilter('capacity', '8kg');
                      toggleDropdown('capacity');
                    }}
                  >
                    8kg
                  </li>
                  <li
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      updateFilter('capacity', '10.5kg');
                      toggleDropdown('capacity');
                    }}
                  >
                    10.5kg
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
