import React from 'react';
import { useApp } from '../contexts/AppContext';
import { ArrowRight, Globe, Zap, Users, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const { t } = useApp();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-secondary rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-accent rounded-full opacity-10 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/partners" className="flex items-center justify-center bg-gradient-success hover:-translate-y-0.5 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl shadow-glow">
                {t('hero.cta.partner')}
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/programs" className="flex items-center justify-center bg-transparent hover:bg-white text-white hover:text-primary border border-white px-8 py-4 rounded-lg font-semibold transition-all">
                {t('hero.cta.programs')}
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Stats / Trust Banner */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <p className="text-4xl font-bold text-primary mb-2">20+</p>
              <p className="text-gray-600 font-medium">{t('stats.partners')}</p>
            </div>
            <div className="p-4 border-l-0 md:border-l border-gray-200">
              <p className="text-4xl font-bold text-primary mb-2">€50M+</p>
              <p className="text-gray-600 font-medium">{t('stats.volume')}</p>
            </div>
            <div className="p-4 border-l-0 md:border-l border-gray-200">
              <p className="text-4xl font-bold text-primary mb-2">2</p>
              <p className="text-gray-600 font-medium">{t('stats.hubs')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">{t('section.focus.title')}</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 text-primary-light rounded-lg flex items-center justify-center mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('card.green_energy')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('card.green_energy.desc')}
              </p>
              <Link to="/programs" className="text-primary font-medium hover:text-secondary flex items-center">
                {t('card.learn_more')} <ChevronRight size={16} />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-green-50 text-secondary rounded-lg flex items-center justify-center mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('card.vocational')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('card.vocational.desc')}
              </p>
              <Link to="/programs" className="text-primary font-medium hover:text-secondary flex items-center">
                {t('card.learn_more')} <ChevronRight size={16} />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('card.compliance')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('card.compliance.desc')}
              </p>
              <Link to="/about" className="text-primary font-medium hover:text-secondary flex items-center">
                {t('card.learn_more')} <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">{t('section.news.title')}</h2>
              <div className="h-1 w-20 bg-secondary rounded-full"></div>
            </div>
            <Link to="/news" className="text-primary font-medium hover:text-secondary hidden md:block">{t('section.news.viewAll')}</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row h-full md:h-48 hover:shadow-md transition-shadow">
              <img src="https://picsum.photos/seed/tech1/300/300" alt="News" className="w-full md:w-48 h-48 object-cover" />
              <div className="p-6 flex flex-col justify-center">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">Partnership</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">MoU Signed with Technical University Munich</h3>
                <p className="text-sm text-gray-500 mb-0">Oct 24, 2023</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row h-full md:h-48 hover:shadow-md transition-shadow">
              <img src="https://picsum.photos/seed/solar/300/300" alt="News" className="w-full md:w-48 h-48 object-cover" />
              <div className="p-6 flex flex-col justify-center">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">Innovation</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Solar Initiative 2025 Launched in Punjab</h3>
                <p className="text-sm text-gray-500 mb-0">Oct 10, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};