import React from "react";
import thumbnail from "../../assets/png/thumbnail.png";
import eyeIcon from "../../assets/icon/Eye.svg"
import editIcon from "../../assets/icon/Edit.svg"
import deleteIcon from "../../assets/icon/Delete.svg"


export function AdminMovie() {
  const addRow = () => {};
  return (
    <>
      <main className="w-full h-screen bg-(--secondary-color)/50">
        <section className="w-5/6 h-fit bg-white rounded-[5px] mx-auto relative top-16.25 py-6.25 md:w-4/5">
          <div className="flex flex-col justify-between px-14.5 items-center mb-10 md:flex-row">
            <h2 className="text-2xl font-bold">List Movie</h2>
            <div className="flex flex-col gap-3.5 md:flex-row">
              <div className="flex text-[16px] justify-between items-center p-2.5 text-(--secondary-color) bg-(--secondary-color)/20 rounded-[5px]">
                <img src="" alt="" />
                <span>November 20223</span>
                <img src="" alt="" />
              </div>
              <button className="p-2.5 text-[16px] font-bold text-white bg-(--primary-color) rounded-[5px] cursor-pointer hover:scale-[1.05]">
                <span className="text-[20px] md:hidden">+</span> Add Movies
              </button>
            </div>
          </div>

          <table className="w-full text-center mb-12.5 overflow-x-scroll">
            <thead className="border-b-2 border-(--secondary-color)/50">
              <tr className="">
                <th scope="col" className="px-3">No</th>
                <th scope="col">Thumbnail</th>
                <th scope="col">Movie Name</th>
                <th scope="col">Category</th>
                <th scope="col">Released Date</th>
                <th scope="col">Duration</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-b-2 border-(--secondary-color)/50">
                <th scope="row" className="">1.</th>
                <td className="flex items-center justify-center py-2.5">
                  <img src={thumbnail} alt="" />
                </td>
                <td className="text-(--primary-color) text-[14px] ">Spiderman HomeComing</td>
                <td>Action, Adventure</td>
                <td>07/05/2023</td>
                <td>2 Hours 15 Minutes</td>
                <td className="flex gap-3.25 items-center justify-center">
                  <div className="w-7.75 h-7.75 flex justify-center items-center bg-(--primary-color) rounded-[10px] hover:scale-[1.1] cursor-pointer"><img src={eyeIcon} alt="" /></div>
                  <div className="w-7.75 h-7.75 flex justify-center items-center bg-(--primary-color)/70 rounded-[10px] hover:scale-[1.1] cursor-pointer"><img src={editIcon} alt="" /></div>
                  <div className="w-7.75 h-7.75 flex justify-center items-center bg-[#E82C2C] rounded-[10px] hover:scale-[1.1] cursor-pointer"><img src={deleteIcon} alt="" /></div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex gap-2 items-center justify-center">
            <div className="py-0.75 px-2.5 bg-[#dedede] border border-(--secondary-color)/70 rounded-[5px] hover:bg-(--primary-color) hover:text-[#dedede] hover:scale-[1.1] cursor-pointer">1</div>
            <div className="py-0.75 px-2.5 bg-[#dedede] border border-(--secondary-color)/70 rounded-[5px] hover:bg-(--primary-color) hover:text-[#dedede] hover:scale-[1.1] cursor-pointer">2</div>
            <div className="py-0.75 px-2.5 bg-[#dedede] border border-(--secondary-color)/70 rounded-[5px] hover:bg-(--primary-color) hover:text-[#dedede] hover:scale-[1.1] cursor-pointer">3</div>
            <div className="py-0.75 px-2.5 bg-[#dedede] border border-(--secondary-color)/70 rounded-[5px] hover:bg-(--primary-color) hover:text-[#dedede] hover:scale-[1.1] cursor-pointer">4</div>
          </div>
        </section>
      </main>
    </>
  );
}
