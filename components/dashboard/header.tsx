'use client'

import { Bell, Settings, User } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Left - Store Name */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Tech Store</h2>
          <p className="text-xs text-gray-500">Welcome back, Store Admin</p>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Bell size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Settings size={20} />
          </Button>
          
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">Verified Vendor</p>
            </div>
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" />
              <AvatarFallback>AU</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}
