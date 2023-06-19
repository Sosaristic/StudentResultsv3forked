import { createBrowserRouter, Navigate } from "react-router-dom";

import {
  Login,
  Register,
  Dashboard,
  Message,
  Profile,
  Notification,
  StudentResult,
  PasswordReset,
} from "./pages";
import { Protected } from "./components/Protected";
import { UserAuthenticationLayout } from "./components/UserAuthenticationLayout";
import { DashboardContextProvider } from "./context/DashboardContext";
export const router = createBrowserRouter([
  {
    element: <UserAuthenticationLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/reset-password", element: <PasswordReset /> },
    ],
  },
  {
    element: (
      <DashboardContextProvider>
        <Protected />
      </DashboardContextProvider>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard />, },
      { path: "/dashboard/messages", element: <Message /> },
      { path: "/dashboard/profile", element: <Profile /> },
      { path: "/dashboard/notifications", element: <Notification /> },
      { path: "/dashboard/student-result", element: <StudentResult /> },
    ],
  },
  {
    path: "/",
    element: <Navigate to={"/login"} />,
  },
]);
