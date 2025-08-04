import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getBrowserLanguage, setLanguagePreference } from '../lib/i18n';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: string;
}

export function LanguageProvider({ children, initialLanguage }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<string>(initialLanguage || 'vi');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize language from various sources
    const initLanguage = async () => {
      try {
        const urlLang = window.location.pathname.startsWith('/en/') ? 'en' : 'vi';
        const browserLang = getBrowserLanguage();
        const finalLang = initialLanguage || urlLang || browserLang;
        
        setCurrentLanguage(finalLang);
        setLanguagePreference(finalLang);
      } catch (error) {
        console.warn('Language initialization failed:', error);
        setCurrentLanguage('vi');
      } finally {
        setIsLoading(false);
      }
    };

    initLanguage();
  }, [initialLanguage]);

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    setLanguagePreference(lang);
    
    // Navigate to appropriate URL
    const currentPath = window.location.pathname;
    let newPath = currentPath;
    
    if (lang === 'vi') {
      newPath = currentPath.replace('/en', '') || '/';
    } else {
      if (!currentPath.startsWith('/en')) {
        newPath = `/en${currentPath}`;
      }
    }
    
    if (newPath !== currentPath) {
      window.location.href = newPath;
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}