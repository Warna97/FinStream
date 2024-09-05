// src/components/layout/MainLayout.tsx
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-100 p-6">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
