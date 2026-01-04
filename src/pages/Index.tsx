import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import BestSellersSection from '@/components/home/BestSellersSection';
import TrustBadgesSection from '@/components/home/TrustBadgesSection';
import ReviewsSection from '@/components/home/ReviewsSection';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Shiv Sweets | शिव स्वीट्स - Fresh & Pure Sweets in Nasirabad</title>
        <meta 
          name="description" 
          content="Shiv Sweets - Authentic Rajasthani sweets, ice cream, and cakes in Nasirabad. Fresh & pure sweets since 2005. Order online or visit our shop." 
        />
        <meta name="keywords" content="sweets, mithai, Nasirabad, Rajasthan, Indian sweets, ice cream, cakes, Shiv Sweets" />
      </Helmet>
      <Layout>
        <HeroSection />
        <CategorySection />
        <BestSellersSection />
        <TrustBadgesSection />
        <ReviewsSection />
      </Layout>
    </>
  );
};

export default Index;
