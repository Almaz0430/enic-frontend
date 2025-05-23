import { useState } from 'react';
import { Layout } from '../../../widgets/Layout/ui/Layout';

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
    <Layout>
      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Признание иностранных документов об образовании</h1>
        
        <div className="mb-8">
          <p className="mb-4">
            Признание иностранного образования и (или) иностранной квалификации – это официальное подтверждение 
            значимости (уровня) полученных в иностранном государстве образования и (или) квалификации в целях 
            обеспечения доступа их обладателя к образованию и (или) профессиональной деятельности 
            в Российской Федерации.
          </p>
          <p>
            Заполните форму ниже для подачи заявки на признание вашего документа об образовании.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-primary mb-6">Калькулятор стоимости услуги</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-2">Тип документа</label>
                <select 
                  name="documentType" 
                  value={formData.documentType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Выберите тип документа</option>
                  <option value="diploma">Диплом о высшем образовании</option>
                  <option value="certificate">Аттестат о среднем образовании</option>
                  <option value="phd">Документ о научной степени</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Страна выдачи</label>
                <select 
                  name="country" 
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
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
                <label className="block text-gray-700 mb-2">Уровень образования</label>
                <select 
                  name="educationLevel" 
                  value={formData.educationLevel}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Выберите уровень</option>
                  <option value="bachelor">Бакалавр</option>
                  <option value="master">Магистр</option>
                  <option value="phd">Доктор/Кандидат наук</option>
                  <option value="secondary">Среднее образование</option>
                </select>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h3 className="font-medium text-lg mb-3">Предварительная стоимость: 15000 ₽</h3>
                <p className="text-sm text-gray-600">Точная стоимость будет рассчитана после рассмотрения документов</p>
              </div>
            </form>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-primary mb-6">Заполните заявку</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-2">Специализация</label>
                <input 
                  type="text" 
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Например: Информационные технологии"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Год выдачи документа</label>
                <input 
                  type="text" 
                  name="issueYear"
                  value={formData.issueYear}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Например: 2018"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">ФИО</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Введите ваше полное имя"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Телефон</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors"
              >
                Отправить заявку
              </button>
              
              <p className="text-sm text-gray-500 mt-2">
                Нажимая кнопку, вы соглашаетесь с нашей политикой обработки персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecognitionPage; 