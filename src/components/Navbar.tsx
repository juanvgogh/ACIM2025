
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 py-4",
      isScrolled ? "bg-navy/95 shadow-md py-2" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className={cn(
              "font-serif font-bold text-xl transition-colors",
              isScrolled ? "text-softWhite" : "text-navy"
            )}>
              ACIM Conference
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className={cn(
              "transition-colors hover:text-gold",
              isScrolled ? "text-softWhite" : "text-navy"
            )}>
              About
            </a>
            <a href="#speakers" className={cn(
              "transition-colors hover:text-gold",
              isScrolled ? "text-softWhite" : "text-navy"
            )}>
              Speakers
            </a>
            <a href="#location" className={cn(
              "transition-colors hover:text-gold",
              isScrolled ? "text-softWhite" : "text-navy"
            )}>
              Location
            </a>
            <a href="#register" className={cn(
              "px-4 py-2 rounded-md border transition-all",
              isScrolled 
                ? "border-gold text-gold hover:bg-gold/10" 
                : "border-navy text-navy hover:bg-navy/10"
            )}>
              Register
            </a>
          </div>
          
          <div className="md:hidden">
            {/* Mobile menu button would go here */}
            <button className={cn(
              "text-2xl transition-colors",
              isScrolled ? "text-softWhite" : "text-navy"
            )}>
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
