import React from 'react';
import { Layout } from '@widgets/Layout';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  // Анимация для появления элементов при скролле
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Layout>
      {/* Верхний баннер */}
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
              {t('navigation.about')}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {t('aboutPage.title')}
          </h1>
          
          <div className="relative mb-6">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-blue-300"></div>
            <p className="text-lg mb-8 text-white/90 max-w-2xl pl-4">
              {t('aboutPage.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      <div className="container-custom py-12">
        {/* Основная информация */}
        <div className="mb-12 bg-white p-8 rounded-xl shadow-lg transform -mt-16 relative z-20">
          <div className="max-w-3xl">
            <p className="text-gray-700 text-lg leading-relaxed">
              РГП на ПХВ "Национальный Центр развития высшего образования" МНВО РК – подведомственная организация Министерства науки и высшего образования Республики Казахстан.
            </p>
          </div>
        </div>
        
        {/* История и миссия */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8"
            variants={fadeInUp}
          >
            {t('aboutPage.history.title')}
          </motion.h2>
          
          <div className="space-y-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary"
              variants={fadeInUp}
            >
              <p className="text-gray-700 mb-4">
                {t('aboutPage.history.text1')}
              </p>
              <p className="text-gray-700">
                {t('aboutPage.history.text2')}
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary"
              variants={fadeInUp}
            >
              <p className="text-gray-700 mb-4">
                {t('aboutPage.history.text3')}
              </p>
              <p className="text-gray-700">
                {t('aboutPage.history.text4')}
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Принципы деятельности */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8"
            variants={fadeInUp}
          >
            {t('aboutPage.principles.title')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              variants={fadeInUp}
            >
              <div className="bg-primary/10 rounded-lg p-3 inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('aboutPage.principles.principle1.title')}</h3>
              <p className="text-gray-700">
                {t('aboutPage.principles.principle1.description')}
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              variants={fadeInUp}
            >
              <div className="bg-primary/10 rounded-lg p-3 inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('aboutPage.principles.principle2.title')}</h3>
              <p className="text-gray-700">
                {t('aboutPage.principles.principle2.description')}
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              variants={fadeInUp}
            >
              <div className="bg-primary/10 rounded-lg p-3 inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('aboutPage.principles.principle3.title')}</h3>
              <p className="text-gray-700">
                {t('aboutPage.principles.principle3.description')}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default AboutPage; 