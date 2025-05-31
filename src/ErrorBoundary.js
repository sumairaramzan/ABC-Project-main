import React from 'react';
import { useErrorBoundary } from "react-error-boundary";
import { Button } from './components/ui/button';

function ErrorFallback({ error }) {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full mx-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-pink-500">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          {error.message}
        </p>
        <Button
          onClick={resetBoundary}
          className="w-full bg-blue-400 hover:bg-blue-500 text-white py-3 rounded-xl"
        >
          Try again
        </Button>
      </div>
    </div>
  );
}

export default ErrorFallback;