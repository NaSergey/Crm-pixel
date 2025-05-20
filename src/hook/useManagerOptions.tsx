import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "../services/ApiReq";

export const useManagersSelect = () => {
  return useQuery({
    queryKey: ['managers_select'],
    queryFn: async () => {
      const res = await apiRequest('/users/get_users/', {
        select: ['id', 'name'],
        where: [{ role: 'manager' }],
      });

      if (!res?.success || !res.data) throw new Error("Ошибка загрузки менеджеров");

      const defaultOption = { label: 'select', value: null };
      const options = res.data.map((item) => ({
        value: item.id,
        label: item.name,
      }));

      return [defaultOption, ...options];
    },
    staleTime: 5 * 60 * 1000, 
  });
};
