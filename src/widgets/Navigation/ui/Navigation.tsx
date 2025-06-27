import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@providers/AuthProvider';

export const Navigation = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              {t('app.name')}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {t('profile.title')}
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {t('auth.logout')}
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {t('auth.login')}
                </Link>
                <Link
                  to="/register"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {t('auth.register')}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}; 