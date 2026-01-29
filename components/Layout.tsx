import React, { useState, PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, MapPin, Phone, Sparkles, Scissors, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { BUSINESS_INFO, SOCIALS } from '../data/business';

export default function Layout({ children }: PropsWithChildren) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'AI Studio', path: '/ai-studio', highlight: true },
    { label: 'Book Now', path: '/booking' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-[rgba(196,173,112,0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-[var(--text)] rounded-full flex items-center justify-center text-[var(--gold)]">
                <span className="font-serif text-2xl font-bold">Q</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold leading-none tracking-wide group-hover:text-[var(--pink)] transition-colors">QUEEN</span>
                <span className="text-[0.65rem] tracking-[0.2em] text-[var(--muted)] uppercase">Beauty Center</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative py-1",
                    item.highlight 
                      ? "text-[var(--pink)] font-bold flex items-center gap-1" 
                      : location.pathname === item.path ? "text-[var(--text)]" : "text-[var(--muted)] hover:text-[var(--text)]"
                  )}
                >
                  {item.highlight && <Sparkles size={14} className="animate-pulse" />}
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div 
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--gold)]"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[var(--text)] p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[var(--surface)] border-b border-[var(--gold)]/20 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block px-3 py-4 text-base font-medium rounded-xl transition-colors flex items-center justify-between",
                      item.highlight 
                        ? "bg-[var(--pink)]/10 text-[var(--pink)]" 
                        : location.pathname === item.path 
                          ? "bg-[var(--gold)]/10 text-[var(--text)]" 
                          : "text-[var(--muted)] hover:bg-black/5"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {item.highlight && <Sparkles size={16} />}
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[var(--text)] text-[var(--bg)] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[var(--gold)] rounded-full flex items-center justify-center text-[var(--text)]">
                  <span className="font-serif text-xl font-bold">Q</span>
                </div>
                <span className="font-serif text-xl font-bold text-[var(--surface)]">QUEEN</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Your premier destination for beauty, elegance, and luxury in Amman. Experience the royal treatment.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href={SOCIALS.instagramMain} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--pink)] transition-colors">
                  <Instagram size={18} />
                </a>
                <a href={SOCIALS.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-colors">
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-[var(--gold)] font-serif text-lg">Contact Us</h3>
              <div className="space-y-3">
                <a href={`tel:${BUSINESS_INFO.phonePrimary}`} className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <Phone size={18} className="mt-1 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span>{BUSINESS_INFO.phonePrimary}</span>
                    <span className="text-xs text-gray-500">{BUSINESS_INFO.phoneSecondary}</span>
                  </div>
                </a>
                <a href={BUSINESS_INFO.mapUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">{BUSINESS_INFO.addressEn}</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-[var(--gold)] font-serif text-lg">Discover</h3>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-gray-400 hover:text-[var(--pink)] transition-colors text-sm">Our Services</Link></li>
                <li><Link to="/ai-studio" className="text-gray-400 hover:text-[var(--pink)] transition-colors text-sm flex items-center gap-2"><Sparkles size={12}/> AI Try-On Studio</Link></li>
                <li><Link to="/booking" className="text-gray-400 hover:text-[var(--pink)] transition-colors text-sm">Book an Appointment</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-600">
            <p>© {new Date().getFullYear()} Queen Hair Beauty Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}