
import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { ADDRESS, PHONE, HOURS, LOCATION_DESCRIPTION } from '../constants';
import BusinessStatus from '../components/BusinessStatus';

const Location: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-stone-900 mb-4 text-center sm:text-left">Find Us</h1>
          <div className="flex justify-center sm:justify-start">
            <BusinessStatus />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-10 order-2 lg:order-1">
            <section>
              <h2 className="text-xl font-bold text-stone-900 flex items-center mb-6">
                <MapPin className="w-5 h-5 mr-2 text-stone-400" />
                Location
              </h2>
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <p className="text-stone-800 font-medium text-lg mb-1">{ADDRESS}</p>
                <p className="text-stone-500 mb-6">{LOCATION_DESCRIPTION}</p>
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center px-4 py-3 bg-stone-900 text-white rounded-lg font-semibold hover:bg-stone-800 transition-colors"
                >
                  Open in Google Maps
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-900 flex items-center mb-6">
                <Clock className="w-5 h-5 mr-2 text-stone-400" />
                Hours
              </h2>
              <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
                {HOURS.map((h, i) => {
                  const isToday = new Date().toLocaleDateString('en-US', { weekday: 'long' }) === h.day;
                  return (
                    <div 
                      key={h.day} 
                      className={`flex justify-between items-center px-6 py-4 ${
                        i !== HOURS.length - 1 ? 'border-b border-stone-100' : ''
                      } ${isToday ? 'bg-stone-50' : ''}`}
                    >
                      <span className={`font-medium ${isToday ? 'text-stone-900' : 'text-stone-600'}`}>
                        {h.day}
                        {isToday && <span className="ml-2 text-xs font-bold text-stone-400">TODAY</span>}
                      </span>
                      <span className={isToday ? 'text-stone-900 font-bold' : 'text-stone-500'}>
                        {h.open} – {h.close}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-900 flex items-center mb-6">
                <Phone className="w-5 h-5 mr-2 text-stone-400" />
                Contact
              </h2>
              <a 
                href={`tel:${PHONE.replace(/\D/g, '')}`}
                className="block bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:border-stone-400 transition-colors group"
              >
                <p className="text-stone-500 text-sm mb-1 uppercase font-bold tracking-wider">Phone Number</p>
                <p className="text-2xl font-bold text-stone-900 group-hover:underline">{PHONE}</p>
              </a>
            </section>

            <div className="bg-stone-100 p-6 rounded-xl text-sm text-stone-500">
              <p className="font-bold text-stone-700 mb-2">Parking Tip:</p>
              Metered street parking on Vine St. The Court Street garage is two blocks north.
            </div>
          </div>

          {/* Map Side */}
          <div className="order-1 lg:order-2 h-[400px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden shadow-inner bg-stone-200 relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400 bg-stone-100 border-2 border-dashed border-stone-200 m-2 rounded-xl">
              <MapPin className="w-12 h-12 mb-4 animate-bounce text-stone-300" />
              <p className="font-medium text-stone-500 px-8 text-center">Interactive map would be embedded here</p>
              <p className="text-xs mt-2 px-8 text-center">(Direct link below is optimized for your GPS apps)</p>
            </div>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label="View on Google Maps"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
