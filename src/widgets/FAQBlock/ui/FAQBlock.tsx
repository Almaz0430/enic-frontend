import { useState } from 'react';
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
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">{t('faqBlock.title')}</h2>
          <p className="text-gray-600">{t('faqBlock.subtitle')}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {Array.isArray(faqItems) && faqItems.map((item, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg">
              <button
                className="flex justify-between items-center w-full p-5 text-left font-medium"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg text-primary">{item.question}</span>
                <svg 
                  className={`w-6 h-6 transition-transform ${openId === index ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`px-5 overflow-hidden transition-all duration-300 ${
                  openId === index ? 'max-h-96 pb-5' : 'max-h-0'
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