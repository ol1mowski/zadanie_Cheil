import React from 'react';
import { useFilters } from './hooks/useFilters.hook';

const FilterSection: React.FC = () => {
  const { filters, updateFilter } = useFilters();

  return (
    <section className="w-full bg-background py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-6 flex justify-center">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 bg-white rounded-lg text-sm text-text placeholder-lightText focus:outline-none focus:ring-2 focus:ring-lightBlue/50 transition-all duration-200 will-change-transform"
              value={filters.search}
              onChange={e => updateFilter('search', e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-text">
              Sortuj po:
            </label>
            <select
              className="w-full px-3 py-2 bg-white border border-lightText/30 rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-lightBlue/50 focus:border-lightBlue transition-all duration-200 appearance-none cursor-pointer hover:bg-lightText/5 will-change-transform"
              value={filters.sortBy}
              onChange={e => updateFilter('sortBy', e.target.value)}
            >
              <option value="popularity">Popularność</option>
              <option value="all">Wszystkie</option>
              <option value="price">Cena</option>
              <option value="capacity">Pojemność</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-text">
              Funkcje:
            </label>
            <select
              className="w-full px-3 py-2 bg-white border border-lightText/30 rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-lightBlue/50 focus:border-lightBlue transition-all duration-200 appearance-none cursor-pointer hover:bg-lightText/5 will-change-transform"
              value={filters.functions}
              onChange={e => updateFilter('functions', e.target.value)}
            >
              <option value="all">Pokaż wszystkie</option>
              <option value="all">Wszystkie</option>
              <option value="addwash">Drzwi AddWash</option>
              <option value="ai-control">Panel AI Control</option>
              <option value="inverter">Silnik inwerterowy</option>
              <option value="display">Wyświetlacz elektroniczny</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-text">
              Klasa energetyczna:
            </label>
            <select
              className="w-full px-3 py-2 bg-white border border-lightText/30 rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-lightBlue/50 focus:border-lightBlue transition-all duration-200 appearance-none cursor-pointer hover:bg-lightText/5 will-change-transform"
              value={filters.energyClass}
              onChange={e => updateFilter('energyClass', e.target.value)}
            >
              <option value="all">Pokaż wszystkie</option>
              <option value="all">Wszystkie</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="D">D</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-text">
              Pojemność:
            </label>
            <select
              className="w-full px-3 py-2 bg-white border border-lightText/30 rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-lightBlue/50 focus:border-lightBlue transition-all duration-200 appearance-none cursor-pointer hover:bg-lightText/5 will-change-transform"
              value={filters.capacity}
              onChange={e => updateFilter('capacity', e.target.value)}
            >
              <option value="all">Pokaż wszystkie</option>
              <option value="all">Wszystkie</option>
              <option value="9kg">9kg</option>
              <option value="8kg">8kg</option>
              <option value="10.5kg">10.5kg</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
