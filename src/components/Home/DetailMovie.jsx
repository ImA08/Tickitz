import React,{useEffect, useState} from "react";
import { useParams } from "react-router";
import posterMovie from "../../assets/imgs/poster-movie-detail.png";
import bgImg from "../../assets/imgs/image 1.jpg";
import logoCalender from "../../assets/icon/Dropdown/calendar (1) 1.svg"
import logoForward from "../../assets/icon/Dropdown/Forward.svg"
import logoTime from "../../assets/icon/Dropdown/time.svg"
import logoLocation from "../../assets/icon/Dropdown//entypo_location.svg"
import cinema1 from "../../assets/svg/cinema/ebv.id.svg"
import cinema2 from "../../assets/svg/cinema/hiflix.svg"
import cinema3 from "../../assets/svg/cinema/CineOne21.svg"
import cinema4 from "../../assets/svg/cinema/ebv.id.svg"
const VITE_AUTH_KEY = import.meta.env.VITE_AUTH_KEY


export function DetailMovie() {
  const { id } = useParams();

const [detailsMovie, setDetailMovie] = useState({});

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${VITE_AUTH_KEY}` 
  },
};

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
  .then(res => res.json())
  .then(json => setDetailMovie(json))
  .catch(err => console.error(err));
}, [])

// console.log(detailsMovie, "LIHAT AKU")

  // const movie = movies.find(m => m.id === parseInt(id));
  return (
    <>
      <section className="heading">
        <div
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${detailsMovie.backdrop_path})` }}
          className="bg-img-heading bg-center bg-no-repeat bg-cover relative h-[500px] before:absolute before:inset-0 before:bg-black/50"
        ></div>
        <div className="px-6 md:px-32.5">
          <div className="md:flex md:gap-5">
            <img
              src={`https://image.tmdb.org/t/p/w500${detailsMovie.poster_path}`}
              alt=""
              className="w-full poster relative top-[-163px] md:w-81.75 md:h-125.5"
            />
            <div className="details">
              <h2 className="text-[32px] font-bold pb-6">
                {detailsMovie.title}
              </h2>
              <div className="genres flex gap-2 mb-3 ">

                {detailsMovie.genres?.slice(0,2).map((genre) => (
                    <p
                      key={genre.id}
                      title={genre.name}
                      className="w-fit h-fit px-6.5 py-3 text-[16px] text-(--secondary-color) bg-(--secondary-color)/10 rounded-[25px] truncate"
                    >
                      {genre.name}
                    </p>
                  ))}
              </div>

              <div className="w-fit flex gap-16.5">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <p className="text-[14px] text-(--secondary-color)/70">
                      Release Date
                    </p>
                    <p className="text-[16px]">{detailsMovie.release_date}</p>
                  </div>

                  <div className="flex flex-col">
                    <p className="text-[14px] text-(--secondary-color)/70">
                      Duration
                    </p>
                    <p className="text-[16px]">{detailsMovie.runtime} Minutes</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <p className="text-[14px] text-(--secondary-color)/70">
                      Directed by
                    </p>
                    <p className="text-[16px]">Jon Watss</p>
                  </div>

                  <div className="flex flex-col">
                    <p className="text-[14px] text-(--secondary-color)/70">
                      Casts
                    </p>
                    <p className="text-[16px]">
                      Tom Holland, Michael Keaton, Robert Downey Jr
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="synopsis">
            <h2 className="text-[20px] font-semibold mb-1">Synopsis</h2>
            <p className="text-[16px] text-(--secondary-color)">
              {detailsMovie.overview}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-7 book-ticket flex flex-col justify-center items-center md:px-32.5 md:mt-14 md:block">
        <h2 className="text-[32px] mb-9.5 ">Book Tickets</h2>
        <div className="w-full flex flex-col gap-7.5 md:flex-row">
          <div>
            <p className="text-[20px] text-black font-medium mb-3">Choose Date</p>
            
            <div className="w-full h-12 bg-[#EFF0F6] rounded-[5px] flex items-center justify-around md:w-71 md:h-14">
              {/* <img src={logoCalender} alt="" /> */}
              <input type="date" name="" id="" />
              {/* <img src={logoForward} alt="" /> */}
            </div>
          </div>
          <div className="hidden md:block">
            <p className="hidden text-[20px] text-black font-medium mb-3 md:block">Choose Time</p>
            <div className="w-full h-12 bg-[#EFF0F6] rounded-[5px] flex items-center justify-around md:w-71 md:h-14">
              {/* <img src={logoTime} alt="" /> */}
              <input type="time" name="" id="" />
              {/* <img src={logoForward} alt="" /> */}
            </div>
          </div>
          <div>
            <p className="hidden text-[20px] text-black font-medium mb-3 md:block">Choose Location</p>
            <div className="w-full h-12 bg-[#EFF0F6] rounded-[5px] flex items-center justify-around md:w-71 md:h-14">
              <img src={logoLocation} alt="" />
              <p>Purwokerto</p>
              <img src={logoForward} alt="" />
            </div>
          </div>
          <a href="" className="btn w-full h-14 bg-(--primary-color) rounded-[5px] flex items-center justify-center text-white cursor-pointer md:self-end md:w-47">
            Filter
          </a>
        </div>
        <div className="w-full choose-cinema flex flex-col items-center">
          <did className="head flex gap-8.5 my-10 md:self-start">
            <h2 className="hidden text-[20px] text-black font-medium md:block">Choose Cinema</h2>
            <p className="text-[18px] text-(--secondary-color)/70"> 39 result</p>
          </did>
          <div className="w-full cinema flex flex-col gap-4.5 md:flex-row md:self-start">
            <div style={{ backgroundImage: `url(${cinema1})` }} className="w-full h-46.75 border border-(--secondary-color)/60 rounded-[5px] bg-center bg-no-repeat hover:scale-[1.05] hover:bg-(--primary-color) cursor-pointer md:w-66 md:h-39.5">
            </div>
            <div style={{ backgroundImage: `url(${cinema2})` }} className="w-full h-46.75 border border-(--secondary-color)/60 rounded-[5px] bg-center bg-no-repeat hover:scale-[1.05] hover:bg-(--primary-color) cursor-pointer md:w-66 md:h-39.5">
            </div>
            <div style={{ backgroundImage: `url(${cinema3})` }} className="w-full h-46.75 border border-(--secondary-color)/60 rounded-[5px] bg-center bg-no-repeat hover:scale-[1.05] hover:bg-(--primary-color) cursor-pointer md:w-66 md:h-39.5">
            </div>
            <div style={{ backgroundImage: `url(${cinema4})` }} className="w-full h-46.75 border border-(--secondary-color)/60 rounded-[5px] bg-center bg-no-repeat hover:scale-[1.05] hover:bg-(--primary-color) cursor-pointer md:w-66 md:h-39.5">
            </div>
          </div>
          <div className="pages flex mt-9 mb-12.5 gap-2">
            <div className="w-10 h-10 flex items-center justify-center text-[18px] border cursor-pointer border-(--secondary-color)/60 hover:bg-(--primary-color) hover:text-white rounded-[5px]">1</div>
            <div className="w-10 h-10 flex items-center justify-center text-[18px] border cursor-pointer border-(--secondary-color)/60 hover:bg-(--primary-color) hover:text-white rounded-[5px]">2</div>
            <div className="w-10 h-10 flex items-center justify-center text-[18px] border cursor-pointer border-(--secondary-color)/60 hover:bg-(--primary-color) hover:text-white rounded-[5px]">3</div>
            <div className="w-10 h-10 flex items-center justify-center text-[18px] border cursor-pointer border-(--secondary-color)/60 hover:bg-(--primary-color) hover:text-white rounded-[5px]">4</div>
          </div>
          <div className="hidden btn h-14 w-47 bg-(--primary-color) rounded-[5px] md:flex items-center justify-center text-white cursor-pointer hover:scale-[1.05]">Book Now</div>
        </div>
      </section>
    </>
  );
}
