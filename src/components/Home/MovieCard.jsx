import React from "react";
import { Link } from "react-router";

function MovieCard({ key, id, title, poster, genres,  }) {
    console.log(id, title, "INI YANG BARU")
  return (
    <div className="movie w-[300px]">
      <div className="flex items-center justify-center">
        <div
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster})` }}
          className="img flex relative items-center justify-center w-66 h-[405px] rounded-[5px] border border-(--primary-color) hover:scale-[1.1] group bg-cover bg-center"
        >
          <div className="detail absolute inset-0 invisible group-hover:visible group-hover:bg-black/70 flex flex-col gap-3 items-center justify-center">
            <Link
              to={`/details/${id}`}
              className="w-[188px] h-12 text-white border border-white rounded-[5px] flex justify-center items-center hover:bg-(--primary-color) hover:text-white hover:scale-[1.1]"
            >
              Details
            </Link>
            <Link
              to="/order/payment"
              className="w-[188px] h-12 text-white border border-white rounded-[5px] flex justify-center items-center hover:bg-(--primary-color) hover:text-white hover:scale-[1.1]"
            >
              Buy Ticket
            </Link>
          </div>
        </div>
      </div>
      <div className="desc mt-4">
        <div className="movie-title text-[24px] font-bold truncate" title={title}>{title}</div>
        <div className="genres flex gap-2 mt-3">
          {genres.map((genre, index) => (
            <p
              key={index}
              className="flex items-center justify-center border border-(--secondary-color) rounded-[25px] bg-[rgba(160_163_189_0.1)] px-1.5 py-0.5 h-max w-max"
            >
              {genre}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
