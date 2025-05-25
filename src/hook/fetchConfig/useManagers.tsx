import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../fetchConfig/fetchUsers';

export const useManagers = (
  managerRole: 'manager' | 'brand manager' = 'manager',
  enabled = true
) => {
  return useQuery({
    queryKey: ['managers', managerRole],
    queryFn: () =>
      fetchUsers({
        select: ['id', 'name'],
        where: [{ role: managerRole }],
        transform: (data) => [
          { label: 'select', value: null },
          ...data.map((m: any) => ({
            label: m.name,
            value: m.id,
          })),
        ],
      }),
    enabled,
  });
};
