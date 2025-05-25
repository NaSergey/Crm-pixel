import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useUpdateBroker } from './broker/useUpdateBroker';
import { useDeleteBroker } from './broker/useDeleteBroker';
import { useBrokerSelect } from './broker/useBrokerSelect ';
import { fetchBroker } from './broker/fetchBroker';

type LoadableKeys = 'BrokerData' | 'SelectBrokers';

interface BrokerData {
  id: string;
  name: string;
  comment: string;
  brand_manager: string;
}

export const useBrokerData = (
  brokerId: string | null,
  onClose?: () => void,
  loadKeys: LoadableKeys[] = []
) => {
  const loadBrokerData = loadKeys.includes('BrokerData');
  const loadSelectBrokers = loadKeys.includes('SelectBrokers');

  const { updateBroker } = useUpdateBroker();
  const { deleteBroker } = useDeleteBroker();

  const [brokerData, setBrokerData] = useState<BrokerData>({
    id: '',
    name: '',
    comment: '',
    brand_manager: '',
  });

  const {
    data: brokerQueryData,
    isLoading: isBrokerLoading,
    error: brokerError,
  } = useQuery({
    queryKey: ['broker', brokerId],
    queryFn: () => fetchBroker(brokerId!),
    enabled: !!brokerId && loadBrokerData,
  });

  const {
    data: selectData,
    isLoading: isSelectLoading,
    error: selectError,
  } = useQuery({
    queryKey: ['select_brokers'],
    queryFn: useBrokerSelect ,
    enabled: loadSelectBrokers,
  });

  useEffect(() => {
    if (brokerQueryData) {
      setBrokerData(brokerQueryData);
    }
  }, [brokerQueryData]);

  const handleChange = (field: keyof BrokerData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrokerData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSelectChange = (field: keyof BrokerData) => (value: any) => {
    setBrokerData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    const res = await updateBroker(brokerData, brokerId!);
    if (res?.success) {
      onClose?.();
    } else {
      alert('Ошибка при обновлении брокера');
    }
  };

  const handleDelete = async () => {
    const confirmed = confirm('Удалить брокера?');
    if (!confirmed) return;
    const res = await deleteBroker(brokerId!);
    if (res?.success) {
      onClose?.();
    } else {
      alert('Ошибка при удалении брокера');
    }
  };

  return {
    brokerData,
    setBrokerData,
    selectData: selectData || [{ value: null }],
    isLoading: (loadBrokerData && isBrokerLoading) || (loadSelectBrokers && isSelectLoading),
    error: brokerError || selectError,
    handleChange,
    handleSelectChange,
    handleSave,
    handleDelete,
  };
};
