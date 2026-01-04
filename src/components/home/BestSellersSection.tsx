import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { bestSellers } from '@/data/products';

const BestSellersSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-6 w-6 text-gold fill-gold" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Customer Favorites
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Best Sellers
            </h2>
            <p className="text-lg text-muted-foreground mt-1">
              सबसे ज़्यादा बिकने वाली | Most Popular Items
            </p>
          </div>
          <Link to="/sweets">
            <Button variant="outline" className="group">
              View All Products
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {bestSellers.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;
