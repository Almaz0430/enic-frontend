import { useState } from 'react';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';

const RecognitionPage = () => {
  const [formData, setFormData] = useState({
    documentType: '',
    country: '',
    educationLevel: '',
    specialization: '',
    issueYear: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки данных на сервер
    console.log('Форма отправлена', formData);
    alert('Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
  };

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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                Международное сотрудничество
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Признание <span className="text-blue-500">иностранных документов</span> об образовании
            </h1>
            
            <div className="relative mb-6">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-blue-500"></div>
              <p className="text-lg mb-8 text-white/90 max-w-2xl pl-4">
                Официальное подтверждение значимости (уровня) полученных в иностранном государстве образования и квалификации 
                для обеспечения доступа их обладателя к образованию и профессиональной деятельности в Республике Казахстан.
              </p>
            </div>
          </div>
        </section>
        
        <div className="container-custom py-12 relative">
          {/* Информационный блок */}
          <div className="mb-12 bg-white p-8 rounded-xl shadow-lg transform -mt-16 relative z-20 transition-all duration-300 hover:shadow-xl">
            <div className="max-w-3xl">
              <p className="text-gray-700 text-lg leading-relaxed">
                Признание иностранного образования и (или) иностранной квалификации – это официальное подтверждение 
                значимости (уровня) полученных в иностранном государстве образования и (или) квалификации в целях 
                обеспечения доступа их обладателя к образованию и (или) профессиональной деятельности 
                в Республике Казахстан.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center bg-primary/10 w-16 h-16 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-primary">Калькулятор стоимости услуги</h2>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Тип документа</label>
                  <select 
                    name="documentType" 
                    value={formData.documentType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    required
                  >
                    <option value="">Выберите тип документа</option>
                    <option value="diploma">Диплом о высшем образовании</option>
                    <option value="certificate">Аттестат о среднем образовании</option>
                    <option value="phd">Документ о научной степени</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Страна выдачи</label>
                  <select 
                    name="country" 
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    required
                  >
                    <option value="">Выберите страну</option>
                    <option value="usa">США</option>
                    <option value="uk">Великобритания</option>
                    <option value="germany">Германия</option>
                    <option value="france">Франция</option>
                    <option value="china">Китай</option>
                    <option value="other">Другая</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Уровень образования</label>
                  <select 
                    name="educationLevel" 
                    value={formData.educationLevel}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    required
                  >
                    <option value="">Выберите уровень</option>
                    <option value="bachelor">Бакалавр</option>
                    <option value="master">Магистр</option>
                    <option value="phd">Доктор/Кандидат наук</option>
                    <option value="secondary">Среднее образование</option>
                  </select>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-semibold text-xl mb-2 text-primary">Предварительная стоимость: <span className="text-secondary">15000 ₸</span></h3>
                    <p className="text-sm text-gray-600">Точная стоимость будет рассчитана после рассмотрения документов</p>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-secondary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center bg-secondary/10 w-16 h-16 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-secondary">Заполните заявку</h2>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Специализация</label>
                  <input 
                    type="text" 
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                    placeholder="Например: Информационные технологии"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Год выдачи документа</label>
                  <input 
                    type="text" 
                    name="issueYear"
                    value={formData.issueYear}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                    placeholder="Например: 2018"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">ФИО</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                    placeholder="Введите ваше полное имя"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Телефон</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-secondary text-white py-3 px-4 rounded-md hover:bg-blue-500 transition-colors duration-300 font-semibold shadow-md hover:shadow-lg"
                >
                  Отправить заявку
                </button>
                
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Нажимая кнопку, вы соглашаетесь с нашей политикой обработки персональных данных
                </p>
              </form>
            </div>
          </div>
          
          {/* Блок с информацией о процессе */}
          <div className="bg-gradient-to-br from-primary to-primary/90 text-white p-12 rounded-xl shadow-lg relative overflow-hidden mb-16">
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
              <h2 className="text-3xl font-bold mb-8">Процесс признания документов</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Подача заявления</h3>
                  <p className="text-white/90">Заполните онлайн-заявку и загрузите сканы необходимых документов</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Экспертиза</h3>
                  <p className="text-white/90">Проверка подлинности документов и соответствия образовательным стандартам</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Получение свидетельства</h3>
                  <p className="text-white/90">Выдача свидетельства о признании иностранного образования</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="/contacts" className="bg-white text-primary px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white shadow-lg hover:shadow-xl flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Связаться с экспертами
                </a>
                <button className="border-2 border-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-white hover:text-primary flex items-center shadow-lg hover:shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Скачать список документов
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

export default RecognitionPage; 