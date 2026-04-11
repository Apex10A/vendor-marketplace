'use client'

import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface Order {
  id: string
  customer: string
  product: string
  amount: string
  status: 'completed' | 'pending' | 'failed' | 'processing'
  date: string
}

const orders: Order[] = [
  {
    id: 'ORD-001',
    customer: 'John Doe',
    product: 'Wireless Headphones',
    amount: '$89.99',
    status: 'completed',
    date: '2024-04-10',
  },
  {
    id: 'ORD-002',
    customer: 'Jane Smith',
    product: 'USB-C Cable',
    amount: '$12.99',
    status: 'completed',
    date: '2024-04-10',
  },
  {
    id: 'ORD-003',
    customer: 'Mike Johnson',
    product: 'Phone Case',
    amount: '$24.99',
    status: 'processing',
    date: '2024-04-09',
  },
  {
    id: 'ORD-004',
    customer: 'Sarah Williams',
    product: 'Screen Protector',
    amount: '$9.99',
    status: 'pending',
    date: '2024-04-09',
  },
  {
    id: 'ORD-005',
    customer: 'Tom Brown',
    product: 'Portable Charger',
    amount: '$45.99',
    status: 'completed',
    date: '2024-04-08',
  },
  {
    id: 'ORD-006',
    customer: 'Lisa Anderson',
    product: 'Bluetooth Speaker',
    amount: '$65.99',
    status: 'failed',
    date: '2024-04-08',
  },
]

const statusConfig = {
  completed: { label: 'Completed', className: 'bg-green-100 text-green-800' },
  pending: { label: 'Pending', className: 'bg-yellow-100 text-yellow-800' },
  processing: { label: 'Processing', className: 'bg-blue-100 text-blue-800' },
  failed: { label: 'Failed', className: 'bg-red-100 text-red-800' },
}

export function RecentOrdersTable() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
        <p className="text-xs text-gray-500 mt-1">Latest transactions from your store</p>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-200">
              <TableHead className="text-gray-700 font-semibold">Order ID</TableHead>
              <TableHead className="text-gray-700 font-semibold">Customer</TableHead>
              <TableHead className="text-gray-700 font-semibold">Product</TableHead>
              <TableHead className="text-gray-700 font-semibold">Amount</TableHead>
              <TableHead className="text-gray-700 font-semibold">Status</TableHead>
              <TableHead className="text-gray-700 font-semibold">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => {
              const statusInfo = statusConfig[order.status]
              return (
                <TableRow key={order.id} className="border-gray-100 hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-900">{order.id}</TableCell>
                  <TableCell className="text-gray-700">{order.customer}</TableCell>
                  <TableCell className="text-gray-700">{order.product}</TableCell>
                  <TableCell className="font-medium text-gray-900">{order.amount}</TableCell>
                  <TableCell>
                    <Badge className={`${statusInfo.className} cursor-default`}>
                      {statusInfo.label}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-500 text-sm">{order.date}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
