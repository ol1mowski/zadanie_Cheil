import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 sm:h-20 lg:h-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-text text-center leading-tight tracking-wide font-sans">
            Wybierz urządzenie
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
