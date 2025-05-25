import React from 'react';
import Button from '../../ui/button/button';
import TextInput from '../../ui/select/textInput';
import Select from 'react-select';
import customStyles from '../../../style/reactSelectStyles';

const CreateCompaigns = ({ row, onClose }) => {


  if (isLoading || isManagersLoading) return <p>Загрузка...</p>;
  if (error || managersError) return <p>Ошибка при загрузке данных</p>;

  return (
    <div>
      <h2 className="text-xl text-center font-bold mb-4">Create compaigns</h2>
    </div>
  );
};

export default CreateCompaigns;
