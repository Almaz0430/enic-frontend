import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const HeroBanner = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-[calc(100vh-6rem)] flex items-center py-12 sm:py-16 overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop" 
          alt="Образовательный фон" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
        {/* Декоративные элементы */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Левая колонка с текстом */}
          <div className="text-white px-4 sm:px-0">
            <div className="bg-white/10 inline-block rounded-lg px-3 py-2 sm:px-4 sm:py-2 mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="text-white/90 text-sm sm:text-base font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                {t('hero.bolognaProcess')}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              {t('hero.title')} <br className="hidden sm:block" />
              <span className="text-accent">{t('hero.titleAccent')}</span>
            </h1>
            
            <div className="relative mb-6 sm:mb-8">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent"></div>
              <p className="text-base sm:text-lg text-white/90 max-w-xl pl-4">
                {t('hero.subtitle')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/about" 
                className="bg-white text-primary px-4 sm:px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-accent hover:text-white shadow-lg hover:shadow-xl flex items-center justify-center sm:justify-start"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                {t('hero.aboutButton')}
              </Link>
              
              <Link 
                to="/bologna" 
                className="border-2 border-white px-4 sm:px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-white hover:text-primary shadow-lg hover:shadow-xl flex items-center justify-center sm:justify-start backdrop-blur-sm text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                {t('hero.bolognaButton')}
              </Link>
            </div>
          </div>
          
          {/* Правая колонка с карточками руководства */}
          <div className="hidden lg:flex justify-end">
            <div className="w-full relative">
              <div className="flex justify-end mb-2">
                <Link to="/leadership" className="inline-flex items-center text-white/80 hover:text-white text-sm">
                  {t('hero.leadership')}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
              
              {/* Вертикальный блок руководителя */}
              <div className="relative h-[32rem] md:w-3/4 ml-auto overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 backdrop-blur-sm rounded-xl overflow-hidden z-10 transform transition-all duration-1000">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="w-full h-full relative">
                      {/* Слайдер с руководителями */}
                      <div className="slider-container">
                        {/* Слайд 1 */}
                        <div className="slider-slide slide-active" id="slide-1">
                          <div className="slide-image">
                            <img 
                              src="/assets/managers/farkhad shaymuratovich.webp" 
                              alt="Директор центра" 
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                          <div className="slide-content">
                            <div className="bg-accent/20 text-white text-sm font-medium px-3 py-1.5 rounded inline-block mb-3">
                              {t('hero.positions.director')}
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Куанганов Фархад Шаймуратович</h3>
                            <p className="text-white/80 text-base sm:text-lg">{t('hero.degrees.masterPublicAdmin')}</p>
                          </div>
                        </div>
                        
                        {/* Слайд 2 */}
                        <div className="slider-slide" id="slide-2">
                          <div className="slide-image">
                            <img 
                              src="/assets/managers/yerzhan tursynkhanuly.webp" 
                              alt="Заместитель директора" 
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                          <div className="slide-content">
                            <div className="bg-accent/20 text-white text-sm font-medium px-3 py-1.5 rounded inline-block mb-3">
                              {t('hero.positions.deputyDirector')}
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Иргебаев Ержан Турсынханулы</h3>
                            <p className="text-white/80 text-base sm:text-lg">{t('hero.degrees.techSciCandidate')}</p>
                          </div>
                        </div>
                        
                        {/* Слайд 3 */}
                        <div className="slider-slide" id="slide-3">
                          <div className="slide-image">
                            <img 
                              src="/assets/managers/alibek sergazyyevich.webp" 
                              alt="Заместитель директора" 
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                          <div className="slide-content">
                            <div className="bg-accent/20 text-white text-sm font-medium px-3 py-1.5 rounded inline-block mb-3">
                              {t('hero.positions.deputyDirector')}
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Мадибеков Алибек Сергазыевич</h3>
                            <p className="text-white/80 text-base sm:text-lg">{t('hero.positions.deputyDirector')}</p>
                          </div>
                        </div>
                        
                        {/* Слайд 4 */}
                        <div className="slider-slide" id="slide-4">
                          <div className="slide-image">
                            <img 
                              src="/assets/managers/shynġys nūrlanūly.webp" 
                              alt="Заместитель директора" 
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                          <div className="slide-content">
                            <div className="bg-accent/20 text-white text-sm font-medium px-3 py-1.5 rounded inline-block mb-3">
                              {t('hero.positions.deputyDirector')}
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Нұрланов Шынғыс Нұрланұлы</h3>
                            <p className="text-white/80 text-base sm:text-lg">{t('hero.positions.deputyDirector')}</p>
                          </div>
                        </div>
                        
                        {/* Слайд 5 */}
                        <div className="slider-slide" id="slide-5">
                          <div className="slide-image">
                            <img 
                              src="/assets/managers/amantay abilkhairovich.webp" 
                              alt="Советник директора" 
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                          <div className="slide-content">
                            <div className="bg-accent/20 text-white text-sm font-medium px-3 py-1.5 rounded inline-block mb-3">
                              {t('hero.positions.advisor')}
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Нурмагамбетов Амантай Абилхаирович</h3>
                            <p className="text-white/80 text-base sm:text-lg">{t('hero.degrees.professor')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Индикаторы переключения */}
                <div className="absolute bottom-6 right-6 flex space-x-3 z-20">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full indicator indicator-1"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full indicator indicator-2"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full indicator indicator-3"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full indicator indicator-4"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full indicator indicator-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        /* Стили для слайдера */
        .slider-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .slider-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          visibility: hidden;
          transition: transform 0.8s ease, opacity 0.8s ease, visibility 0.8s;
          transform: translateX(100%);
        }
        
        .slide-active {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
          z-index: 2;
        }
        
        .slide-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        
        .slide-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.5rem;
          background: linear-gradient(to top, rgba(30, 58, 138, 1), rgba(30, 58, 138, 0));
          z-index: 3;
        }
        
        /* Анимация слайдов */
        #slide-1 {
          animation: slide1 25s infinite;
        }
        
        #slide-2 {
          animation: slide2 25s infinite;
        }
        
        #slide-3 {
          animation: slide3 25s infinite;
        }
        
        #slide-4 {
          animation: slide4 25s infinite;
        }
        
        #slide-5 {
          animation: slide5 25s infinite;
        }
        
        @keyframes slide1 {
          0%, 16% {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
            z-index: 5;
          }
          20%, 96% {
            opacity: 0;
            visibility: hidden;
            transform: translateX(-100%);
            z-index: 0;
          }
          100% {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
            z-index: 5;
          }
        }
        
        @keyframes slide2 {
          0%, 16% {
            opacity: 0;
            visibility: hidden;
            transform: translateX(100%);
            z-index: 0;
          }
          20%, 36% {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
            z-index: 5;
          }
          40%, 100% {
            opacity: 0;
            visibility: hidden;
            transform: translateX(-100%);
            z-index: 0;
          }
        }
        
        @keyframes slide3 {
          0%, 36% {
            opacity: 0;
            visibility: hidden;
            transform: translateX(100%);
            z-index: 0;
          }
          40%, 56% {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
            z-index: 5;
          }
          60%, 100% {
            opacity: 0;
            visibility: hidden;
            transform: translateX(-100%);
            z-index: 0;
          }
        }
        
        @keyframes slide4 {
          0%, 56% {
            opacity: 0;
            visibility: hidden;
            transform: translateX(100%);
            z-index: 0;
          }
          60%, 76% {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
            z-index: 5;
          }
          80%, 100% {
            opacity: 0;
            visibility: hidden;
            transform: translateX(-100%);
            z-index: 0;
          }
        }
        
        @keyframes slide5 {
          0%, 76% {
            opacity: 0;
            visibility: hidden;
            transform: translateX(100%);
            z-index: 0;
          }
          80%, 96% {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
            z-index: 5;
          }
          100% {
            opacity: 0;
            visibility: hidden;
            transform: translateX(-100%);
            z-index: 0;
          }
        }
        
        /* Анимация для индикаторов */
        .indicator {
          background-color: rgba(255,255,255,0.5);
          transition: background-color 0.3s ease;
        }
        
        @keyframes indicatorActive {
          0%, 16% { background-color: rgba(255,255,255,1); }
          20%, 100% { background-color: rgba(255,255,255,0.5); }
        }
        
        .indicator-1 {
          animation: indicatorActive 25s 0s infinite;
        }
        
        .indicator-2 {
          animation: indicatorActive 25s 5s infinite;
        }
        
        .indicator-3 {
          animation: indicatorActive 25s 10s infinite;
        }
        
        .indicator-4 {
          animation: indicatorActive 25s 15s infinite;
        }
        
        .indicator-5 {
          animation: indicatorActive 25s 20s infinite;
        }
      `}} />
    </section>
  );
}; 