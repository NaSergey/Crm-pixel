import { Link } from "react-router-dom";
import { FaPen,FaRegEye,FaArrowCircleRight   } from "react-icons/fa";
import { handleStatusClick } from "../../services/setStatus"; 
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { BoolIcon } from "../ui/icon/BoolIcon"; 
// import Brokers from "../../pages/brokers";
// import ServiceConnect from "../../pages/serviceConnect";

const tableConfigs = {
  campaigns: {
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
  leads: {
    headers: ["id", "status","date create", "email", "phone", "funnel", "geo & lang", "partner", "broker", "ftd",  "fraud", "errors", "show"],
    renderRow: (row, index, props) => (
      <tr key={index} >
        <td className="px-4 py-2 border text-gray-table  border-gray-700">{row.id}</td>
        <td className="px-4 py-2 text-cyan-400 border border-gray-700">{row.status}</td>
        <td className="px-4 py-2 border border-gray-700">{row.lead_date_create}</td>
        <td className="px-4 py-2 border border-gray-700">{row.email}</td>
        <td className="px-4 py-2 border border-gray-700">{row.phone}</td>
        <td className="px-4 py-2 border border-gray-700">{row.funnel}</td>
        <td className="px-4 py-2 border border-gray-700">{row.country} {'&'} {row.lang}</td>
        <td onClick={() => props.openModal(row, 'partner')} className="px-4 py-2 border hover:underline text-blue-400 cursor-pointer border-gray-700">
          {row.partner_name}
        </td>
        <td onClick={() => props.openModal(row, 'broker')} className="px-4 py-2 border hover:underline text-blue-400 cursor-pointer border-gray-700">
          {row.broker_name}
          </td>
        <td className="text-center py-2 border border-gray-700">
          <BoolIcon value={row.ftd} />
        </td>
        <td className="px-2 py-2 border border-gray-700 text-center">
          <BoolIcon value={row.check_frod_ip} />
          <BoolIcon value={row.check_frod_autologi} />
          <BoolIcon value={row.check_frod_referer} />
          <BoolIcon value={row.check_frod_useragent} />
        </td>
        <td className="text-center py-2 border border-gray-700">
          <BoolIcon value={row.error} />
        </td>
        <td className="text-center py-2 border border-gray-700 flex justify-center space-x-2">
          <FaRegEye className=" cursor-pointer " size={20} />
          <FaArrowCircleRight className="text-blue-500 cursor-pointer " size={20} />
        </td>
      </tr>
    )
  },
  partners: {
    headers: ["id", "name", "partner", "broker", "country", "lang", "cap", "limiter", "status", "edit"],
    renderRow: (row, index, props) => (
      <tr key={index} >

      </tr>
    )
  },
  brokers: {
    headers: ["id", "name", "partner", "broker", "country", "lang", "cap", "limiter", "status", "edit"],
    renderRow: (row, index, props) => (
      <tr key={index} >

      </tr>
    )
  },
  serviceConnect: {
    headers: ["id", "name", "partner", "broker", "country", "lang", "cap", "limiter", "status", "edit"],
    renderRow: (row, index, props) => (
      <tr key={index} >

      </tr>
    )
  },
  users: {
    headers: ["id", "name", "partner", "broker", "country", "lang", "cap", "limiter", "status", "edit"],
    renderRow: (row, index, props) => (
      <tr key={index} >

      </tr>
    )
  },
};

export default tableConfigs;
