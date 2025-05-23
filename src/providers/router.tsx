import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { 
  HomePage, 
  RecognitionPage, 
  AccreditationPage, 
  BolognaPage, 
  NewsPage, 
  ContactsPage, 
  NotFoundPage 
} from '../pages';

interface RouterProviderProps {
  children?: React.ReactNode;
}

export const RouterProvider = ({ children }: RouterProviderProps) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="container-custom">Загрузка...</div>}>
        {children}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recognition" element={<RecognitionPage />} />
          <Route path="/accreditation" element={<AccreditationPage />} />
          <Route path="/bologna" element={<BolognaPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
