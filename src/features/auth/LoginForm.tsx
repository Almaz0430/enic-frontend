import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@providers/AuthProvider';
import { useTranslation } from 'react-i18next';
import { AuthLayout } from '@widgets/Layout/ui/AuthLayout';

export const LoginForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await login(email, password);
      setFormSuccess(true);
      setTimeout(() => {
        navigate('/profile');
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка при входе');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <AuthLayout>
      <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="bg-white/10 inline-block rounded-lg px-3 py-2 sm:px-4 sm:py-2 mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="text-white/90 text-sm sm:text-base font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>
                {t('auth.login.title')}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-white">
              {t('auth.login.welcomeBack')} <br className="hidden sm:block" />
              <span className="text-accent">{t('auth.login.signIn')}</span>
            </h1>
          </div>

          <div className="backdrop-blur-md bg-white/10 rounded-xl shadow-xl p-8 border border-white/20">
            {formSuccess ? (
              <div className="bg-green-50/90 backdrop-blur-sm border border-green-200 text-green-700 p-4 rounded-lg mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('auth.login.success')}</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50/90 backdrop-blur-sm border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                    {t('auth.login.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-white/60"
                    required
                    placeholder={t('auth.login.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                    {t('auth.login.password')}
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-white/60"
                    required
                    placeholder={t('auth.login.passwordPlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-primary px-4 sm:px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-accent hover:text-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? t('auth.login.loading') : t('auth.login.submit')}
                </button>

                <div className="text-center space-y-4">
                  <p className="text-sm text-white/80">
                    {t('auth.login.noAccount')}{' '}
                    <Link to="/register" className="text-accent hover:text-white font-medium">
                      {t('auth.login.register')}
                    </Link>
                  </p>
                  <p className="text-sm text-white/80">
                    {t('auth.login.university')}{' '}
                    <Link to="/register-university" className="text-accent hover:text-white font-medium">
                      {t('auth.login.registerUniversity')}
                    </Link>
                  </p>
                </div>
              </form>
            )}
          </div>
          
          <div className="text-center">
            <Link to="/" className="border-2 border-white px-4 sm:px-6 py-2 rounded-md font-semibold transition-all duration-300 hover:bg-white hover:text-primary shadow-lg hover:shadow-xl flex items-center justify-center sm:justify-start backdrop-blur-sm text-white inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              {t('navigation.home')}
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}; 