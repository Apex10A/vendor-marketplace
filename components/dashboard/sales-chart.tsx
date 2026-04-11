'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', sales: 4000, orders: 240 },
  { month: 'Feb', sales: 3000, orders: 221 },
  { month: 'Mar', sales: 2000, orders: 229 },
  { month: 'Apr', sales: 2780, orders: 200 },
  { month: 'May', sales: 1890, orders: 229 },
  { month: 'Jun', sales: 2390, orders: 200 },
  { month: 'Jul', sales: 3490, orders: 210 },
  { month: 'Aug', sales: 3800, orders: 250 },
  { month: 'Sep', sales: 4100, orders: 280 },
  { month: 'Oct', sales: 4500, orders: 300 },
  { month: 'Nov', sales: 5200, orders: 350 },
  { month: 'Dec', sales: 6100, orders: 420 },
]

export function SalesChart() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Monthly Sales</h3>
        <p className="text-xs text-gray-500 mt-1">Revenue and order trends for the past year</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
            }}
            cursor={{ fill: 'rgba(249, 115, 22, 0.1)' }}
          />
          <Legend />
          <Bar dataKey="sales" fill="#f97316" name="Sales ($)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="orders" fill="#e5e7eb" name="Orders" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
