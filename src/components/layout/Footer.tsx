import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210?text=Hello! I would like to place an order.', '_blank');
  };

  return (
    <footer className="bg-brown text-cream">
      {/* WhatsApp Floating Button */}
      <Button
        variant="whatsapp"
        size="lg"
        className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 p-0 shadow-lg hover:shadow-xl"
        onClick={handleWhatsAppClick}
      >
        <MessageCircle className="h-7 w-7" />
      </Button>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-display font-bold text-primary">Shiv Sweets</h3>
              <p className="text-xl font-display text-gold">शिव स्वीट्स</p>
            </div>
            <p className="text-cream/80 text-sm">
              Fresh & Pure Sweets since 2005<br />
              ताज़ी और शुद्ध मिठाइयाँ 2005 से
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">Quick Links | त्वरित लिंक</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-cream/80 hover:text-primary transition-colors">
                Home | होम
              </Link>
              <Link to="/sweets" className="text-cream/80 hover:text-primary transition-colors">
                Sweets | मिठाइयाँ
              </Link>
              <Link to="/icecream" className="text-cream/80 hover:text-primary transition-colors">
                Ice Cream | आइसक्रीम
              </Link>
              <Link to="/cakes" className="text-cream/80 hover:text-primary transition-colors">
                Cakes | केक
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">Contact | संपर्क</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-cream/80 text-sm">
                  Main Market, Nasirabad<br />
                  Rajasthan - 305601<br />
                  मुख्य बाज़ार, नासिराबाद
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div className="text-cream/80 text-sm">
                  +91 98765 43210<br />
                  +91 98765 43211
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div className="text-cream/80 text-sm">
                  7:00 AM - 10:00 PM<br />
                  सुबह 7 - रात 10
                </div>
              </div>
            </div>
          </div>

          {/* Order on WhatsApp */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">Order Now | अभी ऑर्डर करें</h4>
            <p className="text-cream/80 text-sm">
              Order directly via WhatsApp for quick delivery!<br />
              व्हाट्सएप पर सीधे ऑर्डर करें!
            </p>
            <Button
              variant="whatsapp"
              size="lg"
              className="w-full"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Order
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-cream/20 text-center text-cream/60 text-sm">
          <p>© 2024 Shiv Sweets | शिव स्वीट्स. All rights reserved.</p>
          <p className="mt-1">Made with ❤️ in Nasirabad, Rajasthan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
