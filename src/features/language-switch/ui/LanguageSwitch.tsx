import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switch">
      <button onClick={() => changeLanguage('kz')}>KZ</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
    </div>
  );
}; 