import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Products } from '../Products.component';
import type { Product } from '../types/products.types';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Samsung Washing Machine',
    model: 'WW90T554DAE',
    features: ['AddWash', 'Inverter Motor'],
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
    image: '/pralka1.jpg',
  },
  {
    id: '2',
    name: 'LG Washing Machine',
    model: 'F4V510RSE',
    features: ['AI Control'],
    capacity: 10.5,
    dimensions: { height: 85, depth: 60, width: 60 },
    energyClass: 'B',
    price: {
      amount: 1999.99,
      currency: 'PLN',
      validFrom: '2024-01-01',
      validTo: '2024-12-31',
      installment: { monthlyAmount: 166.67, months: 12 },
    },
    image: '/pralka2.jpg',
  },
];

describe('Products', () => {
  const defaultProps = {
    products: mockProducts,
  };

  it('should render products grid correctly', () => {
    render(<Products {...defaultProps} />);

    expect(
      screen.getByText('WW90T554DAE, Samsung Washing Machine')
    ).toBeInTheDocument();
    expect(
      screen.getByText('F4V510RSE, LG Washing Machine')
    ).toBeInTheDocument();
    expect(screen.getByText('Pokaż więcej')).toBeInTheDocument();
  });

  it('should render correct number of product cards', () => {
    render(<Products {...defaultProps} />);

    const productCards = screen.getAllByText(/QuickDrive™/);
    expect(productCards).toHaveLength(2);
  });

  it('should show NoResults component when products array is empty', () => {
    render(<Products products={[]} />);

    expect(screen.getByText('Brak wyników')).toBeInTheDocument();
    expect(
      screen.getByText(
        /Nie znaleziono produktów spełniających wybrane kryteria/
      )
    ).toBeInTheDocument();
    expect(screen.queryByText('Pokaż więcej')).not.toBeInTheDocument();
  });

  it('should render LoadMoreButton when products exist', () => {
    render(<Products {...defaultProps} />);

    const loadMoreButton = screen.getByRole('button', {
      name: /pokaż więcej/i,
    });
    expect(loadMoreButton).toBeInTheDocument();
    expect(loadMoreButton).not.toBeDisabled();
  });

  it('should call handleLoadMore when load more button is clicked', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    render(<Products {...defaultProps} />);

    const loadMoreButton = screen.getByRole('button', {
      name: /pokaż więcej/i,
    });
    fireEvent.click(loadMoreButton);

    expect(consoleSpy).toHaveBeenCalledWith('Loading more products...');
    consoleSpy.mockRestore();
  });

  it('should render products in responsive grid', () => {
    render(<Products {...defaultProps} />);

    const gridContainer = document.querySelector('.grid');
    expect(gridContainer).toHaveClass(
      'grid',
      'grid-cols-1',
      'md:grid-cols-2',
      'lg:grid-cols-3'
    );
  });

  it('should handle single product correctly', () => {
    const singleProduct = [mockProducts[0]];
    render(<Products products={singleProduct} />);

    expect(
      screen.getByText('WW90T554DAE, Samsung Washing Machine')
    ).toBeInTheDocument();
    expect(
      screen.queryByText('F4V510RSE, LG Washing Machine')
    ).not.toBeInTheDocument();
  });

  it('should render section with correct accessibility attributes', () => {
    render(<Products {...defaultProps} />);

    const section = document.querySelector('section');
    expect(section).toHaveClass('w-full', 'bg-background', 'py-6', 'px-4');
  });

  it('should render container with correct max width', () => {
    render(<Products {...defaultProps} />);

    const container = document.querySelector('.container');
    expect(container).toHaveClass('max-w-6xl');
  });
});
