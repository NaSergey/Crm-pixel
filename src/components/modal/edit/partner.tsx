import React from 'react';
import Button from '../../ui/button/button';
import TextInput from '../../ui/select/textInput';
import Select from 'react-select';
import customStyles from '../../../style/reactSelectStyles';
import { usePartnerData } from '../../../hook/usePartnerData';
import { useManagersSelect } from '../../../hook/useManagerOptions';


const Partner = ({ row, onClose }) => {
  const partnerId = row?.partner;

  const {
    partnerData,
    handleChange,
    handleSelectChange,
    isLoading,
    error,
  } = usePartnerData(partnerId);

  const { data: managers, isLoading: isManagersLoading, error: managersError } = useManagersSelect(); // ← сюда перенеси

  const handleSave = () => {
    console.log('Сохраняем:', partnerData);
  };

  const handleDelete = () => {
    console.log('Удаление');
  };

  if (isLoading || isManagersLoading) return <p>Загрузка...</p>;
  if (error || managersError) return <p>Ошибка при загрузке данных</p>;

  return (
    <div>
      <h2 className="text-xl text-center font-bold mb-4">Partner</h2>
      <div className="grid grid-cols-2 gap-4 pt-5">
        <TextInput label="Name" value={partnerData.name} onChange={handleChange('name')} />
        <TextInput label="Email" value={partnerData.email} readOnly />
        <TextInput label="Comment" value={partnerData.comment} onChange={handleChange('comment')} />
        <TextInput label="Partner token" value={partnerData.partner_token} readOnly />

        <div>
          <label className="block text-sm text-gray-600 mb-1">Manager</label>
          <Select
            styles={customStyles}
            value={partnerData.manager}
            onChange={handleSelectChange('manager')}
            options={managers}
          />
        </div>
        <TextInput label="Role" value={partnerData.role} readOnly />
      </div>

      <div className="grid grid-cols-2 gap-3 mt-6">
        <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
          Save
        </Button>
        <Button onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
          Delete
        </Button>
      </div>
    </div>
  );
};


export default Partner;
