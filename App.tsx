
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Location from './pages/Location';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  // Simple hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (Object.values(Page).includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setPage = (page: Page) => {
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home setPage={setPage} />;
      case Page.Menu:
        return <Menu />;
      case Page.About:
        return <About />;
      case Page.Location:
        return <Location />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation currentPage={currentPage} setPage={setPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer setPage={setPage} />
    </div>
  );
};

export default App;
