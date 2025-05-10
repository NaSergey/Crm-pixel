import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { 
    FaHome, FaBriefcase, FaBullhorn, FaFingerprint, FaPlug, FaUsers, 
    FaClipboardList, FaHandshake, FaCode, FaEnvelope, FaCogs, FaUserShield 
} from "react-icons/fa";

const Navigation = ({ panelState }) => {
    const location = useLocation();
  
    const navItems = [
      { to: "/main", icon: FaHome, label: "Main" },
      { to: "/campaigns", icon: FaBullhorn, label: "Campaigns" },
      { to: "/leads", icon: FaUsers, label: "Leads" },
      { to: "/partners", icon: FaHandshake, label: "Partners" },
      { to: "/brokers", icon: FaBriefcase, label: "Brokers" },
      { to: "/checkFingerprints", icon: FaFingerprint, label: "Check Fingerprints" },
      { to: "/senderLead", icon: FaEnvelope, label: "Sender Lead" },
      { to: "/sendboxCode", icon: FaCode, label: "Sendbox Code" },
      { to: "/serviceConnect", icon: FaPlug, label: "Service Connect" },
      { to: "/users", icon: FaUserShield, label: "Users" },
      { to: "/logs", icon: FaClipboardList, label: "Logs" },
      { to: "/integration", icon: FaCogs, label: "Integration" },
    ];
  
    return (
      <div className="mt-[80px] h-[60px] w-full">
        <div className="flex items-center justify-center h-full px-4 space-x-4">
          {navItems.map(({ to, icon: Icon, label }) => {
            const isActive = location.pathname === to;
            return (
                <Link
                  key={to}
                  to={to}
                  className={`group flex flex-col items-center justify-center px-4 py-2 rounded`}
                >
                  <Icon
                    size={24}
                    className={`mb-1 ${isActive ? "text-[#00c59c]" : "text-white"} group-hover:text-[#00c59c]`}
                  />
                  {panelState && (
                    <span
                      className={`text-sm text-center ${isActive ? "text-[#00c59c]" : "text-white"} group-hover:text-[#00c59c]`}
                    >
                      {label}
                    </span>
                  )}
                </Link>
              );
          })}
        </div>
      </div>
    );
  };
  
export default Navigation;