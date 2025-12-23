
import React, { useState } from 'react';
import { Page } from '../types';
import { BUSINESS_NAME } from '../constants';
import logoImage from '../logo.png';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: Page.Menu, label: 'Menu' },
    { id: Page.About, label: 'Our Story' },
    { id: Page.Location, label: 'Visit' },
  ];

  const handleNavClick = (page: Page) => {
    setPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fdfcf7]/90 backdrop-blur-lg border-b border-stone-200/60">
      <nav className="max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">
        <button 
          onClick={() => handleNavClick(Page.Home)}
          className="group flex items-center"
        >
          <img 
            src={logoImage} 
            alt="Harvest Market Logo"
            className="h-16 w-auto transition-opacity group-hover:opacity-80"
            style={{ maxHeight: '64px' }}
          />
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs font-bold uppercase tracking-[0.15em] transition-all relative py-2 group ${
                currentPage === item.id ? 'text-harvest-ivy' : 'text-stone-400 hover:text-harvest-ivy'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-harvest-sienna transition-transform duration-300 origin-left ${
                currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </button>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden p-2 text-stone-400 hover:text-harvest-ivy transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 sm:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-20 left-0 right-0 bg-[#fdfcf7] border-b border-stone-200 shadow-lg z-50 sm:hidden">
            <div className="max-w-5xl mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left py-3 px-4 rounded-lg transition-all text-sm font-bold uppercase tracking-[0.15em] ${
                      currentPage === item.id 
                        ? 'text-harvest-ivy bg-harvest-ivy/10 border-l-4 border-harvest-sienna' 
                        : 'text-stone-400 hover:text-harvest-ivy hover:bg-stone-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navigation;
