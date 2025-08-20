import type { Product } from '@/data/products.data';
import type {
  Filters,
  FunctionOption,
} from '@/components/filters/types/filters.types';

export const filterProductsBySearch = (
  products: Product[],
  searchTerm: string
): Product[] => {
  if (!searchTerm) return products;

  const searchLower = searchTerm.toLowerCase();
  return products.filter(
    product =>
      product.model.toLowerCase().includes(searchLower) ||
      product.name.toLowerCase().includes(searchLower) ||
      product.features.some(feature =>
        feature.toLowerCase().includes(searchLower)
      )
  );
};

export const filterProductsByFunction = (
  products: Product[],
  functionFilter: FunctionOption
): Product[] => {
  if (functionFilter === 'all') return products;

  return products.filter(product =>
    product.features.some(feature => {
      switch (functionFilter) {
        case 'addwash':
          return feature.includes('AddWash');
        case 'ai-control':
          return feature.includes('AI Control');
        case 'inverter':
          return feature.includes('inwerterowy');
        case 'display':
          return feature.includes('elektroniczny');
        default:
          return true;
      }
    })
  );
};

export const filterProductsByEnergyClass = (
  products: Product[],
  energyClass: string
): Product[] => {
  if (energyClass === 'all') return products;
  return products.filter(product => product.energyClass === energyClass);
};

export const filterProductsByCapacity = (
  products: Product[],
  capacity: string
): Product[] => {
  if (capacity === 'all') return products;
  const capacityValue = capacity.replace('kg', '');
  return products.filter(
    product => product.capacity.toString() === capacityValue
  );
};

export const sortProducts = (
  products: Product[],
  sortBy: string
): Product[] => {
  const sortedProducts = [...products];

  switch (sortBy) {
    case 'price':
      return sortedProducts.sort((a, b) => a.price.amount - b.price.amount);
    case 'capacity':
      return sortedProducts.sort((a, b) => b.capacity - a.capacity);
    case 'popularity':
    default:
      return sortedProducts.sort((a, b) => parseInt(a.id) - parseInt(b.id));
  }
};

export const getFilteredAndSortedProducts = (
  products: Product[],
  filters: Filters
): Product[] => {
  let filteredProducts = filterProductsBySearch(products, filters.search);
  filteredProducts = filterProductsByFunction(
    filteredProducts,
    filters.functions
  );
  filteredProducts = filterProductsByEnergyClass(
    filteredProducts,
    filters.energyClass
  );
  filteredProducts = filterProductsByCapacity(
    filteredProducts,
    filters.capacity
  );

  return sortProducts(filteredProducts, filters.sortBy);
};
