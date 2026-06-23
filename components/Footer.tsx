
import React from 'react';
import { ADDRESS, BUSINESS_NAME, PHONE, EMAIL, NEIGHBORHOOD } from '../constants';
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
              Your modern neighborhood market and café in {NEIGHBORHOOD}, Cincinnati.
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
                <li><span className="text-stone-500">Instagram</span></li>
                <li><span className="text-stone-500">Facebook</span></li>
                <li><a href={`tel:${PHONE.replace(/\D/g, '')}`} className="hover:text-white transition-colors text-stone-200 font-medium">Call Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 text-center text-xs space-y-4">
          <div>
            <p>© {new Date().getFullYear()} {BUSINESS_NAME}. Demo site — not a real business.</p>
            <p className="mt-1">
              Built by{' '}
              <a
                href="https://greychair.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Grey Chair Digital
              </a>
            </p>
          </div>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
