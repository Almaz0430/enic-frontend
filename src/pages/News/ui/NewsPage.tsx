import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../../widgets/Layout/ui/Layout';

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const newsItems = [
    {
      id: 1,
      title: 'Открытие нового образовательного направления',
      date: '15 июня 2023',
      category: 'events',
      excerpt: 'Мы рады сообщить о запуске нового образовательного направления, которое поможет развить необходимые компетенции в области управления качеством образования.',
      image: '/images/news/news-1.jpg'
    },
    {
      id: 2,
      title: 'Результаты ежегодного конкурса проектов',
      date: '3 мая 2023',
      category: 'events',
      excerpt: 'Подведены итоги ежегодного конкурса проектов, в котором приняли участие более 200 команд из различных регионов России.',
      image: '/images/news/news-2.jpg'
    },
    {
      id: 3,
      title: 'Международное сотрудничество: новые перспективы',
      date: '27 апреля 2023',
      category: 'cooperation',
      excerpt: 'Наш центр заключил соглашение о сотрудничестве с ведущими международными организациями в области образования.',
      image: '/images/news/news-3.jpg'
    },
    {
      id: 4,
      title: 'Изменения в процедуре признания документов об образовании',
      date: '15 апреля 2023',
      category: 'recognition',
      excerpt: 'Внесены изменения в процедуру признания иностранных документов об образовании. Узнайте, как это может повлиять на вас.',
      image: '/images/news/news-4.jpg'
    },
    {
      id: 5,
      title: 'Успешная аккредитация программ ведущих вузов',
      date: '2 апреля 2023',
      category: 'accreditation',
      excerpt: 'Завершена процедура аккредитации образовательных программ нескольких ведущих российских университетов.',
      image: '/images/news/news-5.jpg'
    },
    {
      id: 6,
      title: 'Семинар по внедрению новых образовательных технологий',
      date: '20 марта 2023',
      category: 'events',
      excerpt: 'Приглашаем принять участие в семинаре, посвященном внедрению инновационных образовательных технологий.',
      image: '/images/news/news-6.jpg'
    },
    {
      id: 7,
      title: 'Новые подходы к обеспечению качества образования',
      date: '10 марта 2023',
      category: 'accreditation',
      excerpt: 'Опубликованы новые методические рекомендации по обеспечению качества образовательных программ.',
      image: '/images/news/news-7.jpg'
    },
    {
      id: 8,
      title: 'Участие России в международных образовательных проектах',
      date: '1 марта 2023',
      category: 'cooperation',
      excerpt: 'Обзор участия России в ключевых международных образовательных проектах и инициативах.',
      image: '/images/news/news-8.jpg'
    }
  ];
  
  const categories = [
    { id: 'all', name: 'Все новости' },
    { id: 'events', name: 'Мероприятия' },
    { id: 'recognition', name: 'Признание документов' },
    { id: 'accreditation', name: 'Аккредитация' },
    { id: 'cooperation', name: 'Международное сотрудничество' }
  ];
  
  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);
  
  return (
    <Layout>
      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Новости и объявления</h1>
        
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-gray-700 font-medium">Категории:</span>
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <span className="text-xs bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-full">
                    {categories.find(cat => cat.id === item.category)?.name || 'Новость'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link to={`/news/${item.id}`} className="text-secondary font-medium hover:underline">
                  Читать далее →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {filteredNews.length === 0 && (
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Новости не найдены</h3>
            <p className="text-gray-600">По выбранной категории нет доступных новостей. Попробуйте выбрать другую категорию.</p>
          </div>
        )}
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Подписка на новости</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              Подпишитесь на нашу рассылку, чтобы всегда быть в курсе последних новостей и событий.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-grow border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button 
                type="submit" 
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-colors"
              >
                Подписаться
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              Нажимая кнопку, вы соглашаетесь с нашей политикой обработки персональных данных
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage; 