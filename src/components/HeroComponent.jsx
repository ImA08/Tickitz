import React from "react";
import hero1 from "../assets/imgs/Rectangle 35.jpg";
import hero2 from "../assets/imgs/Rectangle 36.jpg";
import hero3 from "../assets/imgs/Rectangle 37.jpg";
import hero4 from "../assets/imgs/Rectangle 38.jpg";

export function HeroComponent() {
  return (
    <>
      <div className="hero-section flex justify-between items-center gap-5 pt-13 px-32 pb-32">
        <div className="hero-caption flex flex-col gap-2.5">
          <p className="text-(--primary-color) text-[18px]">
            MOVIE TICKET PURCHASES #1 IN INDONESIA
          </p>
          <p className="text-5xl/[70px] font-medium">
            Experience the Magic of Cinema: Book Your Tickets Today
          </p>
          <p className="text-[16px] text-(--secondary-color)">Sign up and get the ticket with a lot of discount</p>
        </div>
        <div class="hero-images grid grid-cols-[218px_218px] grid-rows-[180px_60px_180px] gap-1.5 h-[500px]">
          <div
            style={{ backgroundImage: `url(${hero1})` }}
            className="bg-center bg-no-repeat bg-cover rounded-t-2xl"
          ></div>
          <div
            style={{ backgroundImage: `url(${hero2})` }}
            className="bg-cover bg-center rounded-tr-lg row-span-2"
          ></div>
          <div
            style={{ backgroundImage: `url(${hero3})` }}
            className="bg-cover bg-center row-span-2 rounded-bl-lg"
          ></div>
          <div
            style={{ backgroundImage: `url(${hero4})` }}
            className="bg-center bg-no-repeat bg-cover"
          ></div>
        </div>
      </div>
    </>
  );
}

<div className="hero-section">
  <div className="hero-caption text-center">
    <p className="text-sm font-semibold text-gray-500">
      MOVIE TICKET PURCHASES #1 IN INDONESIA
    </p>
    <p className="text-lg font-bold">
      Experience the Magic of Cinema: Book Your Tickets Today
    </p>
    <p className="text-sm text-gray-400">
      Sign up and get the ticket with a lot of discount
    </p>
  </div>

  <div className="hero-images grid grid-cols-[218px_218px] grid-rows-[180px_60px_180px] gap-1 h-[500px]">
    <div
      className="bg-cover bg-center rounded-tl-lg"
      style={{ backgroundImage: "url('./assets/imgs/Rectangle%2035.jpg')" }}
    ></div>
    <div
      className="bg-cover bg-center rounded-tr-lg row-span-2"
      style={{ backgroundImage: "url('./assets/imgs/Rectangle%2036.jpg')" }}
    ></div>
    <div
      className="bg-cover bg-center row-span-2 rounded-bl-lg"
      style={{ backgroundImage: "url('./assets/imgs/Rectangle%2037.jpg')" }}
    ></div>
    <div
      className="bg-cover bg-center rounded-br-lg"
      style={{ backgroundImage: "url('./assets/imgs/Rectangle%2038.jpg')" }}
    ></div>
  </div>
</div>;
