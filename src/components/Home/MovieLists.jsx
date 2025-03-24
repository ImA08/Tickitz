import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import {getMovies} from "../../js/fetching.mjs"

export function MovieLists() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);


  return (
    <div className="grid grid-cols-[265px_265px_265px_265px] grid-rows-[490px] gap-4 h-fit overflow-scroll md:overflow-hidden mb-2.5">
      {movies.slice(0, 12).map((movie) => (
        <MovieCard key={movie.id} id={movie.id} title = {movie.title} poster= {movie.poster_path} genres={movie.genres} />
      ))}
    </div>
  );
}
