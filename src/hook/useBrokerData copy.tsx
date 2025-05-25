import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { apiRequest } from '../services/ApiReq';
import { useUpdateBroker } from './broker/useUpdateBroker';
import { useDeleteBroker } from './broker/useDeleteBroker';

type LoadableKeys = 'BrokerData' | 'SelectBrokers'; // Добавляй свои ключи здесь

export const useBrokerData = (
  brokerId: string | null,
  onClose?: () => void,
  loadKeys: LoadableKeys[] = []
) => {
  const { updateBroker } = useUpdateBroker();
  const { deleteBroker } = useDeleteBroker();

  const loadBrokerData = loadKeys.includes('BrokerData');
  const loadSelectBrokers = loadKeys.includes('SelectBrokers');

  const [brokerData, setBrokerData] = useState({
    id: '',
    name: '',
    comment: '',
    brand_manager: '',
  });

  // Базовый fetch брокера
  const {
    data: brokerQueryData,
    isLoading: isBrokerLoading,
    error: brokerError,
  } = useQuery({
    queryKey: ['broker', brokerId],
    queryFn: async () => {
      const params = {
        select: ['id', 'name', 'comment', 'brand_manager'],
        where: [{ id: brokerId }],
      };
      const res = await apiRequest('/brokers/get_brokers/', params);
      if (!res?.success || !res.data?.length) throw new Error('No data');
      return res.data[0];
    },
    enabled: !!brokerId && loadBrokerData,
  });

  // Пример: выбор брокеров
  const {
    data: selectBrokers,
    isLoading: isSelectLoading,
    error: selectError,
  } = useQuery({
    queryKey: ['select_brokers'],
    queryFn: async () => {
      const res = await apiRequest('/brokers/get_brokers/', {
        select: ['id', 'name'],
      });
      if (!res?.success) throw new Error('Select fetch failed');
      return [{ label: 'select', value: null }, ...res.data.map((b: any) => ({
        label: b.name,
        value: b.id,
      }))];
    },
    enabled: loadSelectBrokers,
  });

  useEffect(() => {
    if (brokerQueryData) {
      setBrokerData(brokerQueryData);
    }
  }, [brokerQueryData]);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrokerData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSelectChange = (field: string) => (value: any) => {
    setBrokerData(prev => ({ ...prev, [field]: value }));
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
    selectBrokers: selectBrokers || [{ value: null }],
    isLoading: (loadBrokerData && isBrokerLoading) || (loadSelectBrokers && isSelectLoading),
    error: brokerError || selectError,
    handleChange,
    handleSelectChange,
    handleSave,
    handleDelete,
  };
};
