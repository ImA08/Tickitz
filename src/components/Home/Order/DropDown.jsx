import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSeat } from "../../../redux/reducers/orderTicket";


import forwardLogo from "../../../assets/icon/Dropdown/Forward.svg";


export const Dropdown = ({
    options1,
    options2,
    selectedCols,
    selectedRows,
    setSelectedCols,
    setSelectedRows,    
  }) => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orderTicket.orders);

    const [openCols, setOpenCols] = useState(false);
    const [openRows, setOpenRows] = useState(false);
    const sortOrders = [...orders].sort()
  
    const handleAddSeat = () => {
      if (selectedCols !== "-" && selectedRows !== "-") {
        const newSeat = `${selectedCols}${selectedRows}`;
        dispatch(addSeat(newSeat));
        setSelectedCols("-");
        setSelectedRows("-");
      } else {
        alert("Pilih kolom dan baris terlebih dahulu!");
      }
    };
  
    return (
      <>
        <div className="md:hidden">
          <div className="flex justify-between">
            <p className="text-[18px] font-bold py-10 md:text-[24px]">Choosed</p>
            <div className="text-[18px] font-bold py-10 md:text-[24px]">
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
          <div className="flex justify-between">
            <div className="relative">
              <button
                className="flex items-center justify-between w-32 p-3 bg-gray-100 rounded-md shadow-md"
                onClick={() => setOpenCols(!openCols)}
              >
                <span className="text-gray-800">{selectedCols}</span>
                <img src={forwardLogo} alt="" />
              </button>
              {openCols && (
                <ul className="absolute w-32 mt-2 bg-white border border-gray-200 rounded-md shadow-md">
                  {options1.map((option) => (
                    <li
                      key={option}
                      className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setSelectedCols(option);
                        setOpenCols(false);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center justify-between w-32 p-3 bg-gray-100 rounded-md shadow-md"
                onClick={() => setOpenRows(!openRows)}
              >
                <span className="text-gray-800">{selectedRows}</span>
                <img src={forwardLogo} alt="" />
              </button>
              {openRows && (
                <ul className="absolute w-32 mt-2 bg-white border border-gray-200 rounded-md shadow-md">
                  {options2.map((option) => (
                    <li
                      key={option}
                      className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setSelectedRows(option);
                        setOpenRows(false);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="pt-8">
            <button
              onClick={handleAddSeat}
              className="w-full p-4 border-2 border-(--primary-color) rounded-md text-(--primary-color) cursor-pointer hover:scale-[1.05] hover:text-white hover:bg-(--primary-color)"
            >
              Add new seat
            </button>
          </div>
        </div>
      </>
    );
  };