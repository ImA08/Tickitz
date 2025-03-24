import React from "react";
import { Link } from "react-router";
import { HeroComponent } from "../components/Home/HeroComponent";
import { Features } from "../components/Home/Features";
import { MovieList } from "../components/Home/MovieList";
import { NewsLetter } from "../components/Home/NewsLetter";
import arrow from "../assets/svg/arrow-up.svg";


export function Home() {
  return (
    <>
      <main className="flex flex-col px-6 md:px-50">
        <HeroComponent />
        <Features />

        <div className="items-center mb-10">
          <p className="text-[18px] font-bold text-(--primary-color) text-center">MOVIES</p>
          <h2 className="text-[32px] md:w-[545px] text-center mb-7 mx-auto">
            Exciting Movies That Should Be Watched Today
          </h2>
          <MovieList />

          <Link to="/movies" className="text-(--primary-color) text-[18px] font-bold flex gap-2 cursor-pointer hover:scale-[1.1] mt-10 justify-center">
            View All <img src={arrow} alt="" />
          </Link>
        </div>

        <div className="upcomin-movies mb-32">
          <p className="text-[18px] font-bold text-(--primary-color)">UPCOMING MOVIES</p>
          <div className="flex justify-between items-center">
            <h2 className="text-[32px] w-[545px] mb-7">Exciting Movies Coming Soon</h2>
            <div className="arrows flex justify-between items-center gap-3">
              <div style={{ backgroundImage: `url(${arrow})` }} className="arrow flex justify-center items-center bg-center h-15 w-15 border border-(--secondary-color) rounded-full cursor-pointer hover:scale-[1.1]"><img src={arrow} className="rotate-180" alt="" /></div>
              <div style={{ backgroundImage: `url(${arrow})` }} className="arrow flex justify-center items-center bg-center h-15 w-15 border border-(--secondary-color) rounded-full cursor-pointer hover:scale-[1.1]"><img src={arrow} alt="" /></div>
            </div>
          </div>
          <MovieList />
        </div>
        <NewsLetter />

        
      </main>
    </>
  );
}
