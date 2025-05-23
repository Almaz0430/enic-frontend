import { useState, useEffect, createContext, useContext } from 'react';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Типы для контекста
interface I18nContextType {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
  availableLanguages: { code: string; name: string }[];
}

// Контекст
const I18nContext = createContext<I18nContextType | null>(null);

// Хук для использования контекста
export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n должен использоваться внутри I18nProvider');
  }
  return context;
};

// Доступные языки
const AVAILABLE_LANGUAGES = [
  { code: 'ru', name: 'Русский' },
  { code: 'kz', name: 'Қазақша' },
  { code: 'en', name: 'English' }
];

// Настройка i18next
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    supportedLngs: AVAILABLE_LANGUAGES.map(lang => lang.code),
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    react: {
      useSuspense: false
    }
  });

interface I18nProviderProps {
  children: React.ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'ru');

  // Функция для смены языка
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang).then(() => {
      setCurrentLanguage(lang);
      document.documentElement.lang = lang;
    });
  };

  // Установка языка в HTML при инициализации
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const contextValue: I18nContextType = {
    currentLanguage,
    changeLanguage,
    availableLanguages: AVAILABLE_LANGUAGES
  };

  return (
    <I18nContext.Provider value={contextValue}>
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </I18nContext.Provider>
  );
};
