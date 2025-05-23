import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

// Типы тем
export type ThemeType = 'light' | 'dark' | 'high-contrast';

// Интерфейс контекста темы
interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

// Создание контекста
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Хук для использования темы
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme должен использоваться внутри ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Получаем тему из localStorage или используем светлую тему по умолчанию
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem('theme');
    // Проверяем, сохранена ли уже тема в localStorage
    if (savedTheme && ['light', 'dark', 'high-contrast'].includes(savedTheme)) {
      return savedTheme as ThemeType;
    }
    
    // Проверяем предпочтение системы
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  });

  // Применяем классы для темы
  useEffect(() => {
    const root = document.documentElement;
    
    // Удаляем все классы тем
    root.classList.remove('light-theme', 'dark-theme', 'high-contrast-theme');
    
    // Добавляем класс для выбранной темы
    switch (theme) {
      case 'dark':
        root.classList.add('dark-theme');
        break;
      case 'high-contrast':
        root.classList.add('high-contrast-theme');
        break;
      default: // light
        root.classList.add('light-theme');
    }
    
    // Сохраняем выбор пользователя
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Компонент переключателя темы
export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setTheme('light')}
        className={`px-3 py-1 rounded ${theme === 'light' ? 'bg-primary text-white' : 'bg-gray-200'}`}
        aria-label="Светлая тема"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      </button>
      
      <button
        onClick={() => setTheme('dark')}
        className={`px-3 py-1 rounded ${theme === 'dark' ? 'bg-primary text-white' : 'bg-gray-200'}`}
        aria-label="Темная тема"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </button>
      
      <button
        onClick={() => setTheme('high-contrast')}
        className={`px-3 py-1 rounded ${theme === 'high-contrast' ? 'bg-primary text-white' : 'bg-gray-200'}`}
        aria-label="Высокий контраст"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12z" />
          <path d="M10 4v12a6 6 0 010-12z" />
        </svg>
      </button>
    </div>
  );
};
