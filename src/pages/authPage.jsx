import React from "react";
import { Outlet } from "react-router";
import bgImg from "../assets/imgs/bg.png"
import logo from "../assets/icon/tickitz 1.svg";


export function Auth() {
  return (
    <>
      <section style={{ backgroundImage: `url(${bgImg})` }} className="min-h-screen bg-center bg-no-repeat bg-cover relative px-6 py-14 md:px-96">
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center">
      <img src={logo} width={200} height={55} alt="" className="hidden absolute top-3 md:block  "/>
      <div className="flex flex-col px-6 py-13 rounded-[5px] absolute z-10 bg-white  h-fit w-98 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:px-18 md:py-8 md:w-[545px]">
      <Outlet />
      </div>
      
        
      </div>
      </section>
    </>
  );
}
