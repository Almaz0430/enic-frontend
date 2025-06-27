import React, { useEffect, useState } from 'react';
import { useAuth } from '@providers/AuthProvider';
import { useTranslation } from 'react-i18next';
import { Layout } from '@widgets/Layout/ui/Layout';
import type { User } from '@shared/api/auth';
import { useNavigate } from 'react-router-dom';

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

  if (loading) {
    return (
      <Layout>
        <div className="container-custom py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!profileData) {
    return (
      <Layout>
        <div className="container-custom py-12">
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
            {t('profile.error')}
          </div>
        </div>
      </Layout>
    );
  }

  // Получение первых букв имени или названия университета для аватара
  const getInitials = () => {
    if (profileData.role === 'university') {
      return profileData.university_name?.substring(0, 2) || 'UN';
    } else {
      const firstInitial = profileData.first_name?.charAt(0) || '';
      const lastInitial = profileData.last_name?.charAt(0) || '';
      return (firstInitial + lastInitial).toUpperCase() || 'U';
    }
  };

  // Генерация случайного цвета на основе email
  const getAvatarColor = () => {
    const colors = [
      'bg-blue-500', 'bg-blue-600', 'bg-blue-700', 
      'bg-blue-800', 'bg-blue-900', 'bg-indigo-500',
      'bg-indigo-600', 'bg-sky-500'
    ];
    const hash = profileData.email.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <Layout>
      {/* Верхний баннер с заголовком */}
      <section className="bg-gradient-to-r from-primary via-primary-dark to-primary text-white py-16 relative overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
          <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-white/5 rounded-full blur-xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {t('profile.title')}
          </h1>
          
          <div className="relative mb-6">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent"></div>
            <p className="text-lg mb-8 text-white/90 max-w-2xl pl-4">
              {t('profile.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Профильная карточка с аватаром */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="border-b border-gray-100 bg-gray-50 p-6 flex items-center gap-6">
              <div className={`${getAvatarColor()} w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
                {getInitials()}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {profileData.role === 'university' 
                    ? profileData.university_name 
                    : `${profileData.first_name || ''} ${profileData.last_name || ''}`}
                </h2>
                <p className="text-gray-500">
                  {t(`profile.roles.${profileData.role}`)} · {profileData.email}
                </p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Основная информация */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {t('profile.mainInfo')}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {t('profile.email')}
                      </label>
                      <p className="text-gray-900 font-medium">{profileData.email}</p>
                    </div>
                    
                    {profileData.role === 'university' ? (
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {t('profile.universityName')}
                        </label>
                        <p className="text-gray-900 font-medium">{profileData.university_name}</p>
                      </div>
                    ) : (
                      <>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <label className="block text-sm font-medium text-gray-600 mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            {t('profile.firstName')}
                          </label>
                          <p className="text-gray-900 font-medium">{profileData.first_name || '—'}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <label className="block text-sm font-medium text-gray-600 mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            {t('profile.lastName')}
                          </label>
                          <p className="text-gray-900 font-medium">{profileData.last_name || '—'}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Дополнительная информация */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('profile.additionalInfo')}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        {t('profile.role')}
                      </label>
                      <p className="text-gray-900 font-medium">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          profileData.role === 'admin' 
                            ? 'bg-purple-100 text-purple-800' 
                            : profileData.role === 'university' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-green-100 text-green-800'
                        }`}>
                          {t(`profile.roles.${profileData.role}`)}
                        </span>
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {t('profile.registrationDate')}
                      </label>
                      <p className="text-gray-900 font-medium">
                        {new Date(profileData.date_joined).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Кнопка выхода */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-end">
                  <button
                    className="px-6 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    {isLoggingOut ? t('common.loading') : t('auth.logout')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}; 