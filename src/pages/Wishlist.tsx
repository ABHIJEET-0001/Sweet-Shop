import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const categoryEmojis = {
  sweets: '🍬',
  icecream: '🍨',
  cakes: '🎂',
};

const Wishlist: React.FC = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist, totalItems } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item: typeof wishlistItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      nameHindi: item.nameHindi,
      price: item.price,
      category: item.category,
    });
    toast.success(`${item.name} added to cart!`, {
      description: `${item.nameHindi} कार्ट में जोड़ा गया`,
    });
  };

  const handleRemove = (item: typeof wishlistItems[0]) => {
    removeFromWishlist(item.id);
    toast.success(`${item.name} removed from wishlist`);
  };

  const getPriceLabel = (item: typeof wishlistItems[0]) => {
    return item.category === 'sweets'
      ? `₹${item.price}/kg`
      : item.category === 'icecream'
      ? `₹${item.price}/scoop`
      : `₹${item.price}/kg`;
  };

  if (wishlistItems.length === 0) {
    return (
      <>
        <Helmet>
          <title>Wishlist | विशलिस्ट - Shiv Sweets</title>
        </Helmet>
        <Layout>
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 text-center">
              <Heart className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Your Wishlist is Empty
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                आपकी विशलिस्ट खाली है | Add your favorite sweets!
              </p>
              <Link to="/">
                <Button variant="hero" size="lg">
                  Browse Products | उत्पाद देखें
                </Button>
              </Link>
            </div>
          </section>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Wishlist (${totalItems}) | विशलिस्ट - Shiv Sweets`}</title>
      </Helmet>
      <Layout>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  My Wishlist
                </h1>
                <p className="text-muted-foreground">मेरी विशलिस्ट</p>
              </div>
              <Button variant="outline" onClick={clearWishlist}>
                Clear All
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <div
                    className="h-36 relative flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: item.color || '#FFF8E7' }}
                  >
                    <span className="text-6xl">
                      {categoryEmojis[item.category]}
                    </span>
                    <button
                      onClick={() => handleRemove(item)}
                      className="absolute top-3 right-3 p-2 bg-card/80 rounded-full hover:bg-destructive hover:text-destructive-foreground transition-colors"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.nameHindi}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        {getPriceLabel(item)}
                      </span>
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => handleAddToCart(item)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Wishlist;
