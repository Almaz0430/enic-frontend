import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../../widgets/Layout/ui/Layout';

const NotFoundPage = () => {
  const { t } = useTranslation();

  const recommendedLinks = [
    { path: '/news', title: t('navigation.news'), icon: '📰' },
    { path: '/contacts', title: t('navigation.contacts'), icon: '📞' },
    { path: '/recognition', title: t('navigation.recognition'), icon: '📄' },
    { path: '/accreditation', title: t('navigation.accreditation'), icon: '🏆' },
  ];

  return (
    <Layout>
      <div className="container-custom py-16 md:py-24 min-h-[70vh] flex flex-col items-center justify-center">
        <div className="relative">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center mb-12">
            <h1 className="text-9xl font-bold text-primary mb-4 drop-shadow-lg">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {t('notFoundPage.title')}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              {t('notFoundPage.subtitle')}
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              {t('notFoundPage.button')}
            </Link>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-700">
              {t('notFoundPage.recommendations')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 flex flex-col items-center text-center"
                >
                  <span className="text-4xl mb-3">{link.icon}</span>
                  <h4 className="text-lg font-medium text-gray-800">{link.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage; 