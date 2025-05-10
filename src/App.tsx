import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Provider } from "react-redux";  // Импортируем Provider из react-redux
import store from "./store/store";  // Импортируем созданный store

export default function App() {
  return (
    <Provider store={store}>  
      <RouterProvider router={router} />
    </Provider>
  );
}
