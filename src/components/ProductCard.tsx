import React from 'react';
import { Plus, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Product } from '@/data/products';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      nameHindi: product.nameHindi,
      price: product.price,
      category: product.category,
    });
    toast.success(`${product.name} added to cart!`, {
      description: `${product.nameHindi} कार्ट में जोड़ा गया`,
    });
  };

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.success(`${product.name} removed from wishlist`);
    } else {
      addToWishlist(product);
      toast.success(`${product.name} added to wishlist!`, {
        description: `${product.nameHindi} विशलिस्ट में जोड़ा गया`,
      });
    }
  };

  const priceLabel = product.category === 'sweets' 
    ? `₹${product.price}/kg` 
    : product.category === 'icecream'
    ? `₹${product.price}/scoop`
    : `₹${product.price}/kg`;

  return (
    <div 
      data-cursor="sweet"
      className="group bg-card rounded-xl overflow-hidden shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-sweet"
      style={{ 
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Product Image Container */}
      <div className="h-48 relative overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ 
              transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          />
        ) : (
          <div 
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: product.color || '#FFF8E7' }}
          >
            <span className="text-4xl">🍬</span>
          </div>
        )}
        
        {/* Frosted Glass Overlay - appears on hover */}
        <div 
          className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ 
            backdropFilter: 'blur(7px)',
            WebkitBackdropFilter: 'blur(7px)',
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
        
        {/* Hover Content - Product info on glass */}
        <div 
          className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
          style={{ 
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <h3 className="font-semibold text-white text-lg drop-shadow-md">
            {product.name}
          </h3>
          <p className="text-sm text-white/80 drop-shadow-sm">{product.nameHindi}</p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold text-white drop-shadow-md">{priceLabel}</span>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleAddToCart}
              className="bg-white/90 text-foreground hover:bg-white transition-all duration-300"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
        
        {/* Wishlist Heart Button */}
        <button
          onClick={handleWishlistToggle}
          className={cn(
            "absolute top-3 right-3 p-2 rounded-full transition-all duration-300 shadow-md z-10",
            inWishlist 
              ? "bg-red-500 text-white" 
              : "bg-card/90 text-muted-foreground hover:bg-card hover:text-red-500"
          )}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={cn("h-5 w-5", inWishlist && "fill-current")} />
        </button>
      </div>

      {/* Product Info - visible by default, hidden on hover */}
      <div 
        className="p-4 space-y-3 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-2"
        style={{ 
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div>
          <h3 className="font-semibold text-foreground">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground">{product.nameHindi}</p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">{priceLabel}</span>
          </div>
          <Button
            variant="default"
            size="sm"
            onClick={handleAddToCart}
            className="group/btn"
          >
            <Plus className="h-4 w-4 mr-1 group-hover/btn:rotate-90 transition-transform" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
