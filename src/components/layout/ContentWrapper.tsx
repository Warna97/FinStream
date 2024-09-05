// src/components/layout/ContentWrapper.tsx
import React from 'react';

interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      {children}
    </div>
  );
};

export default ContentWrapper;
