import React, { useEffect, useState } from 'react';
import { useAuth } from '@providers/AuthProvider';
import { useTranslation } from 'react-i18next';
import { Layout } from '@widgets/Layout/ui/Layout';
import type { User } from '@shared/api/auth';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ProfilePage = () => {
  const { t } = useTranslation();
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState<User | null>(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    if (user) {
      setProfileData(user);
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Получение инициалов для аватара
  const getInitials = () => {
    if (!profileData) return '';
    
    if (profileData.role === 'university' && profileData.university_name) {
      return profileData.university_name.substring(0, 2).toUpperCase();
    }
    
    const firstInitial = profileData.first_name?.charAt(0) || '';
    const lastInitial = profileData.last_name?.charAt(0) || '';
    
    if (firstInitial || lastInitial) {
      return (firstInitial + lastInitial).toUpperCase();
    }
    
    return profileData.email.charAt(0).toUpperCase();
  };

  if (loading) {
    return (
      <Layout>
        <div className="container-custom py-20">
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!profileData) {
    return (
      <Layout>
        <div className="container-custom py-20">
          <div className="max-w-lg mx-auto bg-red-50 border border-red-200 text-red-700 p-6 rounded-xl shadow-sm text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="text-xl font-bold mb-2">{t('common.error')}</h2>
            <p>{t('profile.error')}</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">{t('profile.title')}</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">{t('profile.subtitle')}</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              {/* Шапка профиля */}
              <div className="relative">
                <div className="h-40 bg-gradient-to-r from-primary to-primary-dark"></div>
                <div className="absolute bottom-0 left-0 w-full transform translate-y-1/2 flex justify-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-32 h-32 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white text-4xl font-bold">
                    {getInitials()}
                  </div>
                </div>
              </div>
              
              {/* Информация профиля */}
              <div className="pt-20 px-6 pb-8">
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {profileData.role === 'university' 
                      ? profileData.university_name 
                      : `${profileData.first_name || ''} ${profileData.last_name || ''}`.trim() || profileData.email}
                  </h2>
                  <p className="text-gray-500">{profileData.email}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Основная информация */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t('profile.mainInfo')}
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm font-medium text-gray-600">{t('profile.email')}</span>
                        </div>
                        <p className="text-gray-900 font-medium pl-6">{profileData.email}</p>
                      </div>
                      
                      {profileData.role === 'university' ? (
                        <div className="p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span className="text-sm font-medium text-gray-600">{t('profile.universityName')}</span>
                          </div>
                          <p className="text-gray-900 font-medium pl-6">{profileData.university_name}</p>
                        </div>
                      ) : (
                        <>
                          <div className="p-4 bg-gray-50 rounded-xl">
                            <div className="flex items-center mb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                              <span className="text-sm font-medium text-gray-600">{t('profile.firstName')}</span>
                            </div>
                            <p className="text-gray-900 font-medium pl-6">{profileData.first_name || '—'}</p>
                          </div>
                          
                          <div className="p-4 bg-gray-50 rounded-xl">
                            <div className="flex items-center mb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                              <span className="text-sm font-medium text-gray-600">{t('profile.lastName')}</span>
                            </div>
                            <p className="text-gray-900 font-medium pl-6">{profileData.last_name || '—'}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  
                  {/* Дополнительная информация */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t('profile.additionalInfo')}
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm font-medium text-gray-600">{t('profile.registrationDate')}</span>
                        </div>
                        <p className="text-gray-900 font-medium pl-6">
                          {new Date(profileData.date_joined).toLocaleDateString()}
                        </p>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                          </svg>
                          <span className="text-sm font-medium text-gray-600">{t('profile.changePassword')}</span>
                        </div>
                        <button 
                          className="w-full py-2.5 px-4 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors flex items-center justify-center shadow-sm hover:shadow"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                          </svg>
                          {t('profile.changePassword')}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Кнопка выхода */}
                <div className="mt-10 pt-6 border-t border-gray-100 flex justify-center">
                  <button
                    className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors flex items-center shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    {isLoggingOut ? t('common.loading') : t('auth.logout')}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}; 