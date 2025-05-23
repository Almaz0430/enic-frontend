import { Link } from 'react-router-dom';
import { Layout } from '../../../widgets/Layout/ui/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="container-custom py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Страница не найдена</h2>
          <p className="text-lg text-gray-600 max-w-lg mb-8">
            Извините, но запрашиваемая вами страница не существует или была перемещена.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
            <Link 
              to="/" 
              className="bg-primary text-white px-6 py-3 rounded-md font-semibold transition-colors hover:bg-secondary"
            >
              Вернуться на главную
            </Link>
            <Link 
              to="/contacts" 
              className="border-2 border-primary text-primary px-6 py-3 rounded-md font-semibold transition-colors hover:bg-primary hover:text-white"
            >
              Связаться с нами
            </Link>
          </div>
          
          <div className="mt-12 w-full">
            <h3 className="text-xl font-semibold text-primary mb-4">Возможно, вас заинтересует:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link 
                to="/recognition" 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <h4 className="font-medium text-lg text-primary mb-2">Признание документов</h4>
                <p className="text-gray-600">Узнайте о процедуре признания иностранных документов об образовании</p>
              </Link>
              
              <Link 
                to="/accreditation" 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <h4 className="font-medium text-lg text-primary mb-2">Аккредитация</h4>
                <p className="text-gray-600">Информация о профессионально-общественной аккредитации программ</p>
              </Link>
              
              <Link 
                to="/news" 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <h4 className="font-medium text-lg text-primary mb-2">Новости</h4>
                <p className="text-gray-600">Актуальные новости и события в сфере образования</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage; 