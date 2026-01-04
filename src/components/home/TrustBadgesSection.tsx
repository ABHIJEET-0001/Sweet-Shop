import React from 'react';
import { Sparkles, ShieldCheck, Truck, Clock } from 'lucide-react';

const badges = [
  {
    icon: Sparkles,
    title: '100% Fresh',
    titleHindi: '100% ताज़ा',
    description: 'Made fresh daily',
  },
  {
    icon: ShieldCheck,
    title: 'Hygienic Kitchen',
    titleHindi: 'स्वच्छ रसोई',
    description: 'Clean & safe',
  },
  {
    icon: Truck,
    title: 'Same Day Delivery',
    titleHindi: 'उसी दिन डिलीवरी',
    description: 'Fast delivery',
  },
  {
    icon: Clock,
    title: 'Since 2005',
    titleHindi: '2005 से',
    description: '19+ years of trust',
  },
];

const TrustBadgesSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="flex flex-col items-center text-center space-y-3 p-4 rounded-xl hover:bg-muted/50 transition-colors"
            >
              <div className="h-14 w-14 rounded-full gradient-saffron flex items-center justify-center shadow-soft">
                <badge.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.titleHindi}</p>
              </div>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
