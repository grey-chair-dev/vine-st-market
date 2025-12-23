
import React from 'react';
import { MapPin, Navigation, Phone } from 'lucide-react';
import { ADDRESS, PHONE, TAGLINE } from '../../constants';
import BusinessStatus from '../BusinessStatus';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#fdfcf7] pt-12 pb-24 overflow-hidden">
      {/* Color blocks matching storefront */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-harvest-orange/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-harvest-blue-light/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-harvest-blue-dark/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 z-10">
          <BusinessStatus />
          <h1 className="mt-8 text-5xl sm:text-7xl font-semibold leading-[1.1] text-harvest-ivy tracking-tight italic md:not-italic">
            Freshness <br/><span className="font-serif italic text-harvest-sienna">redefined</span> downtown.
          </h1>
          <p className="mt-8 text-lg text-stone-600 max-w-xl leading-relaxed font-light">
            {TAGLINE}
          </p>
          
          <div className="mt-10 flex flex-wrap gap-5">
            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-sm text-white bg-harvest-orange hover:bg-harvest-sienna transition-all shadow-xl hover:-translate-y-1"
            >
              <Navigation className="w-3 h-3 mr-3" />
              Directions
            </a>
            <a 
              href={`tel:${PHONE.replace(/\D/g, '')}`}
              className="inline-flex items-center px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-sm border border-stone-200 text-harvest-ivy bg-white hover:bg-stone-50 transition-all hover:-translate-y-1"
            >
              <Phone className="w-3 h-3 mr-3" />
              {PHONE}
            </a>
          </div>

          <div className="mt-10 flex items-center text-stone-400 group">
            <MapPin className="w-4 h-4 mr-3 group-hover:text-harvest-sienna transition-colors" />
            <span className="text-sm font-medium tracking-tight uppercase tracking-widest text-[11px]">{ADDRESS}</span>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="absolute -inset-4 bg-harvest-sienna/5 blur-3xl rounded-full"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600" 
                alt="Market" 
                className="w-full aspect-[3/4] object-cover rounded-sm shadow-lg grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="bg-harvest-ivy p-6 rounded-sm text-white">
                <span className="text-[10px] uppercase tracking-widest block mb-2 font-bold opacity-60">Featured Today</span>
                <p className="font-serif italic text-lg leading-snug">Artisanal Sourdough, baked at dawn.</p>
              </div>
            </div>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600" 
                alt="Coffee" 
                className="w-full aspect-square object-cover rounded-sm shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=600" 
                alt="Produce" 
                className="w-full aspect-[4/5] object-cover rounded-sm shadow-lg grayscale-[0.1]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
