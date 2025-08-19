import React from 'react';
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
  onProductSelect: (productId: string) => void;
}

export const Products: React.FC<ProductsProps> = ({
  products,
  onProductSelect,
}) => {
  return (
    <section className="w-full bg-background py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onProductSelect}
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
};
