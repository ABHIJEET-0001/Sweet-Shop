import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, Heart, User, LogOut, Sun, Moon, Settings } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { totalItems: wishlistItems } = useWishlist();
  const { user, signOut } = useAuth();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if user is admin
  const isAdmin = user?.email === 'admin@shivsweets.com';

  const navLinks = [
    { href: '/', label: 'Home', labelHindi: 'होम' },
    { href: '/sweets', label: 'Sweets', labelHindi: 'मिठाइयाँ' },
    { href: '/icecream', label: 'Ice Cream', labelHindi: 'आइसक्रीम' },
    { href: '/cakes', label: 'Cakes', labelHindi: 'केक' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-border text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="h-4 w-4 text-primary" />
            <span>+91 92510 22024</span>
          </div>
          <div className="text-muted-foreground">
            📍 186, Sadar Bazar, Main Market, Nasirabad, Rajasthan 305601
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-2xl md:text-3xl font-display font-bold text-primary">
              Shiv Sweets Bhaghat Ji
            </span>
            <span className="text-lg md:text-xl font-display text-secondary">
              शिव स्वीट्स भगत जी • Since 1990
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'flex flex-col items-center transition-all duration-300 group',
                  isActive(link.href) ? 'text-primary' : 'text-foreground hover:text-primary'
                )}
              >
                <span className="font-medium">{link.label}</span>
                <span className="text-xs text-muted-foreground group-hover:text-primary/70">
                  {link.labelHindi}
                </span>
                {isActive(link.href) && (
                  <span className="h-0.5 w-full gradient-saffron rounded-full mt-1" />
                )}
              </Link>
            ))}
          </nav>

          {/* Wishlist, Cart, Auth & Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              aria-label="Toggle theme"
              onClick={() => {
                if (!mounted) return;
                setTheme(theme === 'dark' ? 'light' : 'dark');
              }}
              className="p-2 rounded-md hover:bg-muted/10"
            >
              {mounted && (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
            </button>

            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-6 w-6" />
                {wishlistItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center animate-scale-in">
                    {wishlistItems}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full gradient-saffron text-primary-foreground text-xs font-bold flex items-center justify-center animate-scale-in">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Admin Button - Only show for admin user */}
            {isAdmin && (
              <Button 
                variant="outline"
                size="sm"
                onClick={() => navigate('/admin')}
                title="Admin Dashboard"
                className="flex items-center gap-2 bg-primary/10 border-primary/30 hover:bg-primary/20"
              >
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline text-sm font-medium">Admin</span>
              </Button>
            )}

            {/* Auth Button */}
            {user ? (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => signOut()}
                title="Logout"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate('/auth')}
                title="Login"
              >
                <User className="h-5 w-5" />
              </Button>
            )}

            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'flex items-center justify-between py-2 px-4 rounded-lg transition-all',
                    isActive(link.href)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted'
                  )}
                >
                  <span className="font-medium">{link.label}</span>
                  <span className="text-sm text-muted-foreground">{link.labelHindi}</span>
                </Link>
              ))}
              
              {/* Mobile Admin Link */}
              {isAdmin && (
                <button
                  onClick={() => {
                    navigate('/admin');
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center justify-between py-2 px-4 rounded-lg transition-all text-foreground hover:bg-primary/10 hover:text-primary"
                >
                  <span className="font-medium flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Admin Dashboard
                  </span>
                </button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
