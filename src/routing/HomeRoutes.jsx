import { Route, Outlet } from "react-router";
import { PrivateRoute } from "../components/Home/PrivateRoute";
import { Navbar } from "../components/Home/Navbar";
import { Footer } from "../components/Home/Footer";
import { Home } from "../pages/homePage";
import { MoviePage } from "../components/Home/MoviePage";
import { DetailMovie } from "../components/Home/DetailMovie";
import { Payment } from "../components/Home/Order/Payment";
import { TicketResult } from "../components/Home/Order/TicketResult";
import { Profile } from "../components/Home/Profile";


function HomeLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export function HomeRoutes() {
  return (
    <Route element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route
        path="movies"
        element={
          <PrivateRoute redirectTo="/auth">
            <MoviePage />
          </PrivateRoute>
        }
      />
      <Route
        path="details/:id"
        element={
          <PrivateRoute redirectTo="/auth">
            <DetailMovie />
          </PrivateRoute>
        }
      />

      <Route path="order">
        <Route path="payment" element={<Payment />} />
        <Route path="ticket" element={<TicketResult />} />
      </Route>

      <Route path="profile">
        <Route index element={<Profile />} />
      </Route>
    </Route>
  );
}
