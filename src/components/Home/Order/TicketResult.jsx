import React, { useState, useEffect } from "react";
import bgImg from "../../../assets/imgs/bg.png";
import logoTickitz from "../../../assets/icon/tickitz 1.svg";
import logoArrow from "../../../assets/icon/arrow-up.svg";
import qrCode from "../../../assets/icon/QR Code 1.svg";
import downloadLogo from "../../../assets/icon/download 1.svg";
import { Link, useParams } from "react-router";
import { useSelector } from "react-redux";
const VITE_AUTH_KEY = import.meta.env.VITE_AUTH_KEY;

export function TicketResult() {
  const { id } = useParams();
  const [orderData, setOrderData] = useState({});

  const orders = useSelector((state) => state.orderTicket.orders);

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
      .then((json) => setOrderData(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <main className="flex flex-col gap-14.5  bg-(--secondary-color)/20 md:flex-row md:gap-0">
        <section
          className="hero-section bg-no-repet bg-cover bg-center relative w-full text-center md:text-start md:w-200 h-230 md:flex-5"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="bg-black/70 flex items-center justify-center w-full h-full">
            <div className="px-25 text flex flex-col items-center md:block gap-5.5">
              <img
                src={logoTickitz}
                alt="tickitz"
                className="w-31.75 h-12 md:w-66.75 md:h-26"
              />
              <h2 className="text-[32px] font-bold text-white md:text-5xl">
                Thankyou For Purchasing
              </h2>
              <p className="text-[18px]  text-white/70 md:text-[24px] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                unde aspernatur exercitationem consectetur odit.
              </p>
              <p className="text-[18px] font-bold text-white flex flex-col items-center gap-5.5 hover:scale-[1.05] cursor-pointer md:flex-row">
                Please Download Your Ticket
                <img
                  src={logoArrow}
                  height={24}
                  width={24}
                  alt="order ticket"
                  className="rotate-90 md:rotate-0"
                />
              </p>
            </div>
          </div>
        </section>

        <section className="ticket-display flex flex-col items-center md:flex-4 md:mt-10">
          <div className="ticket h-fit w-5/6  mt-auto bg-white flex flex-col items-center md:w-80 ">
            <img
              src={qrCode}
              alt=""
              width={186}
              height={186}
              className="mx-auto my-8"
            />
            <div className="flex items-center relative w-full">
              <div className="circle absolute w-15 h-15 rounded-[50%] bg-[#ecedf2] z-10 left-[-30px]" />
              <div className="h-1 w-full absolute border-t-2 border-dashed border-(--secondary-color) " />
              <div className="circle absolute w-15 h-15 rounded-[50%] bg-[#ecedf2]  right-[-30px]" />
            </div>
            <div className="grit-detail px-6 my-12.25 grid grid-cols-2 gap-14.75">
              <div>
                <h3 className="text-[#aaa] text-[15px] font-semibold">Movie</h3>
                <p>{orderData.title}</p>
              </div>
              <div>
                <h3 className="text-[#aaa] text-[15px] font-semibold">
                  Category
                </h3>
                <p>PG-13</p>
              </div>
              <div>
                <h3 className="text-[#aaa] text-[15px] font-semibold">Date</h3>
                <p>07 Jul</p>
              </div>
              <div>
                <h3 className="text-[#aaa] text-[15px] font-semibold">Time</h3>
                <p>2:00pm</p>
              </div>
              <div>
                <h3 className="text-[#aaa] text-[15px] font-semibold">Count</h3>
                <p>{orders.length}</p>
              </div>
              <div>
                <h3 className="text-[#aaa] text-[15px] font-semibold">Seats</h3>
                <ul className="grid grid-cols-2">
                  {orders.length > 0 ? (
                    orders.map((order, index) => (
                      <li key={index} className="">
                        {order}
                        </li>
                    ))
                  ) : (
                    <p className="truncate">Tidak ada kursi</p>
                  )}
                </ul>
              </div>
            </div>
            <p className="total mb-8 border border-(--secondary-color)/70 rounded-[10px] w-5/6 h-12 flex items-center justify-around">
              Total :  <span> $ {orders.length * 10}</span>
            </p>
          </div>
          <div className="btn w-89.5 flex flex-col items-center gap-5 my-5 ">
            <button className="flex justify-center items-center gap-5 w-5/6 h-16 text-(--primary-color) border rounded-[5px] border-(--primary-color) hover:bg-(--primary-color) hover:scale-[1.05] hover:text-white group">
              <img
                src={downloadLogo}
                width={24}
                height={24}
                className="group-hover:hidden"
              />
              <p>Download</p>
            </button>
            <Link
              to="/"
              className="flex items-center justify-center w-5/6 h-16 text-(--primary-color) border border-(--primary-color) hover:bg-(--primary-color) hover:text-white rounded-[5px] hover:scale-[1.05]"
            >
              Done
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
