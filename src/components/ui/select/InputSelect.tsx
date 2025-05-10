import { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface InputSelectProps {
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const InputSelect: React.FC<InputSelectProps> = ({ label, options, value, onChange }) => {
  const [focused, setFocused] = useState(false);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="relative w-full">
      {label && <label className="text-white mb-1 block">{label}</label>}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 150)}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="Введите или выберите"
      />
      {focused && filteredOptions.length > 0 && (
        <ul className="absolute left-0 right-0 mt-1 bg-gray-700 rounded-lg shadow-lg max-h-40 overflow-y-auto z-10">
          {filteredOptions.map((opt) => (
            <li
              key={opt.value}
              onClick={() => onChange(opt.label)}
              className="px-4 py-2 text-white hover:bg-orange-500 cursor-pointer"
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputSelect;
