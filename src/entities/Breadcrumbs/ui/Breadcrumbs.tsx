import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const Breadcrumbs = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const crumbs = useMemo(() => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    const result = [];
    
    let currentPath = '';
    
    // Добавляем главную в любом случае
    result.push({
      path: '/',
      label: t('navigation.home'),
    });
    
    // Добавляем остальные элементы пути
    for (let i = 0; i < pathnames.length; i++) {
      currentPath += `/${pathnames[i]}`;
      
      // Проверим, есть ли перевод для этого пути
      let translationKey;
      
      if (pathnames[i] === 'news' && pathnames.length === 1) {
        translationKey = 'navigation.news';
      } else if (pathnames[i] === 'about') {
        translationKey = 'navigation.about';
      } else if (pathnames[i] === 'services') {
        translationKey = 'navigation.services';
      } else if (pathnames[i] === 'events') {
        translationKey = 'navigation.events';
      } else if (pathnames[i] === 'contacts') {
        translationKey = 'navigation.contacts';
      } else if (pathnames[i] === 'bologna') {
        translationKey = 'navigation.bologna';
      } else if (pathnames[i] === 'accreditation') {
        translationKey = 'navigation.accreditation';
      } else if (pathnames[i] === 'recognition') {
        translationKey = 'navigation.recognition';
      } else if (pathnames[i] === '404') {
        translationKey = 'navigation.notFound';
      } else if (pathnames[i] === 'login') {
        translationKey = 'auth.login.title';
      } else if (pathnames[i] === 'register') {
        translationKey = 'auth.register.title';
      } else if (pathnames[i] === 'register-university') {
        translationKey = 'auth.registerUniversity.title';
      } else if (pathnames[i] === 'education-registry') {
        translationKey = 'educationRegistry.pageTitle';
      } else if (pathnames[i] === 'profile') {
        translationKey = 'profile.title';
      } else {
        // Если нет перевода, используем текст как есть
        translationKey = null;
      }
      
      result.push({
        path: currentPath,
        label: translationKey ? t(translationKey) : (pathnames[i].charAt(0).toUpperCase() + pathnames[i].slice(1)),
      });
    }
    
    return result;
  }, [location, t]);

  // Если мы на главной странице, не показываем хлебные крошки
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="container-custom pt-2 pb-3 w-full" aria-label="Breadcrumbs">
      <div className="flex justify-start w-full">
        <ol className="flex flex-wrap items-center space-x-2 text-sm">
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            
            return (
              <li key={crumb.path} className="flex items-center">
                {index > 0 && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mx-1 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                )}
                
                {isLast ? (
                  <span className="font-medium text-primary" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link to={crumb.path} className="text-gray-600 hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}; 