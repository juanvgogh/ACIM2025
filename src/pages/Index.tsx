
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Speakers from '@/components/Speakers';
import Location from '@/components/Location';
import Register from '@/components/Register';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-softWhite">
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Location />
      <Register />
      <Footer />
    </div>
  );
};

export default Index;
