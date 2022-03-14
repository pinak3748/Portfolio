import React from 'react';

export default function ErrorBoundary({ error, resetErrorBoundary }) {
  return (

    <div role="alert">
      <p className="text-white">Something went wrong:</p>
      <pre className="text-white">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        type="button"
        className="text-gray-400 bg-gray-800 px-3 py-2"
      >
        Try again
      </button>
    </div>
  );
}

