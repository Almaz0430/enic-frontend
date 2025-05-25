import { type FC, type ReactNode } from 'react';
import { Header } from '../../Header/ui/Header';
import { Footer } from '../../Footer/ui/Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}; 