import { useState, useCallback } from 'react';
import { Header } from './components/header/Header.components';
import { FilterSection } from './components/filters/FilterSection.component';
import { Products } from './components/products/Products.component';
import { sampleProducts } from './data/products.data';
import { Footer } from './components/footer/Footer.component';
import type { Product } from './data/products.data';

function App() {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  const handleFiltersChange = useCallback((newFilteredProducts: Product[]) => {
    setFilteredProducts(newFilteredProducts);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FilterSection
        products={sampleProducts}
        onFiltersChange={handleFiltersChange}
      />
      <Products products={filteredProducts} />
      <Footer />
    </div>
  );
}

export default App;
