// src/components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold">FinStream</a>
        </Link>
        <nav className="space-x-4">
          <Link href="/dashboard">
            <a className="hover:text-gray-200 transition">Dashboard</a>
          </Link>
          <Link href="/settings">
            <a className="hover:text-gray-200 transition">Settings</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
