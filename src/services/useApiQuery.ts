import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { apiRequest } from './ApiReq'; 

export function useApiQuery<T = any>(
  url: string,
  body: any = null,
  options?: UseQueryOptions<T>
) {
  return useQuery<T>({
    queryKey: [url, body], 
    queryFn: async () => {
      const data = await apiRequest(url, body);
      if (!data) throw new Error('API returned error or false');
      return data;
    },
    ...options,
  });
}
