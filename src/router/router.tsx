import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/mainLayout";
import AuthLayout from "../components/layout/authLayout";
import PrivateRoute from "../middleware/privateRoute"; 

import Main from "../pages/main";
import Brokers from "../pages/brokers";
import Campaigns from "../pages/campaigns";
import CheckFingerprints from "../pages/checkFingerprints";
import Integration from "../pages/Integration";
import Leads from "../pages/leads";
import Logs from "../pages/logs";
import Partners from "../pages/partners";
import SendboxCode from "../pages/sendboxCode";
import SenderLead from "../pages/senderLead";
import ServiceConnect from "../pages/serviceConnect";
import Settings from "../pages/settings";
import Users from "../pages/users";

import EditUser from "../pages/edit/user";
import EditBroker from "../pages/edit/broker";
import EditCampaign from "../pages/edit/campaign";

import Login from "../pages/auth/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute allowedRoles={["admin", "manager"]}>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      { path: "main", element: <Main /> },
      { path: "brokers", element: <Brokers /> },
      { path: "brokers/edit/", element: <EditBroker /> }, // добавлено
      { path: "campaigns", element: <Campaigns /> },
      { path: "campaigns/edit/", element: <EditCampaign /> }, // добавлено
      { path: "checkFingerprints", element: <CheckFingerprints /> },
      { path: "integration", element: <Integration /> },
      { path: "leads", element: <Leads /> },
      { path: "logs", element: <Logs /> },
      { path: "partners", element: <Partners /> },
      { path: "sendboxCode", element: <SendboxCode /> },
      { path: "senderLead", element: <SenderLead /> },
      { path: "serviceConnect", element: <ServiceConnect /> },
      { path: "settings", element: <Settings /> },
      { path: "users", element: <Users /> },
      { path: "users/edit/", element: <EditUser /> }, // добавлено
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default router;
