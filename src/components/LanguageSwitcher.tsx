import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang?: string;
  currentPath?: string;
}

export default function LanguageSwitcher({ 
  currentLang: initialLang, 
  currentPath: initialPath 
}: LanguageSwitcherProps) {
  const [currentLang, setCurrentLang] = useState<string>('vi');
  const [currentPath, setCurrentPath] = useState<string>('/');

  useEffect(() => {
    // Get current language from URL or localStorage
    const urlLang = window.location.pathname.startsWith('/en/') ? 'en' : 'vi';
    const storedLang = localStorage.getItem('preferred-language') || 'vi';
    const detectedLang = initialLang || urlLang || storedLang;
    
    setCurrentLang(detectedLang);
    setCurrentPath(initialPath || window.location.pathname);
  }, [initialLang, initialPath]);

  const getAlternatePath = (targetLang: string) => {
    let newPath = currentPath;
    
    if (targetLang === 'vi') {
      // Remove /en prefix for Vietnamese
      newPath = currentPath.replace('/en', '') || '/';
    } else {
      // Add /en prefix for English
      if (!currentPath.startsWith('/en')) {
        newPath = `/en${currentPath}`;
      }
    }
    
    return newPath;
  };

  const handleLanguageSwitch = (targetLang: string) => {
    const newPath = getAlternatePath(targetLang);
    
    // Save preference to localStorage
    localStorage.setItem('preferred-language', targetLang);
    
    // Navigate to new path
    window.location.href = newPath;
  };

  const languages = [
    { code: 'vi', label: 'VI', flag: '🇻🇳', name: 'Tiếng Việt' },
    { code: 'en', label: 'EN', flag: '🇺🇸', name: 'English' }
  ];

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-gray-600" aria-hidden="true" />
      <div 
        className="flex items-center bg-gray-100 rounded-full p-1"
        role="group"
        aria-label="Language selector"
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageSwitch(lang.code)}
            className={`
              px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
              ${currentLang === lang.code
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }
            `}
            aria-pressed={currentLang === lang.code}
            aria-label={`Switch to ${lang.name}`}
            title={`Switch to ${lang.name}`}
          >
            <span className="flex items-center space-x-1">
              <span className="text-xs" aria-hidden="true">{lang.flag}</span>
              <span>{lang.label}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}