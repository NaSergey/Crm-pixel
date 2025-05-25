// components/CampaignFilters.tsx
import React from 'react';
import Select from 'react-select';
import Button from '../ui/button/button';
import customStyles from '../../style/reactSelectStyles';

interface Option {
  label: string;
  value: string | null;
}

interface Props {
  filters: Record<string, any>;
  selectOptions: Record<string, Option[]>;
  onChange: (key: string) => (option: Option | null) => void;
  onRefetch: () => void;
}

const CampaignFilters: React.FC<Props> = ({ filters, selectOptions, onChange, onRefetch }) => {
    const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <div className="flex gap-4 mb-4 px-10">
      {Object.entries(selectOptions).map(([key, options]) => (
        <div key={key} className="flex-1">
          <Select
            options={options}
            placeholder={capitalize(key)}
            onChange={onChange(key)}
            styles={{
              ...customStyles,
              container: (base) => ({ ...base, width: '100%' }),
            }}
          />
        </div>
      ))}
      <div className="flex-1">
        <Button variant="primary" onClick={onRefetch} className="w-full">
          Add Campaigns
        </Button>
      </div>
    </div>
  );
};

export default React.memo(CampaignFilters);
