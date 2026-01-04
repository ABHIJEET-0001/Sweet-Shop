import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ProductCard';
import { icecreams } from '@/data/products';

const IceCream: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ice Cream | आइसक्रीम - Shiv Sweets Nasirabad</title>
        <meta 
          name="description" 
          content="Enjoy 16 delicious ice cream flavors at Shiv Sweets. Vanilla, Chocolate, Mango, Kesar, Pista and more. Creamy frozen delights in Nasirabad." 
        />
      </Helmet>
      <Layout>
        {/* Hero Banner */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-pink-400 to-rose-500">
          <div className="container mx-auto px-4 text-center">
            <span className="text-6xl mb-4 block">🍨</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
              Ice Cream | आइसक्रीम
            </h1>
            <p className="text-xl text-white/90 mt-4 max-w-2xl mx-auto">
              Creamy, delicious ice cream in 16 amazing flavors
              <span className="block mt-1">16 स्वादिष्ट फ्लेवर में क्रीमी आइसक्रीम</span>
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
                Prices are per scoop | कीमतें प्रति स्कूप हैं
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {icecreams.map((product, index) => (
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

export default IceCream;
