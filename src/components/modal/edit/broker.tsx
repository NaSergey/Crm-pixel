// components/modals/Broker.jsx
import { useEffect, useState } from 'react';

const Broker = ({ row, onClose }) => {
  const [BrokerData, setBrokerData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/Broker/${row.Broker_id}`)
      .then(res => res.json())
      .then(data => setBrokerData(data))
      .finally(() => setLoading(false));
  }, [row.Broker_id]);

  const handleSave = () => {
    // логика отправки
  };

  return (
    <div onClick={onClose} className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-gray-1100 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        {loading ? (
          <p>Загрузка...</p>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-4">Партнёр</h2>
            <input className="w-full p-2 bg-gray-900 rounded mb-4" defaultValue={BrokerData.email} />
            <div className="flex justify-between">
              <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded">Сохранить</button>
              <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded">Закрыть</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Broker;
