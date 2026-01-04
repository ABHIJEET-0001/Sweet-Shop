import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ProductCard';
import { sweets } from '@/data/products';

const Sweets: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sweets | मिठाइयाँ - Shiv Sweets Nasirabad</title>
        <meta 
          name="description" 
          content="Explore our collection of 16+ authentic Indian sweets. Kaju Katli, Gulab Jamun, Rasgulla, Laddu and more. Fresh & pure sweets from Shiv Sweets." 
        />
      </Helmet>
      <Layout>
        {/* Hero Banner */}
        <section className="relative py-16 md:py-24 gradient-saffron">
          <div className="container mx-auto px-4 text-center">
            <span className="text-6xl mb-4 block">🍬</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">
              Sweets | मिठाइयाँ
            </h1>
            <p className="text-xl text-primary-foreground/90 mt-4 max-w-2xl mx-auto">
              Traditional Indian sweets made with pure ghee and love
              <span className="block mt-1">शुद्ध घी और प्यार से बनी पारंपरिक मिठाइयाँ</span>
            </p>
          </div>
          {/* Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 60L1440 60V30C1440 30 1200 0 720 0C240 0 0 30 0 30V60Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-muted-foreground">
                Prices are per kilogram (kg) | कीमतें प्रति किलो हैं
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {sweets.map((product, index) => (
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

export default Sweets;
