import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    nameHindi: 'राजेश शर्मा',
    rating: 5,
    text: 'Best sweets in Nasirabad! The Kaju Katli is amazing.',
    textHindi: 'नासिराबाद की सबसे अच्छी मिठाई! काजू कतली लाजवाब है।',
  },
  {
    id: 2,
    name: 'Priya Gupta',
    nameHindi: 'प्रिया गुप्ता',
    rating: 5,
    text: 'Fresh and pure sweets every time. Highly recommended!',
    textHindi: 'हर बार ताज़ी और शुद्ध मिठाई। बहुत अच्छी दुकान!',
  },
  {
    id: 3,
    name: 'Amit Jain',
    nameHindi: 'अमित जैन',
    rating: 5,
    text: 'The ice cream flavors are so creamy and delicious!',
    textHindi: 'आइसक्रीम के स्वाद बहुत क्रीमी और स्वादिष्ट हैं!',
  },
];

const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Customer Reviews
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            ग्राहकों की राय | What Our Customers Say
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground mb-2">{review.text}</p>
              <p className="text-muted-foreground text-sm mb-4">{review.textHindi}</p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="h-10 w-10 rounded-full gradient-saffron flex items-center justify-center text-primary-foreground font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.nameHindi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
