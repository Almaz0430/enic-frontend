import React, { useState } from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthLayout } from '@widgets/Layout/ui/AuthLayout';

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
    <AuthLayout>
      <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="bg-white/10 inline-block rounded-lg px-3 py-2 sm:px-4 sm:py-2 mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="text-white/90 text-sm sm:text-base font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                {t('auth.registerUniversity.title')}
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight text-white">
              {t('auth.registerUniversity.registerInstitution')} <br className="hidden sm:block" />
              <span className="text-accent text-xl sm:text-2xl lg:text-3xl">{t('auth.registerUniversity.joinNetwork')}</span>
            </h1>
          </div>

          <div className="backdrop-blur-md bg-white/10 rounded-xl shadow-xl p-8 border border-white/20">
            {formSuccess ? (
              <div className="bg-green-50/90 backdrop-blur-sm border border-green-200 text-green-700 p-4 rounded-lg mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('auth.registerUniversity.success')}</span>
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
                    {t('auth.registerUniversity.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-white/60"
                    required
                    placeholder={t('auth.registerUniversity.emailPlaceholder')}
                  />
                </div>

                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent"></div>
                  <div className="pl-4">
                    <label htmlFor="university-name" className="block text-sm font-medium text-white mb-1">
                      {t('auth.registerUniversity.universityName')}
                    </label>
                    <input
                      type="text"
                      id="university-name"
                      name="university-name"
                      value={universityName}
                      onChange={(e) => setUniversityName(e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-white/60"
                      required
                      placeholder={t('auth.registerUniversity.universityNamePlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                    {t('auth.registerUniversity.password')}
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-white/60"
                    required
                    placeholder={t('auth.registerUniversity.passwordPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="password-confirm" className="block text-sm font-medium text-white mb-1">
                    {t('auth.registerUniversity.passwordConfirm')}
                  </label>
                  <input
                    type="password"
                    id="password-confirm"
                    name="password-confirm"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-white/60"
                    required
                    placeholder={t('auth.registerUniversity.passwordConfirmPlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-primary px-4 sm:px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-accent hover:text-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? t('auth.registerUniversity.loading') : t('auth.registerUniversity.submit')}
                </button>

                <div className="text-center">
                  <p className="text-sm text-white/80">
                    {t('auth.registerUniversity.hasAccount')}{' '}
                    <Link to="/login" className="text-accent hover:text-white font-medium">
                      {t('auth.registerUniversity.login')}
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