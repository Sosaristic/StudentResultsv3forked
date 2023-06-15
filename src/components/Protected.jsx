import { Outlet, Navigate } from "react-router-dom";

export function Protected() {
  const token = window.sessionStorage.getItem("token")
  console.log(token);
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div>
      <p>Protected</p>
      <Outlet />
    </div>
  );
}
