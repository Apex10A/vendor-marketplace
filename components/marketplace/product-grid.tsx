'use client';

import { useMemo } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ProductCard from './product-card';

interface ProductGridProps {
  category: string | null;
  priceRange: [number, number];
  rating: number | null;
  location: string | null;
  sortBy: string;
  onSortChange: (value: string) => void;
}

const MOCK_PRODUCTS = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    title: 'Premium Wireless Headphones with Active Noise Cancellation',
    vendor: 'TechStore Pro',
    price: 45000,
    originalPrice: 65000,
    rating: 4.5,
    reviewCount: 2341,
    inStock: true,
    category: 'Electronics',
    location: 'Lagos',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    title: 'Elegant Stainless Steel Wristwatch',
    vendor: 'Luxury Watches',
    price: 28000,
    originalPrice: 42000,
    rating: 5,
    reviewCount: 1892,
    inStock: true,
    category: 'Fashion',
    location: 'Abuja',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
    title: 'Designer Sunglasses with UV Protection',
    vendor: 'Fashion Hub',
    price: 15000,
    originalPrice: 25000,
    rating: 4,
    reviewCount: 567,
    inStock: true,
    category: 'Fashion',
    location: 'Lagos',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop',
    title: 'Professional DSLR Camera Bundle',
    vendor: 'Photography Express',
    price: 180000,
    originalPrice: 250000,
    rating: 4.8,
    reviewCount: 1245,
    inStock: true,
    category: 'Electronics',
    location: 'Lagos',
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop',
    title: 'Ergonomic Office Chair with Lumbar Support',
    vendor: 'Furniture Kingdom',
    price: 35000,
    originalPrice: 52000,
    rating: 4.3,
    reviewCount: 1823,
    inStock: false,
    category: 'Home & Garden',
    location: 'Rivers',
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=500&h=500&fit=crop',
    title: 'Luxury Handbag - Italian Leather',
    vendor: 'Elegance Boutique',
    price: 65000,
    originalPrice: 95000,
    rating: 4.9,
    reviewCount: 934,
    inStock: true,
    category: 'Fashion',
    location: 'Abuja',
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&h=500&fit=crop',
    title: 'High-Performance Running Shoes',
    vendor: 'SportGear Co',
    price: 22000,
    originalPrice: 32000,
    rating: 4.6,
    reviewCount: 2104,
    inStock: true,
    category: 'Sports',
    location: 'Kano',
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3af2abd8?w=500&h=500&fit=crop',
    title: 'Premium Smart Watch with Fitness Tracking',
    vendor: 'TechWear Solutions',
    price: 38000,
    originalPrice: 55000,
    rating: 4.4,
    reviewCount: 1567,
    inStock: true,
    category: 'Electronics',
    location: 'Lagos',
  },
  {
    id: '9',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop',
    title: 'Bestselling Novel Collection - Fiction',
    vendor: 'BookWorld Store',
    price: 8500,
    originalPrice: 12000,
    rating: 4.7,
    reviewCount: 3456,
    inStock: true,
    category: 'Books',
    location: 'Abuja',
  },
];

export default function ProductGrid({
  category,
  priceRange,
  rating,
  location,
  sortBy,
  onSortChange,
}: ProductGridProps) {
  const filteredProducts = useMemo(() => {
    let products = [...MOCK_PRODUCTS];

    // Filter by category
    if (category) {
      products = products.filter((p) => p.category === category);
    }

    // Filter by price range
    products = products.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Filter by rating
    if (rating) {
      products = products.filter((p) => Math.floor(p.rating) >= rating);
    }

    // Filter by location
    if (location && location !== 'All Locations') {
      products = products.filter((p) => p.location === location);
    }

    // Sort
    if (sortBy === 'price-low') {
      products.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      products.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      products.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      // In real app, sort by date
      products.sort((a, b) => b.id.localeCompare(a.id));
    }
    // 'relevant' is default, no sorting needed

    return products;
  }, [category, priceRange, rating, location, sortBy]);

  return (
    <div>
      {/* Top Bar - Sort and Results Count */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
        <div className="text-sm text-gray-600">
          Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> results
        </div>

        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevant">Most Relevant</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              vendor={product.vendor}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              reviewCount={product.reviewCount}
              inStock={product.inStock}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No products found
          </h3>
          <p className="text-gray-600 mb-6 max-w-md">
            Try adjusting your filters or search for different products
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
