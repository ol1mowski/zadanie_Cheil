import React, { useEffect } from 'react';
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

  useEffect(() => {
    const filteredProducts = filterAndSortProducts(products);
    onFiltersChange(filteredProducts);
  }, [filters, products]);

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
            <div className="relative">
              <select
                className="w-full px-3 py-2 bg-white text-text focus:outline-none transition-all duration-200 appearance-none cursor-pointer will-change-transform pr-8 shadow-sm font-sans border-none"
                value={filters.sortBy}
                onChange={e => updateFilter('sortBy', e.target.value)}
              >
                <option
                  value="popularity"
                  selected
                  hidden
                  className="bg-white text-text font-sans cursor-pointer"
                >
                  Popularność
                </option>
                <option value="all" className="bg-white text-text font-sans">
                  Wszystkie
                </option>
                <option value="price" className="bg-white text-text font-sans">
                  Cena
                </option>
                <option
                  value="capacity"
                  className="bg-white text-text font-sans"
                >
                  Pojemność
                </option>
              </select>
              <img
                src={arrowIcon}
                alt="dropdown arrow"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
              />
            </div>
            <p className="text-sm text-text mt-2">Liczba wyników: 23</p>
          </div>

          <div className="space-y-2">
            <label className="block text-base font-bold text-text">
              Funkcje:
            </label>
            <div className="relative">
              <select
                className="w-full px-3 py-2 bg-white text-text focus:outline-none transition-all duration-200 appearance-none cursor-pointer will-change-transform pr-8 shadow-sm font-sans"
                value={filters.functions}
                onChange={e => updateFilter('functions', e.target.value)}
              >
                <option
                  value="all"
                  selected
                  hidden
                  className="bg-white text-text font-sans"
                >
                  Pokaż wszystkie
                </option>
                <option
                  value="all"
                  className="bg-white text-text font-sans cursor-pointer"
                >
                  Wszystkie
                </option>
                <option
                  value="addwash"
                  className="bg-white text-text font-sans"
                >
                  Drzwi AddWash
                </option>
                <option
                  value="ai-control"
                  className="bg-white text-text font-sans"
                >
                  Panel AI Control
                </option>
                <option
                  value="inverter"
                  className="bg-white text-text font-sans"
                >
                  Silnik inwerterowy
                </option>
                <option
                  value="display"
                  className="bg-white text-text font-sans"
                >
                  Wyświetlacz elektroniczny
                </option>
              </select>
              <img
                src={arrowIcon}
                alt="dropdown arrow"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-base font-bold text-text">
              Klasa energetyczna:
            </label>
            <div className="relative">
              <select
                className="w-full px-3 py-2 bg-white text-text focus:outline-none transition-all duration-200 appearance-none cursor-pointer will-change-transform pr-8 shadow-sm font-sans"
                value={filters.energyClass}
                onChange={e => updateFilter('energyClass', e.target.value)}
              >
                <option
                  value="all"
                  selected
                  hidden
                  className="bg-white text-text font-sans"
                >
                  Pokaż wszystkie
                </option>
                <option value="all" className="bg-white text-text font-sans">
                  Wszystkie
                </option>
                <option value="A" className="bg-white text-text font-sans">
                  A
                </option>
                <option value="B" className="bg-white text-text font-sans">
                  B
                </option>
                <option value="D" className="bg-white text-text font-sans">
                  D
                </option>
              </select>
              <img
                src={arrowIcon}
                alt="dropdown arrow"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-base font-bold text-text">
              Pojemność:
            </label>
            <div className="relative">
              <select
                className="w-full px-3 py-2 bg-white text-text focus:outline-none transition-all duration-200 appearance-none cursor-pointer will-change-transform pr-8 shadow-sm font-sans"
                value={filters.capacity}
                onChange={e => updateFilter('capacity', e.target.value)}
              >
                <option
                  value="all"
                  selected
                  hidden
                  className="bg-white text-text font-sans"
                >
                  Pokaż wszystkie
                </option>
                <option value="all" className="bg-white text-text font-sans">
                  Wszystkie
                </option>
                <option value="9kg" className="bg-white text-text font-sans">
                  9kg
                </option>
                <option value="8kg" className="bg-white text-text font-sans">
                  8kg
                </option>
                <option value="10.5kg" className="bg-white text-text font-sans">
                  10.5kg
                </option>
              </select>
              <img
                src={arrowIcon}
                alt="dropdown arrow"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
