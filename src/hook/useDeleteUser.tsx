import { useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '../services/ApiReq';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  const deleteUser = async (userId: number) => {
    const res = await apiRequest('/users/delete_user/', { id: userId });
    if (res?.success) {
      queryClient.invalidateQueries({ queryKey: ['campaigns'] });
    }
    return res;
  };

  return { deleteUser };
};
