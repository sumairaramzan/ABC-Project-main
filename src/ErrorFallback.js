import React from 'react';
import { Button } from './components/ui/button';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-xl text-center max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4 text-pink-500">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-600 mb-4">
          {error.message}
        </p>
        <Button
          onClick={resetErrorBoundary}
          className="w-full bg-blue-400 hover:bg-blue-500 text-white py-3 rounded-xl"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}

export default ErrorFallback;