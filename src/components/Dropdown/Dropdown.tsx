// src/components/Dropdown/Dropdown.tsx
import React from "react";

type Option = {
  label: string;
  value: string;
};

type DropdownProps = {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export const Dropdown = ({
  label,
  options,
  value,
  onChange,
}: DropdownProps) => {
  return (
    <label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select {label.toLowerCase()}</option>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
};
