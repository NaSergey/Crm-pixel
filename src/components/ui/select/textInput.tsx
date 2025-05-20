interface TextInputProps {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, readOnly = false }) => {
  const finalLabel = readOnly ? `${label} (no rewrite)` : label;

  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{finalLabel}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className={`
          w-full rounded-3xl px-3 py-2 
          ${readOnly ? 'bg-[#272b30]' : ''}
          focus:outline-none
          focus:shadow-[0_0_5px_rgba(255,255,255,0.5)]
          transition-shadow duration-200 ease-in-out
        `}
      />
    </div>
  );
};

export default TextInput;
