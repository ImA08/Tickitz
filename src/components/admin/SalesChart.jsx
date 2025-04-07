import React, { useState } from "react";
import forwardLogo from "../../assets/icon/Dropdown/Forward.svg";
import graphImg from "../../../public/Graph lines.svg";

export function SalesChart({ movies }) {
  const [openMovie, setOpenMovie] = useState();
  const [openTimeline, setOpenTimeline] = useState();
  const [selectedMovie, setSelectedMovie] = useState("Movies Name");
  const [getTimeline, setTimeline] = useState("Timeline");
  const timeline = ["Daily", "Weekly", "Monthly", "Yearly"];

  const handleMovieSelected = (title) => {
    setSelectedMovie(title);
    setOpenMovie(!openMovie);
  };

  const handleTimeline = (time) => {
    setTimeline(time);
    setOpenTimeline(!openTimeline);
  };
  return (
    <>
      <section className="h-fit w-10/11  margin-auto bg-white rounded-3xl px-6 md:px-14.5 py-10 mb-20 md:w-5/6">
        <h2 className="text-[18px] font-bold my-5 md:text-2xl">Sales Chart</h2>
        <div className="flex flex-col gap-2.5 md:flex-row">
          <div className="relative">
            <button
              onClick={() => {
                setOpenMovie(!openMovie);
              }}
              title={selectedMovie}
              className="bg-[#EFF0F6] w-full px-5 py-5 font-semibold text-[16px] rounded-2xl flex gap-10 justify-between md:w-56.75"
            >
              <span className="truncate">{selectedMovie}</span>{" "}
              <img src={forwardLogo} alt="" />
            </button>
            {openMovie && (
              <ul className="absolute bg-[#EFF0F6] w-full px-5 py-5 font-semibold text-[16px] rounded-2xl truncate z-1 md:w-56.75">
                {movies.slice(0, 12).map((movie) => {
                  return (
                    <li
                      key={movie.id}
                      onClick={() => {
                        handleMovieSelected(`${movie.title}`);
                      }}
                      className="z-10 py-2 truncate border-b cursor-pointer hover:border-b-2 hover:border-(--primary-color) hover:font-bold hover:bg-(--secondary-color)/20 hover:text-(--primary-color)"
                      title={movie.title}
                    >
                      {movie.title}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => {
                setOpenTimeline(!openTimeline);
              }}
              title={getTimeline}
              className="bg-[#EFF0F6] w-full px-5 py-5 font-semibold text-[16px] rounded-2xl flex gap-10 justify-between md:w-56.75"
            >
              <span className="truncate">{getTimeline}</span>{" "}
              <img src={forwardLogo} alt="" />
            </button>
            {openTimeline && (
              <ul className="absolute bg-[#EFF0F6] w-full px-5 py-5 font-semibold text-[16px] rounded-2xl truncate md:w-56.75">
                {timeline.map((time) => {
                  return (
                    <li
                      key={timeline.indexOf(time)}
                      onClick={() => {
                        handleTimeline(`${time}`);
                      }}
                      className="py-2 truncate border-b cursor-pointer hover:border-b-2 hover:border-(--primary-color) hover:font-bold hover:bg-(--secondary-color)/20 hover:text-(--primary-color)"
                      title={time}
                    >
                      {time}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <button className="px-8 py-3 bg-(--primary-color) rounded-2xl text-white cursor-pointer hover:scale-[1.05]">
            Filter
          </button>
        </div>
        <h3 className="my-10 text-[15px] font-semibold -z-10">
          {selectedMovie}
        </h3>
        <div className="overflow-x-scroll md:overflow-hidden h-63 md:h-full">
          <div className="flex h-full">
            <ul className="flex gap-15 flex-col w-fit mr-4">
              <li className="font-[11px]  text-(--secondary-color)/90 text-nowrap">$ 800</li>
              <li className="font-[11px]  text-(--secondary-color)/90 text-nowrap">$ 400</li>
              <li className="font-[11px]  text-(--secondary-color)/90 text-nowrap">$ 200</li>
              <li className="font-[11px]  text-(--secondary-color)/90 text-nowrap">$ 0</li>
              <li className="font-[11px]  text-(--secondary-color)/90">-</li>
            </ul>
            <div className="flex flex-col flex-1 h-full">
              <img src={graphImg} alt="graph" className="h-full w-216" />
              <ul className="flex gap-10 mt-5.5 md:gap-0 md:justify-between">
                <li className="font-[11px] text-(--secondary-color)/90">Jan</li>
                <li className="font-[11px] text-(--secondary-color)/90">Feb</li>
                <li className="font-[11px] text-(--secondary-color)/90">Mar</li>
                <li className="font-[11px] text-(--secondary-color)/90">Apr</li>
                <li className="font-[11px] text-(--secondary-color)/90">May</li>
                <li className="font-[11px] text-(--secondary-color)/90">
                  March
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
