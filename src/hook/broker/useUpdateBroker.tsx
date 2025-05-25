// useUpdateBroker.ts
import { useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '../../services/ApiReq';

export const useUpdateBroker = () => {
  const queryClient = useQueryClient();
  const updateBroker = async (brokerData: any, brokerId: string) => {
    if (!brokerData.name) {
      return { success: false, error: 'name_empty' };
    }
    const res = await apiRequest('/brokers/update_broker/', {
      name: brokerData.name,
      comment: brokerData.comment,
      brand_manager: brokerData.brand_manager,
      broker_id: brokerId,
    });
    if (res?.success) {
      queryClient.invalidateQueries({ queryKey: ['campaigns'] });
    }
    return res;
  };
  return { updateBroker };
};
