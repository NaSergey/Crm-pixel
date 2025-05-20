import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { apiRequest } from '../services/ApiReq';

const defaultManager = {
  label: 'select',
  value: null,
};

const fetchPartnerData = async (partnerId: number) => {
  const params = {
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
  };
  const result = await apiRequest('/users/get_users/', params);
  if (!result?.success || !result.data?.length) throw new Error('No data');
  return result.data[0];
};

export const usePartnerData = (partnerId: number | null) => {
  const [partnerData, setPartnerData] = useState({
    name: '',
    email: '',
    role: '',
    comment: '',
    partner_token: '',
    manager: defaultManager,
    leads_display: 'full',
    brokers_display: 'all',
    partners_display: 'all',
    access_to_create_broker: '0',
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ['partner', partnerId],
    queryFn: () => fetchPartnerData(partnerId!),
    enabled: !!partnerId,
  });

  useEffect(() => {
    if (data) {
      setPartnerData({
        ...data,
        manager: data.manager || defaultManager,
      });
    }
  }, [data]);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setPartnerData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSelectChange = (field: string) => (value: any) => {
    setPartnerData((prev) => ({ ...prev, [field]: value }));
  };

  return {
    partnerData,
    setPartnerData,
    isLoading,
    error,
    handleChange,
    handleSelectChange,
  };
};
