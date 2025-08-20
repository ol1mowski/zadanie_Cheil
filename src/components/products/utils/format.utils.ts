export const formatPrice = (
  amount: number
): { mainPart: number; cents: string } => {
  const mainPart = Math.floor(amount);
  const cents = Math.round((amount - mainPart) * 100);
  return {
    mainPart,
    cents: cents.toString().padStart(2, '0'),
  };
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('pl-PL');
};

export const formatDimensions = (dimensions: {
  height: number;
  depth: number;
  width: number;
}): string => {
  return `${dimensions.height} x ${dimensions.depth} x ${dimensions.width} cm`;
};

export const formatFeatures = (features: string[]): string => {
  return features.join(', ');
};
