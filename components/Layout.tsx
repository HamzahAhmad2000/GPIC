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
                  className={`relative px-3 py-2 text-sm font-medium transition-colors group ${
                    location.pathname === item.path
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
                  className={`px-2 py-0.5 text-xs font-semibold rounded-full transition-all ${
                    language === Language.EN ? 'bg-white shadow text-primary' : 'text-gray-400'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage(Language.DE)}
                  className={`px-2 py-0.5 text-xs font-semibold rounded-full transition-all ${
                    language === Language.DE ? 'bg-white shadow text-primary' : 'text-gray-400'
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

      {/* Footer - Using gray-900 as per design */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4 text-white">
                <span className="font-bold text-xl">GPIC</span>
              </div>
              <p className="text-sm text-gray-400 mb-6 max-w-sm">
                {t('footer.desc')}
              </p>
              <div className="flex space-x-4">
                 {/* Flags purely for institutional context in footer */}
                 <div className="flex items-center space-x-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                   <div className="w-6 h-4 bg-black border border-gray-600 relative overflow-hidden">
                      <div className="h-full w-1/3 bg-black absolute left-0"></div>
                      <div className="h-full w-1/3 bg-red-600 absolute left-1/3"></div>
                      <div className="h-full w-1/3 bg-yellow-400 absolute left-2/3"></div>
                   </div>
                   <div className="w-6 h-4 bg-green-700 border border-gray-600 relative">
                      <div className="absolute left-0 h-full w-1/4 bg-white"></div>
                      <div className="absolute right-1 top-1 text-white text-[8px]">★</div>
                   </div>
                 </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t('footer.quick_links')}</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
                <li><Link to="/programs" className="hover:text-white transition-colors">{t('nav.programs')}</Link></li>
                <li><Link to="/partners" className="hover:text-white transition-colors">{t('nav.partners')}</Link></li>
                <li><Link to="/news" className="hover:text-white transition-colors">{t('nav.news')}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t('footer.contact')}</h3>
              <ul className="space-y-2 text-sm">
                <li>info@gpic-innovation.org</li>
                <li>+49 30 12345678 (DE)</li>
                <li>+92 51 12345678 (PK)</li>
                <li className="pt-4 flex space-x-2">
                   <a href="#" className="hover:text-white">LinkedIn</a>
                   <a href="#" className="hover:text-white">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between text-xs text-gray-500">
            <p>&copy; 2024 GPIC. {t('footer.rights')}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-white">{t('footer.legal')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};