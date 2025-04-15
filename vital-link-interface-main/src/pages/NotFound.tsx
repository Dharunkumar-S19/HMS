
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-hospital-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-hospital-text mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-hospital-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
