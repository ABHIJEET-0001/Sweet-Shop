import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Eye, Trash2, CheckCircle2, Clock, XCircle } from 'lucide-react';

interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  orderDate: string;
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
}

const AdminOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    // Mock data - in production, fetch from Supabase
    const mockOrders: Order[] = [
      {
        id: 'ORD-001',
        customerName: 'Raj Kumar',
        customerEmail: 'raj@example.com',
        orderDate: '2025-01-08',
        totalAmount: 450,
        status: 'completed',
        items: [
          { name: 'Rasgulla', quantity: 1, price: 40 },
          { name: 'Gulab Jamun', quantity: 2, price: 35 },
        ],
      },
      {
        id: 'ORD-002',
        customerName: 'Priya Singh',
        customerEmail: 'priya@example.com',
        orderDate: '2025-01-07',
        totalAmount: 800,
        status: 'pending',
        items: [
          { name: 'Kaju Katli', quantity: 1, price: 800 },
        ],
      },
      {
        id: 'ORD-003',
        customerName: 'Amit Patel',
        customerEmail: 'amit@example.com',
        orderDate: '2025-01-06',
        totalAmount: 1200,
        status: 'completed',
        items: [
          { name: 'Chocolate Cake', quantity: 1, price: 600 },
          { name: 'Vanilla Cake', quantity: 1, price: 550 },
        ],
      },
    ];
    setOrders(mockOrders);
    setFilteredOrders(mockOrders);
  }, []);

  useEffect(() => {
    let filtered = orders.filter(
      (o) =>
        o.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.customerEmail.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (statusFilter !== 'all') {
      filtered = filtered.filter((o) => o.status === statusFilter);
    }

    setFilteredOrders(filtered);
  }, [searchTerm, statusFilter, orders]);

  const handleStatusChange = (orderId: string, newStatus: string) => {
    setOrders(
      orders.map((o) =>
        o.id === orderId
          ? { ...o, status: newStatus as 'pending' | 'completed' | 'cancelled' }
          : o
      )
    );
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this order?')) {
      setOrders(orders.filter((o) => o.id !== id));
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg shadow-soft p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="search">Search Orders</Label>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder="Search by order ID or customer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="status">Filter by Status</Label>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger id="status" className="mt-2">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Orders</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button variant="outline" className="w-full">Export</Button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left p-4 font-semibold">Order ID</th>
              <th className="text-left p-4 font-semibold">Customer</th>
              <th className="text-left p-4 font-semibold">Date</th>
              <th className="text-center p-4 font-semibold">Items</th>
              <th className="text-right p-4 font-semibold">Amount</th>
              <th className="text-center p-4 font-semibold">Status</th>
              <th className="text-center p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-border hover:bg-muted/30 transition-colors"
              >
                <td className="p-4 font-mono text-xs font-semibold text-primary">{order.id}</td>
                <td className="p-4">
                  <div>
                    <p className="font-medium">{order.customerName}</p>
                    <p className="text-xs text-muted-foreground">{order.customerEmail}</p>
                  </div>
                </td>
                <td className="p-4 text-xs text-muted-foreground">
                  {new Date(order.orderDate).toLocaleDateString()}
                </td>
                <td className="p-4 text-center text-xs">{order.items.length} items</td>
                <td className="p-4 text-right font-semibold">₹{order.totalAmount}</td>
                <td className="p-4">
                  <div className="flex items-center justify-center gap-2">
                    {getStatusIcon(order.status)}
                    <Select
                      value={order.status}
                      onValueChange={(value) => handleStatusChange(order.id, value)}
                    >
                      <SelectTrigger className="w-24 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </td>
                <td className="p-4 text-center flex gap-2 justify-center">
                  <Button variant="ghost" size="sm" className="text-blue-500">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(order.id)}
                    className="text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredOrders.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No orders found
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Total Orders</p>
          <p className="text-2xl font-bold text-primary mt-1">{orders.length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Pending</p>
          <p className="text-2xl font-bold text-yellow-500 mt-1">
            {orders.filter((o) => o.status === 'pending').length}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Completed</p>
          <p className="text-2xl font-bold text-green-500 mt-1">
            {orders.filter((o) => o.status === 'completed').length}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Total Revenue</p>
          <p className="text-2xl font-bold text-primary mt-1">
            ₹{orders.reduce((acc, o) => acc + o.totalAmount, 0)}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AdminOrders;
