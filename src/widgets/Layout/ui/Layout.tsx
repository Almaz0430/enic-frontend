import { type FC, type ReactNode } from 'react';
import { Header } from '../../Header/ui/Header';
import { Footer } from '../../Footer/ui/Footer';
import { Breadcrumbs } from '../../../entities/Breadcrumbs';
import { HeroBanner } from '../../HeroBanner/ui/HeroBanner';
import { NewsFeed } from '../../NewsFeed/ui/NewsFeed';
import { FAQBlock } from '../../FAQBlock/ui/FAQBlock';
import { MapEmbed } from '../../MapEmbed/ui/MapEmbed';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        {children}
        <NewsFeed />
        <FAQBlock />
        <MapEmbed />
      </main>
      <Footer />
    </div>
  );
}; 