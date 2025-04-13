
import React from 'react';
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-lightBlue/50 to-softWhite">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="relative z-10 flex h-full items-center justify-center text-center section-container">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-navy">
            Navigating Complexity <span className="block mt-2">in the Information Age</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-navy/80 mb-8">
            8th ACIM Conference — June 13, 2025, Tilburg University
          </h2>
          <p className="text-lg md:text-xl font-medium text-navy/90 mb-6">
            Free to attend - Registration required
          </p>
          <a 
            href="#register" 
            className="inline-block px-8 py-4 bg-navy text-softWhite rounded-md transition-all hover:bg-navy/90 hover:translate-y-[-2px] shadow-lg hover:shadow-xl text-lg font-medium"
          >
            Register Now
          </a>
          
          <div className="absolute bottom-12 left-0 right-0 mx-auto flex justify-center">
            <a href="#about" className="flex flex-col items-center text-navy/60 hover:text-navy transition-colors">
              <span className="mb-2">Learn More</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
