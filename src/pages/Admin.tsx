import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, ShoppingBag, Package, LogOut, Loader2 } from 'lucide-react';
import AdminCustomers from '@/components/admin/AdminCustomers';
import AdminOrders from '@/components/admin/AdminOrders';
import AdminProducts from '@/components/admin/AdminProducts';

const ADMIN_EMAIL = 'admin@shivsweets.com';

const Admin = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/auth');
      } else if (user.email !== ADMIN_EMAIL) {
        navigate('/');
      } else {
        setIsAuthorized(true);
      }
    }
  }, [user, loading, navigate]);

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Admin Panel - Shiv Sweets Bhaghat Ji</title>
        <meta name="description" content="Admin panel for managing Shiv Sweets Bhaghat Ji" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        {/* Admin Header */}
        <div className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-primary">
                Shiv Sweets Admin
              </h1>
              <p className="text-sm text-muted-foreground">शिव स्वीट्स भगत जी - प्रबंधन पैनल</p>
            </div>
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        {/* Admin Content */}
        <div className="container mx-auto px-4 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="customers" className="gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Customers</span>
              </TabsTrigger>
              <TabsTrigger value="orders" className="gap-2">
                <ShoppingBag className="h-4 w-4" />
                <span className="hidden sm:inline">Orders</span>
              </TabsTrigger>
              <TabsTrigger value="products" className="gap-2">
                <Package className="h-4 w-4" />
                <span className="hidden sm:inline">Products</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="customers" className="space-y-4">
              <AdminCustomers />
            </TabsContent>

            <TabsContent value="orders" className="space-y-4">
              <AdminOrders />
            </TabsContent>

            <TabsContent value="products" className="space-y-4">
              <AdminProducts />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Admin;
