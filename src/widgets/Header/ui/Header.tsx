import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const Header = () => {
  const [isAccessibilityModeEnabled, setIsAccessibilityModeEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('RU');

  const toggleAccessibilityMode = () => {
    setIsAccessibilityModeEnabled(!isAccessibilityModeEnabled);
    // Применяем классы для режима высокой контрастности
    if (!isAccessibilityModeEnabled) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  return (
    <Disclosure as="nav" className="bg-white shadow-md w-full m-0 p-0 top-0 left-0 right-0">
      {({ open }) => (
        <>
          <div className="container-custom">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Мобильное меню кнопка */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:text-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Открыть главное меню</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img src="/src/assets/icon.svg" alt="Логотип" className="h-16 w-auto" />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? 'text-blue-600 border-b-2 border-blue-500'
                            : 'text-gray-500 hover:text-blue-600 hover:border-b-2 hover:border-blue-500',
                          'px-3 py-2 text-sm font-medium transition-all duration-300'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Поле поиска */}
                <div className="relative mr-4 hidden sm:block">
                  <input
                    type="text"
                    placeholder="Поиск по сайту"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                  />
                  <MagnifyingGlassIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>

                {/* Переключатель языка */}
                <div className="flex mr-4">
                  <button 
                    onClick={() => setLanguage('RU')} 
                    className={`px-2 py-1 text-sm font-medium ${language === 'RU' ? 'text-blue-600 font-bold border-b-2 border-blue-500' : 'text-gray-500 hover:text-blue-600'} transition-all duration-300`}
                  >
                    RU
                  </button>
                  <span className="text-gray-300">|</span>
                  <button 
                    onClick={() => setLanguage('KZ')} 
                    className={`px-2 py-1 text-sm font-medium ${language === 'KZ' ? 'text-blue-600 font-bold border-b-2 border-blue-500' : 'text-gray-500 hover:text-blue-600'} transition-all duration-300`}
                  >
                    KZ
                  </button>
                  <span className="text-gray-300">|</span>
                  <button 
                    onClick={() => setLanguage('EN')} 
                    className={`px-2 py-1 text-sm font-medium ${language === 'EN' ? 'text-blue-600 font-bold border-b-2 border-blue-500' : 'text-gray-500 hover:text-blue-600'} transition-all duration-300`}
                  >
                    EN
                  </button>
                </div>

                {/* Кнопка версии для слабовидящих */}
                <button
                  type="button"
                  onClick={toggleAccessibilityMode}
                  className="relative rounded-md border border-gray-400 p-2 text-gray-500 hover:text-blue-600 hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mr-2 transition-all duration-300"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Версия для слабовидящих</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
                {/* Кнопка входа */}
                <Link
                  to="/profile"
                  className="relative rounded-md border border-gray-400 p-2 text-gray-500 hover:text-blue-600 hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 flex items-center"
                >
                  <UserIcon className="w-6 h-6" />
                  <span className="sr-only">Войти</span>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.current ? 'text-blue-600 border-b border-blue-500' : 'text-gray-500 hover:text-blue-600',
                    'block px-3 py-2 text-base font-medium transition-all duration-300'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}; 