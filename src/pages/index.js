// pages/index.js
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import SortDropdown from '../components/SortDropdown';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Company Name - Home</title>
        <meta name="description" content="Description of your website" />
      </Head>
      <Header />
      <NavigationBar />
      <HeroSection />
      <SortDropdown />
      <ProductGrid />
      <Footer />
      {/* Add more components here */}
    </div>
  );
};

export default Home;