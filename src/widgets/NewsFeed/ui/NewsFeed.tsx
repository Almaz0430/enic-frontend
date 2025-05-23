import { Link } from 'react-router-dom';

export const NewsFeed = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Открытие нового образовательного направления',
      date: '15 июня 2023',
      excerpt: 'Мы рады сообщить о запуске нового образовательного направления, которое поможет развить...',
      image: '/images/news/news-1.jpg'
    },
    {
      id: 2,
      title: 'Результаты ежегодного конкурса проектов',
      date: '3 мая 2023',
      excerpt: 'Подведены итоги ежегодного конкурса проектов, в котором приняли участие более 200 команд...',
      image: '/images/news/news-2.jpg'
    },
    {
      id: 3,
      title: 'Международное сотрудничество: новые перспективы',
      date: '27 апреля 2023',
      excerpt: 'Наш центр заключил соглашение о сотрудничестве с ведущими международными организациями...',
      image: '/images/news/news-3.jpg'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Последние новости</h2>
          <p className="text-gray-600">Будьте в курсе наших последних событий и достижений</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm text-gray-500">{item.date}</span>
                <h3 className="text-xl font-semibold text-primary mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link to={`/news/${item.id}`} className="text-secondary font-medium hover:underline">
                  Читать далее →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/news" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold transition-colors hover:bg-secondary">
            Все новости
          </Link>
        </div>
      </div>
    </section>
  );
}; 