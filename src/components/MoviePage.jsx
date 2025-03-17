import React from "react";
import bgImage from "../assets/imgs/image 1.jpg";
import searchIcon from "../assets/icon/Search.svg"
import { NewsLetter } from "./NewsLetter";
import { MovieList } from "./MovieList";

export function MoviePage() {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${bgImage})` }}
        className="heading bg-center bg-no-repeat bg-cover relative h-[500px] before:content-[''] before:absolute before:inset-0 before:bg-[rgba(0,0,0,0.5)]"
      >
        <div className="flex flex-col z-10 text-center absolute md:items-start md:left-32.5 top-37 md:gap-2.5">
          <p className="text-[18px] font-bold text-white">
            LIST MOVIE OF THE WEEK
          </p>
          <h2 className="text-5xl font-medium text-white md:w-[638px] leading-17.5">
            Experience the Magic of Cinema: Book Your Tickets Today
          </h2>
        </div>
      </section>

      <section className="search px-6 flex flex-col items-start gap-5  md:flex-row md:px-50 my-18">
        <div className="">
          <h2 className="text-[#4e4b66] font-semibold text-[16px] mb-2.5">Cari Event</h2>
          <input type="text" name="search" placeholder="New Born Expert" style={{ backgroundImage: `url(${searchIcon})` }} height={24} width={24} className="h-16 w-[340px] border border-[#dedede] rounded-[5px] bg-[20px_20px] px-5 py-4 pl-4.5" />
        </div>
        <div>
          <h2 className="text-[#4e4b66] font-semibold text[16px] my-2.5">Filter</h2>
          <div className="flex flex-col gap-8.5 md:flex-row">
            <a href="" className="genre w-fit h-10 px-6 py-2.5 rounded-[5px] hover:bg-(--primary-color) hover:text-white">
              Thriller
            </a>
            <a href="" className="genre w-fit h-10 px-6 py-2.5 rounded-[5px] hover:bg-(--primary-color) hover:text-white">
              Horror
            </a>
            <a href="" className="genre w-fit h-10 px-6 py-2.5 rounded-[5px] hover:bg-(--primary-color) hover:text-white">
              Romantic
            </a>
            <a href="" className="genre w-fit h-10 px-6 py-2.5 rounded-[5px] hover:bg-(--primary-color) hover:text-white">
              Adventure
            </a>
            <a href="" className="genre w-fit h-10 px-6 py-2.5 rounded-[5px] hover:bg-(--primary-color) hover:text-white">
              Sci-Fi
            </a>
          </div>
        </div>
      </section>

<section className="flex flex-col gap-5 px-6 md:px-50">
    <MovieList />
    <MovieList />
    <MovieList />
</section>

      <section className="px-6 md:px-50">
        <NewsLetter />
      </section>
    </>
  );
}
