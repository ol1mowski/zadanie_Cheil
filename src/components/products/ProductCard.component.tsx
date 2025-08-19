import React from 'react';

interface ProductCardProps {
  product: {
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
  };
  onSelect: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
}) => {
  const formatPrice = (amount: number) => {
    const mainPart = Math.floor(amount);
    const cents = Math.round((amount - mainPart) * 100);
    return (
      <>
        <span className="text-4xl font-bold">{mainPart}</span>
        <span className="text-lg font-bold">
          {cents.toString().padStart(2, '0')}
        </span>
      </>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pl-PL');
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 w-full">
      <div className="flex justify-center mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-48 object-contain"
        />
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold text-text leading-tight">
          {product.model}, {product.name}
        </h3>
        <p className="text-lg font-bold text-text leading-tight">
          QuickDrive™, {product.capacity} kg, biała
        </p>
      </div>

      <div className="space-y-1 mb-4">
        <div className="flex">
          <span className="text-text text-sm">Pojemność (kg):</span>
          <span className="font-bold text-text text-sm ml-2">
            {product.capacity}
          </span>
        </div>

        <div className="flex">
          <span className="text-text text-sm">Wymiary (GxSxW):</span>
          <span className="font-bold text-text text-sm ml-2">
            {product.dimensions.height} x {product.dimensions.depth} x{' '}
            {product.dimensions.width} cm
          </span>
        </div>

        <div className="flex">
          <p>
            <span className="text-text text-sm">Funkcje:</span>
            <span className="font-bold text-text text-sm ml-2 max-w-xs">
              {product.features.join(', ')}
            </span>
          </p>
        </div>

        <div className="flex items-center">
          <span className="text-text text-sm">Klasa energetyczna</span>
          <div className="bg-green text-white px-7 py-0 ml-2 relative">
            <span className="text-sm">{product.energyClass}</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-text mb-2">
          Cena obowiązuje: {formatDate(product.price.validFrom)} -{' '}
          {formatDate(product.price.validTo)}
        </p>

        <div className="flex items-baseline mb-2">
          {formatPrice(product.price.amount)}
          <span className="text-lg text-text ml-1">
            {product.price.currency}
          </span>
        </div>

        <p className="text-lg text-[#555] font-[500] text-text">
          {product.price.installment.monthlyAmount.toFixed(2)}{' '}
          {product.price.currency} x {product.price.installment.months} rat
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => onSelect(product.id)}
          className="w-32 bg-darkBlue text-white py-3 px-4 rounded-xl hover:bg-darkBlue/90 transition-colors duration-200 uppercase tracking-[0.15em] cursor-pointer text-sm"
        >
          Wybierz
        </button>
      </div>
    </div>
  );
};
