import React, { memo } from 'react';
import { formatDimensions, formatFeatures } from '../utils/format.utils';
import type { Product } from '../types/products.types';

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo: React.FC<ProductInfoProps> = memo(({ product }) => {
  return (
    <div className="mb-4">
      <div className="flex">
        <span className="text-text text-sm">Pojemność (kg):</span>
        <span className="font-bold text-text text-sm ml-2">
          {product.capacity}
        </span>
      </div>

      <div className="flex">
        <span className="text-text text-sm">Wymiary (GxSxW):</span>
        <span className="font-bold text-text text-sm ml-2">
          {formatDimensions(product.dimensions)}
        </span>
      </div>

      <div className="flex">
        <p>
          <span className="text-text text-sm">Funkcje:</span>
          <span className="font-bold text-text text-sm ml-2 max-w-xs">
            {formatFeatures(product.features)}
          </span>
        </p>
      </div>
    </div>
  );
});

ProductInfo.displayName = 'ProductInfo';
