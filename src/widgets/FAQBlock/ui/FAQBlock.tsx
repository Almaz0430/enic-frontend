import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQBlock = () => {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<number>(0);

  // Получаем FAQ из переводов
  const faqItems = t('faqBlock.items', { returnObjects: true }) as FAQItem[];

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? -1 : id);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1.5 mb-4">
            {t('faqBlock.topLabel') || 'FAQ'}
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('faqBlock.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('faqBlock.subtitle')}</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Декоративные элементы */}
          <div className="absolute -right-20 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          
          {Array.isArray(faqItems) && faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`mb-6 bg-white border-l-4 ${
                openId === index ? 'border-primary shadow-lg' : 'border-transparent shadow'
              } rounded-lg overflow-hidden transition-all duration-300`}
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left font-medium group"
                onClick={() => toggleAccordion(index)}
              >
                <span className={`text-lg ${openId === index ? 'text-primary font-semibold' : 'text-gray-700 group-hover:text-primary'} transition-colors duration-200`}>
                  {item.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  openId === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                }`}>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${openId === index ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Дополнительная кнопка */}
          <div className="text-center mt-10">
            <a 
              href="#" 
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
            >
              {t('faqBlock.moreQuestions') || 'Остались вопросы?'}
              <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}; 