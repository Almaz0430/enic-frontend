import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';

const routes = {
  '/': 'Главная',
  '/about': 'О центре',
  '/services': 'Услуги',
  '/events': 'Мероприятия',
  '/contacts': 'Контакты',
};

type RoutesType = {
  [key: string]: string;
};

export const Breadcrumbs = () => {
  const location = useLocation();

  const crumbs = useMemo(() => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    const result = [];
    
    let currentPath = '';
    
    // Добавляем главную в любом случае
    result.push({
      path: '/',
      label: 'Главная',
    });
    
    // Добавляем остальные элементы пути
    for (let i = 0; i < pathnames.length; i++) {
      currentPath += `/${pathnames[i]}`;
      
      // Проверим, есть ли маршрут в известных маршрутах
      const label = (routes as RoutesType)[currentPath] || pathnames[i];
      
      result.push({
        path: currentPath,
        label: label.charAt(0).toUpperCase() + label.slice(1),
      });
    }
    
    return result;
  }, [location]);

  // Если мы на главной странице, не показываем хлебные крошки
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="container-custom pt-2 pb-3" aria-label="Breadcrumbs">
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
    </nav>
  );
}; 