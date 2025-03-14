import React from "react";
import recomend1 from "../assets/png/movie-h-1.png";
import recomend2 from "../assets/png/movie-h-2.png";
import recomend3 from "../assets/png/movie-h-3.png";
import recomend4 from "../assets/png/movie-h-4.png";
import arrow from "../assets/svg/arrow-up.svg";

export function Recomendation() {
  return (
    <div class="flex flex-col items-center mb-10">
      <p className="text-[18px] text-(--primary-color)">MOVIES</p>
      <h2 className="text-[32px] w-[545px] text-center mb-7">
        Exciting Movies That Should Be Watched Today
      </h2>

      <div className="grid grid-cols-[265px_265px_265px_265px] grid-rows-[490px] gap-4 h-[500px]">
        <div className="movie">
          <div className="flex items-center justify-center">
            <div
              style={{ backgroundImage: `url(${recomend1})` }}
              className="img flex relative items-center justify-center w-66 h-[405px] rounded-[5px] border border-(--primary-color) hover:scale-[1.1] group"
            >
              <div className="detail absolute inset-0 invisible group-hover:visible group-hover:bg-black/70 flex flex-col gap-3 items-center justify-center">
                <a
                  href=""
                  className="w-[188px] h-12  text-(--primary-color) border border-(--primary-color) rounded-[5px] flex justify-center items-center hover:bg-(--primary-color) hover:text-white hover:scale-[1.1] "
                >
                  Details
                </a>
                <a
                  href=""
                  className="w-[188px] h-12  text-(--primary-color) border border-(--primary-color) rounded-[5px] flex justify-center items-center hover:bg-(--primary-color) hover:text-white hover:scale-[1.1] "
                >
                  Buy Ticket
                </a>
              </div>
            </div>
          </div>
          <div className="desc mt-4">
            <div className="movie-title text-[24px] font-bold">Black Widow</div>
            <div className="genres flex gap-2 mt-3">
              <p className="flex items-center justify-center border border-(--secondary-color) rounded-[25px] bg-[rgba(160_163_189_0.1)] px-1.5 py-0.5 h-max w-max">
                Action
              </p>
              <p className="flex items-center justify-center border border-(--secondary-color) rounded-[25px] bg-[rgba(160_163_189_0.1)] px-1.5 py-0.5 h-max w-max">
                Adventure
              </p>
            </div>
          </div>
        </div>

        <div className="movie">
          <div className="flex items-center justify-center">
            <div
              style={{ backgroundImage: `url(${recomend1})` }}
              className="img flex relative items-center justify-center w-66 h-[405px] rounded-[5px] border border-(--primary-color) hover:scale-[1.1] group"
            >
              <div className="detail absolute inset-0 invisible group-hover:visible group-hover:bg-black/70 flex flex-col gap-3 items-center justify-center">
                <a
                  href=""
                  className="w-[188px] h-12  text-(--primary-color) border border-(--primary-color) rounded-[5px] flex justify-center items-center hover:bg-(--primary-color) hover:text-white hover:scale-[1.1] "
                >
                  Details
                </a>
                <a
                  href=""
                  className="w-[188px] h-12  text-(--primary-color) border border-(--primary-color) rounded-[5px] flex justify-center items-center hover:bg-(--primary-color) hover:text-white hover:scale-[1.1] "
                >
                  Buy Ticket
                </a>
              </div>
            </div>
          </div>
          <div className="desc mt-4">
            <div className="movie-title text-[24px] font-bold">Black Widow</div>
            <div className="genres flex gap-2 mt-3">
              <p className="flex items-center justify-center border border-(--secondary-color) rounded-[25px] bg-[rgba(160_163_189_0.1)] px-1.5 py-0.5 h-max w-max">
                Action
              </p>
              <p className="flex items-center justify-center border border-(--secondary-color) rounded-[25px] bg-[rgba(160_163_189_0.1)] px-1.5 py-0.5 h-max w-max">
                Adventure
              </p>
            </div>
          </div>
        </div>

        <div className="movie">
          <div className="flex items-center justify-center">
            <div
              style={{ backgroundImage: `url(${recomend1})` }}
              className="img flex relative items-center justify-center w-66 h-[405px] rounded-[5px] border border-(--primary-color) hover:scale-[1.1] group"
            >
              <div className="detail absolute inset-0 invisible group-hover:visible group-hover:bg-black/70 flex flex-col gap-3 items-center justify-center">
                <a
                  href=""
                  className="w-[188px] h-12  text-(--primary-color) border border-(--primary-color) rounded-[5px] flex justify-center items-center hover:bg-(--primary-color) hover:text-white hover:scale-[1.1] "
                >
                  Details
                </a>
                <a
                  href=""
                  className="w-[188px] h-12  text-(--primary-color) border border-(--primary-color) rounded-[5px] flex justify-center items-center hover:bg-(--primary-color) hover:text-white hover:scale-[1.1] "
                >
                  Buy Ticket
                </a>
              </div>
            </div>
          </div>
          <div className="desc mt-4">
            <div className="movie-title text-[24px] font-bold">Black Widow</div>
            <div className="genres flex gap-2 mt-3">
              <p className="flex items-center justify-center border border-(--secondary-color) rounded-[25px] bg-[rgba(160_163_189_0.1)] px-1.5 py-0.5 h-max w-max">
                Action
              </p>
              <p className="flex items-center justify-center border border-(--secondary-color) rounded-[25px] bg-[rgba(160_163_189_0.1)] px-1.5 py-0.5 h-max w-max">
                Adventure
              </p>
            </div>
          </div>
        </div>

        <div className="movie">
          <div className="flex items-center justify-center">
            <div
              style={{ backgroundImage: `url(${recomend1})` }}
              className="img flex relative items-center justify-center w-66 h-[405px] rounded-[5px] border border-(--primary-color) hover:scale-[1.1] group"
            >
              <div className="detail absolute inset-0 invisible group-hover:visible group-hover:bg-black/70 flex flex-col gap-3 items-center justify-center">
                <a
                  href=""
                  className="w-[188px] h-12  text-(--primary-color) border border-(--primary-color) rounded-[5px] flex justify-center items-center hover:bg-(--primary-color) hover:text-white hover:scale-[1.1] "
                >
                  Details
                </a>
                <a
                  href=""
                  className="w-[188px] h-12  text-(--primary-color) border border-(--primary-color) rounded-[5px] flex justify-center items-center hover:bg-(--primary-color) hover:text-white hover:scale-[1.1] "
                >
                  Buy Ticket
                </a>
              </div>
            </div>
          </div>
          <div className="desc mt-4">
            <div className="movie-title text-[24px] font-bold">Black Widow</div>
            <div className="genres flex gap-2 mt-3">
              <p className="flex items-center justify-center border border-(--secondary-color) rounded-[25px] bg-[rgba(160_163_189_0.1)] px-1.5 py-0.5 h-max w-max">
                Action
              </p>
              <p className="flex items-center justify-center border border-(--secondary-color) rounded-[25px] bg-[rgba(160_163_189_0.1)] px-1.5 py-0.5 h-max w-max">
                Adventure
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-(--primary-color) text-[18px] font-bold flex gap-2 cursor-pointer hover:scale-[1.1] mt-10">
        View All <img src={arrow} alt="" />
      </p>
    </div>
  );
}
