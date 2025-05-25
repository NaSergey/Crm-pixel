import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../fetchConfig/fetchUsers';

export const usePartnersSelect = (enabled = true) => {
  return useQuery({
    queryKey: ['partners_select'],
    queryFn: () =>
      fetchUsers({
        select: ['id', 'name'],
        where: [{ role: 'partner' }],
        transform: (data) => [
          { label: 'select', value: null },
          ...data.map((p: any) => ({
            label: p.name,
            value: p.id,
          })),
        ],
      }),
    enabled,
  });
};
