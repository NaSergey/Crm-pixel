interface TextInputProps {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: string;
  }
  
  const TextInput: React.FC<TextInputProps> = ({
    label,
    value,
    onChange,
    placeholder = "",
    type = "text",
  }) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        {label && <label className="text-white">{label}</label>}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>
    );
  };
  
  export default TextInput;
  