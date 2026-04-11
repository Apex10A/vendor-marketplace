'use client'

import { BarChart3, Settings, TrendingUp, Package, ShoppingCart, DollarSign, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface DashboardSidebarProps {
  activeNav: string
  setActiveNav: (nav: string) => void
}

export function DashboardSidebar({ activeNav, setActiveNav }: DashboardSidebarProps) {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'payouts', label: 'Payouts', icon: DollarSign },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="w-64 bg-[#1a1a2e] text-white flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-xl font-bold">VendorHub</h1>
        <p className="text-xs text-gray-400 mt-1">Merchant Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeNav === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-700">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
        >
          <LogOut size={20} />
          <span className="ml-3 text-sm">Logout</span>
        </Button>
      </div>
    </div>
  )
}
