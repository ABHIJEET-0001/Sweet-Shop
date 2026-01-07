import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919251022024?text=Hello! I would like to place an order from Shiv Sweets Bhaghat Ji.', '_blank');
  };

  const handleMapClick = () => {
    window.open('https://www.google.com/maps/place/%F0%9D%90%92%F0%9D%90%A1%F0%9D%90%A2%F0%9D%90%AF+%F0%9D%90%92%F0%9D%90%B0%F0%9D%90%9E%F0%9D%90%9E%F0%9D%90%AD%F0%9D%90%AC+%F0%9D%90%81%F0%9D%90%A1%F0%9D%90%9A%F0%9D%90%A0%F0%9D%90%9A%F0%9D%90%AD+%F0%9D%90%89%F0%9D%90%A2+-%F0%9D%90%92%F0%9D%90%B0%F0%9D%90%9E%F0%9D%90%9E%F0%9D%90%AD+%F0%9D%90%92%F0%9D%90%A1%F0%9D%90%A8%F0%9D%90%A9+%7C+%F0%9D%90%82%F0%9D%90%A1%F0%9D%90%A8%F0%9D%90%9C%F0%9D%90%A8%F0%9D%90%A5%F0%9D%90%9A%F0%9D%90%AD%F0%9D%90%9E%F0%9D%90%AC+%F0%9D%90%8D%F0%9D%90%9A%F0%9D%90%AC%F0%9D%90%A2%F0%9D%90%AB%F0%9D%90%9A%F0%9D%90%9B%F0%9D%90%9A%F0%9D%90%9D/@26.2996307,74.7322003,17z/data=!4m14!1m7!3m6!1s0x39695900d879b02b:0x6833efc589b39a7a!2z8J2QkvCdkKHwnZCi8J2QryDwnZCS8J2QsPCdkJ7wnZCe8J2QrfCdkKwg8J2QgfCdkKHwnZCa8J2QoPCdkJrwnZCtIPCdkInwnZCiIC3wnZCS8J2QsPCdkJ7wnZCe8J2QrSDwnZCS8J2QofCdkKjwnZCpIHwg8J2QgvCdkKHwnZCo8J2QnPCdkKjwnZCl8J2QmvCdkK3wnZCe8J2QrCDwnZCN8J2QmvCdkKzwnZCi8J2Qq_CdkJrwnZCb8J2QmvCdkJ0!8m2!3d26.2996307!4d74.7347752!16s%2Fg%2F11mcbc4kfx!3m5!1s0x39695900d879b02b:0x6833efc589b39a7a!8m2!3d26.2996307!4d74.7347752!16s%2Fg%2F11mcbc4kfx?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D', '_blank');
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
              <h3 className="text-2xl font-display font-bold text-primary">Shiv Sweets Bhaghat Ji</h3>
              <p className="text-xl font-display text-gold">शिव स्वीट्स भगत जी</p>
            </div>
            <p className="text-cream/80 text-sm">
              Fresh & Pure Sweets since 1990<br />
              ताज़ी और शुद्ध मिठाइयाँ 1990 से
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
                  Shiv Sweets Bhaghat Ji - Sweet Shop<br />
                  186, Sadar Bazar, Main Market<br />
                  Nasirabad, Rajasthan 305601
                </div>
              </div>
              <div>
                <button
                  onClick={handleMapClick}
                  className="mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-95"
                >
                  View on Map
                </button>
              </div>

              {/* Embedded Map (small preview) */}
              <div className="mt-3 rounded-md overflow-hidden border border-cream/20">
                <iframe
                  title="Shiv Sweets Bhaghat Ji location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.275937524533!2d74.7322003!3d26.2996307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39695900d879b02b%3A0x6833efc589b39a7a!2sShiv%20Sweets%20Bhagat%20Ji!5e0!3m2!1sen!2sin!4v1700000000000"
                  className="w-full h-40 md:h-48"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div className="text-cream/80 text-sm">
                  +91 92510 22024
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
            <p className="mt-3 text-cream/70 text-sm">
              𝐒𝐡𝐢𝐯 𝐒𝐰𝐞𝐞𝐭𝐬 𝐁𝐡𝐚𝐠𝐚𝐭 𝐉𝐢 -𝐒𝐰𝐞𝐞𝐭 𝐒𝐡𝐨𝐩 | 𝐂𝐡𝐨𝐜𝐨𝐥𝐚𝐭𝐞𝐬 𝐍𝐚𝐬𝐢𝐫𝐚𝐛𝐚𝐝
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
