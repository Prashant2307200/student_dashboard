// src/components/Error.tsx
import React from 'react';

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100 text-red-800 p-4 border border-red-300 rounded">
      <h2 className="text-2xl font-bold mb-2">Error!</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;