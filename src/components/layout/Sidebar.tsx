// src/components/layout/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen fixed">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-6">FinStream</h2>
        <nav className="space-y-4">
          <Link href="/dashboard">
            <a className="block py-2 px-4 bg-gray-800 rounded-lg hover:bg-gray-700">Dashboard</a>
          </Link>
          <Link href="/accounts">
            <a className="block py-2 px-4 bg-gray-800 rounded-lg hover:bg-gray-700">Accounts</a>
          </Link>
          <Link href="/transactions">
            <a className="block py-2 px-4 bg-gray-800 rounded-lg hover:bg-gray-700">Transactions</a>
          </Link>
          <Link href="/reports">
            <a className="block py-2 px-4 bg-gray-800 rounded-lg hover:bg-gray-700">Reports</a>
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
