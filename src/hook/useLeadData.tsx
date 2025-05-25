import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "../services/ApiReq";

type Filters = {
  status: any | null;
  broker: any | null;
  partner: any | null;
  country: any | null;
  email: string;
  phone: string;
  id: string;
  broker_lead_id: string;
  campaign: string;
  lang: { value: string } | null;
  funnel: string;
  ftd: any | null;
  fraud_filter: any | null;
  errors_filter: any | null;
  from_date: string;
  to_date: string;
};

export const useLeads = () => {
  const queryClient = useQueryClient();

  const [filters, setFilters] = useState<Filters>({
    status: null,
    broker: null,
    partner: null,
    country: null,
    email: "",
    phone: "",
    id: "",
    broker_lead_id: "",
    campaign: "",
    lang: null,
    funnel: "",
    ftd: null,
    fraud_filter: null,
    errors_filter: null,
    from_date: "",
    to_date: "",
  });

  const queryKey = [
    "leads",
    filters.status,
    filters.broker,
    filters.partner,
    filters.country,
    filters.email,
    filters.phone,
    filters.id,
    filters.broker_lead_id,
    filters.campaign,
    filters.lang?.value,
    filters.funnel,
    filters.ftd,
    filters.fraud_filter,
    filters.errors_filter,
    filters.from_date,
    filters.to_date,
  ];

  const getLeadsList = async () => {
    const from_date = filters.from_date ? filters.from_date.replace("T", " ") : undefined;
    const to_date = filters.to_date ? filters.to_date.replace("T", " ") : undefined;

    const where = [
      filters.status !== null && { status: filters.status },
      filters.broker !== null && { broker: filters.broker },
      filters.partner !== null && { partner: filters.partner },
      filters.country !== null && { country: filters.country },
      filters.email !== "" && { email: filters.email },
      filters.phone !== "" && { phone: filters.phone },
      filters.id !== "" && { id: filters.id },
      filters.broker_lead_id !== "" && { broker_lead_id: filters.broker_lead_id },
      filters.campaign !== "" && { campaign: filters.campaign },
      filters.lang?.value !== undefined && { lang: filters.lang.value },
      filters.funnel !== "" && { funnel: filters.funnel },
      filters.ftd !== null && filters.ftd !== undefined && { ftd: filters.ftd },
      from_date && { from_date },
      to_date && { to_date },
      filters.fraud_filter !== null && { fraud: filters.fraud_filter },
      filters.errors_filter !== null && { errors: filters.errors_filter },
    ].filter(Boolean);

    const response = await apiRequest("/leads/get_list/", {
      where,
      limit: [0, 20],
    });

    if (response && response.success) {
      return response.data;
    } else {
      throw new Error(response?.error || "Неизвестная ошибка");
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: getLeadsList,
    staleTime: 5 * 60 * 1000,
  });

  const updateRow = (id: string | number, newStatus: any) => {
    queryClient.setQueryData(queryKey, (oldData: any) =>
      oldData
        ? oldData.map((row: any) =>
            row.id === id ? { ...row, status: newStatus } : row
          )
        : oldData
    );
  };

  // Возвращаем всё, что нужно компоненту: фильтры, их сеттер, данные и функции
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
