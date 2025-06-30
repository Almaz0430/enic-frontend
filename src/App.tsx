import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@providers/AuthProvider';
import { I18nProvider } from '@providers/i18n';
import { QueryProvider } from '@providers/query';
import { LoginForm } from '@features/auth/LoginForm';
import { RegisterForm } from '@features/auth/RegisterForm';
import { UniversityRegisterForm } from '@features/auth/UniversityRegisterForm';
import { ProfilePage } from '@/pages/Profile/ui/ProfilePage';
import { ProtectedRoute } from '@providers/ProtectedRoute';
import { ScrollToTop } from '@providers/ScrollToTop';
import {
  HomePage,
  RecognitionPage,
  AccreditationPage,
  BolognaPage,
  NewsPage,
  ContactsPage,
  NotFoundPage,
  EducationRegistryPage,
  AboutPage
} from '@/pages';

const App = () => {
  // Базовый путь из конфигурации Vite
  const basename = '/';
  
  return (
    <QueryProvider>
      <I18nProvider>
        <Router basename={basename}>
          <ScrollToTop />
          <AuthProvider>
            <div className="min-h-screen bg-gray-100">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/bologna" element={<BolognaPage />} />
                <Route path="/accreditation" element={<AccreditationPage />} />
                <Route path="/recognition" element={<RecognitionPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/news/:id" element={<NewsPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/education-registry" element={<EducationRegistryPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/register-university" element={<UniversityRegisterForm />} />
                <Route 
                  path="/profile" 
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  } 
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </AuthProvider>
        </Router>
      </I18nProvider>
    </QueryProvider>
  );
};

export default App;
