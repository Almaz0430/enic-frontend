import React, { useState } from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Layout } from '@widgets/Layout/ui/Layout';

export const RegisterForm: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const { register, error } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    if (password !== passwordConfirm) {
      alert('Пароли не совпадают');
      setLoading(false);
      return;
    }
    
    try {
      await register({
        email,
        password,
        password_confirm: passwordConfirm,
        first_name: firstName,
        last_name: lastName,
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
            {t('auth.register.title')}
          </h1>
          
          <div className="relative mb-6">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent"></div>
            <p className="text-lg mb-8 text-white/90 max-w-2xl pl-4">
              {t('auth.register.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-12 w-full max-w-4xl mx-auto">
        <div className="w-full">
          <div className="bg-white rounded-xl shadow-lg p-8">
            {formSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('auth.register.success')}</span>
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
                    {t('auth.register.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                    placeholder={t('auth.register.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('auth.register.firstName')}
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                    placeholder={t('auth.register.firstNamePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('auth.register.lastName')}
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                    placeholder={t('auth.register.lastNamePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('auth.register.password')}
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                    placeholder={t('auth.register.passwordPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="password-confirm" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('auth.register.passwordConfirm')}
                  </label>
                  <input
                    type="password"
                    id="password-confirm"
                    name="password-confirm"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                    placeholder={t('auth.register.passwordConfirmPlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? t('auth.register.loading') : t('auth.register.submit')}
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    {t('auth.register.haveAccount')}{' '}
                    <a href="/login" className="text-primary hover:text-primary-dark font-medium">
                      {t('auth.register.login')}
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