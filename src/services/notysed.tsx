import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function notySend(type:any = null, text:any) {
    let toastOption:any = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        newestOnTop: true,
    };

    switch (type) {
        case 'success':
            toast.success(text, toastOption);
            break;
        case 'error':
            toast.error(text, toastOption);
            break;
        case 'warning':
            toast.warning(text, toastOption);
            break;
        default:
            toast.error(text, toastOption);
    }
}

export default function App() {
  return (
    <div>
      <ToastContainer />
    </div>
  );
}
