'use client'

import { DashboardHeader } from '@/components/dashboard/header'
import { DashboardSidebar } from '@/components/dashboard/sidebar'
import { StatCard } from '@/components/dashboard/stat-card'
import { RecentOrdersTable } from '@/components/dashboard/recent-orders-table'
import { SalesChart } from '@/components/dashboard/sales-chart'
import { useState } from 'react'

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState('overview')

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar activeNav={activeNav} setActiveNav={setActiveNav} />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 overflow-auto">
          <div className="p-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard 
                title="Total Revenue"
                value="$12,450.50"
                change="+12.5%"
                icon="💰"
              />
              <StatCard 
                title="Total Orders"
                value="234"
                change="+8.2%"
                icon="📦"
              />
              <StatCard 
                title="Total Products"
                value="42"
                change="+2.1%"
                icon="🛍️"
              />
              <StatCard 
                title="Pending Orders"
                value="12"
                change="-3.4%"
                icon="⏳"
              />
            </div>

            {/* Charts and Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Sales Chart - Takes 2 columns on larger screens */}
              <div className="lg:col-span-2">
                <SalesChart />
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Conversion Rate</span>
                    <span className="font-semibold text-gray-900">3.45%</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Avg Order Value</span>
                    <span className="font-semibold text-gray-900">$53.18</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Customer Retention</span>
                    <span className="font-semibold text-gray-900">67.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Visitors</span>
                    <span className="font-semibold text-gray-900">1,234</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders Table */}
            <div className="mt-8">
              <RecentOrdersTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
