import React from 'react';
import { getTranslation, getCurrentLanguage } from '../lib/i18n';

interface HeroProps {
  lang?: string;
}

export default function Hero({ lang = 'vi' }: HeroProps) {
  const t = getTranslation(lang);

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t.hero.title}
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
          {t.hero.subtitle}
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors">
          {t.hero.cta}
        </button>
      </div>
    </section>
  );
}