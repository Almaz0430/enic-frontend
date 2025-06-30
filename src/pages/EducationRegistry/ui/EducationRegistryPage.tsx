import React, { useState, useEffect } from 'react';
import { Layout } from '@widgets/Layout';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

interface Program {
  id: number;
  name: string;
  code: string;
  university: string;
  level: string;
  duration: string;
  description: string;
  accredited: boolean;
}

const EducationRegistryPage: React.FC = () => {
  const { t } = useTranslation();
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterLevel, setFilterLevel] = useState<string>('');
  const [filterAccredited, setFilterAccredited] = useState<string>('');

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://127.0.0.1:8000/api/programs/');
        setPrograms(response.data);
        setError(null);
      } catch (err) {
        console.error('Ошибка при загрузке данных:', err);
        setError(t('educationRegistry.results.error'));
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, [t]);

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = searchTerm === '' || 
      program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.university.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLevel = filterLevel === '' || program.level === filterLevel;
    
    const matchesAccredited = filterAccredited === '' || 
      (filterAccredited === 'true' && program.accredited) ||
      (filterAccredited === 'false' && !program.accredited);
    
    return matchesSearch && matchesLevel && matchesAccredited;
  });

  // Примерные данные для демонстрации, если API вернет пустой массив
  const demoPrograms: Program[] = [
    {
      id: 1,
      name: 'Информационные системы',
      code: '6B06102',
      university: 'Казахский национальный университет имени аль-Фараби',
      level: 'Бакалавриат',
      duration: '4 года',
      description: 'Программа направлена на подготовку специалистов в области разработки и внедрения информационных систем',
      accredited: true
    },
    {
      id: 2,
      name: 'Компьютерная инженерия',
      code: '6B06103',
      university: 'Евразийский национальный университет им. Л.Н. Гумилева',
      level: 'Бакалавриат',
      duration: '4 года',
      description: 'Программа по проектированию и разработке компьютерных систем и сетей',
      accredited: true
    },
    {
      id: 3,
      name: 'Финансы',
      code: '7M04106',
      university: 'Университет КИМЭП',
      level: 'Магистратура',
      duration: '2 года',
      description: 'Программа для подготовки специалистов в области финансового анализа и управления',
      accredited: false
    },
    {
      id: 4,
      name: 'Юриспруденция',
      code: '6B04201',
      university: 'Казахский гуманитарно-юридический университет',
      level: 'Бакалавриат',
      duration: '4 года',
      description: 'Программа подготовки специалистов в области права и юридических услуг',
      accredited: true
    },
    {
      id: 5,
      name: 'Педагогика и психология',
      code: '8D01101',
      university: 'Казахский национальный педагогический университет имени Абая',
      level: 'Докторантура',
      duration: '3 года',
      description: 'Программа для подготовки научно-педагогических кадров высшей квалификации',
      accredited: true
    }
  ];

  const displayPrograms = programs.length > 0 ? filteredPrograms : demoPrograms;

  return (
    <Layout>
      {/* Верхний баннер с заголовком */}
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              {t('navigation.services')}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {t('educationRegistry.pageTitle')}
          </h1>
          
          <div className="relative mb-6">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-blue-300"></div>
            <p className="text-lg mb-8 text-white/90 max-w-2xl pl-4">
              {t('educationRegistry.pageSubtitle')}
            </p>
          </div>
        </div>
      </section>
      
      <div className="container-custom py-12">
        {/* Информационный блок */}
        <div className="mb-12 bg-white p-8 rounded-xl shadow-lg transform -mt-16 relative z-20">
          <div className="max-w-3xl">
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('educationRegistry.infoBlock')}
            </p>
          </div>
        </div>
        
        {/* Фильтры и поиск */}
        <div className="mb-8 bg-gray-50 p-6 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">{t('educationRegistry.search.title')}</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder={t('educationRegistry.search.placeholder')}
                />
                <div className="absolute left-3 top-3.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">{t('educationRegistry.filters.educationLevel.title')}</label>
              <select 
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              >
                <option value="">{t('educationRegistry.filters.educationLevel.all')}</option>
                <option value="Бакалавриат">{t('educationRegistry.filters.educationLevel.bachelor')}</option>
                <option value="Магистратура">{t('educationRegistry.filters.educationLevel.master')}</option>
                <option value="Докторантура">{t('educationRegistry.filters.educationLevel.doctorate')}</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">{t('educationRegistry.filters.accreditation.title')}</label>
              <select 
                value={filterAccredited}
                onChange={(e) => setFilterAccredited(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              >
                <option value="">{t('educationRegistry.filters.accreditation.all')}</option>
                <option value="true">{t('educationRegistry.filters.accreditation.accredited')}</option>
                <option value="false">{t('educationRegistry.filters.accreditation.notAccredited')}</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Список программ */}
        <div className="mb-12">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg text-center">
              <p>{error}</p>
              <p className="mt-2">{t('educationRegistry.results.demoData')}</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {displayPrograms.length > 0 ? (
                  t('educationRegistry.results.found', { count: displayPrograms.length })
                ) : (
                  t('educationRegistry.results.notFound')
                )}
              </h2>
              
              <div className="space-y-6">
                {displayPrograms.map((program) => (
                  <div key={program.id} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mr-2">
                            {program.code}
                          </span>
                          {program.accredited && (
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                              {t('educationRegistry.programCard.accredited')}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
                        <p className="text-primary font-medium mb-2">{program.university}</p>
                        <p className="text-gray-600 mb-4">{program.description}</p>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span>{t('educationRegistry.programCard.level')}: {program.level}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{t('educationRegistry.programCard.duration')}: {program.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <button className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {t('educationRegistry.programCard.details')}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        
        {/* Информация о реестре */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('educationRegistry.aboutRegistry.title')}</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              {t('educationRegistry.aboutRegistry.description')}
            </p>
            <p>
              {t('educationRegistry.aboutRegistry.tasks')}
            </p>
            <ul>
              {(t('educationRegistry.aboutRegistry.tasksList', { returnObjects: true }) as string[]).map((task: string, index: number) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
            <p>
              {t('educationRegistry.aboutRegistry.updates')}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EducationRegistryPage; 