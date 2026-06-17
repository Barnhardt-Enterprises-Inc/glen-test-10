"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CoffeeItem } from "@/lib/mockData";

interface CoffeeCardProps {
  coffee: CoffeeItem;
}

export default function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
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
          <span className="text-lg font-semibold text-amber-600">${coffee.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {coffee.description}
        </p>
      </div>
    </motion.div>
  );
}
