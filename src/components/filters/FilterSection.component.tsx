import React, { useEffect } from 'react';
import { useFilters } from './hooks/useFilters.hook';
import { useDropdowns } from './hooks/useDropdowns.hook';
import { SearchInput } from './components/SearchInput.component';
import { FilterDropdown } from './components/FilterDropdown.component';
import { filterConfigs } from './config/filterConfig';
import type { Product } from '@/data/products.data';
import type { Filters } from '@/components/filters/types/filters.types';

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
  const { openDropdowns, toggleDropdown, closeDropdown } = useDropdowns();

  useEffect(() => {
    const filteredProducts = filterAndSortProducts(products);
    onFiltersChange(filteredProducts);
  }, [filters, products, filterAndSortProducts, onFiltersChange]);

  const handleFilterSelect = (
    filterKey: keyof Omit<Filters, 'search'>,
    value: string
  ) => {
    updateFilter(filterKey, value);
    closeDropdown(filterKey);
  };

  const handleSearchChange = (value: string) => {
    updateFilter('search', value);
  };

  return (
    <section
      className="w-full bg-background py-6 px-4"
      role="region"
      aria-label="Filtry produktów"
    >
      <div className="container mx-auto max-w-6xl">
        <SearchInput
          value={filters.search}
          onChange={handleSearchChange}
          isSearching={isSearching}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filterConfigs.map(config => (
            <FilterDropdown
              key={config.key}
              label={config.label}
              value={filters[config.key]}
              options={config.options}
              isOpen={openDropdowns[config.key]}
              onToggle={() => toggleDropdown(config.key)}
              onSelect={value => handleFilterSelect(config.key, value)}
              getDisplayValue={config.getDisplayValue}
              resultsCount={
                config.key === 'sortBy' ? products.length : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
