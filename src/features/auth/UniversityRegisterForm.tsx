import React, { useState } from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Layout } from '@widgets/Layout/ui/Layout';

export const UniversityRegisterForm: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [universityName, setUniversityName] = useState('');
  const { registerUniversity, error } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    if (password !== passwordConfirm) {
      alert(t('auth.passwordMismatch'));
      setLoading(false);
      return;
    }
    
    try {
      await registerUniversity({
        email,
        password,
        password_confirm: passwordConfirm,
        university_name: universityName,
      });
      setFormSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (err) {
      // Ошибка обрабатывается в AuthProvider
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Верхний баннер с заголовком */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 relative overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {t('auth.registerUniversity.title')}
          </h1>
          
          <div className="relative mb-6">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent"></div>
            <p className="text-lg mb-8 text-white/90 max-w-2xl pl-4">
              {t('auth.registerUniversity.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-12 w-full max-w-5xl mx-auto">
        <div className="w-full">
          <div className="bg-white rounded-xl shadow-lg p-8">
            {formSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('auth.registerUniversity.success')}</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('auth.registerUniversity.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                    placeholder={t('auth.registerUniversity.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="university-name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('auth.registerUniversity.universityName')}
                  </label>
                  <input
                    type="text"
                    id="university-name"
                    name="university-name"
                    value={universityName}
                    onChange={(e) => setUniversityName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                    placeholder={t('auth.registerUniversity.universityNamePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('auth.registerUniversity.password')}
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                    placeholder={t('auth.registerUniversity.passwordPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="password-confirm" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('auth.registerUniversity.passwordConfirm')}
                  </label>
                  <input
                    type="password"
                    id="password-confirm"
                    name="password-confirm"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                    placeholder={t('auth.registerUniversity.passwordConfirmPlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? t('auth.registerUniversity.loading') : t('auth.registerUniversity.submit')}
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    {t('auth.registerUniversity.hasAccount')}{' '}
                    <a href="/login" className="text-primary hover:text-primary-dark font-medium">
                      {t('auth.registerUniversity.login')}
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}; 