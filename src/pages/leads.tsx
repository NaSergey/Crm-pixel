import React from "react";
import Filters from "../components/table/Filters";
import Table from "../components/table/table";
import { useLeads } from "../hook/useLeadData";

const Leads = () => {
  const { filters, setFilters, data, isLoading, error, updateRow, refetch } = useLeads();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return (
    <div className="flex flex-col h-full">
      <div className="grid w-full mt-4">
        {/* <Filters
          filters={filters}
          setFilters={setFilters}
          onSearch={refetch}
        /> */}
      </div>
      <div className="mt-2 grid gap-4">
        <div className="overflow-x-auto">
          <Table name="leads" data={data || []} updateRow={updateRow} />
        </div>
      </div>
    </div>
  );
};

export default Leads;
