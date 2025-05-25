import { apiRequest } from '../../services/ApiReq';

export const useDeleteBroker = () => {
  const deleteBroker = async (brokerId: string) => {
    const res = await apiRequest('/brokers/delete_broker/', { broker_id: brokerId });
    return res;
  };
  return { deleteBroker };
};
