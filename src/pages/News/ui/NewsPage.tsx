import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../../widgets/Layout/ui/Layout';

const NewsPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [activeCategory, setActiveCategory] = useState('all');
  
  const newsItems = [
    {
      id: 1,
      title: 'Открытие нового образовательного направления в Астане',
      date: '15 июня 2025',
      category: 'events',
      excerpt: 'Мы рады сообщить о запуске нового образовательного направления в столице Казахстана, которое поможет развить необходимые компетенции в области управления качеством образования.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      content: 'Центр Болонского процесса и академической мобильности рад представить новое образовательное направление в Астане. Данная программа разработана с учетом современных требований к качеству образования и направлена на подготовку высококвалифицированных специалистов в области управления образовательными процессами. Программа включает в себя как теоретические, так и практические модули, которые помогут слушателям приобрести необходимые навыки и компетенции.'
    },
    {
      id: 2,
      title: 'Результаты ежегодного конкурса проектов в Казахстане',
      date: '3 мая 2025',
      category: 'events',
      excerpt: 'Подведены итоги ежегодного конкурса проектов, в котором приняли участие более 200 команд из различных регионов Казахстана.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      content: 'Мы рады объявить результаты ежегодного конкурса образовательных проектов, который проводился под эгидой Центра Болонского процесса и академической мобильности. В этом году конкурс привлек рекордное количество участников - более 200 команд из всех регионов Казахстана представили свои инновационные проекты в области образования. Проекты оценивались экспертной комиссией по нескольким критериям, включая инновационность, практическую применимость и социальную значимость.'
    },
    {
      id: 3,
      title: 'Международное сотрудничество: новые перспективы для Казахстана',
      date: '27 апреля 2025',
      category: 'cooperation',
      excerpt: 'Наш центр заключил соглашение о сотрудничестве с ведущими международными организациями в области образования, открывая новые возможности для Казахстана.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
    },
    {
      id: 4,
      title: 'Изменения в процедуре признания документов об образовании в РК',
      date: '15 апреля 2025',
      category: 'recognition',
      excerpt: 'Внесены изменения в процедуру признания иностранных документов об образовании в Республике Казахстан. Узнайте, как это может повлиять на вас.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 5,
      title: 'Успешная аккредитация программ ведущих вузов Казахстана',
      date: '2 апреля 2025',
      category: 'accreditation',
      excerpt: 'Завершена процедура аккредитации образовательных программ нескольких ведущих университетов Казахстана.',
      image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
    },
    {
      id: 6,
      title: 'Семинар по внедрению новых образовательных технологий в Алматы',
      date: '20 марта 2025',
      category: 'events',
      excerpt: 'Приглашаем принять участие в семинаре, посвященном внедрению инновационных образовательных технологий, который пройдет в городе Алматы.',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 7,
      title: 'Новые подходы к обеспечению качества образования в Казахстане',
      date: '10 марта 2025',
      category: 'accreditation',
      excerpt: 'Опубликованы новые методические рекомендации по обеспечению качества образовательных программ в учебных заведениях Республики Казахстан.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
    },
    {
      id: 8,
      title: 'Участие Казахстана в международных образовательных проектах',
      date: '1 марта 2025',
      category: 'cooperation',
      excerpt: 'Обзор участия Казахстана в ключевых международных образовательных проектах и инициативах. Новые горизонты сотрудничества.',
      image: 'https://images.unsplash.com/photo-1551634979-2b11f8c946fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];
  
  const categories = [
    { id: 'all', name: t('newsPage.allNews') },
    { id: 'events', name: t('newsPage.events') },
    { id: 'recognition', name: t('newsPage.recognition') },
    { id: 'accreditation', name: t('newsPage.accreditation') },
    { id: 'cooperation', name: t('newsPage.cooperation') }
  ];
  
  // Если есть id в параметрах URL, показываем детальную страницу
  if (id) {
    const newsItem = newsItems.find(item => item.id === parseInt(id, 10));
    
    // Если новость не найдена, показываем сообщение об ошибке
    if (!newsItem) {
      return (
        <Layout>
          <div className="container-custom py-16">
            <div className="bg-red-50 p-8 rounded-lg text-center my-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-400 mx-auto mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('newsPage.notFound.title')}</h2>
              <p className="text-gray-600 mb-6">{t('newsPage.notFound.description')}</p>
              <Link to="/news" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                {t('newsPage.backToNews')}
              </Link>
            </div>
          </div>
        </Layout>
      );
    }
    
    // Если новость найдена, показываем детальную страницу
    return (
      <Layout>
        {/* Верхний баннер с заголовком */}
        <div className="bg-primary/5">
          <div className="container-custom py-4">
            <Link to="/news" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              {t('newsPage.backToAll')}
            </Link>
          </div>
        </div>
        
        <article className="container-custom py-12">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {newsItem.title}
            </h1>
            <div className="flex items-center mb-6">
              <span className="text-sm text-gray-500 flex items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                {newsItem.date}
              </span>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                {categories.find(cat => cat.id === newsItem.category)?.name || t('newsPage.allNews')}
              </span>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
            <img 
              src={newsItem.image} 
              alt={newsItem.title}
              className="w-full h-96 object-cover" 
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            {newsItem.content ? (
              <p>{newsItem.content}</p>
            ) : (
              <p>{newsItem.excerpt}</p>
            )}
          </div>
        </article>
      </Layout>
    );
  }
  
  // Если id нет в параметрах URL, показываем список новостей
  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);
  
  return (
    <Layout>
      {/* Верхний баннер с заголовком */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 relative overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="bg-white/10 inline-block rounded-lg px-4 py-2 mb-6 backdrop-blur-sm">
            <span className="text-white/90 font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>
              {t('newsPage.stayUpdated')}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {t('newsPage.title')}
          </h1>
          
          <div className="relative mb-6">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent"></div>
            <p className="text-lg mb-8 text-white/90 max-w-2xl pl-4">
              {t('newsPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        {/* Категории */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-gray-700 font-medium">{t('newsPage.categories')}:</span>
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Основные новости */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredNews.map(item => (
            <Link key={item.id} to={`/news/${item.id}`} className="group block">
              <div className="relative h-64 overflow-hidden rounded-xl shadow-lg mb-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-0 right-0 m-4 z-10">
                  <span className="text-xs bg-primary/80 text-white px-3 py-1 rounded-full backdrop-blur-sm shadow-md">
                    {categories.find(cat => cat.id === item.category)?.name || t('newsPage.allNews')}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <span className="text-sm text-gray-200 opacity-80 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    {item.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredNews.length === 0 && (
          <div className="bg-gray-50 p-8 rounded-lg text-center my-12">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-400 mx-auto mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{t('newsPage.notFound.title')}</h3>
            <p className="text-gray-600">{t('newsPage.notFound.description')}</p>
          </div>
        )}
        
        {/* Подписка на новости */}
        <div className="bg-gradient-to-br from-primary/5 to-white p-8 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary/10">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              {t('newsPage.subscribe.title')}
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl">
              {t('newsPage.subscribe.description')}
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl">
              <input 
                type="email" 
                placeholder={t('newsPage.subscribe.emailPlaceholder')}
                className="flex-grow border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button 
                type="submit" 
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                {t('newsPage.subscribe.button')}
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              {t('newsPage.subscribe.privacy')}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage; 