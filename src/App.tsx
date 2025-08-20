import { useState, useCallback } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.component';
import { FilterSection } from './components/filters/FilterSection.component';
import { Products } from './components/products/Products.component';
import { sampleProducts } from './data/products.data';
import { Layout } from './components/layout/Layout.component';
import type { Product } from './data/products.data';

function App() {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  const handleFiltersChange = useCallback((newFilteredProducts: Product[]) => {
    setFilteredProducts(newFilteredProducts);
  }, []);

  return (
    <ErrorBoundary>
      <Layout>
        <FilterSection
          products={sampleProducts}
          onFiltersChange={handleFiltersChange}
        />
        <Products products={filteredProducts} />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
