import React, { useState, useEffect } from "react";
import { getMovies } from "../../js/fetching.mjs";
import { SalesChart } from "./SalesChart";
import { TicketSales } from "./TicketSales";

export function AdminDashboard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  console.log(movies);

  return (
    <>
      <main className="w-full h-full bg-(--secondary-color)/20 flex flex-col items-center py-11 ">
        <SalesChart movies={movies} />
        <TicketSales movies={movies} />
      </main>
    </>
  );
}
