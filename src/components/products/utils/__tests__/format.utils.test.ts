import { describe, it, expect } from 'vitest';
import {
  formatPrice,
  formatDate,
  formatDimensions,
  formatFeatures,
} from '../format.utils';

describe('format.utils', () => {
  describe('formatPrice', () => {
    it('should format whole number correctly', () => {
      const result = formatPrice(1000);
      expect(result.mainPart).toBe(1000);
      expect(result.cents).toBe('00');
    });

    it('should format decimal number correctly', () => {
      const result = formatPrice(2499.99);
      expect(result.mainPart).toBe(2499);
      expect(result.cents).toBe('99');
    });

    it('should format number with single decimal place', () => {
      const result = formatPrice(1999.5);
      expect(result.mainPart).toBe(1999);
      expect(result.cents).toBe('50');
    });

    it('should handle zero amount', () => {
      const result = formatPrice(0);
      expect(result.mainPart).toBe(0);
      expect(result.cents).toBe('00');
    });

    it('should handle very small amounts', () => {
      const result = formatPrice(0.01);
      expect(result.mainPart).toBe(0);
      expect(result.cents).toBe('01');
    });
  });

  describe('formatDate', () => {
    it('should format date string correctly', () => {
      const result = formatDate('2024-01-01');
      expect(result).toBe('1.01.2024');
    });

    it('should format different date formats', () => {
      const result = formatDate('2024-12-31');
      expect(result).toBe('31.12.2024');
    });

    it('should handle ISO date string', () => {
      const result = formatDate('2024-06-15T10:30:00Z');
      expect(result).toBe('15.06.2024');
    });

    it('should handle invalid date gracefully', () => {
      const result = formatDate('invalid-date');
      expect(result).toBe('Invalid Date');
    });
  });

  describe('formatDimensions', () => {
    it('should format dimensions correctly', () => {
      const dimensions = { height: 85, depth: 60, width: 60 };
      const result = formatDimensions(dimensions);
      expect(result).toBe('85 x 60 x 60 cm');
    });

    it('should handle different dimension values', () => {
      const dimensions = { height: 100, depth: 70, width: 80 };
      const result = formatDimensions(dimensions);
      expect(result).toBe('100 x 70 x 80 cm');
    });

    it('should handle zero dimensions', () => {
      const dimensions = { height: 0, depth: 0, width: 0 };
      const result = formatDimensions(dimensions);
      expect(result).toBe('0 x 0 x 0 cm');
    });
  });

  describe('formatFeatures', () => {
    it('should join features with comma and space', () => {
      const features = ['AddWash', 'Inverter Motor', 'Electronic Display'];
      const result = formatFeatures(features);
      expect(result).toBe('AddWash, Inverter Motor, Electronic Display');
    });

    it('should handle single feature', () => {
      const features = ['AI Control'];
      const result = formatFeatures(features);
      expect(result).toBe('AI Control');
    });

    it('should handle empty features array', () => {
      const features: string[] = [];
      const result = formatFeatures(features);
      expect(result).toBe('');
    });

    it('should handle features with special characters', () => {
      const features = ['QuickDrive™', 'AddWash+', 'AI Control 2.0'];
      const result = formatFeatures(features);
      expect(result).toBe('QuickDrive™, AddWash+, AI Control 2.0');
    });
  });
});
