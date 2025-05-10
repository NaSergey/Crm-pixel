// src/components/Filters.tsx
import React from "react";
import Select from "react-select"; // или твой кастомный Select, если есть
import customStyles from "../../style/reactSelectStyles"; // если у тебя есть стили отдельно

type FiltersProps = {
  selectOptions: Record<string, { label: string; value: string }[]>;
};

const Filters: React.FC<FiltersProps> = ({ selectOptions }) => {
  return (
    <div className="flex justify-center items-center gap-4 p-4 pt-2">
      {Object.entries(selectOptions).map(([key, options]) => (
        <Select key={key} options={options} placeholder={key} styles={customStyles} />
      ))}
    </div>
  );
};

export default Filters;
