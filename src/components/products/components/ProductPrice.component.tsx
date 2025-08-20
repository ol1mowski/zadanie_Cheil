import React, { memo } from 'react';
import { formatPrice, formatDate } from '../utils/format.utils';
import type { Product } from '../types/products.types';

interface ProductPriceProps {
  product: Product;
}

export const ProductPrice: React.FC<ProductPriceProps> = memo(({ product }) => {
  const { mainPart, cents } = formatPrice(product.price.amount);

  return (
    <div className="mb-6">
      <p className="text-sm text-text mb-2">
        Cena obowiązuje: {formatDate(product.price.validFrom)} -{' '}
        {formatDate(product.price.validTo)}
      </p>

      <div className="flex items-baseline mb-2">
        <span className="text-4xl font-bold">{mainPart}</span>
        <span className="text-lg font-bold">{cents}</span>
        <span className="text-lg text-text ml-1">{product.price.currency}</span>
      </div>

      <p className="text-lg text-[#555] font-[500] text-text">
        {product.price.installment.monthlyAmount.toFixed(2)}{' '}
        {product.price.currency} x {product.price.installment.months} rat
      </p>
    </div>
  );
});

ProductPrice.displayName = 'ProductPrice';
