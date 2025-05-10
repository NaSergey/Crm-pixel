import React from "react";

type Option = { label: string; value: string };

type SelectProps = {
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm text-gray-700">{label}</label>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2 border border-gray-400 rounded bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">{placeholder}</option>

      </select>
    </div>
  );
};

export default Select;
