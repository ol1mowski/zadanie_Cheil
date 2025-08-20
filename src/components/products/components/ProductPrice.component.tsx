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
      <p className="text-sm text-text">
        Cena obowiązuje: {formatDate(product.price.validFrom)} -{' '}
        {formatDate(product.price.validTo)}
      </p>

      <div className="flex items-start mb-2">
        <span className="text-4xl font-bold">{mainPart}</span>
        <div className="flex flex-col items-start ml-2 pt-1">
          <span className="text-md font-bold leading-none">{cents}</span>
          <span className="text-md text-text font-[500] leading-none pl-1">
            {product.price.currency}
          </span>
        </div>
      </div>

      <p className="text-lg text-[#777] font-[500]">
        {product.price.installment.monthlyAmount.toFixed(2)}{' '}
        {product.price.currency} x {product.price.installment.months} rat
      </p>
    </div>
  );
});

ProductPrice.displayName = 'ProductPrice';
