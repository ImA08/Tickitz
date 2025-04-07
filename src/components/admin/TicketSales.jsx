import React, { useState } from "react";
import forwardLogo from "../../assets/icon/Dropdown/Forward.svg";
import graphImg from "../../../public/Graph lines.svg";

export function TicketSales({ movies }) {
  const [openGenre, setOpenGenre] = useState();
  const [openLocation, setOpenLocation] = useState();
  const [selectedGenre, setSelectedGenre] = useState("Category");
  const [getLocation, setLocation] = useState("Location");
  const Location = [
    "Purwokerto",
    "Tegal",
    "Jakarta",
    "Bandung",
    "Tangerang",
    "Surabaya",
    "Padang",
  ].sort();

  const handleGenreSelected = (genre) => {
    setSelectedGenre(genre);
    setOpenGenre(!openGenre);
  };

  const handleLocation = (time) => {
    setLocation(time);
    setOpenLocation(!openLocation);
  };
  return (
    <>
      <section className="h-fit w-10/11  margin-auto bg-white rounded-3xl px-6 md:px-14.5 md:py-10 md:mb-20 md:w-5/6">
        <h2 className="text-[18px] font-bold my-5 md:text-2xl">Ticket sales</h2>
        <div className="flex flex-col gap-2.5 md:flex-row ">
          <div className="relative">
            <button
              onClick={() => {
                setOpenGenre(!openGenre);
              }}
              title={selectedGenre}
              className="bg-[#EFF0F6] w-full  px-5 py-5 font-semibold text-[16px] rounded-2xl flex gap-10 justify-between md:w-56.75"
            >
              <span className="truncate">{selectedGenre}</span>{" "}
              <img src={forwardLogo} alt="" />
            </button>
            {openGenre && (
              <ul className="absolute bg-[#EFF0F6] w-full px-5 py-5 font-semibold text-[16px] rounded-2xl truncate md:w-56.75">
                {(() => {
                  //  Mengumpulkan semua genre dari movie
                  const allGenres = movies
                    .slice(0, 12) // Ambil 12 movie pertama
                    .flatMap((movie) => movie.genres.slice(0, 2)); // Ambil 2 genre pertama dari setiap movie

                  //  Hilangkan duplikat menggunakan Set
                  const uniqueGenres = [...new Set(allGenres)];

                  // Urutkan genre secara alfabetis
                  const sortedGenres = uniqueGenres.sort();

                  // Tampilkan daftar genre dalam `<li>`
                  return sortedGenres.map((genre, index) => (
                    <li
                      key={index}
                      onClick={() => handleGenreSelected(genre)}
                      className="z-10 py-2 truncate border-b cursor-pointer hover:border-b-2 hover:border-(--primary-color) hover:font-bold hover:bg-(--secondary-color)/20 hover:text-(--primary-color)"
                      title={genre}
                    >
                      {genre}
                    </li>
                  ));
                })()}
              </ul>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => {
                setOpenLocation(!openLocation);
              }}
              title={getLocation}
              className="bg-[#EFF0F6] w-full  px-5 py-5 font-semibold text-[16px] rounded-2xl flex gap-10 justify-between md:w-56.75"
            >
              <span className="truncate">{getLocation}</span>{" "}
              <img src={forwardLogo} alt="" />
            </button>
            {openLocation && (
              <ul className="absolute bg-[#EFF0F6] w-full  px-5 py-5 font-semibold text-[16px] rounded-2xl truncate md:w-56.75">
                {Location.map((location) => {
                  return (
                    <li
                      key={Location.indexOf(location)}
                      onClick={() => {
                        handleLocation(`${location}`);
                      }}
                      className="py-2 truncate border-b cursor-pointer hover:border-b-2 hover:border-(--primary-color) hover:font-bold hover:bg-(--secondary-color)/20 hover:text-(--primary-color)"
                      title={location}
                    >
                      {location}
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
          {selectedGenre}, {getLocation}
        </h3>
        <div className="overflow-x-scroll h-63 md:h-full md:overflow-x-hidden">
          <div className="flex h-full">
            <ul className="flex gap-15 flex-col w-fit mr-4">
              <li className="font-[11px] text-(--secondary-color)/90 text-nowrap">
                $ 800
              </li>
              <li className="font-[11px] text-(--secondary-color)/90 text-nowrap">
                $ 400
              </li>
              <li className="font-[11px] text-(--secondary-color)/90 text-nowrap">
                $ 200
              </li>
              <li className="font-[11px] text-(--secondary-color)/90 text-nowrap">
                $ 0
              </li>
              <li className="font-[11px] text-(--secondary-color)/90"> - </li>
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
