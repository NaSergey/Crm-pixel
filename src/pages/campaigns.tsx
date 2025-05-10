import { useState, useEffect } from "react";
import Filters from "../components/table/Filters";
import Table from "../components/table/table";
import { apiRequest } from '../services/ApiReq'; 

const selectOptions = {
  partner: [
    { value: "partner1", label: "Партнер 1" },
    { value: "partner2", label: "Партнер 2" }
  ],
  broker: [
    { value: "broker1", label: "Брокер 1" },
    { value: "broker2", label: "Брокер 2" }
  ],
  status: [
    { value: "active", label: "Активен" },
    { value: "inactive", label: "Неактивен" }
  ],
  country: [
    { value: "ru", label: "Россия" },
    { value: "us", label: "США" }
  ],
  lang: [
    { value: "ru", label: "Русский" },
    { value: "en", label: "Английский" }
  ]
};

const Campaigns = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    partner: null,
    broker: null,
    status: null,
    country: null,
    lang: null
  });

  const GetList = () => {
    setLoading(true);
    const params = {
      partner: filters.partner,
      broker: filters.broker,
      status: filters.status,
      country: filters.country,
      lang: filters.lang
    };

    apiRequest('/campaigns/get_list/', params)
      .then((result) => {  
        if (result && result.success) {
          setData(result.data);
          // console.log('Данные: ', result.data);
        } else {
          console.error('Ошибка: ', result.error || 'Неизвестная ошибка');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка запроса: ', error);
        setLoading(false);
    });
  };

  useEffect(() => {
    GetList();
  }, [filters]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  const updateRow = (id, newStatus) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, status: newStatus } : row
      )
    );
  };

  return (
    <div className="flex flex-col h-full">
      <div className="grid w-full mt-4">
        <Filters selectOptions={selectOptions} />
      </div>
      <div className="mt-2 grid gap-4">
        <div className="overflow-x-auto">
          <Table name="compaing" data={data} updateRow={updateRow}/>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;