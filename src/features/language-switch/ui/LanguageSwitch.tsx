import React from 'react';
import { useTranslation } from 'react-i18next';
import { useI18n } from '../../../providers/i18n';

export const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();
  const { availableLanguages } = useI18n();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-1 text-sm">
      {availableLanguages.map((lang, index) => (
        <React.Fragment key={lang.code}>
          <button 
            onClick={() => changeLanguage(lang.code)} 
            className={`px-2 py-1 ${i18n.language === lang.code ? 'text-primary font-medium' : 'text-gray-500 hover:text-primary'}`}
            aria-label={`Переключить на язык ${lang.name}`}
          >
            {lang.code.toUpperCase()}
          </button>
          {index < availableLanguages.length - 1 && (
            <span className="text-gray-300">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}; 