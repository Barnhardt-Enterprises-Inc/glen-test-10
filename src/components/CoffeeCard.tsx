"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Coffee } from '@/lib/mockData';

interface CoffeeCardProps {
  coffee: Coffee;
}

const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100"
    >
      <div className="relative h-64 w-full">
        <Image 
          src={coffee.imageUrl} 
          alt={coffee.name} 
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{coffee.name}</h3>
          <span className="text-lg font-semibold text-brown-700">${coffee.price}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {coffee.description}
        </p>
        <button className="w-full py-2 bg-brown-800 text-white rounded-lg hover:bg-brown-900 transition-colors">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default CoffeeCard;
