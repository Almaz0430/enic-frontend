import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NewsItem {
  title: string;
  date: string;
  excerpt: string;
}

export const NewsFeed = () => {
  const { t } = useTranslation();
  
  // Используем изображения из оригинального массива, но тексты берем из переводов
  const images = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
  ];

  // Получаем новости из переводов с правильным типом
  const newsItems = t('newsFeed.news', { returnObjects: true }) as NewsItem[];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-primary">{t('newsFeed.title')}</h2>
          <Link to="/news" className="flex items-center text-gray-500 font-medium hover:text-gray-700 transition-colors">
            {t('newsFeed.allNews')} <span className="ml-2">→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(newsItems) && newsItems.map((item: NewsItem, index: number) => (
            <Link key={index} to={`/news/${index + 1}`} className="relative group overflow-hidden rounded-lg shadow-lg h-80">
              <img 
                src={images[index]} 
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