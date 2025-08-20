import React, { memo } from 'react';

interface LoadMoreButtonProps {
  onLoadMore: () => void;
  isLoading?: boolean;
  hasMore?: boolean;
}

export const LoadMoreButton: React.FC<LoadMoreButtonProps> = memo(
  ({ onLoadMore, isLoading = false, hasMore = true }) => {
    if (!hasMore) return null;

    return (
      <div className="w-full flex justify-center items-center mt-8 mb-8">
        <button
          onClick={onLoadMore}
          disabled={isLoading}
          className="text-lightBlue text-xl font-bold flex items-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:text-lightBlue/80 transition-colors"
        >
          <span>{isLoading ? 'Ładowanie...' : 'Pokaż więcej'}</span>
          {!isLoading && (
            <span className="ml-1 text-lightBlue text-xs">&#9660;</span>
          )}
        </button>
      </div>
    );
  }
);

LoadMoreButton.displayName = 'LoadMoreButton';
