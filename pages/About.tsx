
import React from 'react';
import { Star, Heart, MapPin, Coffee } from 'lucide-react';
import { ADDRESS, BUSINESS_NAME, COFFEE_ROASTER, NEIGHBORHOOD } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-[#fdfcf7] min-h-screen page-transition">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Visual Side */}
          <div className="lg:w-1/2 relative lg:sticky lg:top-32">
            <div className="absolute -inset-4 border border-harvest-ivy/10 translate-x-6 translate-y-6 -z-10"></div>
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
                alt={`${BUSINESS_NAME} produce and interior`} 
                className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl grayscale-[0.1]"
              />
              <div className="flex gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600" 
                  alt="Specialty coffee preparation" 
                  className="w-1/2 aspect-square object-cover rounded-sm shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=600" 
                  alt="Local dairy and grocery items" 
                  className="w-1/2 aspect-square object-cover rounded-sm shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-harvest-sienna/10 text-harvest-sienna rounded-full mb-8">
              <Star className="w-3 h-3 fill-current" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-harvest-sienna">Our Philosophy</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif text-harvest-ivy mb-10 leading-[1.05]">
              Integrity in <br/><span className="italic italic font-normal text-harvest-sienna">every choice.</span>
            </h1>

            <div className="space-y-8 text-stone-600">
              <p className="text-xl font-serif italic text-harvest-ivy leading-relaxed">
                {`We are a specialty market on Vine Street in ${NEIGHBORHOOD}, built on the belief that quality should be a daily standard, not a luxury.`}
              </p>
              
              <div className="prose prose-stone max-w-none">
                <p className="leading-relaxed font-light text-lg mb-6">
                  {BUSINESS_NAME} began with a simple observation: {NEIGHBORHOOD} needed a place where quality and convenience lived comfortably under one roof. We are locally owned and deeply rooted in the daily fabric of this neighborhood. Our philosophy is built on a food-first mindset—if an ingredient does not have a story worth telling, it does not make it onto our shelves.
                </p>
                
                <p className="leading-relaxed font-light text-lg mb-6">
                  We believe that the best food is often the most straightforward. That is why we partner with <span className="font-semibold text-harvest-ivy">{COFFEE_ROASTER}</span> for beans that respect the craft, and regional family farms for dairy and produce that have not traveled across the country to reach you. Our mission is not to reinvent the market, but to restore the integrity of the neighborhood grocery and café experience.
                </p>
                
                <p className="leading-relaxed font-light text-lg">
                  Whether you are here for your first cup of the day or a quick grab-n-go lunch, you are stepping into a space designed for reliability. We focus on the details—the crumb of our artisan sourdough, the temperature of our lattes, and the vibrancy of our local greens—so you can trust every choice you make here. {BUSINESS_NAME} is our contribution to the {NEIGHBORHOOD} we love: a reliable, approachable anchor for regulars and visitors alike.
                </p>
              </div>

              <div className="pt-12 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-4 h-4 text-harvest-sienna" />
                    <span className="text-xs font-bold uppercase tracking-widest text-harvest-ivy">Local Roots</span>
                  </div>
                  <p className="text-sm leading-relaxed text-stone-500 font-light">Owned and operated by neighbors, our success is measured by the strength of our community ties.</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Coffee className="w-4 h-4 text-harvest-sienna" />
                    <span className="text-xs font-bold uppercase tracking-widest text-harvest-ivy">Quality First</span>
                  </div>
                  <p className="text-sm leading-relaxed text-stone-500 font-light">From {COFFEE_ROASTER} roasts to local dairy, we vet every supplier to ensure the highest quality for your table.</p>
                </div>
              </div>

              <div className="pt-12">
                <p className="font-serif italic text-3xl text-harvest-ivy">We look forward to seeing you on Vine Street.</p>
                <div className="mt-4 flex items-center gap-3 text-stone-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-[0.2em] font-bold">{ADDRESS}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
