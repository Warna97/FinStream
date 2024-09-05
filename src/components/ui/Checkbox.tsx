// src/components/ui/Checkbox.tsx
import React from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 text-blue-500 transition duration-200 ease-in-out"
      />
      {label && <span className="text-gray-700">{label}</span>}
    </label>
  );
};

export default Checkbox;
