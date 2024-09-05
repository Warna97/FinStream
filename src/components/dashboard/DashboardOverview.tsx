// src/components/dashboard/DashboardOverview.tsx
import React from 'react';
import StatsCard from './StatsCard';
import TransactionList from './TransactionList';
import RevenueChart from './RevenueChart';
import { FaDollarSign, FaChartLine, FaWallet } from 'react-icons/fa';

const DashboardOverview: React.FC = () => {
  const transactions = [
    { id: '1', date: '2024-09-01', description: 'Payment Received', amount: '$1,200', status: 'Completed' },
    { id: '2', date: '2024-09-02', description: 'Purchase of Goods', amount: '$300', status: 'Pending' },
    // Add more transactions
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Stats Cards */}
      <StatsCard title="Total Balance" value="$24,000" icon={<FaDollarSign className="text-blue-500 text-2xl" />} />
      <StatsCard title="Total Revenue" value="$15,000" icon={<FaChartLine className="text-green-500 text-2xl" />} />
      <StatsCard title="Total Expenses" value="$8,000" icon={<FaWallet className="text-red-500 text-2xl" />} />

      {/* Revenue Chart */}
      <div className="lg:col-span-2">
        <RevenueChart />
      </div>

      {/* Transaction List */}
      <div className="lg:col-span-1">
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
};

export default DashboardOverview;
