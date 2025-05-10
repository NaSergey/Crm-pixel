import { useState } from 'react';
import tableConfigs from "./tableConfig";
import Modal from '../modal/modal';

const Table = ({ name, data, updateRow  }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [modalType, setModalType] = useState(null);

    const config = tableConfigs[name];
    if (!config) return <div>Неизвестная таблица: {name}</div>;

    const openModal = (row, type) => {
      setSelectedRow(row);
      setModalType(type); 
    };
  
    return (
      <div className="overflow-x-auto">
        <table className="w-full border bg-gray-1100 border-gray-700 text-sm text-left text-gray-300">
          <thead className=" text-xs uppercase">
            <tr>
              {config.headers.map((header) => (
                <th key={header} className="px-4 py-3 border text-gray-table  border-gray-700">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) =>
              config.renderRow(row, index, { updateRow, openModal })
            )}
          </tbody>
        </table>
        <Modal row={selectedRow} type={modalType} onClose={() => setSelectedRow(null)} />
      </div>
    );
  };
  

export default Table;
