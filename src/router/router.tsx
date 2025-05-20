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
      { path: "brokers/edit/", element: <EditBroker /> }, 
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










// import { createBrowserRouter } from "react-router-dom";
// import React, { Suspense, lazy } from "react";
// import Layout from "../components/layout/mainLayout";
// import AuthLayout from "../components/layout/authLayout";
// import PrivateRoute from "../middleware/privateRoute"; 

// import { Loader } from "../components/Loader"; // Индикатор загрузки

// // Ленивые импорты
// const Main = lazy(() => import("../pages/main"));
// const Brokers = lazy(() => import("../pages/brokers"));
// const Campaigns = lazy(() => import("../pages/campaigns"));
// const CheckFingerprints = lazy(() => import("../pages/checkFingerprints"));
// const Integration = lazy(() => import("../pages/integration"));
// const Leads = lazy(() => import("../pages/leads"));
// const Logs = lazy(() => import("../pages/logs"));
// const Partners = lazy(() => import("../pages/partners"));
// const SendboxCode = lazy(() => import("../pages/sendboxCode"));
// const SenderLead = lazy(() => import("../pages/senderLead"));
// const ServiceConnect = lazy(() => import("../pages/serviceConnect"));
// const Settings = lazy(() => import("../pages/settings"));
// const Users = lazy(() => import("../pages/users"));

// const EditUser = lazy(() => import("../pages/edit/user"));
// const EditBroker = lazy(() => import("../pages/edit/broker"));
// const EditCampaign = lazy(() => import("../pages/edit/campaign"));

// const Login = lazy(() => import("../pages/auth/login"));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <PrivateRoute allowedRoles={["admin", "manager"]}>
//         <Layout />
//       </PrivateRoute>
//     ),
//     children: [
//       { path: "main", element: <Suspense fallback={<Loader />}><Main /></Suspense> },
//       { path: "brokers", element: <Suspense fallback={<Loader />}><Brokers /></Suspense> },
//       { path: "brokers/edit/", element: <Suspense fallback={<Loader />}><EditBroker /></Suspense> }, 
//       { path: "campaigns", element: <Suspense fallback={<Loader />}><Campaigns /></Suspense> },
//       { path: "campaigns/edit/", element: <Suspense fallback={<Loader />}><EditCampaign /></Suspense> },
//       { path: "checkFingerprints", element: <Suspense fallback={<Loader />}><CheckFingerprints /></Suspense> },
//       { path: "integration", element: <Suspense fallback={<Loader />}><Integration /></Suspense> },
//       { path: "leads", element: <Suspense fallback={<Loader />}><Leads /></Suspense> },
//       { path: "logs", element: <Suspense fallback={<Loader />}><Logs /></Suspense> },
//       { path: "partners", element: <Suspense fallback={<Loader />}><Partners /></Suspense> },
//       { path: "sendboxCode", element: <Suspense fallback={<Loader />}><SendboxCode /></Suspense> },
//       { path: "senderLead", element: <Suspense fallback={<Loader />}><SenderLead /></Suspense> },
//       { path: "serviceConnect", element: <Suspense fallback={<Loader />}><ServiceConnect /></Suspense> },
//       { path: "settings", element: <Suspense fallback={<Loader />}><Settings /></Suspense> },
//       { path: "users", element: <Suspense fallback={<Loader />}><Users /></Suspense> },
//       { path: "users/edit/", element: <Suspense fallback={<Loader />}><EditUser /></Suspense> },
//     ],
//   },
//   {
//     element: <AuthLayout />,
//     children: [
//       { path: "/login", element: <Suspense fallback={<Loader />}><Login /></Suspense> },
//     ],
//   },
// ]);

// export default router;
