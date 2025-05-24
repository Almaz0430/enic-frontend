import { Link } from 'react-router-dom';

export const HeroBanner = () => {
  return (
    <section className="text-white py-16 mt-0 relative overflow-hidden h-[calc(100vh-6rem)] flex items-center">
      {/* Фоновое изображение */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop" 
          alt="Образовательный фон" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="transform transition-all duration-500">
            <div className="bg-white/10 inline-block rounded-lg px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="text-white/90 font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                Болонский процесс с 2010 года
              </span>
            </div>
            
                          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Национальный Центр <span className="text-accent">развития высшего образования</span>
              </h1>
              
                            <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent"></div>
                <p className="text-lg mb-8 text-white/90 max-w-xl pl-4">
                  Подведомственная организация Министерства науки и высшего образования Республики Казахстан
                </p>
              </div>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/about" 
                className="bg-white text-primary px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-accent hover:text-white shadow-lg hover:shadow-xl flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                О центре
              </Link>
              
              <Link 
                to="/bologna-process" 
                className="border-2 border-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-white hover:text-primary shadow-lg hover:shadow-xl flex items-center backdrop-blur-sm text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                Болонский процесс
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full relative">
              <div className="flex justify-end mb-2">
                <Link to="/leadership" className="inline-flex items-center text-white/80 hover:text-white text-sm">
                  Руководство центра
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
              
              {/* Вертикальный блок руководителя с автоматическим переключением */}
              <div className="relative h-[32rem] md:w-3/4 ml-auto overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 backdrop-blur-sm rounded-xl overflow-hidden z-10 transform transition-all duration-1000">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="w-full h-full relative">
                      {/* Изображения руководителей с анимацией */}
                      <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                        alt="Директор центра" 
                        className="w-full h-full object-cover object-center opacity-60 absolute inset-0 animate-fade-in-1"
                      />
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                        alt="Заместитель директора" 
                        className="w-full h-full object-cover object-center opacity-0 absolute inset-0 animate-fade-in-2"
                      />
                      <img 
                        src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=1000&auto=format&fit=crop" 
                        alt="Заместитель директора" 
                        className="w-full h-full object-cover object-center opacity-0 absolute inset-0 animate-fade-in-3"
                      />
                    </div>
                  </div>
                  
                  {/* Информация о руководителе */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary to-transparent">
                    <div className="space-y-6">
                      {/* Первый руководитель */}
                      <div className="animate-fade-in-1">
                        <div className="bg-accent/20 text-white text-sm font-medium px-3 py-1.5 rounded inline-block mb-3">Директор</div>
                        <h3 className="text-3xl font-bold text-white mb-2">Ахметов Асан Аманович</h3>
                        <p className="text-white/80 text-lg">Доктор педагогических наук, профессор</p>
                      </div>
                      
                      {/* Второй руководитель */}
                      <div className="opacity-0 animate-fade-in-2 absolute inset-x-6 bottom-6">
                        <div className="bg-accent/20 text-white text-sm font-medium px-3 py-1.5 rounded inline-block mb-3">Зам. директора</div>
                        <h3 className="text-3xl font-bold text-white mb-2">Сериков Болат Маратович</h3>
                        <p className="text-white/80 text-lg">Кандидат экономических наук</p>
                      </div>
                      
                      {/* Третий руководитель */}
                      <div className="opacity-0 animate-fade-in-3 absolute inset-x-6 bottom-6">
                        <div className="bg-accent/20 text-white text-sm font-medium px-3 py-1.5 rounded inline-block mb-3">Зам. директора</div>
                        <h3 className="text-3xl font-bold text-white mb-2">Алиева Динара Ержановна</h3>
                        <p className="text-white/80 text-lg">Кандидат педагогических наук</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Индикаторы переключения */}
                <div className="absolute bottom-6 right-6 flex space-x-3 z-20">
                  <div className="w-3 h-3 rounded-full bg-white animate-indicator-1"></div>
                  <div className="w-3 h-3 rounded-full bg-white/50 animate-indicator-2"></div>
                  <div className="w-3 h-3 rounded-full bg-white/50 animate-indicator-3"></div>
                </div>
              </div>
              
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes fadeIn1 {
                  0%, 5% { opacity: 0.7; }
                  25%, 30% { opacity: 0; }
                  65%, 70% { opacity: 0; }
                  95%, 100% { opacity: 0.7; }
                }
                
                @keyframes fadeIn2 {
                  0%, 5% { opacity: 0; }
                  25%, 30% { opacity: 0.7; }
                  65%, 70% { opacity: 0; }
                  95%, 100% { opacity: 0; }
                }
                
                @keyframes fadeIn3 {
                  0%, 5% { opacity: 0; }
                  25%, 30% { opacity: 0; }
                  65%, 70% { opacity: 0.7; }
                  95%, 100% { opacity: 0; }
                }
                
                @keyframes indicator1 {
                  0%, 30% { background-color: rgba(255,255,255,1); }
                  33%, 100% { background-color: rgba(255,255,255,0.5); }
                }
                
                @keyframes indicator2 {
                  0%, 30% { background-color: rgba(255,255,255,0.5); }
                  33%, 63% { background-color: rgba(255,255,255,1); }
                  66%, 100% { background-color: rgba(255,255,255,0.5); }
                }
                
                @keyframes indicator3 {
                  0%, 63% { background-color: rgba(255,255,255,0.5); }
                  66%, 100% { background-color: rgba(255,255,255,1); }
                }
                
                .animate-fade-in-1 {
                  animation: fadeIn1 30s infinite ease-in-out;
                }
                
                .animate-fade-in-2 {
                  animation: fadeIn2 30s infinite ease-in-out;
                }
                
                .animate-fade-in-3 {
                  animation: fadeIn3 30s infinite ease-in-out;
                }
                
                .animate-indicator-1 {
                  animation: indicator1 30s infinite;
                }
                
                .animate-indicator-2 {
                  animation: indicator2 30s infinite;
                }
                
                .animate-indicator-3 {
                  animation: indicator3 30s infinite;
                }
              `}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 