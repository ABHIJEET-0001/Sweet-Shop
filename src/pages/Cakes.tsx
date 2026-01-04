import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ProductCard';
import { cakes } from '@/data/products';
import { Leaf, Cake, IceCream, Sparkles } from 'lucide-react';

const specialFeatures = [
  { icon: Leaf, text: 'Pure Veg', textHindi: 'शुद्ध शाकाहारी' },
  { icon: Sparkles, text: 'Eggless', textHindi: 'अंडा रहित' },
  { icon: IceCream, text: 'Ice Cream Cakes', textHindi: 'आइसक्रीम केक' },
  { icon: Cake, text: 'Custom Cakes', textHindi: 'कस्टम केक' },
];

const Cakes: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cakes | केक - Shiv Sweets Nasirabad</title>
        <meta 
          name="description" 
          content="Order fresh cakes from Shiv Sweets. Birthday cakes, wedding cakes, ice cream cakes. 100% vegetarian and eggless options available." 
        />
      </Helmet>
      <Layout>
        {/* Hero Banner */}
        <section className="relative py-16 md:py-24 gradient-purple">
          <div className="container mx-auto px-4 text-center">
            <span className="text-6xl mb-4 block">🎂</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
              Cakes | केक
            </h1>
            <p className="text-xl text-white/90 mt-4 max-w-2xl mx-auto">
              Fresh baked cakes for every celebration
              <span className="block mt-1">हर जश्न के लिए ताज़े बेक्ड केक</span>
            </p>
          </div>
          {/* Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 60L1440 60V30C1440 30 1200 0 720 0C240 0 0 30 0 30V60Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Special Features */}
        <section className="py-8 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {specialFeatures.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft"
                >
                  <feature.icon className="h-5 w-5 text-secondary" />
                  <span className="font-medium text-foreground">{feature.text}</span>
                  <span className="text-muted-foreground text-sm">| {feature.textHindi}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-muted-foreground">
                Prices are per kilogram (kg) | कीमतें प्रति किलो हैं
              </p>
              <p className="text-sm text-primary mt-2">
                Wedding & Custom Cakes available on order | शादी और कस्टम केक ऑर्डर पर उपलब्ध
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {cakes.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Cakes;
