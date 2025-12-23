
import React from 'react';
import { Page } from '../types';
import { BUSINESS_NAME } from '../constants';
import logoImage from '../logo.png';

interface NavigationProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setPage }) => {
  const navItems = [
    { id: Page.Menu, label: 'Menu' },
    { id: Page.About, label: 'Our Story' },
    { id: Page.Location, label: 'Visit' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fdfcf7]/90 backdrop-blur-lg border-b border-stone-200/60">
      <nav className="max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">
        <button 
          onClick={() => setPage(Page.Home)}
          className="group flex items-center"
        >
          <img 
            src={logoImage} 
            alt="Harvest Market Logo"
            className="h-16 w-auto transition-opacity group-hover:opacity-80"
            style={{ maxHeight: '64px' }}
          />
        </button>
        
        <div className="hidden sm:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
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
        
        <div className="sm:hidden flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`text-[10px] font-bold uppercase tracking-widest ${
                currentPage === item.id ? 'text-harvest-ivy border-b border-harvest-sienna' : 'text-stone-400'
              }`}
            >
              {item.label.split(' ')[0]}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
