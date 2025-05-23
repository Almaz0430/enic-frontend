import { Link } from 'react-router-dom';

export const Footer = () => {
  const links = [
    { title: "30 ОП ПО", path: "/op-po" },
    { title: "Часто задаваемые вопросы", path: "/faq" },
    { title: "Система внутреннего обеспечения качества высшего образования: взгляд со всех сторон", path: "/quality-system" },
    { title: "Академическая честность как фактор обеспечения качества высшего образования", path: "/academic-integrity" },
    { title: "Сопредседательство Казахстана в Болонском процессе", path: "/bologna-process" },
    { title: "Научные исследования", path: "/research" },
    { title: "Отзывы", path: "/reviews" },
    { title: "Аккредитация", path: "/accreditation" },
    { title: "Корпоративная этика и противодействие коррупционным рискам", path: "/ethics" },
    { title: "Лучшая практика дистанционного обучения в вузах РК", path: "/distance-learning" },
    { title: "Международные проекты", path: "/international-projects" },
    { title: "Национальная система квалификаций", path: "/qualification-system" },
    { title: "Открытый доступ к высшему образованию", path: "/open-access" },
    { title: "Привлечение зарубежных специалистов", path: "/foreign-specialists" },
    { title: "Расширение автономии вузов", path: "/university-autonomy" },
    { title: "Реестр образовательных программ высшего и послевузовского образования", path: "/education-registry" },
    { title: "УЧЕБНО-МЕТОДИЧЕСКИЕ ОБЪЕДИНЕНИЯ РЕСПУБЛИКАНСКОГО УЧЕБНО-МЕТОДИЧЕСКОГО СОВЕТА ВЫСШЕГО И ПОСЛЕВУЗОВСКОГО ОБРАЗОВАНИЯ ПРИ ОВПО", path: "/educational-associations" }
  ];

  // Разделяем ссылки на две колонки
  const halfLength = Math.ceil(links.length / 2);
  const firstColumnLinks = links.slice(0, halfLength);
  const secondColumnLinks = links.slice(halfLength);

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Основной контент футера */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Контактная информация */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">Контактная информация</h4>
            <div className="space-y-4">
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3 mt-0.5 text-secondary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>
                  Республика Казахстан, г. Астана,<br />
                  ул. Сыганак, 70, офис № 202,<br />
                  почтовый индекс: Z05K7B0
                </span>
              </p>
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3 mt-0.5 text-secondary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>+7 (7172) 57-20-75</span>
              </p>
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3 mt-0.5 text-secondary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>cbpiam@n-k.kz</span>
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Первая колонка ссылок */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">Информация</h4>
            <div className="space-y-2">
              {firstColumnLinks.map((link, index) => (
                <Link 
                  key={index} 
                  to={link.path} 
                  className="block text-white/70 hover:text-white transition-colors py-1"
                >
                  • {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Вторая колонка ссылок */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">Дополнительно</h4>
            <div className="space-y-2">
              {secondColumnLinks.map((link, index) => (
                <Link 
                  key={index} 
                  to={link.path} 
                  className="block text-white/70 hover:text-white transition-colors py-1"
                >
                  • {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Все права защищены.РГП на ПХВ "Национальный Центр развития высшего образования" МНВО РК</p>
        </div>
      </div>
    </footer>
  );
}; 