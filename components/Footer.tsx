
import React from 'react';
import { ADDRESS, BUSINESS_NAME, PHONE, EMAIL } from '../constants';
import { Page } from '../types';

interface FooterProps {
  setPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{BUSINESS_NAME}</h3>
            <p className="max-w-xs mb-6 text-sm leading-relaxed">
              Your modern neighborhood market and café in the heart of downtown Milford.
            </p>
            <div className="space-y-1 text-sm">
              <p>{ADDRESS}</p>
              <p>{PHONE}</p>
              <p className="text-stone-500 hover:text-stone-300 transition-colors">
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => setPage(Page.Home)} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => setPage(Page.Menu)} className="hover:text-white transition-colors">Food & Drinks</button></li>
                <li><button onClick={() => setPage(Page.About)} className="hover:text-white transition-colors">Our Story</button></li>
                <li><button onClick={() => setPage(Page.Location)} className="hover:text-white transition-colors">Location</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="https://www.instagram.com/harvest.market/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://www.facebook.com/media/set/?set=a.501116352019404&type=3" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href={`tel:${PHONE.replace(/\D/g, '')}`} className="hover:text-white transition-colors text-stone-200 font-medium">Call Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
