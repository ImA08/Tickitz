import React from "react";
import { Route, Outlet } from "react-router";
import { PrivateRoute } from "../components/Home/PrivateRoute";
import { AdminPage } from "../pages/adminPage";
import { AdminNavbar } from "../components/admin/AdminNavbar";
import { AdminMovie } from "../components/admin/AdminMovie";
import { AdminDashboard } from "../components/admin/AdminDashboard";
import { AddNewMovie } from "../components/admin/AddNewMovie";

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
        <Route index element={<AdminDashboard />} />
        <Route path="movie" element={<AdminMovie />} />
        <Route path="addmovie" element={<AddNewMovie />} />

      </Route>
    </>
  );
}
