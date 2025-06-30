import React, { useState } from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthLayout } from '@widgets/Layout/ui/AuthLayout';

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
    <AuthLayout>
      <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="bg-white/10 inline-block rounded-lg px-3 py-2 sm:px-4 sm:py-2 mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="text-white/90 text-sm sm:text-base font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>
                {t('auth.register.title')}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-white">
              {t('auth.register.createAccount')} <br className="hidden sm:block" />
              <span className="text-accent">{t('auth.register.joinUs')}</span>
            </h1>
          </div>

          <div className="backdrop-blur-md bg-white/10 rounded-xl shadow-xl p-8 border border-white/20">
            {formSuccess ? (
              <div className="bg-green-50/90 backdrop-blur-sm border border-green-200 text-green-700 p-4 rounded-lg mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('auth.register.success')}</span>
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
                    {t('auth.register.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-white/60"
                    required
                    placeholder={t('auth.register.emailPlaceholder')}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-white mb-1">
                      {t('auth.register.firstName')}
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-white/60"
                      required
                      placeholder={t('auth.register.firstNamePlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-white mb-1">
                      {t('auth.register.lastName')}
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-white/60"
                      required
                      placeholder={t('auth.register.lastNamePlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                    {t('auth.register.password')}
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-white/60"
                    required
                    placeholder={t('auth.register.passwordPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="password-confirm" className="block text-sm font-medium text-white mb-1">
                    {t('auth.register.passwordConfirm')}
                  </label>
                  <input
                    type="password"
                    id="password-confirm"
                    name="password-confirm"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-white/60"
                    required
                    placeholder={t('auth.register.passwordConfirmPlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-primary px-4 sm:px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-accent hover:text-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? t('auth.register.loading') : t('auth.register.submit')}
                </button>

                <div className="text-center">
                  <p className="text-sm text-white/80">
                    {t('auth.register.haveAccount')}{' '}
                    <Link to="/login" className="text-accent hover:text-white font-medium">
                      {t('auth.register.login')}
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