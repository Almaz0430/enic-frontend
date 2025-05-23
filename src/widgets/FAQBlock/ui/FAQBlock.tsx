import { useState } from 'react';

export const FAQBlock = () => {
  const faqItems = [
    {
      id: 1,
      question: 'Как записаться на консультацию?',
      answer: 'Вы можете записаться на консультацию через форму на нашем сайте, по телефону или отправив запрос на электронную почту. Наши специалисты свяжутся с вами в течение 24 часов для подтверждения записи.'
    },
    {
      id: 2,
      question: 'Какие документы необходимы для участия в программах?',
      answer: 'Для участия в программах требуется паспорт, заявление по форме и, в зависимости от программы, дополнительные документы, подтверждающие ваше право на участие. Полный список документов для конкретной программы можно получить у наших консультантов.'
    },
    {
      id: 3,
      question: 'Можно ли получить поддержку удаленно?',
      answer: 'Да, большинство наших консультаций и программ доступны в онлайн формате. Мы используем современные средства видеосвязи для обеспечения качественного удаленного взаимодействия с нашими клиентами.'
    },
    {
      id: 4,
      question: 'Какие преимущества дает членство в сообществе центра?',
      answer: 'Членство в сообществе нашего центра дает доступ к эксклюзивным мероприятиям, скидки на платные услуги, возможность участия в закрытых программах, а также регулярные информационные рассылки и приоритетную запись на популярные мероприятия.'
    },
    {
      id: 5,
      question: 'Как стать волонтером центра?',
      answer: 'Чтобы стать волонтером, заполните форму заявки на нашем сайте в разделе "Волонтерство". После рассмотрения заявки мы пригласим вас на собеседование, где обсудим возможные направления сотрудничества и график работы.'
    }
  ];

  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Часто задаваемые вопросы</h2>
          <p className="text-gray-600">Ответы на наиболее распространенные вопросы о нашем центре</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div key={item.id} className="mb-4 border border-gray-200 rounded-lg">
              <button
                className="flex justify-between items-center w-full p-5 text-left font-medium"
                onClick={() => toggleAccordion(item.id)}
              >
                <span className="text-lg text-primary">{item.question}</span>
                <svg 
                  className={`w-6 h-6 transition-transform ${openId === item.id ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`px-5 overflow-hidden transition-all duration-300 ${
                  openId === item.id ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 