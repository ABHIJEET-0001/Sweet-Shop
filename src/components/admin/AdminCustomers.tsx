import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, Trash2, Mail, Phone } from 'lucide-react';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  totalOrders: number;
  totalSpent: number;
  joinedDate: string;
}

const AdminCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Mock data - in production, fetch from Supabase
    const mockCustomers: Customer[] = [
      {
        id: '1',
        name: 'Raj Kumar',
        email: 'raj@example.com',
        phone: '9876543210',
        totalOrders: 5,
        totalSpent: 2500,
        joinedDate: '2025-01-01',
      },
      {
        id: '2',
        name: 'Priya Singh',
        email: 'priya@example.com',
        phone: '9876543211',
        totalOrders: 3,
        totalSpent: 1800,
        joinedDate: '2025-01-02',
      },
      {
        id: '3',
        name: 'Amit Patel',
        email: 'amit@example.com',
        phone: '9876543212',
        totalOrders: 8,
        totalSpent: 4200,
        joinedDate: '2024-12-15',
      },
    ];
    setCustomers(mockCustomers);
    setFilteredCustomers(mockCustomers);
  }, []);

  useEffect(() => {
    const filtered = customers.filter(
      (c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCustomers(filtered);
  }, [searchTerm, customers]);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this customer?')) {
      setCustomers(customers.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg shadow-soft p-6">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <Label htmlFor="search">Search Customers</Label>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Button variant="outline">Export</Button>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-4 font-semibold">Name</th>
                <th className="text-left p-4 font-semibold">Email</th>
                <th className="text-left p-4 font-semibold">Phone</th>
                <th className="text-center p-4 font-semibold">Orders</th>
                <th className="text-center p-4 font-semibold">Total Spent</th>
                <th className="text-left p-4 font-semibold">Joined</th>
                <th className="text-center p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b border-border hover:bg-muted/30 transition-colors"
                >
                  <td className="p-4">{customer.name}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-xs">
                      <Mail className="h-3 w-3" />
                      {customer.email}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-xs">
                      <Phone className="h-3 w-3" />
                      {customer.phone || 'N/A'}
                    </div>
                  </td>
                  <td className="p-4 text-center font-semibold text-primary">
                    {customer.totalOrders}
                  </td>
                  <td className="p-4 text-center font-semibold">₹{customer.totalSpent}</td>
                  <td className="p-4 text-xs text-muted-foreground">
                    {new Date(customer.joinedDate).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(customer.id)}
                      className="text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredCustomers.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No customers found
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Total Customers</p>
          <p className="text-2xl font-bold text-primary mt-1">{customers.length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Total Orders</p>
          <p className="text-2xl font-bold text-primary mt-1">
            {customers.reduce((acc, c) => acc + c.totalOrders, 0)}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Total Revenue</p>
          <p className="text-2xl font-bold text-primary mt-1">
            ₹{customers.reduce((acc, c) => acc + c.totalSpent, 0)}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Avg. Spent</p>
          <p className="text-2xl font-bold text-primary mt-1">
            ₹{customers.length > 0 ? Math.round(customers.reduce((acc, c) => acc + c.totalSpent, 0) / customers.length) : 0}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AdminCustomers;
