import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router";
import checkSmall from "../../../assets/icon/check-small.svg";
const VITE_AUTH_KEY = import.meta.env.VITE_AUTH_KEY;
import cinemaImg from "../../../assets/svg/cinema/CineOne21.svg";
import arrowLogo from "../../../assets/icon/arrow-down-black.svg";

import { Dropdown } from "./DropDown";
import { SeatComponent } from "./SeatComponent";
import { useSelector } from "react-redux";

function Order() {
  const { id } = useParams();
  const [seatOrder, setSeatOrder] = useState({});
  const navigate = useNavigate();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${VITE_AUTH_KEY}`,
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((json) => setSeatOrder(json))
      .catch((err) => console.error(err));
  }, []);

  const orders = useSelector((state) => state.orderTicket.orders);

  const sortOrders = [...orders].sort();

  const [selectedCols, setSelectedCols] = useState("-");
  const [selectedRows, setSelectedRows] = useState("-");

  const cols = ["A", "B", "C", "D", "E", "F", "G"];
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const handleCheckOut = () => {
    navigate(`/order/${id}/payment`);
  };

  return (
    <>
      <main className="bg-(--secondary-color)/20 px-6 md:px-0">
        <section className="steps-info hidden md:flex md:items-center md:justify-center md:py-8 md:px-0 md:gap-6.25">
          <div className="flex flex-col justify-center items-center gap-2.5">
            <div className="step w-11.75 h-11.75 rounded-3xl bg-[#008000] flex justify-center items-center">
              <img src={checkSmall} alt="" />
            </div>
            <p className="text-[#4E4B66] text-[14px]">Dates and Time</p>
          </div>
          <div className=" h-0.5 w-16.5 border-t-2 border-dashed border-(--secondary-color) " />
          <div className="flex flex-col justify-center items-center gap-2.5">
            <div className="step w-11.75 h-11.75 rounded-3xl bg-(--primary-color) flex justify-center items-center text-white">
              2
            </div>
            <p className="text-[#4E4B66] text-[14px]">Seat</p>
          </div>
          <div className=" h-0.5 w-16.5 border-t-2 border-dashed border-(--secondary-color) " />
          <div className="flex flex-col justify-center items-center gap-2.5">
            <div className="step w-11.75 h-11.75 rounded-3xl bg-(--primary-color) flex justify-center items-center text-white">
              3
            </div>
            <p className="text-[#4E4B66] text-[14px]">Payment</p>
          </div>
        </section>
        <div className="h-fit w-full flex  gap-4  pb-32 md:justify-center  md:mx-auto md:w-4/5">
          <section className="bg-white w-full mt-12 rounded-[10px] px-5.5 pb-12 md:pb-17.75 md:my-0 md:w-2/3">
            <div className=" h-fit my-10 py-3.25 px-5.75 border border-(--secondary-color)/70 flex gap-4 flex-col items-center md:flex-row ">
              <div
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${seatOrder.poster_path})`,
                }}
                className="w-full h-85 bg-center bg-no-repeat bg-cover md:w-46 md:h-32"
              />
              <div className="flex flex-col gap-3 w-75 items-center md:items-start">
                <h2 className="text-2xl font-semibold truncate ">
                  {seatOrder.title}
                </h2>
                <ul className="flex gap-1.75">
                  {seatOrder.genres?.slice(0, 2).map((genre) => (
                    <li
                      key={genre.id}
                      title={genre.name}
                      className="w-fit h-fit px-6.25 py-2 rounded-3xl bg-(--secondary-color)/10 text-[16px] truncate"
                    >
                      {genre.name}
                    </li>
                  ))}
                </ul>
                <p className="text-[14px]">Regular - 13.00 PM</p>
              </div>
              <div className="self-end w-full flex items-center justify-center">
                <button
                  onClick={() => {
                    navigate(-1);
                  }}
                  className=" bg-[rgba(29,78,216,0.20)] text-(--primary-color) w-fit h-fit px-6.25 py-3  rounded-3xl cursor-pointer hover:scale-[1.05] md:bg-(--primary-color) md:text-white md:rounded-[5px]"
                >
                  Change
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-[18px] md:text-[24px] font-bold">
                Choose Your Seat
              </h2>
              <div className="flex flex-col items-center justify-center">
                <h3 className="hidden text-[14px] font-semibold md:block">
                  Screen
                </h3>
                <div className="w-5/6 h-1 border-2 bg-[#9570FE] border-[#9570FE] rounded-3xl md:border-(--secondary-color) my-5 md:bg-(--secondary-color)" />
                <div className="flex gap-6.75 md:gap-18">
                  <div className="grid grid-cols-7 gap-1.5 md:grid-cols-8 md:gap-2">
                    {cols.map((col) => {
                      return (
                        <>
                          <p className="hidden md:block">{col}</p>
                          {rows.slice(0, 7).map((row) => {
                            return <SeatComponent col={col} row={row} />;
                          })}
                        </>
                      );
                    })}
                    <div />
                    {rows.slice(0, 7).map((row) => {
                      return (
                        <p className="hidden text-center md:block">{row}</p>
                      );
                    })}
                  </div>
                  <div className="grid grid-cols-7  gap-1.5 md:gap-2">
                    {cols.map((col) => {
                      return (
                        <>
                          {rows.slice(7, 14).map((row) => {
                            return <SeatComponent col={col} row={row} />;
                          })}
                        </>
                      );
                    })}
                    {rows.slice(7, 14).map((row) => {
                      return (
                        <p className="text-center hidden md:block">{row}</p>
                      );
                    })}
                  </div>
                </div>
              </div>
              <h2 className="text-[18px] font-bold py-10 md:text-[24px]">
                Seating Key
              </h2>
              <div className="grid grid-cols-2 md:gap-10 md:flex">
                <div className="flex mb-4 md:hidden">
                  <img
                    src={arrowLogo}
                    height={16}
                    width={16}
                    className="rotate-90 mr-4"
                  />
                  <p className="pr-10 text-[13px]">A - G</p>
                </div>
                <div className="flex mb-4 md:hidden">
                  <img
                    src={arrowLogo}
                    height={16}
                    width={16}
                    className="mr-4"
                  />
                  <p className="pr-10 text-[13px]">1 - 14</p>
                </div>
                <div className="flex mb-4 md:mb-0">
                  <div className="mr-4 w-6.5 h-6.5 bg-(--secondary-color) rounded-[5px]" />
                  <p className="pr-10 text-[13px]">Available</p>
                </div>
                <div className="flex mb-4 md:mb-0">
                  <div className="mr-4 w-6.5 h-6.5 bg-(--primary-color) rounded-[5px]" />
                  <p className="pr-10 text-[13px]">Selected</p>
                </div>
                <div className="flex mb-4 md:mb-0">
                  <div className="mr-4 w-6.5 h-6.5  bg-[#F589D7] rounded-[5px]" />
                  <p className="pr-10 text-[13px]">Love nest</p>
                </div>
                <div className="flex mb-4 md:mb-0">
                  <div className="mr-4 w-6.5 h-6.5 bg-[#6E7191] rounded-[5px]" />
                  <p className="pr-10 text-[13px]">Sold</p>
                </div>
              </div>

              <Dropdown
                options1={cols}
                options2={rows}
                selectedCols={selectedCols}
                setSelectedCols={setSelectedCols}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
              />
            </div>
          </section>

          <section className="w-1/3 hidden md:block md:static">
            <div className="bg-white h-fit rounded-[10px] py-9.5">
              <div className="flex flex-col items-center">
                <img src={cinemaImg} width={164} height={70} alt="" />
                <p className="pt-5.5 text-2xl font-semibold">
                  CineOne21 Cinema
                </p>
              </div>
              <div className="px-5.5">
                <div className="flex justify-between py-4">
                  <p className="text-[14px] text-(--secondary-color)">
                    Movie selected
                  </p>
                  <p className="text-[14px] font-semibold truncate">
                    {seatOrder.title}
                  </p>
                </div>
                <div className="flex justify-between py-4">
                  <p className="text-[14px] text-(--secondary-color)">
                    Tuesday, 07 July 2020
                  </p>
                  <p className="text-[14px] font-semibold truncate">13.00 pm</p>
                </div>
                <div className="flex justify-between py-4">
                  <p className="text-[14px] text-(--secondary-color)">
                    One ticket price
                  </p>
                  <p className="text-[14px] font-semibold truncate">$ 10</p>
                </div>
                <div className="flex justify-between py-4">
                  <p className="text-[14px] text-(--secondary-color)">
                    Seat choosed
                  </p>
                  <div className="text-[14px] font-semibold truncate">
                    {orders.length > 0 ? (
                      sortOrders.map((seat) => (
                        <span key={seat} className="text-gray-800">
                          {seat}{" "}
                        </span>
                      ))
                    ) : (
                      <p className="text-gray-500">No seats selected</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="h-1.5 w-full border-b-2 border-(--secondary-color)/70" />
              <div className="mt-6 mx-5.5 flex justify-between">
                <p className="text-[18px] font-semibold">Total payment</p>
                <p className="text-[18px] font-semibold text-(--primary-color)">
                  $ {orders.length * 10}
                </p>
              </div>
            </div>
            <button
              onClick={handleCheckOut}
              className="mt-10.5 w-full py-5 bg-(--primary-color) text-white rounded-[10px] cursor-pointer hover:scale-[1.05]"
            >
              Checkout now
            </button>
          </section>
        </div>
      </main>
    </>
  );
}

export function SeatOrder() {
  return <Order />;
}
