'use client';

import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  vendor: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
}

export default function ProductCard({
  id,
  image,
  title,
  vendor,
  price,
  originalPrice,
  rating,
  reviewCount,
  inStock,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const discountPercent = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            -{discountPercent}%
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? 'fill-orange-500 text-orange-500' : 'text-gray-600'
            }`}
          />
        </button>

        {/* Stock Status */}
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col h-full">
        {/* Vendor Name */}
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
          {vendor}
        </p>

        {/* Product Title */}
        <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-sm ${
                  i < Math.floor(rating) ? 'text-orange-400' : 'text-gray-300'
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-600">
            ({reviewCount})
          </span>
        </div>

        {/* Price Section */}
        <div className="mb-4 mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-gray-900">
              ₦{price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ₦{originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          disabled={!inStock}
          className={`w-full gap-2 ${
            inStock
              ? 'bg-orange-500 hover:bg-orange-600 text-white'
              : 'bg-gray-300 text-gray-600 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
