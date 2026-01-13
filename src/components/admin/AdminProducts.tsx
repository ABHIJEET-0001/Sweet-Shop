import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Edit2, Trash2, Save, X } from 'lucide-react';
import { fetchProducts, addProduct as sbAddProduct, updateProduct as sbUpdateProduct, deleteProduct as sbDeleteProduct } from '@/services/supabase/products';

interface Product {
  id: string;
  name: string;
  nameHindi: string;
  price: number;
  category: 'sweets' | 'icecream' | 'cakes';
}

const AdminProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editPrice, setEditPrice] = useState<number>(0);

  useEffect(() => {
    // Load products from Supabase
    let mounted = true;
    (async () => {
      try {
        const data = await fetchProducts();
        if (!mounted) return;
        setProducts(data ?? []);
        setFilteredProducts(data ?? []);
      } catch (err) {
        console.error('Failed to fetch products', err);
        // fall back to empty list
        setProducts([]);
        setFilteredProducts([]);
      }
    })();
    return () => { mounted = false };
  }, []);

  useEffect(() => {
    let filtered = products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.nameHindi.includes(searchTerm)
    );

    if (categoryFilter !== 'all') {
      filtered = filtered.filter((p) => p.category === categoryFilter);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, categoryFilter, products]);

  const handleEditStart = (product: Product) => {
    setEditingId(product.id);
    setEditPrice(product.price);
  };

  const handleSavePrice = (id: string) => {
    (async () => {
      try {
        const updated = await sbUpdateProduct(id, { price: editPrice } as any);
        setProducts(products.map((p) => (p.id === id ? updated : p)));
        setEditingId(null);
      } catch (err) {
        console.error('Failed to update product', err);
        alert('Failed to update product price');
      }
    })();
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      (async () => {
        try {
          await sbDeleteProduct(id);
          setProducts(products.filter((p) => p.id !== id));
        } catch (err) {
          console.error('Failed to delete product', err);
          alert('Failed to delete product');
        }
      })();
    }
  };

  const handleAddProductClick = async () => {
    const name = prompt('Product name (English)');
    if (!name) return;
    const nameHindi = prompt('Product name (Hindi)') || name;
    const priceStr = prompt('Price (number)');
    const price = Number(priceStr);
    if (isNaN(price) || price <= 0) {
      alert('Invalid price');
      return;
    }
    const category = prompt('Category: sweets | icecream | cakes', 'sweets') as 'sweets' | 'icecream' | 'cakes';
    if (!['sweets', 'icecream', 'cakes'].includes(category)) {
      alert('Invalid category');
      return;
    }
    try {
      const created = await sbAddProduct({ name, nameHindi, price, category } as any);
      setProducts([...products, created]);
    } catch (err) {
      console.error('Failed to add product', err);
      alert('Failed to add product');
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'sweets':
        return 'Sweets | मिठाई';
      case 'icecream':
        return 'Ice Cream | आइसक्रीम';
      case 'cakes':
        return 'Cakes | केक';
      default:
        return category;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg shadow-soft p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="search">Search Products</Label>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="category">Filter by Category</Label>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger id="category" className="mt-2">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="sweets">Sweets | मिठाई</SelectItem>
                <SelectItem value="icecream">Ice Cream | आइसक्रीम</SelectItem>
                <SelectItem value="cakes">Cakes | केक</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button className="w-full" onClick={handleAddProductClick}>+ Add Product</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="p-4 space-y-3">
            <div>
              <h3 className="font-semibold text-foreground">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.nameHindi}</p>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                {getCategoryLabel(product.category)}
              </span>
              <span className="text-xs text-muted-foreground">ID: {product.id}</span>
            </div>

            {editingId === product.id ? (
              <div className="space-y-2">
                <div>
                  <Label htmlFor={`price-${product.id}`}>New Price</Label>
                  <Input
                    id={`price-${product.id}`}
                    type="number"
                    value={editPrice}
                    onChange={(e) => setEditPrice(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleSavePrice(product.id)}
                  >
                    <Save className="h-3 w-3 mr-1" />
                    Save
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={handleCancel}
                  >
                    <X className="h-3 w-3 mr-1" />
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="bg-muted/50 rounded p-3">
                  <p className="text-xs text-muted-foreground">Current Price</p>
                  <p className="text-2xl font-bold text-primary">₹{product.price}</p>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleEditStart(product)}
                  >
                    <Edit2 className="h-3 w-3 mr-1" />
                    Edit Price
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(product.id)}
                    className="text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </>
            )}
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No products found
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Total Products</p>
          <p className="text-2xl font-bold text-primary mt-1">{products.length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Sweets</p>
          <p className="text-2xl font-bold text-primary mt-1">
            {products.filter((p) => p.category === 'sweets').length}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Ice Creams</p>
          <p className="text-2xl font-bold text-primary mt-1">
            {products.filter((p) => p.category === 'icecream').length}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Cakes</p>
          <p className="text-2xl font-bold text-primary mt-1">
            {products.filter((p) => p.category === 'cakes').length}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AdminProducts;
