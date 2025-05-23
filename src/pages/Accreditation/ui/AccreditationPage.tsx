import { Header } from '../../../widgets/Header/ui/Header';
import { Footer } from '../../../widgets/Footer/ui/Footer';

const AccreditationPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Верхний баннер с заголовком */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 relative overflow-hidden">
          {/* Декоративные элементы */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="bg-white/10 inline-block rounded-lg px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="text-white/90 font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                Профессиональное признание
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Аккредитация <span className="text-secondary">образовательных программ</span>
            </h1>
            
            <p className="text-lg mb-8 text-white/80 max-w-2xl">
              Профессионально-общественная аккредитация образовательных программ – это процедура признания качества 
              и уровня подготовки выпускников, отвечающих требованиям профессиональных стандартов, 
              требованиям рынка труда к специалистам соответствующего профиля.
            </p>
          </div>
        </section>

        <div className="container-custom py-12 relative">
          {/* Информационный блок */}
          <div className="mb-12 bg-white p-8 rounded-lg shadow-lg transform -mt-16 relative z-20">
            <p className="text-gray-700 text-lg">
              Наш центр предоставляет услуги по проведению профессионально-общественной аккредитации 
              образовательных программ различного уровня, обеспечивая высокое качество и признание на рынке труда.
            </p>
          </div>
          
          {/* Блоки с преимуществами и видами программ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary transition-transform hover:translate-y-[-5px]">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-primary">Преимущества аккредитации</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Подтверждение соответствия образовательной программы высоким стандартам качества",
                  "Повышение конкурентоспособности образовательной организации на рынке образовательных услуг",
                  "Привлечение дополнительных абитуриентов и слушателей",
                  "Укрепление связей с работодателями и профессиональным сообществом",
                  "Возможность учета результатов аккредитации при государственной аккредитации"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-secondary transition-transform hover:translate-y-[-5px]">
              <div className="flex items-center mb-6">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-secondary">Виды аккредитуемых программ</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Программы высшего образования (бакалавриат, специалитет, магистратура)",
                  "Программы среднего профессионального образования",
                  "Программы дополнительного профессионального образования",
                  "Программы профессионального обучения",
                  "Инновационные образовательные программы"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Этапы аккредитации */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Этапы проведения аккредитации</h2>
              <div className="w-24 h-1 bg-secondary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: 1,
                  title: "Подача заявки",
                  description: "Образовательная организация подает заявку и комплект документов на проведение аккредитации",
                  color: "primary"
                },
                {
                  step: 2,
                  title: "Самообследование",
                  description: "Организация проводит самообследование образовательной программы и предоставляет отчет",
                  color: "secondary"
                },
                {
                  step: 3,
                  title: "Экспертиза",
                  description: "Формирование экспертной комиссии и проведение камеральной и выездной экспертизы",
                  color: "accent"
                },
                {
                  step: 4,
                  title: "Оценка соответствия",
                  description: "Оценка соответствия образовательной программы установленным критериям",
                  color: "primary"
                },
                {
                  step: 5,
                  title: "Решение",
                  description: "Принятие решения о профессионально-общественной аккредитации или об отказе в ее проведении",
                  color: "secondary"
                },
                {
                  step: 6,
                  title: "Выдача свидетельства",
                  description: "Выдача свидетельства о профессионально-общественной аккредитации сроком до 5 лет",
                  color: "accent"
                }
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
                  <div className={`bg-${item.color} h-2`}></div>
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-full bg-${item.color}/10 flex items-center justify-center mb-4`}>
                      <span className={`text-${item.color} font-bold text-xl`}>{item.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Блок с призывом к действию */}
          <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-10 rounded-xl shadow-lg relative overflow-hidden">
            {/* Декоративные элементы */}
            <div className="absolute top-0 right-0">
              <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
                <circle cx="156" cy="-47" r="156" fill="white" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
                <circle cx="40" cy="40" r="40" fill="white" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Подать заявку на аккредитацию</h2>
              <p className="mb-8 text-white/80 max-w-2xl">
                Для подачи заявки на проведение профессионально-общественной аккредитации образовательной программы 
                заполните форму или свяжитесь с нами по указанным контактам.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contacts" className="bg-white text-primary px-6 py-3 rounded-md font-semibold transition-all hover:bg-secondary hover:text-white shadow-lg hover:shadow-xl flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Связаться с нами
                </a>
                <button className="border-2 border-white px-6 py-3 rounded-md font-semibold transition-all hover:bg-white hover:text-primary shadow-lg hover:shadow-xl flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  Скачать форму заявки
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccreditationPage; 