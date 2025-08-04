import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: string;
  currentPath: string;
}

export default function LanguageSwitcher({ currentLang, currentPath }: LanguageSwitcherProps) {
  const getAlternatePath = () => {
    if (currentLang === 'vn') {
      return `/en${currentPath}`;
    } else {
      return currentPath.replace('/en', '') || '/';
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-gray-600" />
      <div className="flex items-center space-x-1">
        <a
          href={currentLang === 'vn' ? currentPath : currentPath.replace('/en', '') || '/'}
          className={`px-2 py-1 text-sm rounded transition-colors ${
            currentLang === 'vn'
              ? 'bg-purple-600 text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          VN
        </a>
        <a
          href={currentLang === 'en' ? currentPath : `/en${currentPath}`}
          className={`px-2 py-1 text-sm rounded transition-colors ${
            currentLang === 'en'
              ? 'bg-purple-600 text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          EN
        </a>
      </div>
    </div>
  );
}