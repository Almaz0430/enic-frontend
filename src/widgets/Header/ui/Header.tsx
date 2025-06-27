import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';
import { Breadcrumbs } from '@entities/Breadcrumbs';
import { useTranslation } from 'react-i18next';
import { LanguageSwitch } from '@features/language-switch';
import { useAuth } from '@providers/AuthProvider';
import { motion } from 'framer-motion';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// Компонент анимированного плейсхолдера
const AnimatedPlaceholder = ({ placeholders }: { placeholders: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const isTyping = true; // Всегда в режиме печати
  
  useEffect(() => {
    const typingSpeed = 100; // скорость печати
    const deletingSpeed = 50; // скорость удаления
    const pauseTime = 1500; // пауза между словами
    
    if (isTyping && !isDeleting) {
      // Печатаем текущий плейсхолдер
      if (displayText.length < placeholders[currentIndex].length) {
        const timer = setTimeout(() => {
          setDisplayText(placeholders[currentIndex].substring(0, displayText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        // Завершили печать, делаем паузу перед удалением
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
        return () => clearTimeout(timer);
      }
    } else if (isDeleting) {
      // Удаляем текущий плейсхолдер
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timer);
      } else {
        // Завершили удаление, переходим к следующему плейсхолдеру
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
      }
    }
  }, [displayText, isDeleting, currentIndex, placeholders, isTyping]);
  
  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};

export const Header = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isAccessibilityModeEnabled, setIsAccessibilityModeEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const searchPlaceholders = [
    t('header.searchPlaceholder'),
    'Болонский процесс',
    'Аккредитация вузов',
    'Признание документов'
  ];

  const navigation: NavigationItem[] = [
    { name: t('navigation.about'), href: '/about', current: false },
    { name: t('navigation.recognition'), href: '/recognition', current: false },
    { name: t('navigation.accreditation'), href: '/accreditation', current: false },
    { name: t('navigation.news'), href: '/news', current: false },
    { name: t('navigation.contacts'), href: '/contacts', current: false },
  ];

  const toggleAccessibilityMode = () => {
    setIsAccessibilityModeEnabled(!isAccessibilityModeEnabled);
    if (!isAccessibilityModeEnabled) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };
  
  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };
  
  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };
  
  const handleKeyDown = (e: KeyboardEvent) => {
    // Открываем поиск по нажатию Ctrl+K или Command+K
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchInputRef.current?.focus();
    }
  };
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Disclosure as="header" className="bg-white shadow-md w-full">
        {({ open }) => (
          <>
            {/* Верхняя панель с языками и доп. функциями */}
            <div className="bg-gray-50 border-b border-gray-200">
              <div className="container-custom">
                <div className="flex justify-end items-center h-10">
                  {/* Переключатель языка */}
                  <div className="flex items-center mr-4">
                    <LanguageSwitch />
                  </div>

                  {/* Кнопка версии для слабовидящих */}
                  <button
                    onClick={toggleAccessibilityMode}
                    className="flex items-center text-sm text-gray-500 hover:text-primary px-3 py-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{t('header.accessibility')}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Основной хедер */}
            <div className="bg-white py-4">
              <div className="container-custom">
                <div className="flex items-center justify-between">
                  {/* Логотип */}
                  <Link to="/" className="flex-shrink-0">
                    <img 
                      src="/static/assets/icon.svg" 
                      alt={t('header.logoAlt')} 
                      className="h-16 w-auto"
                    />
                  </Link>

                  {/* Основная навигация - десктоп */}
                  <nav className="hidden lg:flex items-center space-x-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          'text-base font-medium transition-colors duration-200',
                          item.current
                            ? 'text-primary border-b-2 border-primary'
                            : 'text-gray-600 hover:text-primary hover:border-b-2 hover:border-primary'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  {/* Правая секция */}
                  <div className="flex items-center space-x-6">
                    {/* Поиск */}
                    <form onSubmit={handleSearchSubmit} className="hidden md:block relative">
                      <motion.div 
                        className="relative"
                        animate={{ 
                          width: isSearchFocused ? '300px' : '240px' 
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <input
                          ref={searchInputRef}
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onFocus={handleSearchFocus}
                          onBlur={handleSearchBlur}
                          className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all duration-300"
                          placeholder={isSearchFocused ? '' : undefined}
                        />
                        {!searchQuery && !isSearchFocused && (
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
                            <AnimatedPlaceholder placeholders={searchPlaceholders} />
                          </div>
                        )}
                        <button 
                          type="submit"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                        >
                          <MagnifyingGlassIcon className="w-5 h-5" />
                        </button>
                      </motion.div>
                    </form>

                    {/* Профиль пользователя или кнопка входа */}
                    {user ? (
                      <Link
                        to="/profile"
                        className="flex items-center text-gray-600 hover:text-primary transition-colors duration-200"
                      >
                        <span className="hidden md:block">
                          {user.first_name} {user.last_name}
                        </span>
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        className="flex items-center text-gray-600 hover:text-primary transition-colors duration-200"
                      >
                        <UserIcon className="w-6 h-6" />
                        <span className="ml-2 hidden md:block">{t('header.login')}</span>
                      </Link>
                    )}

                    {/* Мобильное меню кнопка */}
                    <Disclosure.Button className="lg:hidden p-2 text-gray-600 hover:text-primary rounded-md focus:outline-none">
                      {open ? (
                        <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Мобильное меню */}
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Disclosure.Panel className="lg:hidden border-t border-gray-200">
                <div className="container-custom py-3">
                  {/* Мобильный поиск */}
                  <form onSubmit={handleSearchSubmit} className="mb-4">
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm"
                        placeholder={t('header.searchPlaceholder')}
                      />
                      <button 
                        type="submit"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                      >
                        <MagnifyingGlassIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </form>
                  
                  <nav className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as={Link}
                        to={item.href}
                        className={classNames(
                          'px-4 py-2 text-base font-medium rounded-md transition-colors duration-200',
                          item.current
                            ? 'bg-primary/5 text-primary'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                        )}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </nav>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>

      {/* Хлебные крошки */}
      <Breadcrumbs />
    </>
  );
}; 