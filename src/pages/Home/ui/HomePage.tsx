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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
        >
          <motion.div 
            className="bg-gradient-to-br from-primary/5 to-primary/20 rounded-xl shadow-md p-8 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden group"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12 transition-all duration-500 group-hover:bg-primary/10"></div>
            
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-md relative z-10 group-hover:shadow-lg transition-all duration-300 group-hover:bg-primary/5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary transition-all duration-300 group-hover:scale-110">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-semibold text-primary mb-4 relative z-10">{t('homePage.infoBlocks.recognition.title')}</h2>
            <p className="text-gray-600 mb-6 relative z-10">{t('homePage.infoBlocks.recognition.description')}</p>
            
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link to="/recognition" className="inline-flex items-center text-primary hover:text-primary-dark font-medium relative z-10 group">
                <span className="border-b border-transparent group-hover:border-primary transition-all duration-300">
                  {t('homePage.infoBlocks.recognition.link')}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-secondary/5 to-secondary/20 rounded-xl shadow-md p-8 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden group"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-secondary/10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full -ml-12 -mb-12 transition-all duration-500 group-hover:bg-secondary/10"></div>
            
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-md relative z-10 group-hover:shadow-lg transition-all duration-300 group-hover:bg-secondary/5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-secondary transition-all duration-300 group-hover:scale-110">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-semibold text-secondary mb-4 relative z-10">{t('homePage.infoBlocks.accreditation.title')}</h2>
            <p className="text-gray-600 mb-6 relative z-10">{t('homePage.infoBlocks.accreditation.description')}</p>
            
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link to="/accreditation" className="inline-flex items-center text-secondary hover:text-secondary-dark font-medium relative z-10 group">
                <span className="border-b border-transparent group-hover:border-secondary transition-all duration-300">
                  {t('homePage.infoBlocks.accreditation.link')}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-accent/5 to-accent/20 rounded-xl shadow-md p-8 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden group"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-accent/10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full -ml-12 -mb-12 transition-all duration-500 group-hover:bg-accent/10"></div>
            
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-md relative z-10 group-hover:shadow-lg transition-all duration-300 group-hover:bg-accent/5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent transition-all duration-300 group-hover:scale-110">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-semibold text-accent mb-4 relative z-10">{t('homePage.infoBlocks.bologna.title')}</h2>
            <p className="text-gray-600 mb-6 relative z-10">{t('homePage.infoBlocks.bologna.description')}</p>
            
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link to="/bologna" className="inline-flex items-center text-accent hover:text-accent-dark font-medium relative z-10 group">
                <span className="border-b border-transparent group-hover:border-accent transition-all duration-300">
                  {t('homePage.infoBlocks.bologna.link')}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
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