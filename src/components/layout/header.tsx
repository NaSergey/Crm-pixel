import * as images from '../../assets/image/index';
import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaRegClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  panelState: boolean;
  togglePanelState: () => void;
}

const Header: React.FC<HeaderProps> = ( ) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const toggleDropdown = () => {
      setIsOpen((prev) => !prev);
    };

    const formatGMTOffset = () => {
      const offset = -new Date().getTimezoneOffset() / 60;
      const sign = offset >= 0 ? '+' : '-';
      return `${sign}${Math.abs(offset)}`;
    };

    const handleLogout = () => {
      localStorage.removeItem(window.location.origin + "_pixelcrm_user_data");
      localStorage.removeItem(window.location.origin + "_pixelcrm_check_last_auth_date");
      
      navigate("/login");
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  return (
    <div>
      <header className="flex bg-gray-1100 min-h-[70px] fixed top-0 left-0 right-0 z-50">
        <nav className="flex justify-between w-full">
          <div className="flex items-center">
                <img className="md:ml-6" src={images.minilogo} alt="logo" />
                <img className="my-auto toggle-image" src={images.minimyaso} alt="myaso" />
                {/* {panelState && (
                )}
                <div onClick={togglePanelState} className="md:ml-8 text-white text-2xl">
                    {panelState ? <FaBars /> : <FaTimes />}
                </div> */}
          </div>

          <div className="flex items-center ml-auto mr-10 space-x-6 text-white">
            <div className="flex items-center space-x-2">
              <FaRegClock className="text-white text-[18px]" />
              <span className="text-sm font-bold">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
              <span className="text-xs">
                {new Date().toLocaleDateString()}
              </span>
              <span className="text-xs">
                ({`GMT${formatGMTOffset()}`})
              </span>
            </div>

            <div ref={dropdownRef} className="relative inline-block text-left">
              <div
                className="flex items-center gap-2 cursor-pointer hover:text-gray-300"
                onClick={toggleDropdown}
              >
                <p>12345true@gmail.com</p>
                <FaChevronDown
                  className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                />
              </div>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-1100 rounded-lg shadow-lg">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-red-950 cursor-pointer">Профиль</li>
                    <li className="px-4 py-2 hover:bg-red-950 cursor-pointer">Настройки</li>
                    <li
                      className="px-4 py-2 hover:bg-red-950 cursor-pointer text-red-500"
                      onClick={handleLogout}
                    >
                      Выйти
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
