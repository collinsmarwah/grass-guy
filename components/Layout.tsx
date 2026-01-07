
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FOOTER_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Portal', path: '/portal' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-background-dark/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <span className="material-symbols-outlined text-background-dark font-bold">grass</span>
          </div>
          <span className="text-xl font-black tracking-tighter text-text-main dark:text-white">THE GRASS GUY</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                location.pathname === item.path ? 'text-primary' : 'text-text-main/70 dark:text-white/70 hover:text-primary'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/estimate" className="bg-primary hover:bg-primary-dark text-background-dark px-5 py-2.5 rounded-full text-sm font-black transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
            GET ESTIMATE
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-text-main dark:text-white">
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold text-text-main dark:text-white border-b border-gray-100 dark:border-gray-800 last:border-0"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/estimate"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-primary text-background-dark py-4 rounded-xl font-black mt-4"
            >
              FREE ESTIMATE
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-1.5 rounded-lg">
                <span className="material-symbols-outlined text-background-dark font-bold">grass</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-text-main dark:text-white">THE GRASS GUY</span>
            </Link>
            <p className="text-text-muted dark:text-gray-400 max-w-sm mb-8">
              Clearwater's premier lawn care specialists. We combine neighborly service with expert turf management to give you the greenest lawn on the block.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'youtube'].map(social => (
                <div key={social} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors hover:text-background-dark">
                  <span className="material-symbols-outlined text-xl">{social === 'facebook' ? 'groups' : social === 'instagram' ? 'photo_camera' : 'play_circle'}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors font-medium">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-6">Contact Us</h4>
            <div className="space-y-4">
              <p className="flex items-start gap-3 text-text-muted dark:text-gray-400 font-medium">
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                2519 McMullen Booth Rd,<br />Clearwater, FL 33761
              </p>
              <p className="flex items-center gap-3 text-text-muted dark:text-gray-400 font-medium">
                <span className="material-symbols-outlined text-primary text-xl">call</span>
                (727) 300-1963
              </p>
              <p className="flex items-center gap-3 text-text-muted dark:text-gray-400 font-medium">
                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                info@grassguylawns.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 dark:border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted dark:text-gray-500 font-medium">
            © 2026 The Grass Guy. Licensed & Insured. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-bold text-text-muted dark:text-gray-500 hover:text-primary">PRIVACY POLICY</a>
            <a href="#" className="text-xs font-bold text-text-muted dark:text-gray-500 hover:text-primary">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
