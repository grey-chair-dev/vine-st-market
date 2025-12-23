
import React from 'react';
import Hero from '../components/sections/Hero';
import { CATEGORIES, ANNOUNCEMENT } from '../constants';
import { Page } from '../types';
import { ArrowRight, Star, Bell } from 'lucide-react';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="bg-[#fdfcf7] min-h-screen page-transition">
      <Hero />
      
      <main className="max-w-6xl mx-auto px-6 pt-12 pb-24">
        
        {/* Temporary Notices / Seasonal Announcements */}
        {ANNOUNCEMENT.show && (
          <section className="mb-32 flex justify-center">
            <div className="w-full max-w-4xl bg-[#fdfcf7] border-2 border-dashed border-harvest-sienna/30 p-10 sm:p-16 rounded-sm relative overflow-hidden group shadow-[20px_20px_60px_#f0efe9,-20px_-20px_60px_#ffffff]">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700 pointer-events-none">
                <Bell className="w-32 h-32 text-harvest-sienna" />
              </div>
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-harvest-orange text-white rounded-full">
                  <Bell className="w-3 h-3" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Notice</span>
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div className="max-w-2xl">
                    <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-harvest-orange mb-4 block">
                      {ANNOUNCEMENT.title}
                    </span>
                    <h3 className="font-serif italic text-3xl sm:text-4xl text-harvest-ivy leading-tight">
                      "{ANNOUNCEMENT.message}"
                    </h3>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                    <div className="h-[2px] w-12 bg-harvest-orange/20"></div>
                    <span className="text-[10px] uppercase tracking-widest font-black text-stone-400">
                      {ANNOUNCEMENT.date}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Subtle bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-harvest-orange/10 to-transparent"></div>
            </div>
          </section>
        )}

        <div className="mb-20 text-center">
          <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-harvest-orange mb-4 block">The Specialty Market</span>
          <h2 className="text-4xl sm:text-5xl font-serif text-harvest-ivy italic">Curation in every corner.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {CATEGORIES.map((cat, idx) => (
            <div key={idx} className="group relative">
              <div className="mb-8 overflow-hidden aspect-[4/5] bg-stone-100 rounded-sm">
                <img 
                  src={idx === 0 ? "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600" : idx === 1 ? "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&q=80&w=600" : "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&q=80&w=600"}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-2xl font-serif text-harvest-ivy mb-3">{cat.name}</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-6 font-light">
                {cat.description}
              </p>
              <button 
                onClick={() => setPage(Page.Menu)}
                className="text-[10px] uppercase font-bold tracking-[0.2em] text-harvest-ivy inline-flex items-center group/btn"
              >
                Explore More
                <div className="ml-3 h-[1px] w-8 bg-harvest-ivy group-hover/btn:w-12 transition-all duration-300"></div>
              </button>
            </div>
          ))}
        </div>

        <section className="mt-40 border-t border-stone-200 pt-24">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-harvest-blue-light/20 text-harvest-blue-dark rounded-full mb-8">
                <Star className="w-3 h-3 fill-current" />
                <span className="text-[10px] font-bold uppercase tracking-widest">A Milford Staple</span>
              </div>
              <h2 className="text-5xl font-serif text-harvest-ivy mb-8 leading-tight">Better ingredients, <br/><span className="italic">no compromise.</span></h2>
              <p className="text-stone-600 leading-relaxed mb-10 font-light text-lg">
                We are a specialty market in the heart of downtown Milford. You can find delicious, locally-roasted coffee from <span className="font-semibold text-harvest-ivy">La Terza roasterie</span> in addition to specialty drinks, fresh juices and teas.
              </p>
              <p className="text-stone-600 leading-relaxed mb-10 font-light text-lg">
                Come in for a quick snack, grab-n-go breakfast and lunch or a range of grocery items including local produce and local dairy and eggs.
              </p>
              <div className="flex gap-8">
                <div className="text-center">
                  <span className="block text-3xl font-serif text-harvest-ivy">100%</span>
                  <span className="text-[9px] uppercase tracking-widest font-bold opacity-40">Local Sourcing</span>
                </div>
                <div className="w-[1px] h-12 bg-stone-200"></div>
                <div className="text-center">
                  <span className="block text-3xl font-serif text-harvest-ivy">Fresh</span>
                  <span className="text-[9px] uppercase tracking-widest font-bold opacity-40">Baked Daily</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-6 relative">
               <div className="absolute inset-0 border-[1px] border-harvest-ivy/10 translate-x-4 translate-y-4 -z-10"></div>
               <img 
                src="https://images.unsplash.com/photo-1547517023-7ca0c162f816?auto=format&fit=crop&q=80&w=400" 
                alt="Market Close Up" 
                className="w-full aspect-[3/4] object-cover rounded-sm shadow-xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400" 
                alt="Market Vibe" 
                className="w-full aspect-[3/4] object-cover rounded-sm shadow-xl mt-12"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
