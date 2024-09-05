// src/components/dashboard/StatsCard.tsx
import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
      <div className="p-4 bg-blue-100 rounded-full">
        {icon}
      </div>
      <div className="ml-4">
        <h4 className="text-gray-500 text-sm font-medium">{title}</h4>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
