import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-8 py-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
          Navegador Curricular de Psicologia - UFSC
        </h1>
        <p className="text-gray-500 mt-1">Planeje sua jornada acadêmica de forma interativa.</p>
      </div>
    </header>
  );
};