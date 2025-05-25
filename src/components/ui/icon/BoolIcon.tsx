import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export const BoolIcon = ({ value }: { value: boolean }) => {
  return value ? (
    <FaCheckCircle className="text-green-400 h-4 w-4 inline mx-0.5" />
  ) : (
    <FaExclamationTriangle  className="text-yellow-400 h-4 w-4 inline mx-0.5" />
  );
};
