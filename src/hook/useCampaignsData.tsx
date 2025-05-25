import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "../services/ApiReq";

type Filters = {
  partner: string | null;
  broker: string | null;
  status: string | null;
  country: string | null;
  lang: string | null;
};

export const useCampaigns = () => {
  const queryClient = useQueryClient();
  const [filters, setFilters] = useState<Filters>({
    partner: null,
    broker: null,
    status: null,
    country: null,
    lang: null,
  });

  const queryKey = [
    "campaigns",
    filters.partner,
    filters.broker,
    filters.status,
    filters.country,
    filters.lang,
  ];

  const fetchCampaigns = async () => {
    const params = {
      partner: filters.partner,
      broker: filters.broker,
      status: filters.status,
      country: filters.country,
      lang: filters.lang,
    };

    const result = await apiRequest("/campaigns/get_list/", params);
    if (result && result.success) {
      return result.data;
    } else {
      throw new Error(result.error || "Неизвестная ошибка");
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: fetchCampaigns,
    staleTime: 5 * 60 * 1000,
  });

  const updateRow = (id: string | number, newStatus: string) => {
    queryClient.setQueryData(queryKey, (oldData: any) =>
      oldData
        ? oldData.map((row: any) =>
            row.id === id ? { ...row, status: newStatus } : row
          )
        : oldData
    );
  };

  return {
    filters,
    setFilters,
    data,
    isLoading,
    error,
    updateRow,
    refetch: () => queryClient.invalidateQueries(queryKey),
  };
};
