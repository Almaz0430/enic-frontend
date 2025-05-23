export const MapEmbed = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Как нас найти</h2>
          <p className="text-gray-600">Мы расположены в шаговой доступности от центра города</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.9641889819037!2d71.41709837679355!3d51.09047297172499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585a605525605%3A0x4dff4a6e2202cc36!2z0YPQuy4g0KHRi9Cz0LDQvdCw0LosIDcwLCDQkNGB0YLQsNC90LAsIDAyMDAwMA!5e0!3m2!1sru!2skz!4v1715450984196!5m2!1sru!2skz" 
              className="w-full h-[500px] border-0 rounded-lg"
              allowFullScreen 
              loading="lazy" 
              title="Карта расположения центра"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-primary">
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-primary">Адрес</h3>
            </div>
            <div className="text-gray-600 ml-16">
              <p className="mb-1">Республика Казахстан, г. Астана,</p>
              <p className="mb-1">ул. Сыганак, 70, офис № 202,</p>
              <p>почтовый индекс: Z05K7B0</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-secondary">
            <div className="flex items-center mb-6">
              <div className="bg-secondary/10 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-secondary">Часы работы</h3>
            </div>
            <div className="text-gray-600 ml-16">
              <p className="mb-1">Пн-Пт: 9:00 - 18:00</p>
              <p className="mb-1">Сб: 10:00 - 15:00</p>
              <p>Вс: Выходной</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-accent">
            <div className="flex items-center mb-6">
              <div className="bg-accent/10 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-accent">Контакты</h3>
            </div>
            <div className="text-gray-600 ml-16">
              <p className="mb-1">Телефон: +7 (7172) 57-20-75</p>
              <p>E-mail: cbpiam@n-k.kz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 