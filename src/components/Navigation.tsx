import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="text-2xl font-bold text-brown-900">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          Quetrex Coffee
        </Link>
      </div>
      <div className="hidden md:flex space-x-8 font-medium text-gray-600">
        <Link href="/" className="hover:text-brown-600 transition-colors">Home</Link>
        <Link href="/shop" className="hover:text-brown-600 transition-colors">Shop</Link>
        <Link href="/about" className="hover:text-brown-600 transition-colors">About</Link>
        <Link href="/contact" className="hover:text-brown-600 transition-colors">Contact</Link>
      </div>
      <button className="bg-brown-700 text-white px-4 py-2 rounded-lg hover:bg-brown-800 transition-colors">
        Order Now
      </button>
    </nav>
  );
};

export default Navigation;
