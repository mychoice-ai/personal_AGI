
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Experience from '../components/Experience';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Experience />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
