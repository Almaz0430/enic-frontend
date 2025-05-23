import { Layout } from '../../../widgets/Layout/ui/Layout';

const BolognaPage = () => {
  return (
    <Layout>
      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Болонский процесс и образовательные реформы</h1>
        
        <div className="mb-8">
          <p className="mb-4">
            Болонский процесс — это процесс сближения и гармонизации систем высшего образования стран Европы 
            с целью создания единого европейского пространства высшего образования. 
            Национальный центр активно участвует в реализации принципов Болонского процесса в России.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center bg-primary bg-opacity-10 w-16 h-16 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-primary mb-4">История процесса</h2>
            <p className="text-gray-600">
              Болонский процесс начался в 1999 году с подписания Болонской декларации. 
              Россия присоединилась к Болонскому процессу в сентябре 2003 года на берлинской встрече министров образования европейских стран.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center bg-primary bg-opacity-10 w-16 h-16 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-primary mb-4">Цели процесса</h2>
            <p className="text-gray-600">
              Основные цели: повышение конкурентоспособности европейского высшего образования, 
              расширение мобильности студентов и преподавателей, содействие трудоустройству выпускников, 
              повышение качества образования.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center bg-primary bg-opacity-10 w-16 h-16 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-primary mb-4">Основные принципы</h2>
            <p className="text-gray-600">
              Внедрение многоуровневой системы образования, использование системы кредитов (ECTS), 
              контроль качества образования, расширение мобильности студентов и преподавателей, 
              развитие непрерывного образования.
            </p>
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-6">Ключевые элементы Болонского процесса</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-lg font-semibold text-primary mb-4">Трехуровневая система высшего образования</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-primary mb-2">Бакалавриат</h4>
                <p className="text-gray-600 text-sm">Первый уровень высшего образования, 3-4 года обучения (180-240 ECTS кредитов)</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-primary mb-2">Магистратура</h4>
                <p className="text-gray-600 text-sm">Второй уровень высшего образования, 1-2 года обучения (60-120 ECTS кредитов)</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-primary mb-2">Докторантура (PhD)</h4>
                <p className="text-gray-600 text-sm">Третий уровень высшего образования, 3-4 года обучения</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-lg font-semibold text-primary mb-4">Европейская система перевода и накопления кредитов (ECTS)</h3>
            <p className="text-gray-600 mb-4">
              ECTS — это система перевода и накопления кредитов, принятая в Европейском пространстве высшего образования. 
              Она помогает делать системы обучения более прозрачными и облегчает признание образования, 
              полученного в разных учебных заведениях.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-primary mb-2">Особенности ECTS:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>60 кредитов соответствуют учебной нагрузке одного учебного года</li>
                <li>1 кредит = 25-30 часов работы студента</li>
                <li>Кредиты включают аудиторную и самостоятельную работу</li>
                <li>Кредиты присваиваются только после успешного выполнения всех требований</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-4">Обеспечение качества образования</h3>
            <p className="text-gray-600 mb-4">
              Одним из ключевых аспектов Болонского процесса является обеспечение и повышение качества высшего образования. 
              Для этого создаются национальные системы контроля качества, которые взаимодействуют на европейском уровне.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-primary mb-2">Внутренняя оценка качества:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                  <li>Самообследование вузов</li>
                  <li>Оценка студентами качества преподавания</li>
                  <li>Внутренний аудит образовательных программ</li>
                  <li>Мониторинг успеваемости студентов</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-2">Внешняя оценка качества:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                  <li>Аккредитация образовательных программ</li>
                  <li>Международные рейтинги университетов</li>
                  <li>Сертификация систем менеджмента качества</li>
                  <li>Независимая оценка результатов обучения</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-primary text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Участие России в Болонском процессе</h2>
          <p className="mb-6">
            Наш центр активно участвует в реализации принципов Болонского процесса в России, содействуя интеграции 
            российского высшего образования в европейское образовательное пространство.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contacts" className="bg-white text-primary px-6 py-3 rounded-md font-semibold transition-colors hover:bg-secondary hover:text-white">
              Связаться с экспертами
            </a>
            <button className="border-2 border-white px-6 py-3 rounded-md font-semibold transition-colors hover:bg-white hover:text-primary">
              Скачать информационные материалы
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BolognaPage; 