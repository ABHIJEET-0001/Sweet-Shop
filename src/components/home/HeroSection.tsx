import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">🍬</div>
      <div className="absolute top-20 right-20 text-5xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>🍨</div>
      <div className="absolute bottom-20 left-1/4 text-4xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🎂</div>
      <div className="absolute bottom-10 right-1/4 text-5xl opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>🍭</div>

      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-sm">
            <span className="animate-pulse">✨</span>
            <span>Since 2005 | 2005 से</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight">
              Shiv Sweets
              <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 text-gold">
                शिव स्वीट्स
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-light">
              Fresh & Pure Sweets | ताज़ी और शुद्ध मिठाइयाँ
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto">
            Authentic Rajasthani sweets made with love and tradition. 
            <span className="block mt-1">प्यार और परंपरा से बनी असली राजस्थानी मिठाइयाँ।</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/sweets">
              <Button variant="gold" size="xl" className="min-w-[200px]">
                <ShoppingBag className="h-5 w-5 mr-2" />
                View Products | मिठाइयाँ देखें
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="heroOutline" size="xl" className="min-w-[200px]">
                Order Now | ऑर्डर करें
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
