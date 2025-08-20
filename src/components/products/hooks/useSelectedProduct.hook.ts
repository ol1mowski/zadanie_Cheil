import { useState, useCallback } from 'react';

export const useSelectedProduct = (defaultProductId: string = '3') => {
  const [selectedProductId, setSelectedProductId] =
    useState<string>(defaultProductId);

  const handleProductSelect = useCallback((productId: string) => {
    setSelectedProductId(productId);
  }, []);

  const isProductSelected = useCallback(
    (productId: string): boolean => {
      return productId === selectedProductId;
    },
    [selectedProductId]
  );

  const resetSelection = useCallback(() => {
    setSelectedProductId(defaultProductId);
  }, [defaultProductId]);

  return {
    selectedProductId,
    handleProductSelect,
    isProductSelected,
    resetSelection,
  };
};
