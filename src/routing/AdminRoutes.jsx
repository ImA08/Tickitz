import React from "react";
import { Route, Outlet } from "react-router";
import { PrivateRoute } from "../components/Home/PrivateRoute";
import { AdminPage } from "../pages/adminPage";
import { AdminNavbar } from "../components/admin/AdminNavbar";
import { AdminMovie } from "../components/admin/AdminMovie";

function AdminLayout() {
  return (
    <>
    <AdminNavbar />
      <Outlet />
    </>
  );
}

export function AdminRoutes() {
  return (
    <>
      <Route path="admin" element={<AdminLayout />}>
        <Route path="movie" element={<AdminMovie />} />
      </Route>
    </>
  );
}

