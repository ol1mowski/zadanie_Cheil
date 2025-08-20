import React, { memo } from 'react';
import { ProductInfo } from './components/ProductInfo.component';
import { ProductPrice } from './components/ProductPrice.component';
import { EnergyClass } from './components/EnergyClass.component';
import { SelectButton } from './components/SelectButton.component';
import type { ProductCardProps } from './types/products.types';

export const ProductCard: React.FC<ProductCardProps> = memo(
  ({ product, isSelected, onSelect }) => {
    return (
      <div className="bg-white rounded-3xl shadow-lg p-6 w-full">
        <div className="flex justify-center mb-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-48 object-contain"
          />
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-text leading-tight">
            {product.model}, {product.name}
          </h3>
          <p className="text-lg font-bold text-text leading-tight">
            QuickDrive™, {product.capacity} kg, biała
          </p>
        </div>

        <ProductInfo product={product} />

        <EnergyClass energyClass={product.energyClass} />

        <ProductPrice product={product} />

        <SelectButton isSelected={isSelected} onSelect={onSelect} />
      </div>
    );
  }
);

ProductCard.displayName = 'ProductCard';
