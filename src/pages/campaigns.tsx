import { useCallback, useMemo } from "react";
import Table from "../components/table/table";
import { useCampaigns } from "../hook/useCampaignsData";
import { usePartnerData } from "../hook/usePartnerData";
import { useBrokerData } from "../hook/useBrokerData";
import CampaignFilters from "../components/layout/campaignFilters";
import { Geo } from "../data/geo";
import { Lang } from "../data/lang";



const Campaigns = () => {
  const { filters, setFilters, data, isLoading, error, updateRow, refetch } = useCampaigns();

  const {
    selectData: partnerSelectData,
    isLoading: isPartnerLoading,
    error: partnerError,
  } = usePartnerData(null, undefined, ["SelectPartner"]);

  const {
    selectData: brokerSelectData,
    isLoading: isBrokerLoading,
    error: brokerError,
  } = useBrokerData(null, undefined, ["SelectBrokers"]);

  const allSelectOptions = useMemo(
    () => ({
      partner: partnerSelectData,
      broker: brokerSelectData,
      country: Geo,
      lang: Lang,
      status: [
        { value: "ON", label: "ON" },
        { value: "OFF", label: "OFF" },
      ],
    }),
    [partnerSelectData, brokerSelectData]
  );

console.log('Filters:', filters);

  const handleSelectChange = useCallback(
    (key: string) => (option: { value: string; label: string } | null) => {
      const newValue = option ? option.value : null;
      setFilters(prev => {
        if (prev[key] === newValue) return prev; 
        return { ...prev, [key]: newValue };
      });
    },
    [setFilters]
  );


  return (
    <div className="flex flex-col h-full">
      <div className="grid w-full mt-4">
        <CampaignFilters
          filters={filters}
          selectOptions={allSelectOptions}
          onChange={handleSelectChange}
          onRefetch={refetch}
          isLoading={isLoading || isPartnerLoading || isBrokerLoading} // передай флаг загрузки в фильтры
        />
      </div>
      <div className="mt-2 grid gap-4">
        <div className="overflow-x-auto">
            <Table name="campaigns" data={data || []} updateRow={updateRow} isLoading={isLoading}/>
        </div>
      </div>
    </div>
  );

};

export default Campaigns;
