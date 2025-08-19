import React, { memo, useState } from 'react';
import { ProductCard } from './ProductCard.component';

interface Product {
  id: string;
  name: string;
  model: string;
  features: string[];
  capacity: number;
  dimensions: {
    height: number;
    depth: number;
    width: number;
  };
  energyClass: string;
  price: {
    amount: number;
    currency: string;
    validFrom: string;
    validTo: string;
    installment: {
      monthlyAmount: number;
      months: number;
    };
  };
  image: string;
}

interface ProductsProps {
  products: Product[];
}

const NoResults: React.FC = memo(() => (
  <div className="w-full flex flex-col items-center justify-center py-16">
    <div className="w-24 h-24 bg-lightText/10 rounded-full flex items-center justify-center mb-6">
      <svg
        className="w-12 h-12 text-lightText"
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
    <h3 className="text-2xl font-bold text-text mb-2">Brak wyników</h3>
    <p className="text-lightText text-center max-w-md">
      Nie znaleziono produktów spełniających wybrane kryteria. Spróbuj zmienić
      filtry lub wyszukiwanie.
    </p>
  </div>
));

NoResults.displayName = 'NoResults';

export const Products: React.FC<ProductsProps> = memo(({ products }) => {
  const [selectedProductId, setSelectedProductId] = useState<string>('3'); // Domyślnie trzecia pralka jest wybrana

  const handleProductSelect = (productId: string) => {
    setSelectedProductId(productId);
  };

  if (products.length === 0) {
    return (
      <section className="w-full bg-background py-6 px-4">
        <div className="container mx-auto max-w-6xl">
          <NoResults />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-background py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              isSelected={product.id === selectedProductId}
              onSelect={() => handleProductSelect(product.id)}
            />
          ))}
        </div>
        <div className="w-full flex justify-center items-center mt-8 mb-8">
          <button className="text-lightBlue text-xl font-bold flex items-center cursor-pointer">
            <span>Pokaż więcej</span>
            <span className="ml-1 text-lightBlue text-xs">&#9660;</span>
          </button>
        </div>
      </div>
    </section>
  );
});

Products.displayName = 'Products';
