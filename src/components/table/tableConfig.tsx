import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { handleStatusClick } from "../../services/setStatus"; 

const tableConfigs = {
  compaing: {
    headers: ["id", "name", "partner", "broker", "country", "lang", "cap", "limiter", "status", "edit"],
    renderRow: (row, index, props) => (
      <tr key={index} >
        <td className="px-4 py-2 border text-gray-table  border-gray-700">{row.id}</td>
        <td className="px-4 py-2 border border-gray-700">{row.name}</td>
        <td
            onClick={() => props.openModal(row, 'partner')}
            className="px-4 py-2 border hover:underline text-blue-400 cursor-pointer border-gray-700"
            >
            {row.partner_email}
        </td>
        <td
            onClick={() => props.openModal(row, 'broker')}
            className="px-4 py-2 border hover:underline text-blue-400 cursor-pointer border-gray-700"
            >
            {row.broker_name}
        </td>

        <td className="px-4 py-2 border border-gray-700">
          {row.country?.map(c => c.label).join(', ') || '-'}
        </td>
        <td className="px-4 py-2 border border-gray-700">
          {row.lang?.map(l => l.label).join(', ') || '-'}
        </td>
        <td className="px-4 py-2 border border-gray-700"> {row.count_leads+'/'+row.cap}</td>
        <td className="px-4 py-2 border border-gray-700 text-amber-600">{row.lead_sender_limited.toString()}</td>
        <td onClick={() => handleStatusClick(row, props.updateRow)}
            className={`px-4 py-2 border rounded-full text-center w-20 cursor-pointer border-gray-700`}
            >
            <span className={`${row.status === 'ON' ? ' text-green-400 ' : ' text-red-400 ' }`}>{row.status}</span>
        </td>
        <td className="px-4 py-2 border border-gray-700 text-center">
          <Link to={`/edit/${row.id}`} className="text-blue-400 hover:text-blue-600 inline-block">
            <FaPen className="inline w-4 h-4" />
          </Link>
        </td>
      </tr>
    )
  },
};

export default tableConfigs;
