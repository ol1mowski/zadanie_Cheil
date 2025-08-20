import { useCallback } from 'react';

export const useErrorHandler = () => {
  const handleError = useCallback((error: Error, errorInfo?: unknown) => {
    console.error('Error caught by useErrorHandler:', error, errorInfo);
  }, []);

  const handleAsyncError = useCallback(
    async <T>(
      asyncFn: () => Promise<T>,
      fallback?: T
    ): Promise<T | undefined> => {
      try {
        return await asyncFn();
      } catch (error) {
        handleError(error instanceof Error ? error : new Error(String(error)));
        return fallback;
      }
    },
    [handleError]
  );

  return {
    handleError,
    handleAsyncError,
  };
};
