import { Routes, Route, Outlet } from "react-router";

import { Footer } from "./components/Footer";
import { Home } from "./pages/home";
import { Auth } from "./pages/auth";
import { Register } from "./components/register";
import { LogIn } from "./components/LogIn";
import {Navbar} from "./components/Navbar"
import { MoviePage } from "./components/MoviePage";
function HomeLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function AuthLayout(){
  return (
    <>
    <Auth />

    </>
  )
}

export function Router() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MoviePage />} />
      </Route>

      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<LogIn />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}
