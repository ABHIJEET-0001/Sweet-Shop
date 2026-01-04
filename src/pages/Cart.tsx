import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const categoryEmojis = {
  sweets: '🍬',
  icecream: '🍨',
  cakes: '🎂',
};

const Cart: React.FC = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>Cart | कार्ट - Shiv Sweets</title>
        </Helmet>
        <Layout>
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 text-center">
              <ShoppingBag className="h-24 w-24 text-muted-foreground/50 mx-auto mb-6" />
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                आपका कार्ट खाली है | Add some delicious items!
              </p>
              <Link to="/sweets">
                <Button variant="hero" size="lg">
                  Browse Sweets | मिठाइयाँ देखें
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
        <title>{`Cart (${totalItems}) | कार्ट - Shiv Sweets`}</title>
      </Helmet>
      <Layout>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Your Cart | आपका कार्ट
            </h1>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft"
                  >
                    {/* Product Icon */}
                    <div className="h-16 w-16 rounded-lg bg-muted flex items-center justify-center text-3xl">
                      {categoryEmojis[item.category]}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.nameHindi}</p>
                      <p className="text-primary font-medium">₹{item.price}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <p className="font-bold text-foreground">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card rounded-xl shadow-card p-6 space-y-6">
                  <h2 className="text-xl font-display font-bold text-foreground">
                    Order Summary | ऑर्डर सारांश
                  </h2>

                  <div className="space-y-3 pb-4 border-b border-border">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal ({totalItems} items)</span>
                      <span>₹{totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Delivery | डिलीवरी</span>
                      <span className="text-green-600">Free</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-lg font-bold text-foreground">
                    <span>Total | कुल</span>
                    <span className="text-primary">₹{totalPrice}</span>
                  </div>

                  <Link to="/checkout" className="block">
                    <Button variant="hero" size="lg" className="w-full">
                      Proceed to Checkout
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>

                  <p className="text-sm text-muted-foreground text-center">
                    चेकआउट पर जाएं
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Cart;
