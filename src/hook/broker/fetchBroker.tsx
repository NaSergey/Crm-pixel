// hooks/fetchConfig/fetchBroker.ts
import { apiRequest } from '../../services/ApiReq';

export const fetchBroker = async (brokerId: string) => {
  const params = {
    select: ['id', 'name', 'comment', 'brand_manager'],
    where: [{ id: brokerId }],
  };
  const res = await apiRequest('/brokers/get_brokers/', params);
  if (!res?.success || !res.data?.length) throw new Error('No data');
  return res.data[0];
};
