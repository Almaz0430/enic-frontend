import React from 'react';

export const ContrastToggle: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = React.useState(false);

  const toggleContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.body.classList.toggle('high-contrast');
  };

  return (
    <button 
      className="contrast-toggle"
      onClick={toggleContrast}
      aria-label={isHighContrast ? 'Выключить высокую контрастность' : 'Включить высокую контрастность'}
    >
      {isHighContrast ? 'Обычный режим' : 'Версия для слабовидящих'}
    </button>
  );
}; 