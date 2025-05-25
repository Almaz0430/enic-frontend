import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';
import { Breadcrumbs } from '@entities/Breadcrumbs';
import { useTranslation } from 'react-i18next';
import { LanguageSwitch } from '@features/language-switch';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const Header = () => {
  const { t } = useTranslation();
  const [isAccessibilityModeEnabled, setIsAccessibilityModeEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
                      src="/src/assets/icon.svg" 
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
                    <div className="hidden md:flex items-center relative">
                      <input
                        type="text"
                        placeholder={t('header.searchPlaceholder')}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-64 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-primary text-sm"
                      />
                      <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute right-3" />
                    </div>

                    {/* Кнопка входа */}
                    <Link
                      to="/profile"
                      className="flex items-center text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      <UserIcon className="w-6 h-6" />
                      <span className="ml-2 hidden md:block">{t('header.login')}</span>
                    </Link>

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