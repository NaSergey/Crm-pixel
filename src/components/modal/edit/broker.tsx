import React from 'react';
import Button from '../../ui/button/button';
import TextInput from '../../ui/select/textInput';
import Select from 'react-select';
import customStyles from '../../../style/reactSelectStyles';
import { useBrokerData } from '../../../hook/useBrokerData';
import { usePartnerData } from '../../../hook/usePartnerData';

const Broker = ({ row, onClose }: { row: any; onClose: () => void }) => {
  const brokerId = row?.broker;
  // Получаем бренд-менеджеров
  const {
    managers: brandManagers,
    isLoading: isManagersLoading,
    error: managersError,
  } = usePartnerData(null, undefined, ['PartnerManagers'], 'brand manager');


const {
  brokerData,
  handleChange,
  handleSelectChange,
  isLoading: isBrokerLoading,
  error: brokerError,
  handleSave,
  handleDelete,
} = useBrokerData(brokerId, onClose, ['BrokerData']);


  // Объединённые состояния загрузки/ошибки
  if (isBrokerLoading || isManagersLoading) return <p>Загрузка...</p>;
  if (brokerError || managersError) return <p>Ошибка при загрузке данных</p>;

  return (
    <div>
      <h2 className="text-xl text-center font-bold mb-4">Broker</h2>

      <div className="flex justify-between items-start gap-8 p-5">
        <div className="w-2/3 gap-4">
          <TextInput label="Id" value={brokerData.id} readOnly onChange={handleChange('id')} />
          <TextInput label="Name" value={brokerData.name} onChange={handleChange('name')} />
          <TextInput label="Comment" value={brokerData.comment} onChange={handleChange('comment')} />

          <div>
            <label className="block text-sm text-gray-600 mb-1">Brand Manager</label>
            <Select
              styles={customStyles}
              placeholder="Brand Manager"
              options={brandManagers}
              onChange={handleSelectChange('brand_manager')}
            />
          </div>
        </div>

        <div className="w-1/3 flex p-4 pt-8 flex-col gap-4">
          <Button variant="primary" onClick={handleSave}>Save</Button>
          <Button variant="emerald" onClick={handleSave}>Add Leads</Button>
          <Button variant="green" onClick={handleSave}>Update Leads</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default Broker;
