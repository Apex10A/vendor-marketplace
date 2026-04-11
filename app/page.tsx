'use client';

import { useState } from 'react';
import Navbar from '@/components/marketplace/navbar';
import Sidebar from '@/components/marketplace/sidebar';
import ProductGrid from '@/components/marketplace/product-grid';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('relevant');

  const sidebarProps = {
    selectedCategory,
    onCategoryChange: setSelectedCategory,
    priceRange,
    onPriceRangeChange: setPriceRange,
    selectedRating,
    onRatingChange: setSelectedRating,
    selectedLocation,
    onLocationChange: setSelectedLocation,
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
        {/* Mobile Filter Button */}
        <div className="md:hidden mb-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Marketplace</h1>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
              <div className="p-6">
                <SheetTitle className="text-xl font-bold mb-4">Filters</SheetTitle>
                <Sidebar {...sidebarProps} className="w-full" />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <Sidebar
            {...sidebarProps}
            className="hidden md:block"
          />

          <main className="flex-1">
            <ProductGrid
              category={selectedCategory}
              priceRange={priceRange}
              rating={selectedRating}
              location={selectedLocation}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
