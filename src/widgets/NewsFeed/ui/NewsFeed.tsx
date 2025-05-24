import { Link } from 'react-router-dom';

export const NewsFeed = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Открытие нового образовательного направления',
      date: '15 июня 2023',
      excerpt: 'Мы рады сообщить о запуске нового образовательного направления, которое поможет развить...',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      title: 'Результаты ежегодного конкурса проектов',
      date: '3 мая 2023',
      excerpt: 'Подведены итоги ежегодного конкурса проектов, в котором приняли участие более 200 команд...',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      title: 'Международное сотрудничество: новые перспективы',
      date: '27 апреля 2023',
      excerpt: 'Наш центр заключил соглашение о сотрудничестве с ведущими международными организациями...',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-primary">Новости</h2>
          <Link to="/news" className="flex items-center text-gray-500 font-medium hover:text-gray-700 transition-colors">
            Все новости <span className="ml-2">→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Link key={item.id} to={`/news/${item.id}`} className="relative group overflow-hidden rounded-lg shadow-lg h-80">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <span className="text-sm text-gray-200 opacity-80">
                  {item.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};