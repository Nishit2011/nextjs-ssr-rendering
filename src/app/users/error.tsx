// app/users/error.tsx
"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  // Log the error to the console for debugging.
  useEffect(() => {
    console.error("Error loading users:", error);
  }, [error]);

  return (
    <div>
      <h2>Failed to load users!</h2>
      <p>{error.message}</p>
      {/* The reset function is provided by Next.js to try rendering the page again */}
      <button onClick={reset}>Try again</button>
    </div>
  );
}
