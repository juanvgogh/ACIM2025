
import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-softWhite pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">ACIM Conference</h3>
            <p className="text-softWhite/70 mb-4">
              Exploring the future of information management and digital ethics in an increasingly complex world.
            </p>
            <p className="text-softWhite/70">
              Organized by students of the Information Management program at Tilburg University.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-softWhite/70 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-softWhite/70 hover:text-gold transition-colors">About</a></li>
              <li><a href="#speakers" className="text-softWhite/70 hover:text-gold transition-colors">Speakers</a></li>
              <li><a href="#location" className="text-softWhite/70 hover:text-gold transition-colors">Location</a></li>
              <li><a href="#register" className="text-softWhite/70 hover:text-gold transition-colors">Register</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Contact</h3>
            <ul className="space-y-2 text-softWhite/70">
              <li>
                <strong className="text-softWhite">Email:</strong> l.vanberlo@tilburguniversity.edu
              </li>
              <li>
                <strong className="text-softWhite">Phone:</strong> +31 13 466 9111
              </li>
              <li>
                <strong className="text-softWhite">Address:</strong><br />
                Tilburg University<br />
                Warandelaan 2<br />
                5037 AB Tilburg<br />
                The Netherlands
              </li>
            </ul>
            <div className="flex mt-4">
              <a 
                href="https://www.linkedin.com/school/tilburg-university/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-softWhite/70 hover:text-gold transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-softWhite/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-softWhite/50">
          <p>© {currentYear} ACIM Conference | Designed by Students of Information Management</p>
          <div className="mt-3 md:mt-0 space-x-4">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
