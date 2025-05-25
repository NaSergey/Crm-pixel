import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../fetchConfig/fetchUsers';

export const usePartner = (partnerId: number | null, enabled = true) => {
  return useQuery({
    queryKey: ['partner', partnerId],
    queryFn: () =>
      fetchUsers({
        select: [
          'name',
          'email',
          'role',
          'comment',
          'partner_token',
          'manager',
          'leads_display',
          'brokers_display',
          'partners_display',
          'access_to_create_broker',
        ],
        where: [{ id: partnerId }],
        single: true,
      }),
    enabled: !!partnerId && enabled,
  });
};
