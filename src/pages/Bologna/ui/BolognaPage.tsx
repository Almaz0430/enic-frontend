import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';

const BolognaPage = () => {
  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-gradient-to-b from-primary/5 to-white">
        {/* Декоративные элементы */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-xl"></div>
        
        <div className="container-custom py-16 relative z-10">
          {/* Заголовок с декоративным элементом */}
          <div className="relative mb-12">
            <div className="bg-primary/10 inline-block rounded-lg px-4 py-2 mb-4 backdrop-blur-sm">
              <span className="text-primary/90 font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                Болонский процесс
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Болонский процесс и образовательные реформы</h1>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent"></div>
              <p className="text-lg text-gray-600 max-w-3xl pl-4">
                Инициатива создания европейского университетского сообщества и единого европейского пространства высшего образования.
              </p>
            </div>
          </div>

          {/* История создания */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 transform transition-all duration-300 hover:shadow-xl">
            <div className="max-w-3xl">
              <p className="text-gray-600 mb-4 leading-relaxed">
                Инициатива создания европейского университетского сообщества и единого европейского пространства высшего образования предложена одним из старейших Италии - Болонским университетом. В 1986 году, готовясь к своему 900-летнему юбилею, Университет обратился ко всем университетам Европы с предложением принять Великую Хартию Университетов – Magna Charta Universitarum.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Постепенно процесс европейской интеграции высшего образования перерос с университетского на государственный уровень. В 1998 г. в Париже в стенах знаменитого Сорбонского университета, в период празднования его юбилея, состоялось совещание министров образования четырех стран (Франция, Великобритания, Германия, Италия).
              </p>
            </div>
          </div>

          {/* Информационные карточки */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center bg-primary/10 w-16 h-16 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-primary mb-4">Казахстан в ЕПВО</h2>
              <p className="text-gray-600">
                В 2010 году Казахстан стал полноправным участником Европейского пространства высшего образования (ЕПВО). Казахстан – первое центрально-азиатское государство, признанное полноправным членом ЕПВО.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center bg-primary/10 w-16 h-16 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-primary mb-4">Конференция министров</h2>
              <p className="text-gray-600">
                Высшим органом, принимающим решения по всем вопросам структуры и развития Европейского пространства высшего образования (ЕПВО) является Конференция министров.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center bg-primary/10 w-16 h-16 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-primary mb-4">Наблюдательная группа</h2>
              <p className="text-gray-600">
                Исполнительной структурой Болонского процесса является Наблюдательная группа Болонского процесса (BFUG). С 2021 года Секретариат BFUG возглавляет Албания.
              </p>
            </div>
          </div>

          {/* Ключевые элементы */}
          <div className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-xl shadow-lg p-12 mb-12">
            <h2 className="text-3xl font-bold mb-8">Ключевые элементы Болонского процесса</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Бакалавриат</h3>
                <p className="text-white/90">Первый уровень высшего образования, 3-4 года обучения (180-240 ECTS кредитов)</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Магистратура</h3>
                <p className="text-white/90">Второй уровень высшего образования, 1-2 года обучения (60-120 ECTS кредитов)</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Докторантура (PhD)</h3>
                <p className="text-white/90">Третий уровень высшего образования, 3-4 года обучения</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="/contacts" className="bg-white text-primary px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-accent hover:text-white shadow-lg hover:shadow-xl flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Связаться с экспертами
              </a>
              <button className="border-2 border-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-white hover:text-primary flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Скачать информационные материалы
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BolognaPage;