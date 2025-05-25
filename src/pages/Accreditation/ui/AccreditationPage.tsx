import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';

const AccreditationPage = () => {
  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-gradient-to-b from-primary/5 to-white">
        {/* Декоративные элементы */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-xl"></div>
        
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
              Аккредитация <span className="text-accent">образовательных программ</span>
            </h1>
            
            <div className="relative mb-6">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent"></div>
              <p className="text-lg mb-8 text-white/90 max-w-2xl pl-4">
                Профессионально-общественная аккредитация образовательных программ – это процедура признания качества 
                и уровня подготовки выпускников, отвечающих требованиям профессиональных стандартов, 
                требованиям рынка труда к специалистам соответствующего профиля.
              </p>
            </div>
          </div>
        </section>

        <div className="container-custom py-12 relative">
          {/* Информационный блок */}
          <div className="mb-12 bg-white p-8 rounded-xl shadow-lg transform -mt-16 relative z-20 transition-all duration-300 hover:shadow-xl">
            <div className="max-w-3xl">
              <p className="text-gray-700 text-lg leading-relaxed">
                Наш центр предоставляет услуги по проведению профессионально-общественной аккредитации 
                образовательных программ различного уровня, обеспечивая высокое качество и признание на рынке труда.
              </p>
            </div>
          </div>
          
          {/* Блоки с преимуществами и видами программ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center bg-primary/10 w-16 h-16 rounded-full mr-4">
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
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-secondary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center bg-secondary/10 w-16 h-16 rounded-full mr-4">
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
                <div key={item.step} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
          <div className="bg-gradient-to-br from-primary to-primary/90 text-white p-12 rounded-xl shadow-lg relative overflow-hidden">
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
              <h2 className="text-3xl font-bold mb-8">Подать заявку на аккредитацию</h2>
              <p className="mb-8 text-white/90 max-w-2xl">
                Для подачи заявки на проведение профессионально-общественной аккредитации образовательной программы 
                заполните форму или свяжитесь с нами по указанным контактам.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contacts" className="bg-white text-primary px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-accent hover:text-white shadow-lg hover:shadow-xl flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Связаться с нами
                </a>
                <button className="border-2 border-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-white hover:text-primary shadow-lg hover:shadow-xl flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Скачать форму заявки
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccreditationPage; 