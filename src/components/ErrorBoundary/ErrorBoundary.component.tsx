import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-text mb-2">
                Ups! Coś poszło nie tak
              </h2>
              <p className="text-lightText text-sm">
                Wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-green hover:bg-green/90 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Odśwież stronę
              </button>

              <button
                onClick={() =>
                  this.setState({ hasError: false, error: undefined })
                }
                className="w-full bg-lightText/20 hover:bg-lightText/30 text-text font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Spróbuj ponownie
              </button>
            </div>

            {this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-sm text-lightText cursor-pointer hover:text-text">
                  Szczegóły błędu (tylko w trybie deweloperskim)
                </summary>
                <div className="mt-2 p-3 bg-gray-100 rounded text-xs font-mono text-left overflow-auto">
                  <div className="text-red-600 font-semibold mb-1">
                    {this.state.error.name}: {this.state.error.message}
                  </div>
                  <div className="text-gray-600">{this.state.error.stack}</div>
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
