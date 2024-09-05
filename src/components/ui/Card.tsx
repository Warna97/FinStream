// src/components/ui/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg border border-gray-200 ${className}`}>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
