import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'sweets',
    name: 'Sweets',
    nameHindi: 'मिठाइयाँ',
    emoji: '🍬',
    description: 'Traditional Indian Sweets',
    count: '16+ varieties',
    gradient: 'from-orange-400 to-amber-500',
    link: '/sweets',
  },
  {
    id: 'icecream',
    name: 'Ice Cream',
    nameHindi: 'आइसक्रीम',
    emoji: '🍨',
    description: 'Creamy Frozen Delights',
    count: '16 flavours',
    gradient: 'from-pink-400 to-rose-500',
    link: '/icecream',
  },
  {
    id: 'cakes',
    name: 'Cakes',
    nameHindi: 'केक',
    emoji: '🎂',
    description: 'Fresh Baked Cakes',
    count: '10+ types',
    gradient: 'from-purple-400 to-violet-500',
    link: '/cakes',
  },
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Our Categories
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            हमारी श्रेणियाँ | Choose Your Favorite
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90`} />
              
              {/* Content */}
              <div className="relative p-8 md:p-10 text-center space-y-4">
                <span className="text-7xl md:text-8xl block group-hover:scale-110 transition-transform duration-300">
                  {category.emoji}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                    {category.name}
                  </h3>
                  <p className="text-xl text-white/90 font-display">
                    {category.nameHindi}
                  </p>
                </div>
                <p className="text-white/80 text-sm">
                  {category.description}
                </p>
                <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-white text-sm">
                  {category.count}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
