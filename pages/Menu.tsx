
import React from 'react';
import { MENU_SECTIONS, LUNCH_SPECIALS, PHONE } from '../constants';
import { Sparkles } from 'lucide-react';
import RadishLogo from '../components/RadishLogo';

const Menu: React.FC = () => {
  const cafeSections = MENU_SECTIONS.filter(s => 
    s.title === "Filter Coffee" || 
    s.title === "Espresso" || 
    s.title === "Not Coffee" || 
    s.title === "Milk Options & Add-ons"
  );

  return (
    <div className="bg-[#fdfcf7] min-h-screen py-24 px-6 page-transition">
      <div className="max-w-4xl mx-auto">
        
        {/* Weekly Specials Flyer Section */}
        <section className="mb-40 relative">
          {/* Color blocks matching storefront */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] -z-10 opacity-20 blur-3xl overflow-hidden">
             <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-harvest-blue-light rounded-full mix-blend-multiply animate-pulse" style={{animationDuration: '8s'}}></div>
             <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-harvest-orange rounded-full mix-blend-multiply animate-pulse" style={{animationDuration: '11s', animationDelay: '1s'}}></div>
             <div className="absolute top-1/4 right-1/4 w-[40%] h-[40%] bg-harvest-blue-dark rounded-full mix-blend-multiply animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
          </div>

          <div className="bg-white/40 backdrop-blur-sm border border-stone-100 rounded-sm p-8 sm:p-16 shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <RadishLogo size={64} className="text-harvest-ivy opacity-80" />
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif text-harvest-ivy mb-2 leading-none">this week's</h2>
            <h2 className="text-5xl sm:text-7xl font-serif text-harvest-ivy mb-6 italic leading-none">lunch specials:</h2>
            <div className="inline-block border-2 border-harvest-ivy px-6 py-1.5 rounded-sm font-bold tracking-[0.2em] text-lg mb-16">
              [ 11:30 - 2:30 ]
            </div>

            <div className="space-y-16">
              {LUNCH_SPECIALS.map((special, idx) => (
                <div key={idx} className="max-w-xl mx-auto group">
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-widest text-harvest-ivy mb-4 border-b-2 border-harvest-ivy/10 pb-2 inline-block">
                    {special.day}
                  </h3>
                  <div className="mt-4">
                    <h4 className="text-xl sm:text-3xl font-serif text-harvest-ivy mb-3 flex items-center justify-center gap-3">
                      {special.name}
                      {special.tags?.map(tag => (
                        <span key={tag} className="text-xs font-bold border border-harvest-ivy/20 px-2 py-0.5 rounded-sm tracking-tighter opacity-60">
                          {tag}
                        </span>
                      ))}
                    </h4>
                    <p className="text-stone-500 font-light text-base sm:text-lg leading-relaxed uppercase tracking-tight max-w-md mx-auto">
                      {special.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-20 flex items-center justify-center gap-4 text-stone-400">
               <div className="h-[1px] w-12 bg-stone-200"></div>
               <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Rooted in Milford</span>
               <div className="h-[1px] w-12 bg-stone-200"></div>
            </div>
          </div>
        </section>

        {/* Cafe Menu Sections */}
        <header className="mb-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <RadishLogo size={24} className="text-harvest-ivy opacity-80" />
            <span className="text-[11px] uppercase tracking-[0.5em] font-bold text-harvest-sienna">La Terza Artisan Coffee</span>
          </div>
          <h1 className="text-6xl font-serif text-harvest-ivy mb-6 italic">Coffee Menu</h1>
          <div className="flex items-center justify-center gap-3 text-stone-400">
             <div className="h-[1px] w-12 bg-stone-200"></div>
             <Sparkles className="w-4 h-4 text-harvest-sienna opacity-60" />
             <span className="text-xs uppercase tracking-widest font-bold">Fresh daily</span>
             <div className="h-[1px] w-12 bg-stone-200"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24 mb-40">
          {cafeSections.map((section, idx) => (
            <section key={idx} className="relative">
              <h2 className="text-xs uppercase tracking-[0.4em] font-black text-harvest-ivy/20 mb-10 border-b border-stone-200 pb-4">
                {section.title}
              </h2>
              <div className="space-y-10">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-xl font-serif text-harvest-ivy group-hover:text-harvest-sienna transition-colors">
                        {item.name}
                        {item.tags?.map(tag => (
                          <span key={tag} className="ml-2 text-xs font-bold border border-harvest-ivy/20 px-2 py-0.5 rounded-sm tracking-tighter opacity-60">
                            {tag}
                          </span>
                        ))}
                      </h3>
                      {item.price && (
                        <>
                          <div className="flex-grow mx-4 border-b border-dotted border-stone-200"></div>
                          <span className="text-sm font-bold text-harvest-ivy">${item.price}</span>
                        </>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-stone-500 leading-relaxed text-sm font-light italic">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-40 p-16 bg-harvest-blue-dark rounded-sm text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-harvest-orange/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-harvest-blue-light/20 rounded-full -ml-24 -mb-24 blur-3xl"></div>
          <h3 className="text-3xl font-serif mb-4 italic">The Prepared Counter</h3>
          <p className="text-stone-400 mb-10 font-light max-w-sm mx-auto">Our daily hot bar features a chef-led rotation of comfort foods, available from 11:00 AM.</p>
          <a 
            href={`tel:${PHONE.replace(/\D/g, '')}`}
            className="inline-flex items-center text-[10px] uppercase font-bold tracking-[0.3em] pb-2 border-b-2 border-harvest-orange hover:text-harvest-orange transition-colors"
          >
            Check Today's Batch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
