import Broker from './edit/broker';
import Partner from './edit/partner';

const Modal = ({ row, type, onClose }) => {
  if (!row || !type) return null;

  const componentMap = {
    partner: Partner,
    broker: Broker,
  };

  const Component = componentMap[type];
  if (!Component) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={onClose}
    >
      <div
        className="bg-gray-1100 p-6 rounded-lg shadow-lg max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Component row={row} onClose={onClose} />
      </div>
    </div>
  );
};

export default Modal;
