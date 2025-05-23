import { Layout } from '../../../widgets/Layout/ui/Layout';

const AccreditationPage = () => {
  return (
    <Layout>
      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Аккредитация образовательных программ</h1>
        
        <div className="mb-8">
          <p className="mb-4">
            Профессионально-общественная аккредитация образовательных программ – это процедура признания качества 
            и уровня подготовки выпускников, отвечающих требованиям профессиональных стандартов, 
            требованиям рынка труда к специалистам соответствующего профиля.
          </p>
          <p>
            Наш центр предоставляет услуги по проведению профессионально-общественной аккредитации 
            образовательных программ различного уровня.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-primary mb-4">Преимущества аккредитации</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Подтверждение соответствия образовательной программы высоким стандартам качества</li>
              <li>Повышение конкурентоспособности образовательной организации на рынке образовательных услуг</li>
              <li>Привлечение дополнительных абитуриентов и слушателей</li>
              <li>Укрепление связей с работодателями и профессиональным сообществом</li>
              <li>Возможность учета результатов аккредитации при государственной аккредитации</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-primary mb-4">Виды аккредитуемых программ</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Программы высшего образования (бакалавриат, специалитет, магистратура)</li>
              <li>Программы среднего профессионального образования</li>
              <li>Программы дополнительного профессионального образования</li>
              <li>Программы профессионального обучения</li>
              <li>Инновационные образовательные программы</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-6">Этапы проведения аккредитации</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <h3 className="text-lg font-semibold text-primary mb-3 mt-2">Подача заявки</h3>
              <p className="text-gray-600">Образовательная организация подает заявку и комплект документов на проведение аккредитации</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <h3 className="text-lg font-semibold text-primary mb-3 mt-2">Самообследование</h3>
              <p className="text-gray-600">Организация проводит самообследование образовательной программы и предоставляет отчет</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <h3 className="text-lg font-semibold text-primary mb-3 mt-2">Экспертиза</h3>
              <p className="text-gray-600">Формирование экспертной комиссии и проведение камеральной и выездной экспертизы</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">4</div>
              <h3 className="text-lg font-semibold text-primary mb-3 mt-2">Оценка соответствия</h3>
              <p className="text-gray-600">Оценка соответствия образовательной программы установленным критериям</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">5</div>
              <h3 className="text-lg font-semibold text-primary mb-3 mt-2">Решение</h3>
              <p className="text-gray-600">Принятие решения о профессионально-общественной аккредитации или об отказе в ее проведении</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">6</div>
              <h3 className="text-lg font-semibold text-primary mb-3 mt-2">Выдача свидетельства</h3>
              <p className="text-gray-600">Выдача свидетельства о профессионально-общественной аккредитации сроком до 5 лет</p>
            </div>
          </div>
        </div>
        
        <div className="bg-primary text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Подать заявку на аккредитацию</h2>
          <p className="mb-6">
            Для подачи заявки на проведение профессионально-общественной аккредитации образовательной программы 
            заполните форму или свяжитесь с нами по указанным контактам.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contacts" className="bg-white text-primary px-6 py-3 rounded-md font-semibold transition-colors hover:bg-secondary hover:text-white">
              Связаться с нами
            </a>
            <button className="border-2 border-white px-6 py-3 rounded-md font-semibold transition-colors hover:bg-white hover:text-primary">
              Скачать форму заявки
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccreditationPage; 