'use client';

import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="glass-card p-8 rounded-lg max-w-md w-full text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-error bg-opacity-20 flex items-center justify-center">
          <AlertCircle className="w-8 h-8 text-error" />
        </div>
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <p className="text-muted">{error.message}</p>
        <button onClick={reset} className="btn-primary w-full">
          Try Again
        </button>
      </div>
    </div>
  );
}
