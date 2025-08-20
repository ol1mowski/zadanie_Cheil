import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FilterSection } from '../FilterSection.component';
import type { Product } from '@/data/products.data';

const mockUseFilters = vi.hoisted(() => vi.fn());
const mockUseDropdowns = vi.hoisted(() => vi.fn());

vi.mock('../hooks/useFilters.hook', () => ({
  useFilters: mockUseFilters,
}));

vi.mock('../hooks/useDropdowns.hook', () => ({
  useDropdowns: mockUseDropdowns,
}));

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  isSearching: boolean;
}

vi.mock('../components/SearchInput.component', () => ({
  SearchInput: ({ value, onChange, isSearching }: SearchInputProps) => (
    <div data-testid="search-input">
      <input
        data-testid="search-field"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search..."
      />
      {isSearching && <div data-testid="search-spinner">Searching...</div>}
    </div>
  ),
}));

interface FilterDropdownProps {
  label: string;
  value: string;
  onToggle: () => void;
  onSelect: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  isOpen: boolean;
}

vi.mock('../components/FilterDropdown.component', () => ({
  FilterDropdown: ({
    label,
    value,
    onToggle,
    onSelect,
    options,
    isOpen,
  }: FilterDropdownProps) => (
    <div data-testid={`filter-${label}`}>
      <button onClick={onToggle} data-testid={`toggle-${label}`}>
        {label}: {value}
      </button>
      {isOpen && (
        <ul data-testid={`options-${label}`}>
          {options.map(option => (
            <li key={option.value} onClick={() => onSelect(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  ),
}));

vi.mock('../config/filterConfig', () => ({
  filterConfigs: [
    {
      key: 'sortBy',
      label: 'Sort by:',
      options: [
        { value: 'all', label: 'All' },
        { value: 'price', label: 'Price' },
        { value: 'capacity', label: 'Capacity' },
      ],
      getDisplayValue: (value: string) => {
        switch (value) {
          case 'popularity':
            return 'Popularity';
          case 'price':
            return 'Price';
          case 'capacity':
            return 'Capacity';
          case 'all':
            return 'All';
          default:
            return 'Select';
        }
      },
    },
    {
      key: 'functions',
      label: 'Functions:',
      options: [
        { value: 'all', label: 'All' },
        { value: 'addwash', label: 'AddWash Door' },
      ],
      getDisplayValue: (value: string) => {
        switch (value) {
          case 'all':
            return 'Show All';
          case 'addwash':
            return 'AddWash Door';
          default:
            return 'Select';
        }
      },
    },
  ],
}));

describe('FilterSection', () => {
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
  ];

  const mockUseFiltersReturn = {
    filters: {
      search: '',
      sortBy: 'popularity',
      functions: 'all',
      energyClass: 'all',
      capacity: 'all',
    },
    updateFilter: vi.fn(),
    filterAndSortProducts: vi.fn(() => mockProducts),
    searchSuggestions: vi.fn(() => []),
    resetFilters: vi.fn(),
    isSearching: false,
  };

  const mockUseDropdownsReturn = {
    openDropdowns: {
      sortBy: false,
      functions: false,
      energyClass: false,
      capacity: false,
    },
    toggleDropdown: vi.fn(),
    closeDropdown: vi.fn(),
    closeAllDropdowns: vi.fn(),
  };

  const defaultProps = {
    products: mockProducts,
    onFiltersChange: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();

    mockUseFilters.mockReturnValue(mockUseFiltersReturn);
    mockUseDropdowns.mockReturnValue(mockUseDropdownsReturn);
  });

  it('should render filter section', () => {
    render(<FilterSection {...defaultProps} />);

    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();
  });

  it('should render SearchInput component', () => {
    render(<FilterSection {...defaultProps} />);

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });

  it('should render all filters from configuration', () => {
    render(<FilterSection {...defaultProps} />);

    expect(screen.getByTestId('filter-Sort by:')).toBeInTheDocument();
    expect(screen.getByTestId('filter-Functions:')).toBeInTheDocument();
  });
});
