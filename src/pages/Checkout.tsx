import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Banknote, CheckCircle2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cod'>('cod');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.mobile || !formData.address) {
      toast.error('Please fill all required fields');
      return;
    }

    if (formData.mobile.length < 10) {
      toast.error('Please enter a valid mobile number');
      return;
    }

    setIsSubmitting(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Create WhatsApp message
    const orderDetails = items
      .map((item) => `${item.name} x${item.quantity} - ₹${item.price * item.quantity}`)
      .join('\n');

    const message = `🛒 *New Order from Shiv Sweets Website*\n\n*Customer:* ${formData.name}\n*Mobile:* ${formData.mobile}\n*Address:* ${formData.address}\n\n*Order Details:*\n${orderDetails}\n\n*Total:* ₹${totalPrice}\n*Payment:* ${paymentMethod === 'upi' ? 'UPI' : 'Cash on Delivery'}`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;

    clearCart();
    toast.success('Order placed successfully! | ऑर्डर सफलतापूर्वक प्लेस हुआ!');
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    navigate('/');
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Checkout | चेकआउट - Shiv Sweets</title>
      </Helmet>
      <Layout>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Checkout | चेकआउट
            </h1>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Checkout Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Delivery Information */}
                <div className="bg-card rounded-xl shadow-soft p-6 space-y-4">
                  <h2 className="text-xl font-display font-bold text-foreground mb-4">
                    Delivery Information | डिलीवरी जानकारी
                  </h2>

                  <div className="space-y-2">
                    <Label htmlFor="name">Name | नाम *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number | मोबाइल नंबर *</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      maxLength={10}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Delivery Address | पता *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      placeholder="Enter your full address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-card rounded-xl shadow-soft p-6 space-y-4">
                  <h2 className="text-xl font-display font-bold text-foreground mb-4">
                    Payment Method | भुगतान विधि
                  </h2>

                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                      className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
                        paymentMethod === 'upi'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <CreditCard className={`h-6 w-6 ${paymentMethod === 'upi' ? 'text-primary' : 'text-muted-foreground'}`} />
                      <div className="text-left flex-1">
                        <p className="font-medium text-foreground">UPI Payment</p>
                        <p className="text-sm text-muted-foreground">Pay via UPI apps</p>
                      </div>
                      {paymentMethod === 'upi' && (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cod')}
                      className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
                        paymentMethod === 'cod'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <Banknote className={`h-6 w-6 ${paymentMethod === 'cod' ? 'text-primary' : 'text-muted-foreground'}`} />
                      <div className="text-left flex-1">
                        <p className="font-medium text-foreground">Cash on Delivery</p>
                        <p className="text-sm text-muted-foreground">Pay when you receive | डिलीवरी पर भुगतान</p>
                      </div>
                      {paymentMethod === 'cod' && (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      )}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Place Order | ऑर्डर करें'}
                </Button>
              </form>

              {/* Order Summary */}
              <div>
                <div className="sticky top-24 bg-card rounded-xl shadow-card p-6 space-y-6">
                  <h2 className="text-xl font-display font-bold text-foreground">
                    Order Summary | ऑर्डर सारांश
                  </h2>

                  <div className="space-y-4 max-h-80 overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                        <div>
                          <p className="font-medium text-foreground">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.nameHindi} × {item.quantity}
                          </p>
                        </div>
                        <p className="font-medium text-foreground">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>₹{totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Delivery</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-foreground pt-2 border-t border-border">
                      <span>Total | कुल</span>
                      <span className="text-primary">₹{totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Checkout;
