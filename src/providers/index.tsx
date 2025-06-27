export { RouterProvider } from './router';
export { QueryProvider } from './query';
export { I18nProvider, useI18n } from './i18n';
export { ThemeProvider, useTheme, ThemeSwitcher } from './theme';
export { ScrollToTop } from './ScrollToTop';

// Композитный провайдер, объединяющий все провайдеры
import type { ReactNode } from 'react';
import { RouterProvider } from './router';
import { QueryProvider } from './query';
import { I18nProvider } from './i18n';
import { ThemeProvider } from './theme';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <QueryProvider>
      <I18nProvider>
        <ThemeProvider>
          <RouterProvider>{children}</RouterProvider>
        </ThemeProvider>
      </I18nProvider>
    </QueryProvider>
  );
}; 