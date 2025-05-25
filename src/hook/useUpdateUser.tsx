import { useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '../services/ApiReq';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const updateUser = async (partnerData, partnerId) => {
    const {
      name,
      comment,
      role,
      manager,
      leads_display,
      brokers_display,
      partners_display,
      access_to_create_broker,
      password,
    } = partnerData;

    const send_data: any = {
      name,
      comment,
      role,
      manager,
      user_id: partnerId,
      leads_display,
      brokers_display,
      partners_display,
      access_to_create_broker,
    };

    if (password) send_data.new_pass = password;

    const res = await apiRequest('/users/update_user/', send_data);
    if (res?.success) {
      queryClient.invalidateQueries({ queryKey: ['campaigns'] });
    }
    return res;
  };

  return { updateUser };
};
