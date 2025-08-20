import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from '../ProductCard.component';
import type { Product } from '../types/products.types';

const mockProduct: Product = {
  id: '1',
  name: 'Samsung Washing Machine',
  model: 'WW90T554DAE',
  features: ['AddWash', 'Inverter Motor', 'Electronic Display'],
  capacity: 9,
  dimensions: { height: 85, depth: 60, width: 60 },
  energyClass: 'A',
  price: {
    amount: 2499.99,
    currency: 'PLN',
    validFrom: '2024-01-01',
    validTo: '2024-12-31',
    installment: { monthlyAmount: 208.33, months: 12 },
  },
  image: '/test-image.jpg',
};

describe('ProductCard', () => {
  const defaultProps = {
    product: mockProduct,
    isSelected: false,
    onSelect: vi.fn(),
  };

  it('should render product information correctly', () => {
    render(<ProductCard {...defaultProps} />);

    expect(
      screen.getByText('WW90T554DAE, Samsung Washing Machine')
    ).toBeInTheDocument();
    expect(screen.getByText('QuickDrive™, 9 kg, biała')).toBeInTheDocument();
    expect(screen.getByText('Pojemność (kg):')).toBeInTheDocument();
    expect(screen.getByText('9')).toBeInTheDocument();
    expect(screen.getByText('Klasa energetyczna:')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('should render product image with correct attributes', () => {
    render(<ProductCard {...defaultProps} />);

    const image = screen.getByAltText('Samsung Washing Machine');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
    expect(image).toHaveClass('w-64', 'h-48', 'object-contain');
  });

  it('should display formatted price correctly', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText('2499')).toBeInTheDocument();
    expect(screen.getByText('99')).toBeInTheDocument();
    expect(screen.getByText('PLN')).toBeInTheDocument();
    expect(screen.getByText('208.33 PLN x 12 rat')).toBeInTheDocument();
  });

  it('should display date range correctly', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText(/Cena obowiązuje:/)).toBeInTheDocument();
    expect(screen.getByText(/1\.01\.2024/)).toBeInTheDocument();
    expect(screen.getByText(/31\.12\.2024/)).toBeInTheDocument();
  });

  it('should display dimensions correctly', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText('Wymiary (GxSxW):')).toBeInTheDocument();
    expect(screen.getByText('85 x 60 x 60 cm')).toBeInTheDocument();
  });

  it('should display features correctly', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText('Funkcje:')).toBeInTheDocument();
    expect(
      screen.getByText('AddWash, Inverter Motor, Electronic Display')
    ).toBeInTheDocument();
  });

  it('should call onSelect when select button is clicked', () => {
    const onSelect = vi.fn();
    render(<ProductCard {...defaultProps} onSelect={onSelect} />);

    const selectButton = screen.getByRole('button', { name: /wybierz/i });
    fireEvent.click(selectButton);

    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it('should show selected state correctly', () => {
    render(<ProductCard {...defaultProps} isSelected={true} />);

    const selectedButton = screen.getByRole('button', { name: /wybrane/i });
    expect(selectedButton).toBeInTheDocument();
    expect(selectedButton).toHaveClass('bg-dark');
  });

  it('should show unselected state correctly', () => {
    render(<ProductCard {...defaultProps} isSelected={false} />);

    const selectButton = screen.getByRole('button', { name: /wybierz/i });
    expect(selectButton).toBeInTheDocument();
    expect(selectButton).toHaveClass('bg-darkBlue');
  });

  it('should handle product with different capacity', () => {
    const productWithDifferentCapacity = {
      ...mockProduct,
      capacity: 10.5,
    };

    render(
      <ProductCard {...defaultProps} product={productWithDifferentCapacity} />
    );

    expect(screen.getByText('10.5')).toBeInTheDocument();
    expect(
      screen.getByText('QuickDrive™, 10.5 kg, biała')
    ).toBeInTheDocument();
  });

  it('should handle product with different energy class', () => {
    const productWithDifferentEnergyClass = {
      ...mockProduct,
      energyClass: 'B',
    };

    render(
      <ProductCard
        {...defaultProps}
        product={productWithDifferentEnergyClass}
      />
    );

    expect(screen.getByText('B')).toBeInTheDocument();
  });
});
