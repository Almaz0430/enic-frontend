import { type FC, type ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Фоновое изображение как в HeroBanner */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop" 
          alt="Образовательный фон" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
        {/* Декоративные элементы как в HeroBanner */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
      </div>
      
      {/* Основное содержимое */}
      <div className="relative z-10 flex-grow">
        {children}
      </div>
    </div>
  );
}; 