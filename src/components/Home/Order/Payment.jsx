import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router";
import checkSmall from "../../../assets/icon/check-small.svg";
import payM1 from "../../../assets/icon/payment-method/logos_google-pay.svg";
import payM2 from "../../../assets/icon/payment-method/logos_visa.svg";
import payM3 from "../../../assets/icon/payment-method/Logo GoPay (SVG-240p) - FileVector69 1.svg";
import payM4 from "../../../assets/icon/payment-method/logos_paypal.svg";
import payM5 from "../../../assets/icon/payment-method/Logo DANA (PNG-240p) - FileVector69 1.SVG";
import payM6 from "../../../assets/icon/payment-method/Bank BCA Logo (SVG-240p) - FileVector69 1.svg";
import payM7 from "../../../assets/icon/payment-method/Bank BRI (Bank Rakyat Indonesia) Logo (SVG-240p) - FileVector69 1.svg";
import payM8 from "../../../assets/icon/payment-method/Vector.svg";
export function Payment() {
  const [isMenuPopUp, setMenuPopup] = useState(false);
  const navigate = useNavigate()
  const payMethods = [
    { method: "gpay", img: payM1 },
    { method: "visa", img: payM2 },
    { method: "gopay", img: payM3 },
    { method: "paypal", img: payM4 },
    { method: "dana", img: payM5 },
    { method: "bca", img: payM6 },
    { method: "bri", img: payM7 },
    { method: "ovo", img: payM8 },
  ];

  const popUp = () => {
    setMenuPopup(isMenuPopUp => !isMenuPopUp)
  }

  
  return (
    <>
      {/* <!-- STEPS SECTION START --> */}

      <>
        <div className="w-full flex flex-col items-center bg-(--secondary-color)/20 relative">
          <section className="steps-info hidden md:flex md:items-center md:justify-center md:py-8 md:px-0 md:gap-6.25">
            <div className="flex flex-col justify-center items-center gap-2.5">
              <div className="step w-11.75 h-11.75 rounded-3xl bg-[#008000] flex justify-center items-center">
                <img src={checkSmall} alt="" />
              </div>
              <p className="text-[#4E4B66] text-[14px]">Dates and Time</p>
            </div>
            <div className=" h-0.5 w-16.5 border-t-2 border-dashed border-(--secondary-color) " />
            <div className="flex flex-col justify-center items-center gap-2.5">
              <div className="step w-11.75 h-11.75 rounded-3xl bg-[#008000] flex justify-center items-center">
                <img src={checkSmall} alt="" />
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
          <form className="payment w-11/12 px-6 mt-12 bg-white rounded-[5px] mb-23.75 md:flex md:flex-col md:p-9.25 md:w-183.75">
            <div className="payment-info">
              <h2 className="text-[32px] font-bold py-6.5">Payment Info</h2>
              <h3 className=" text-(--secondary-color) font-[14px] mb-2.25">
                DATE &amp; TIME
              </h3>
              <p className="font-[16px] ">Tuesday, 07 July 2020 at 02:00pm</p>
              <div className="w-full h-0.25 border-t-1 border-(--secondary-color) mt-2.25 mb-3.75" />
              <h3 className=" text-(--secondary-color) font-[14px] mb-2.25">
                MOVIE TITLE
              </h3>
              <p className="font-[16px] ">Spider-Man: Homecoming</p>
              <div className="w-full h-0.25 border-t-1 border-(--secondary-color) mt-2.25 mb-3.75" />
              <h3 className=" text-(--secondary-color) font-[14px] mb-2.25">
                CINEMA NAME
              </h3>
              <p className="font-[16px] ">CineOne21 Cinema</p>
              <div className="w-full h-0.25 border-t-1 border-(--secondary-color) mt-2.25 mb-3.75" />
              <h3 className=" text-(--secondary-color) font-[14px] mb-2.25">
                NUMBER OF TICKETS
              </h3>
              <p className="font-[16px] ">3 pieces</p>
              <div className="w-full h-0.25 border-t-1 border-(--secondary-color) mt-2.25 mb-3.75" />
              <h3 className=" text-(--secondary-color) font-[14px] mb-2.25">
                TOTAL PAYMENT
              </h3>
              <p className="text-[16px] text-(--primary-color) font-bold">
                $30,00
              </p>
              <div className="w-full h-0.25 border-t-1 border-(--secondary-color) mt-2.25 mb-3.75" />
            </div>
            <div className="personal-information mt-8 mb-5.5 flex flex-col gap-3.5">
              <h2 className="text-[32px] font-bold pb-6.5">
                Personal Information
              </h2>
              <label htmlFor="fname" className="text-[16px] text-[#696f79]">
                Full Name
              </label>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="Input full name . . ."
                className="outline-none h-16 text-[18px]  border border-[#dedede] rounded-[5px] placeholder:p-5 text-3.75 font-extralight"
              />
              <label htmlFor="email" className="text-[16px] text-[#696f79]">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Input email . . ."
                className="outline-none h-16 text-[18px]  border border-[#dedede] rounded-[5px] placeholder:p-5 text-3.75 font-extralight"
              />
              <label
                htmlFor="phone-number"
                className="text-[16px] text-[#696f79]"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                placeholder="Input phone number . . ."
                className="outline-none h-16 text-[18px]  border border-[#dedede] rounded-[5px] placeholder:p-5 text-3.75 font-extralight"
              />
            </div>
            <div className="payment-method mb-10.5 mt-12.5">
              <h2 className="mb-7.5 text-[32px] font-bold ">Payment Method</h2>
              <div className="pay-method-select grid grid-cols-2 gap-4.5 md:grid-cols-4 md:row-span-3 min-h-50">
                {payMethods.map((eL, idx) => (
                  <PaymentMethod id={eL.method} key={idx} payImg={eL.img} />
                ))}
              </div>
            </div>
            <button type="button" onClick={popUp} className="w-full h-14 bg-(--primary-color) flex items-center justify-center text-4 font-bold rounded-[5px] text-white hover:scale-[1.05] cursor-pointer mb-15.5">
              Pay your order
            </button>
          </form>

          <section className={`${isMenuPopUp ? "block" : "hidden"} pop-up absolute inset-0 bg-black/30`}>
            <div className="p-6.25 flex flex-col gap-8.5 w-5/6 h-fit bg-white mx-auto mt-[30%] rounded-[5px] md:w-7/20">
              <h2 className="text-center text-2xl font-bold ">Payment Info</h2>
              <div className="rek-info flex flex-col justify-between md:items-center md:flex-row">
                <p className="text-3.5 text-(--secondary-color)">
                  No. Rekening Virtual :
                </p>
                <div className="flex justify-around items-center gap-5">
                <span className="rek-num text-(--primary-color) text-[18px] font-bold ">
                  12321328913829724
                </span>
                <button className="copy-btn w-18 h-12 border border-(--primary-color) rounded-[10px] bg-white text-[14px] text-(--primary-color) cursor-pointer hover:scale-[1.07] hover:text-white hover:bg-(--primary-color)">
                  copy
                </button>
                </div>
              </div>
              <div className="total-payment flex flex-col gap-2.5 justify-between md:flex-row md:items-center md:gap-0">
                <p className="text-3.5 text-(--secondary-color)/70">
                  Total Payment :
                </p>
                <span className="text-[18px] font-bold text-(--primary-color)">$30</span>
              </div>
              <div>
                <p className="text-(--secondary-color) mb-6">
                  Pay this payment bill before it is due, on
                  <span className="deadline text-[#D00707]">
                    {" "}
                    June 23, 2023
                  </span>
                  . If the bill has not been paid by the specified time, it will
                  be forfeited
                </p>
              </div>

              <div className="option-btn flex flex-col gap-5">
                <button onClick={()=>{navigate("/order/ticket")}} className="check-payment w-full h-fit p-3 border border-(--primary-color) text-(--primary-color) bg-white hover:text-white hover:bg-(--primary-color) rounded-[5px]">Check Payment</button>
                <button type="button" onClick={() =>{setMenuPopup(isMenuPopUp => !isMenuPopUp)}} className={`w-full h-fit p-3 border border-(--primary-color) text-(--primary-color) bg-white hover:text-white hover:bg-(--primary-color) rounded-[5px]`}>Paylater</button>
              </div>
            </div>
          </section>
        </div>
      </>
    </>
  );
}

function PaymentMethod({ id, payImg }) {
  return (
    <label
      htmlFor={id}
      className={`border-2 rounded-[10px] bg-no-repeat bg-center md:w-36.5 h-14 flex items-center justify-center cursor-pointer hover:scale-[1.05]`}
    >
      <img src={payImg} alt={id} className="" />
      <input
        type="radio"
        name="pay-method"
        id={id}
        onChange={() => {
          console.log(id);
        }}
        className="hidden"
      />
    </label>
  );
}
