import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const DashboardPage = lazy(() => import("./dashboard.page"));
const LockerPage = lazy(() => import("./locker.page"));
const DatalabPage = lazy(() => import("./datalab.page"));

export const dashboardRoutes = [
  {
    path: "",
    element: <DashboardPage />,
  },
  {
    path: "locker",
    element: <LockerPage />,
  },
  {
    path: "datalab",
    element: <DatalabPage />,
  }
];

export default function DashboardRoutes() {
  return (
    <Routes>
      {dashboardRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
} 