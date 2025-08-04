import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

interface ResponsiveLanguageSwitcherProps {
  currentLang?: string;
  currentPath?: string;
  variant?: 'toggle' | 'dropdown';
}

export default function ResponsiveLanguageSwitcher({ 
  currentLang: initialLang, 
  currentPath: initialPath,
  variant = 'toggle'
}: ResponsiveLanguageSwitcherProps) {
  const [currentLang, setCurrentLang] = useState<string>('vi');
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const urlLang = window.location.pathname.startsWith('/en/') ? 'en' : 'vi';
    const storedLang = localStorage.getItem('preferred-language') || 'vi';
    const detectedLang = initialLang || urlLang || storedLang;
    
    setCurrentLang(detectedLang);
    setCurrentPath(initialPath || window.location.pathname);
  }, [initialLang, initialPath]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getAlternatePath = (targetLang: string) => {
    let newPath = currentPath;
    
    if (targetLang === 'vi') {
      newPath = currentPath.replace('/en', '') || '/';
    } else {
      if (!currentPath.startsWith('/en')) {
        newPath = `/en${currentPath}`;
      }
    }
    
    return newPath;
  };

  const handleLanguageSwitch = (targetLang: string) => {
    const newPath = getAlternatePath(targetLang);
    localStorage.setItem('preferred-language', targetLang);
    setIsDropdownOpen(false);
    window.location.href = newPath;
  };

  const languages = [
    { code: 'vi', label: 'Tiếng Việt', shortLabel: 'VI', flag: '🇻🇳' },
    { code: 'en', label: 'English', shortLabel: 'EN', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  if (variant === 'dropdown') {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
          aria-label="Select language"
        >
          <Globe className="w-4 h-4" aria-hidden="true" />
          <span className="hidden sm:inline">{currentLanguage.label}</span>
          <span className="sm:hidden">{currentLanguage.shortLabel}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <div className="py-1" role="menu">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSwitch(lang.code)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center space-x-3 ${
                    currentLang === lang.code ? 'bg-purple-50 text-purple-700' : 'text-gray-700'
                  }`}
                  role="menuitem"
                >
                  <span className="text-lg" aria-hidden="true">{lang.flag}</span>
                  <span>{lang.label}</span>
                  {currentLang === lang.code && (
                    <span className="ml-auto text-purple-600">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Toggle variant (default)
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
                ? 'bg-purple-600 text-white shadow-sm transform scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }
            `}
            aria-pressed={currentLang === lang.code}
            aria-label={`Switch to ${lang.label}`}
            title={`Switch to ${lang.label}`}
          >
            <span className="flex items-center space-x-1">
              <span className="text-xs" aria-hidden="true">{lang.flag}</span>
              <span className="hidden sm:inline">{lang.shortLabel}</span>
              <span className="sm:hidden">{lang.shortLabel}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}