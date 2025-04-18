import React, { useEffect, useState } from "react";
import cinemaThumbN from "../../assets/svg/CineOne21 2.svg";
import forwardIcon from "../../assets/icon/Dropdown/Forward.svg";
import qrCode from "../../assets/icon/QR Code 1.svg";

const TicketDetails = ({ ticket }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const isPaid = ticket.statusPayment; // Ubah status pembayaran

  return (
    <div className="w-full bg-[#F5F7F8] rounded-[10px] py-10">
      {/* Header Ticket */}
      <div className="px-12 pb-10 flex justify-between items-center">
        <div>
          <p className="text-[14px] text-[#aaa]">{ticket.dateTime}</p>
          <p className="text-[24px] font-semibold">{ticket.movieTitle}</p>
        </div>
        <img src={cinemaThumbN} width={160} height={64} alt="Cinema Logo" />
      </div>

      <div className="w-full h-1 border-b border-gray-300" />

      {/* Status Ticket */}
      <div className="flex justify-between px-10 py-8">
        <div className="flex gap-4 items-center">
          <button className={`px-5 py-2 rounded-[5px] text-[14px] font-bold ${
            isPaid ? "bg-[#6E7191]/20 text-[#6E7191]" : "bg-[#00BA88]/20 text-[#00BA88]"
          }`}>
            {isPaid ? "Ticket Used" : "Ticket Inactive"}
          </button>
          <button className={`px-5 py-2 rounded-[5px] text-[14px] font-bold ${
            isPaid ? "bg-[#1D4ED8]/20 text-[#1D4ED8]" : "bg-[#E82C2C]/20 text-[#E82C2C]"
          }`}>
            {isPaid ? "Paid" : "Not Paid"}
          </button>
        </div>
        <div
          onClick={toggleMenu}
          className="flex items-center justify-between gap-3 cursor-pointer hover:text-blue-600 hover:font-semibold group"
        >
          Show Details{" "}
          <img
            src={forwardIcon}
            alt="details"
            width={15}
            height={30}
            className={`group-hover:scale-[1.1] ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>
      </div>

      {/* Detail Ticket */}
      {isOpen && (
        <div className="px-6.25 flex-col gap-8.5 transition-all duration-300 flex">
          {isPaid ? (
            <div className="ticket flex items-start">
              <img src={qrCode} alt="QR Code" width={186} height={186} className="mx-auto my-8" />
              
              <div className="grid grid-cols-3 gap-6 px-6 my-12">
                <div>
                  <h3 className="text-gray-500 text-[15px] font-semibold">Seats</h3>
                  <p>{ticket.seats.join(", ")}</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-[15px] font-semibold">Movie</h3>
                  <p>{ticket.movieTitle}</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-[15px] font-semibold">Date</h3>
                  <p>{ticket.dateTime}</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-[15px] font-semibold">Count</h3>
                  <p>{ticket.numberOfTickets} pcs</p>
                </div>
              </div>

              <p className="text-2xl mb-8 w-1/3 flex flex-col gap-2 self-center">
                Total: <span className="font-bold">{ticket.totalPayment}</span>
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-center text-2xl font-bold">Payment Info</h2>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <p className="text-gray-700 text-lg">No. Rekening Virtual</p>
                <div className="flex items-center gap-5">
                  <span className="text-blue-600 text-[18px] font-bold">12321328913829724</span>
                  <button className="border border-blue-600 rounded-[10px] bg-white text-[14px] text-blue-600 px-4 py-2 hover:scale-105 hover:text-white hover:bg-blue-600">
                    Copy
                  </button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <p className="text-gray-600">Total Payment</p>
                <span className="text-[18px] font-bold text-blue-600">{ticket.totalPayment}</span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export function ProfileOrderHistory() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Ambil data dari localStorage
    const storedTickets = JSON.parse(localStorage.getItem("ticketOrders")) || [];
    setTickets(storedTickets);
  }, []);

  return (
    <section className="flex flex-col gap-12">
      {tickets.length > 0 ? (
        tickets.map((ticket, index) => <TicketDetails key={index} ticket={ticket} />)
      ) : (
        <p className="text-center text-gray-600">No tickets found.</p>
      )}
    </section>
  );
}
