export interface Filters {
  search: string;
  sortBy: SortOption;
  functions: FunctionOption;
  energyClass: EnergyClassOption;
  capacity: CapacityOption;
}

export type SortOption = 'popularity' | 'price' | 'capacity' | 'all';
export type FunctionOption =
  | 'all'
  | 'addwash'
  | 'ai-control'
  | 'inverter'
  | 'display';
export type EnergyClassOption = 'all' | 'A' | 'B' | 'D';
export type CapacityOption = 'all' | '9kg' | '8kg' | '10.5kg';

export interface DropdownState {
  sortBy: boolean;
  functions: boolean;
  energyClass: boolean;
  capacity: boolean;
}

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterConfig {
  key: keyof Omit<Filters, 'search'>;
  label: string;
  options: FilterOption[];
  getDisplayValue: (value: string) => string;
}
