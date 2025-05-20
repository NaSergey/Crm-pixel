import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Provider } from "react-redux"; 
import store from "./store/store";  

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>  
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}
