import { Header } from './components/header/Header.components';
import { FilterSection } from './components/filters/FilterSection.component';
import { Products } from './components/products/Products.component';
import { sampleProducts } from './data/products.data';

function App() {
  const handleProductSelect = (productId: string) => {
    console.log('Wybrano produkt:', productId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FilterSection />
      <Products
        products={sampleProducts}
        onProductSelect={handleProductSelect}
      />
    </div>
  );
}

export default App;
