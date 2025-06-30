import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useI18n } from '../../../providers/i18n';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// Карта флагов для каждого языка
const FLAGS: Record<string, string> = {
  ru: '🇷🇺',
  kz: '🇰🇿',
  en: '🇬🇧'
};

export const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();
  const { availableLanguages } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  // Закрытие выпадающего списка при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Получаем текущий язык
  const currentLanguage = availableLanguages.find(lang => lang.code === i18n.language) || availableLanguages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-1 rounded-md hover:bg-gray-100 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-lg" aria-hidden="true">{FLAGS[currentLanguage.code]}</span>
        <span className="text-sm font-medium text-gray-700">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDownIcon className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
          {availableLanguages.map(lang => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full text-left px-4 py-2 flex items-center space-x-3 hover:bg-gray-50 transition-colors ${
                i18n.language === lang.code ? 'bg-gray-50 text-primary font-medium' : 'text-gray-700'
              }`}
            >
              <span className="text-lg" aria-hidden="true">{FLAGS[lang.code]}</span>
              <span className="text-sm">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}; 