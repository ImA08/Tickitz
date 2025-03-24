import React from "react";

export function ProfileAccountSettings({onBack}) {
  return (
    <section className={` ${onBack} component hidden  w-5/6 h-fit inset-0 mx-auto absolute flex-col gap-12.25 md:static md:flex md:w-full`}>
      <div className="w-full bg-[#F5F7F8] rounded-[10px] px-8 py-10">
      {/* {onBack && (
          <button
            onClick={onBack}
            className="md:hidden mb-4 px-4 py-2 bg-gray-300 rounded-lg"
          >
            ← Back
          </button>
        )} */}
        <p className="text-[16px] w-full pb-4 border-b border-(--secondary-color)/70 mb-12">
          Details Information
        </p>
        <div className="grid grid-cols-1 gap-8.5 md:grid-cols-2">
          <div>
            <p className="mb-3">First Name</p>
            <input placeholder="Apep" className="w-full p-4 border border-(--secondary-color) rounded-[10px]"></input>
          </div>
          <div>
            <p className="mb-3">Last Name</p>
            <input placeholder="The Trailblazer" className="w-full p-4 border border-(--secondary-color) rounded-[10px]"></input>
          </div>
          <div>
            <p className="mb-3">E-mail</p>
            <input placeholder="apepdendro@gmail.com" className="w-full p-4 border border-(--secondary-color) rounded-[10px]"></input>
          </div>
          <div>
            <p className="mb-3">Phone Number</p>
            <input placeholder="+62 822 6843 1648" className="w-full p-4 border border-(--secondary-color) rounded-[10px]"></input>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F5F7F8] rounded-[10px] px-8 py-5 md:py-10 md:mb-10">
        <p className="text-[16px] w-full pb-4 border-b border-(--secondary-color)/70 mb-12">
          Account & Privacy
        </p>
        <div className="grid grid-cols-1 mb-10 gap-8.5 md:grid-cols-2">
          <div>
            <p className="mb-3">New Password</p>
            <input className="w-full p-4 border border-(--secondary-color) rounded-[10px]"></input>
          </div>
          <div>
            <p className="mb-3">Confirm Password</p>
            <input className="w-full p-4 border border-(--secondary-color) rounded-[10px]"></input>
          </div>
        </div>
        <button className="w-full py-4 bg-(--primary-color) text-[16px] text-white font-bold rounded-2xl hover:scale-[1.06] cursor-pointer md:w-5/12">
          Update Changes
        </button>
      </div>
    </section>
  );
}
