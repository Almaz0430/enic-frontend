import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { LoginPage } from '@/pages/LoginPage';
import { RegisterPage } from '@/pages/RegisterPage';
import { UniversityRegisterPage } from '@/pages/UniversityRegisterPage';
import { ProfilePage } from '@features/profile/ProfilePage';
import { ProtectedRoute } from '@providers/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/register/university',
    element: <UniversityRegisterPage />,
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
]); 