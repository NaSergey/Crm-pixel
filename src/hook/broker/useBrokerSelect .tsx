// hooks/fetchConfig/fetchSelectBrokers.ts
import { apiRequest } from '../../services/ApiReq';

export const useBrokerSelect  = async () => {
  const res = await apiRequest('/brokers/get_brokers/', {
    select: ['id', 'name'],
    where: {},
  });

  if (!res?.success) throw new Error('Select fetch failed');

  return [
    { label: 'select', value: null },
    ...res.data.map((b: any) => ({
      label: b.name,
      value: b.id,
    })),
  ];
};
