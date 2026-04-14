'use client';

import { ShoppingCart, Search, LogIn, Menu, X, Zap, User, LayoutDashboard, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  const { data: session } = useSession();
  const [cartCount, setCartCount] = useState(3);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button 
              className="md:hidden p-2 -ml-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <Link href="/" className="flex items-center gap-1.5 group">
              <div className="bg-orange-500 p-1.5 rounded-lg group-hover:bg-orange-600 transition-colors">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" />
              </div>
              <span className="font-extrabold text-xl md:text-2xl tracking-tight bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                Vendra
              </span>
            </Link>
          </div>
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search products, vendors..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-6 h-6 text-gray-700" />
            </button>

            {/* Cart Icon */}
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartCount > 0 && (
                <Badge
                  className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center p-0 bg-orange-500 hover:bg-orange-600"
                >
                  {cartCount}
                </Badge>
              )}
            </button>

            {/* Auth Actions */}
            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                      <User className="w-6 h-6" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{session.user?.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {session.user?.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {session.user?.role === 'VENDOR' && (
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="cursor-pointer">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={() => signOut()} className="text-red-600 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                {/* Sign In Button - Desktop */}
                <Link href="/login">
                  <Button
                    className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white gap-2"
                  >
                    <LogIn className="w-4 h-4" />
                    Sign In
                  </Button>
                </Link>
                
                {/* Sign In Icon - Mobile */}
                <Link href="/login">
                  <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
                    <LogIn className="w-6 h-6 text-gray-700" />
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Search Bar - Expandable */}
        {isSearchOpen && (
          <div className="md:hidden mt-3 pb-2 animate-in slide-in-from-top duration-200">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                autoFocus
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-white animate-in slide-in-from-left duration-300">
          <div className="p-4 flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-1.5">
                <div className="bg-orange-500 p-1.5 rounded-lg">
                  <Zap className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                  Vendra
                </span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-4 text-lg font-medium text-gray-900">
              <a href="#" className="py-2 border-b border-gray-100">Marketplace</a>
              <a href="#" className="py-2 border-b border-gray-100">Flash Sales</a>
              <a href="#" className="py-2 border-b border-gray-100">Sell on Vendra</a>
              <a href="#" className="py-2 border-b border-gray-100">Help Center</a>
            </nav>

            <div className="mt-auto pb-8">
              <Button className="w-full bg-orange-500 py-6 text-lg">Sign In</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
