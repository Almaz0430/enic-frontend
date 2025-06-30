import React, { useEffect } from 'react';
import { Layout } from '@widgets/Layout';
import { HeroBanner } from '@widgets/HeroBanner';
import { NewsFeed } from '@widgets/NewsFeed';
import { FAQBlock } from '@widgets/FAQBlock';
import { MapEmbed } from '@widgets/MapEmbed';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
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

  // Анимация для стагированного появления блоков
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Плавный скролл к началу страницы при загрузке
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  
  // Получаем все ключи блоков из переводов
  const infoBlockKeys = [
    'recognition', 
    'accreditation', 
    'bologna', 
    'educationRegistry', 
    'bolognaMonitoring', 
    'academicRecognition', 
    'tokyoConvention', 
    'research', 
    'analytics', 
    'careerProgram', 
    'projects'
  ];
  
  // Цвета для блоков (повторяющиеся)
  const blockColors = [
    {
      bg: 'from-primary/5 to-primary/20',
      text: 'text-primary',
      hover: 'group-hover:bg-primary/10',
      border: 'group-hover:border-primary'
    },
    {
      bg: 'from-secondary/5 to-secondary/20',
      text: 'text-secondary',
      hover: 'group-hover:bg-secondary/10',
      border: 'group-hover:border-secondary'
    },
    {
      bg: 'from-accent/5 to-accent/20',
      text: 'text-accent',
      hover: 'group-hover:bg-accent/10',
      border: 'group-hover:border-accent'
    }
  ];
  
  return (
    <Layout>
      <HeroBanner />
      
      <motion.div 
        className="container-custom py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
        >
          {infoBlockKeys.map((key, index) => {
            const colorIndex = index % blockColors.length;
            const colors = blockColors[colorIndex];
            
            return (
              <motion.div 
                key={key}
                className={`bg-gradient-to-br ${colors.bg} rounded-xl shadow-md p-8 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden group`}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-white/10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12 transition-all duration-500 group-hover:bg-white/10"></div>
                
                <div className={`bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-md relative z-10 group-hover:shadow-lg transition-all duration-300 group-hover:bg-white/10`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-10 h-10 ${colors.text} transition-all duration-300 group-hover:scale-110`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                
                <h2 className={`text-2xl font-semibold ${colors.text} mb-4 relative z-10`}>
                  {t(`homePage.infoBlocks.${key}.title`)}
                </h2>
                <p className="text-gray-600 mb-6 relative z-10">
                  {t(`homePage.infoBlocks.${key}.description`)}
                </p>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link to={`/${key}`} className={`inline-flex items-center ${colors.text} hover:${colors.text}-dark font-medium relative z-10 group`}>
                    <span className={`border-b border-transparent ${colors.border} transition-all duration-300`}>
                      {t(`homePage.infoBlocks.${key}.link`)}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <NewsFeed />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <FAQBlock />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <MapEmbed />
      </motion.div>

      {/* Кнопка "Наверх" */}
      <motion.button
        className="fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-primary-dark transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </motion.button>
    </Layout>
  );
};

export default HomePage; 