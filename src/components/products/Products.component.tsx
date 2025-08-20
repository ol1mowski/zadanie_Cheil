import React, { memo } from 'react';
import { ProductCard } from './components/ProductCard.component';
import { NoResults } from './components/NoResults.component';
import { LoadMoreButton } from './components/LoadMoreButton.component';
import { useSelectedProduct } from './hooks/useSelectedProduct.hook';
import type { ProductsProps } from './types/products.types';

export const Products: React.FC<ProductsProps> = memo(({ products }) => {
  const { isProductSelected, handleProductSelect } = useSelectedProduct();

  if (products.length === 0) {
    return (
      <section className="w-full bg-background py-6 px-4">
        <div className="container mx-auto max-w-6xl">
          <NoResults />
        </div>
      </section>
    );
  }

  const handleLoadMore = () => {
    console.log('Loading more products...');
  };

  return (
    <section className="w-full bg-background px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              isSelected={isProductSelected(product.id)}
              onSelect={() => handleProductSelect(product.id)}
            />
          ))}
        </div>

        <LoadMoreButton
          onLoadMore={handleLoadMore}
          hasMore={products.length > 0}
        />
      </div>
    </section>
  );
});

Products.displayName = 'Products';
