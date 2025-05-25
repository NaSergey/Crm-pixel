import React from 'react';
import Button from '../../ui/button/button';
import TextInput from '../../ui/select/textInput';
import Select from 'react-select';
import customStyles from '../../../style/reactSelectStyles';
import { usePartnerData } from '../../../hook/usePartnerData';

const Partner = ({ row, onClose }) => {
  const partnerId = row?.partner;
  const {
    partnerData,
    managers,
    handleChange,
    handleSelectChange,
    handleSave,
    handleDelete,
    isLoading,
    error,
  } = usePartnerData(partnerId, onClose, ['PartnerData', 'PartnerManagers']);



  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка при загрузке данных</p>;


  return (
    <div>
      <h2 className="text-xl text-center font-bold mb-4">Partner</h2>
      <div className="grid grid-cols-2 gap-4 pb-10 p-5">
        <TextInput label="Name" value={partnerData.name} onChange={handleChange('name')} />
        <TextInput label="Email" value={partnerData.email} readOnly />
        <TextInput label="Comment" value={partnerData.comment} onChange={handleChange('comment')} />
        <TextInput label="Partner token" value={partnerData.partner_token} readOnly />
        <div>
          <label className="block text-sm text-gray-600 mb-1">Manager</label>
          <Select
            styles={customStyles}
            placeholder="Manager"
            onChange={handleSelectChange('manager')}
            options={managers}
            value={managers?.find(opt => opt.value === partnerData.manager)}
          />
        </div>
        <TextInput label="Role" value={ partnerData.role} readOnly />
        <div className="col-span-2">
          <TextInput
            label="Change the password"
            value={partnerData.password}
            onChange={handleChange('password')}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
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
