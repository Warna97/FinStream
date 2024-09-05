// src/components/forms/RadioGroup.tsx
import React from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  label: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, selectedValue, onChange, label }) => {
  return (
    <fieldset className="mb-4">
      <legend className="block text-sm font-medium text-gray-700 mb-1">{label}</legend>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2">
            <input
              type="radio"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              className="form-radio h-5 w-5 text-blue-500 transition duration-200 ease-in-out"
            />
            <span className="text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default RadioGroup;
