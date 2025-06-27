import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const MapEmbed = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'map' | 'satellite'>('map');
  
  // URL карты в зависимости от выбранного типа отображения
  const mapUrl = activeTab === 'map'
    ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.9641889819037!2d71.41709837679355!3d51.09047297172499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585a605525605%3A0x4dff4a6e2202cc36!2z0YPQuy4g0KHRi9Cz0LDQvdCw0LosIDcwLCDQkNGB0YLQsNC90LAsIDAyMDAwMA!5e0!3m2!1sru!2skz!4v1715450984196!5m2!1sru!2skz"
    : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.9641889819037!2d71.41709837679355!3d51.09047297172499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585a605525605%3A0x4dff4a6e2202cc36!2z0YPQuy4g0KHRi9Cz0LDQvdCw0LosIDcwLCDQkNGB0YLQsNC90LAsIDAyMDAwMA!5e0!3m2!1sru!2skz!4v1715450984196!5m2!1sru!2skz&t=k";
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1.5 mb-4">
            {t('mapEmbed.location') || 'Наше местоположение'}
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('mapEmbed.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('mapEmbed.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Информационный блок (слева) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden h-full flex flex-col">
              <div className="p-6 bg-primary/5 flex items-center">
                <div className="bg-primary text-white p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-gray-800">{t('mapEmbed.contactInfo') || 'Контактная информация'}</h3>
              </div>
              
              {/* Адрес */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{t('mapEmbed.address.title')}</h4>
                    <p className="text-gray-600">{t('mapEmbed.address.line1')}</p>
                    <p className="text-gray-600">{t('mapEmbed.address.line2')}</p>
                    <p className="text-gray-600">{t('mapEmbed.address.line3')}</p>
                    <a 
                      href="https://goo.gl/maps/8Sj5vJ5F9zFG9vUh8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary mt-3 text-sm font-medium hover:text-primary-dark"
                    >
                      {t('mapEmbed.getDirections') || 'Построить маршрут'}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Часы работы */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="bg-secondary/10 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{t('mapEmbed.workingHours.title')}</h4>
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">{t('mapEmbed.workingHours.mondayFriday') || 'Понедельник-Пятница'}:</span>
                        <span className="font-medium">{t('mapEmbed.workingHours.weekdays')}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">{t('mapEmbed.workingHours.saturdayLabel') || 'Суббота'}:</span>
                        <span className="font-medium">{t('mapEmbed.workingHours.saturday')}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">{t('mapEmbed.workingHours.sundayLabel') || 'Воскресенье'}:</span>
                        <span className="font-medium">{t('mapEmbed.workingHours.sunday')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Телефон и почта */}
              <div className="p-6">
                <div className="flex items-start">
                  <div className="bg-accent/10 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{t('mapEmbed.contacts.title')}</h4>
                    <a href="tel:+77172287526" className="flex items-center text-gray-600 hover:text-primary mb-2 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {t('mapEmbed.contacts.phone')}
                    </a>
                    <a href="mailto:info@enic-kazakh.kz" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {t('mapEmbed.contacts.email')}
                    </a>
                  </div>
                </div>
                
                {/* Социальные сети */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-3">{t('mapEmbed.contacts.followUs') || 'Следите за нами'}</p>
                  <div className="flex space-x-3">
                    <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Карта (справа) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative h-full">
              {/* Кнопки переключения типа карты */}
              <div className="absolute top-4 right-4 z-10 bg-white rounded-lg shadow-md p-1 flex">
                <button 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === 'map' 
                      ? 'bg-primary text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('map')}
                >
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                    </svg>
                    {t('mapEmbed.mapView') || 'Карта'}
                  </span>
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === 'satellite' 
                      ? 'bg-primary text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('satellite')}
                >
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    {t('mapEmbed.satelliteView') || 'Спутник'}
                  </span>
                </button>
              </div>
              
              {/* Карта */}
              <div className="h-full">
                <iframe 
                  src={mapUrl}
                  className="w-full h-full min-h-[500px] border-0"
                  allowFullScreen 
                  loading="lazy" 
                  title={t('mapEmbed.mapTitle')}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 