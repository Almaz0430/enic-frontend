import { Link } from 'react-router-dom';

export const HeroBanner = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 mt-0 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="transform transition-all duration-500">
            <div className="bg-white/10 inline-block rounded-lg px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="text-white/90 font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                Инновационные решения
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Центр поддержки <span className="text-secondary">и развития</span>
            </h1>
            
            <p className="text-lg mb-8 text-white/80 max-w-xl">
              Мы помогаем найти решения для самых сложных задач и создаем возможности для развития в современном образовательном пространстве.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/about" 
                className="bg-white text-primary px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-secondary hover:text-white shadow-lg hover:shadow-xl flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                О центре
              </Link>
              
              <Link 
                to="/services" 
                className="border-2 border-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-white hover:text-primary shadow-lg hover:shadow-xl flex items-center backdrop-blur-sm text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
                Наши услуги
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full">
              <div className="flex justify-end mb-2">
                <Link to="/events" className="inline-flex items-center text-white/80 hover:text-white text-sm">
                  Все мероприятия
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/20 border border-white/10 w-full md:w-2/3 md:ml-auto md:mr-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-secondary/20 text-white text-xs font-medium px-2 py-1 rounded">15 сен</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-white text-sm">Конференция "Инновации в образовании"</h3>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/20 border border-white/10 w-full md:w-2/3 md:ml-auto md:mr-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-accent/20 text-white text-xs font-medium px-2 py-1 rounded">22 сен</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-white text-sm">Семинар по признанию иностранных дипломов</h3>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/20 border border-white/10 w-full md:w-2/3 md:ml-auto md:mr-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-white/20 text-white text-xs font-medium px-2 py-1 rounded">5 окт</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-white text-sm">Круглый стол "Образование будущего"</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 