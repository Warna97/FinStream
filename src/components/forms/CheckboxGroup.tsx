// src/components/forms/CheckboxGroup.tsx
import React from 'react';

interface CheckboxOption {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  options: CheckboxOption[];
  selectedValues: string[];
  onChange: (value: string) => void;
  label: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, selectedValues, onChange, label }) => {
  const handleCheckboxChange = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter(v => v !== value).join(','));
    } else {
      onChange([...selectedValues, value].join(','));
    }
  };

  return (
    <fieldset className="mb-4">
      <legend className="block text-sm font-medium text-gray-700 mb-1">{label}</legend>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedValues.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
              className="form-checkbox h-5 w-5 text-blue-500 transition duration-200 ease-in-out"
            />
            <span className="text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default CheckboxGroup;
