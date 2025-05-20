import React from "react";
import Select from "react-select";
import customStyles from "../../style/reactSelectStyles";

type FiltersProps = {
  selectOptions: Record<string, { label: string; value: string }[]>;
};

const Filters: React.FC<FiltersProps> = ({ selectOptions }) => {
  return (
    <div className="flex gap-4 p-4 pt-2 px-20">
      {Object.entries(selectOptions).map(([key, options]) => (
        <div key={key} className="flex-1">
          <Select
            options={options}
            placeholder={key}
            styles={{
              ...customStyles,
              container: (base) => ({
                ...base,
                width: "100%",
              }),
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Filters;
