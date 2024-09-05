// src/components/forms/FormContainer.tsx
import React from 'react';

interface FormContainerProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200">
      {children}
    </form>
  );
};

export default FormContainer;
