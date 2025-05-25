import { useEffect, useState } from 'react';
import { useUpdateUser } from './useUpdateUser';
import { useDeleteUser } from './useDeleteUser';
import { useManagers } from './fetchConfig/useManagers';
import { usePartner } from './partner/usePartner';
import { usePartnersSelect } from './partner/usePartnersSelect';


type LoadableKeys = 'PartnerData' | 'SelectPartner' | 'PartnerManagers';

interface PartnerData {
  name: string;
  email: string;
  role: string;
  comment: string;
  partner_token: string;
  manager: { label: string; value: number | null };
  leads_display: string;
  brokers_display: string;
  partners_display: string;
  access_to_create_broker: string;
  password: string;
}


export const usePartnerData = (
  partnerId: number | null,
  onClose?: () => void,
  loadKeys: LoadableKeys[] = [],
  managerRole: 'manager' | 'brand manager' = 'manager'
) => {
  const loadPartnerData = loadKeys.includes('PartnerData');
  const loadSelectPartner = loadKeys.includes('SelectPartner');
  const loadPartnerManagers = loadKeys.includes('PartnerManagers');
  const { updateUser } = useUpdateUser();
  const { deleteUser } = useDeleteUser();

  const defaultManager = { label: 'select', value: null };

  const [partnerData, setPartnerData] = useState<PartnerData>({
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
    password: '',
  });

  const { data: partnerQueryData, isLoading: isPartnerLoading, error: partnerError } = usePartner(partnerId, loadPartnerData);
  const { data: selectData, isLoading: isSelectLoading, error: selectError } = usePartnersSelect(loadSelectPartner);
  const { data: managers, isLoading: isManagersLoading, error: managersError } = useManagers(managerRole, loadPartnerManagers);

  useEffect(() => {
    if (partnerQueryData) {
      setPartnerData({
        ...partnerQueryData,
        manager: partnerQueryData.manager || defaultManager,
        password: '',
      });
    }
  }, [partnerQueryData]);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setPartnerData((prev: any) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSelectChange = (field: string) => (value: any) => {
    setPartnerData((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    const res = await updateUser(partnerData, partnerId);
    if (res?.success) {
      onClose?.();
    } else {
      alert('Ошибка при обновлении партнёра');
    }
  };

  const handleDelete = async () => {
    const confirmed = confirm('Удалить пользователя?');
    if (!confirmed) return;
    const res = await deleteUser(partnerId);
    if (res?.success) {
      onClose?.();
    } else {
      alert('Ошибка при удалении');
    }
  };

  return {
    partnerData,
    setPartnerData,
    selectData: selectData || [{ value: null }],
    managers: managers || [{ value: null }],
    isLoading:
      (loadPartnerData && isPartnerLoading) ||
      (loadSelectPartner && isSelectLoading) ||
      (loadPartnerManagers && isManagersLoading),
    error: partnerError || selectError || managersError,
    handleChange,
    handleSelectChange,
    handleSave: () => handleSave(partnerData, partnerId),
    handleDelete: () => handleDelete(partnerId),
  };
};
