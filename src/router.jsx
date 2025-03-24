import { Routes, Route, Outlet } from "react-router";

import { Auth } from "./pages/authPage";
import { Register } from "./components/auth/Register";
import { LogIn } from "./components/auth/LogIn";
;
import { HomeRoutes } from "./routing/HomeRoutes";
import { AdminRoutes } from "./routing/AdminRoutes";


function AuthLayout() {
  return (
    <>
      <Auth />
    </>
  );
}

export function Router() {
  return (
    <Routes>
     
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<LogIn />} />
        <Route path="register" element={<Register />} />
      </Route>

     
      {HomeRoutes()}
      {AdminRoutes()}
    </Routes>
  );
}
