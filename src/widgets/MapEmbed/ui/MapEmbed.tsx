export const MapEmbed = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Как нас найти</h2>
          <p className="text-gray-600">Мы расположены в центре города, в шаговой доступности от метро</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.0748224044!2d37.61855001606132!3d55.75615298055642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sKremlin!5e0!3m2!1sen!2sru!4v1616214696228!5m2!1sen!2sru" 
              className="w-full h-[500px] border-0 rounded-lg"
              allowFullScreen 
              loading="lazy" 
              title="Карта расположения центра"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="font-semibold text-lg mb-2">Адрес</h3>
            <p className="text-center text-gray-600">
              г. Москва, ул. Примерная, д. 123<br />
              Индекс: 123456
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-semibold text-lg mb-2">Часы работы</h3>
            <p className="text-center text-gray-600">
              Пн-Пт: 9:00 - 18:00<br />
              Сб: 10:00 - 15:00<br />
              Вс: Выходной
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <h3 className="font-semibold text-lg mb-2">Контакты</h3>
            <p className="text-center text-gray-600">
              Телефон: +7 (123) 456-78-90<br />
              Email: info@центр-пример.рф
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 