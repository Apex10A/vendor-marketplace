'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  selectedRating: number | null;
  onRatingChange: (rating: number | null) => void;
  selectedLocation: string | null;
  onLocationChange: (location: string | null) => void;
  className?: string;
}

const CATEGORIES = [
  'Electronics',
  'Fashion',
  'Home & Garden',
  'Books',
  'Sports',
  'Beauty',
];

const LOCATIONS = ['Lagos', 'Abuja', 'Kano', 'Rivers', 'Oyo', 'All Locations'];
const RATINGS = [5, 4, 3, 2, 1];

export default function Sidebar({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  selectedRating,
  onRatingChange,
  selectedLocation,
  onLocationChange,
  className,
}: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    rating: true,
    location: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const Content = () => (
    <div className="bg-white rounded-lg md:border md:border-gray-200 md:p-6">
      {/* Category Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full mb-4 font-semibold text-gray-900 cursor-pointer"
        >
          <span>Category</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform  ${
              expandedSections.category ? 'rotate-0' : '-rotate-90'
            }`}
          />
        </button>
        {expandedSections.category && (
          <div className="space-y-3">
            {CATEGORIES.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <Checkbox
                  checked={selectedCategory === cat}
                  onCheckedChange={(checked) =>
                    onCategoryChange(checked ? cat : null)
                  }
                  className="border-gray-300"
                />
                <span className="text-sm text-gray-700 group-hover:text-orange-500 transition-colors">
                  {cat}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full mb-4 font-semibold text-gray-900 cursor-pointer"
        >
          <span>Price Range</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              expandedSections.price ? 'rotate-0' : '-rotate-90'
            }`}
          />
        </button>
        {expandedSections.price && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Min Price</label>
              <input
                type="number"
                value={priceRange[0] || ''}
                onChange={(e) => {
                  const val = e.target.value === '' ? 0 : parseInt(e.target.value);
                  onPriceRangeChange([val, priceRange[1]]);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Max Price</label>
              <input
                type="number"
                value={priceRange[1] || ''}
                onChange={(e) => {
                  const val = e.target.value === '' ? 0 : parseInt(e.target.value);
                  onPriceRangeChange([priceRange[0], val]);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="text-sm font-medium text-gray-900">
              ₦{(priceRange[0] || 0).toLocaleString()} - ₦{(priceRange[1] || 0).toLocaleString()}
            </div>
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => toggleSection('rating')}
          className="flex items-center justify-between w-full mb-4 font-semibold text-gray-900"
        >
          <span>Rating</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              expandedSections.rating ? 'rotate-0' : '-rotate-90'
            }`}
          />
        </button>
        {expandedSections.rating && (
          <div className="space-y-3">
            {RATINGS.map((rating) => (
              <label
                key={rating}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <Checkbox
                  checked={selectedRating === rating}
                  onCheckedChange={(checked) =>
                    onRatingChange(checked ? rating : null)
                  }
                  className="border-gray-300"
                />
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray-700 group-hover:text-orange-500 transition-colors">
                    {rating}
                  </span>
                  <span className="text-orange-400">★</span>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Location Filter */}
      <div className="pb-6">
        <button
          onClick={() => toggleSection('location')}
          className="flex items-center justify-between w-full mb-4 font-semibold text-gray-900"
        >
          <span>Location</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              expandedSections.location ? 'rotate-0' : '-rotate-90'
            }`}
          />
        </button>
        {expandedSections.location && (
          <div className="space-y-3">
            {LOCATIONS.map((loc) => (
              <label
                key={loc}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <Checkbox
                  checked={selectedLocation === loc}
                  onCheckedChange={(checked) =>
                    onLocationChange(checked ? loc : null)
                  }
                  className="border-gray-300"
                />
                <span className="text-sm text-gray-700 group-hover:text-orange-500 transition-colors">
                  {loc}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <aside className={`${className} w-64 flex-shrink-0`}>
      <Content />
    </aside>
  );
}
