'use client'

import { ArrowUp, ArrowDown } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  change: string
  icon: string
}

export function StatCard({ title, value, change, icon }: StatCardProps) {
  const isPositive = change.startsWith('+')

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mb-2">{value}</p>
          <div className="flex items-center gap-1">
            {isPositive ? (
              <ArrowUp size={16} className="text-green-500" />
            ) : (
              <ArrowDown size={16} className="text-red-500" />
            )}
            <span className={`text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {change} from last month
            </span>
          </div>
        </div>
        <div className="text-3xl">{icon}</div>
      </div>
    </div>
  )
}
