import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, User as UserIcon, LogOut, ChevronRight } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { NAV_ITEMS } from '../constants';
import { Language } from '../types';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, setLanguage, t, user, logout } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-white">
      {/* Top Bar for Institutional Context - using primary-dark */}
      <div className="bg-primary-dark text-white text-xs py-1 px-4 sm:px-8 flex justify-between items-center">
        <span>Rawalpindi, PK | Berlin, DE</span>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-secondary-light transition-colors">{t('nav.staff')}</a>
          <a href="#" className="hover:text-secondary-light transition-colors">{t('nav.press')}</a>
        </div>
      </div>

      {/* Navbar - Backdrop blur and specific transparency */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo Area */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl tracking-tighter shadow-lg">
                  GP
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-primary leading-tight tracking-tight">GPIC</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">Innovation Center</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors group ${location.pathname === item.path
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-primary'
                    }`}
                >
                  {t(item.key)}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-success transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="flex items-center border rounded-full px-2 py-1 bg-gray-50">
                <button
                  onClick={() => setLanguage(Language.EN)}
                  className={`px-2 py-0.5 text-xs font-semibold rounded-full transition-all ${language === Language.EN ? 'bg-white shadow text-primary' : 'text-gray-400'
                    }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage(Language.DE)}
                  className={`px-2 py-0.5 text-xs font-semibold rounded-full transition-all ${language === Language.DE ? 'bg-white shadow text-primary' : 'text-gray-400'
                    }`}
                >
                  DE
                </button>
              </div>

              {/* User Action */}
              {user ? (
                <div className="relative group">
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-primary"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <UserIcon size={16} />
                    </div>
                    <span>{user.name}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                    <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('nav.dashboard')}</Link>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('nav.logout')}</button>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-gradient-success text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  {t('nav.login')}
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-primary p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                >
                  {t(item.key)}
                </Link>
              ))}
              {user ? (
                <>
                  <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">{t('nav.dashboard')}</Link>
                  <button onClick={handleLogout} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">{t('nav.logout')}</button>
                </>
              ) : (
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-secondary font-bold">{t('nav.login')}</Link>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer - Professional Gradient Image Footer */}
      <footer className="relative bg-gray-900 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 min-h-[400px]">
          {/* Column 1 - Brand */}
          <div className="relative group overflow-hidden">
            <img
              src="https://picsum.photos/seed/germany-tech/800/800"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Technology"
            />
            <div className="absolute inset-0 bg-primary-dark/80 backdrop-blur-[2px]"></div>
            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-center">
              <div className="mb-6">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">GP</div>
                <h3 className="text-2xl font-bold text-white mb-4 italic tracking-tight">GPIC</h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xs transition-colors group-hover:text-white">
                  {t('footer.desc')}
                </p>
              </div>
              {/* Flags */}
              <div className="flex items-center space-x-3 mt-4">
                <div className="w-6 h-4 bg-black border border-white/20 relative overflow-hidden flex">
                  <div className="h-full w-1/3 bg-black"></div>
                  <div className="h-full w-1/3 bg-red-600"></div>
                  <div className="h-full w-1/3 bg-yellow-400"></div>
                </div>
                <div className="w-6 h-4 bg-green-700 border border-white/20 relative flex">
                  <div className="h-full w-1/4 bg-white"></div>
                  <div className="flex-grow flex items-center justify-center text-[6px] text-white">★</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Social/Presence */}
          <div className="relative group overflow-hidden border-l border-white/5">
            <img
              src="https://picsum.photos/seed/pakistan-hub/800/800"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Innovation Hub"
            />
            <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]"></div>
            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-center">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">{t('nav.press')}</h4>
              <div className="space-y-4">
                <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors group/link">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover/link:bg-white/20 transition-all">
                    <Globe size={14} />
                  </span>
                  LinkedIn
                </a>
                <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors group/link">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover/link:bg-white/20 transition-all">
                    <Globe size={14} />
                  </span>
                  Twitter / X
                </a>
              </div>
            </div>
          </div>

          {/* Column 3 - Links */}
          <div className="relative group overflow-hidden border-l border-white/5">
            <img
              src="https://picsum.photos/seed/cooperation/800/800"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Cooperation"
            />
            <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-[2px]"></div>
            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-center">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">{t('footer.quick_links')}</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center group/link">
                  <ChevronRight size={12} className="mr-2 opacity-0 group-hover/link:opacity-100 -ml-4 group-hover/link:ml-0 transition-all" />
                  {t('nav.about')}
                </Link></li>
                <li><Link to="/programs" className="text-gray-300 hover:text-white transition-colors flex items-center group/link">
                  <ChevronRight size={12} className="mr-2 opacity-0 group-hover/link:opacity-100 -ml-4 group-hover/link:ml-0 transition-all" />
                  {t('nav.programs')}
                </Link></li>
                <li><Link to="/partners" className="text-gray-300 hover:text-white transition-colors flex items-center group/link">
                  <ChevronRight size={12} className="mr-2 opacity-0 group-hover/link:opacity-100 -ml-4 group-hover/link:ml-0 transition-all" />
                  {t('nav.partners')}
                </Link></li>
                <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors flex items-center group/link">
                  <ChevronRight size={12} className="mr-2 opacity-0 group-hover/link:opacity-100 -ml-4 group-hover/link:ml-0 transition-all" />
                  {t('nav.news')}
                </Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4 - Contact */}
          <div className="relative group overflow-hidden border-l border-white/5">
            <img
              src="https://picsum.photos/seed/contact-global/800/800"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Contact"
            />
            <div className="absolute inset-0 bg-secondary/80 backdrop-blur-[2px]"></div>
            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-center">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">{t('footer.contact')}</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex flex-col">
                  <span className="text-xs text-secondary-light font-bold mb-1 uppercase opacity-75">Email</span>
                  <span className="text-white font-medium">info@gpic-innovation.org</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs text-secondary-light font-bold mb-1 uppercase opacity-75">Germany</span>
                  <span className="text-white font-medium">+49 30 12345678</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs text-secondary-light font-bold mb-1 uppercase opacity-75">Pakistan</span>
                  <span className="text-white font-medium">+92 51 12345678</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="relative z-20 bg-primary-dark/90 border-t border-white/10 px-4 sm:px-8 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; 2024 GPIC. {t('footer.rights')}</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">{t('footer.legal')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};