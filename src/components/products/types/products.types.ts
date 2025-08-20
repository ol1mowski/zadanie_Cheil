export interface Product {
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

export interface ProductsProps {
  products: Product[];
}

export interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onSelect: () => void;
}
