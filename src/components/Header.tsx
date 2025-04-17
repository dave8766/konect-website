import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-army-light shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <img 
                  src="/konect-logo.jpeg" 
                  alt="Konect Logo" 
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-army-dark hover:text-army-primary font-medium">Features</a>
            <a href="#how-it-works" className="text-army-dark hover:text-army-primary font-medium">How It Works</a>
            <a href="#testimonials" className="text-army-dark hover:text-army-primary font-medium">Testimonials</a>
            <a href="#pricing" className="text-army-dark hover:text-army-primary font-medium">Pricing</a>
            <button className="bg-army-primary text-army-light px-4 py-2 rounded-md font-medium hover:bg-army-secondary transition duration-150">
              Join Waitlist
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-army-dark hover:text-army-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 px-2">
            <a href="#features" className="block px-3 py-2 text-base font-medium text-army-dark hover:bg-army-linen hover:text-army-primary rounded-md">
              Features
            </a>
            <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-army-dark hover:bg-army-linen hover:text-army-primary rounded-md">
              How It Works
            </a>
            <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-army-dark hover:bg-army-linen hover:text-army-primary rounded-md">
              Testimonials
            </a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium text-army-dark hover:bg-army-linen hover:text-army-primary rounded-md">
              Pricing
            </a>
            <button className="mt-2 w-full flex justify-center bg-army-primary text-army-light px-4 py-2 rounded-md font-medium hover:bg-army-secondary transition duration-150">
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 