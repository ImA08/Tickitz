import React, { useState } from "react";
import menuDot from "../../assets/icon/eva_more-horizontal-fill.svg";
import porfilePict from "../../assets/imgs/caelus sticker.jpg";
import pointLoyaltyBg from "../../assets/imgs/point-loyalty.png";
import starImg from "../../assets/imgs/eva_star-fill.png";
import { ProfileAccountSettings } from "./ProfileAccountSettings";
import { ProfileOrderHistory } from "./ProfileOrderHistory";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { Navigate, useNavigate } from "react-router";


export function Profile() {
  const [isChangeTab, setChangeTab] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();
  function logout() {
    setUser({
      email: "",
      password: "",
    });
    navigate("/auth");
  }

  return (
    <main className="bg-(--secondary-color)/20 w-full h-full">
      <section className="relative h-fit flex flex-col gap-8 pb-17 md:p-17.5 md:flex-row md:w-full md:static">
        {/* Sidebar Profile */}
        <section
          className={` ${
            isChangeTab ? "hidden" : "flex"
          } mx-auto flex-col w-5/6 h-fit bg-[#F5F7F8] pb-10 rounded-[10px] md:order-1 order-2 md:w-85 md:m-0 md:pb-0 md:flex`}
        >
          <div className="p-10 flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <p>INFO</p>
              <img
                src={menuDot}
                alt=""
                className="hover:scale-[1.1] cursor-pointer"
              />
            </div>
            <div className="flex items-center rounded-[50%] overflow-hidden">
              <img src={porfilePict} alt="Profile Picture" />
            </div>
            <div className="self-center text-center">
              <p className="text-[20px] font-semibold">APEP THE TRAILBLAZER</p>
              <p className="text-[14px] text-(--secondary-color)">
                Astral Express
              </p>
            </div>
          </div>
          <div className="h-1 w-full border-b-2 border-(--secondary-color)" />
          <div className="p-10 flex flex-col">
            <div
              style={{ backgroundImage: `url(${pointLoyaltyBg})` }}
              className="relative flex flex-col gap-4 bg-no-repeat bg-cover w-full h-40 py-6 px-8 md:h-35 "
            >
              <p className="font-bold text-[18px] text-white">Trailblazer</p>
              <p className="text-white text-[12px]">
                <span className="text-white text-[18px] ">320</span> points
              </p>
              <img
                src={starImg}
                height={51}
                width={51}
                alt=""
                className="absolute right-5 top-2"
              />
            </div>
            <p className="mb-10 text-center text-[16px] text-[#4E4B66]">
              180 points become a master
            </p>
            <div className="h-2.5 relative bg-(--secondary-color)/40 rounded-3xl w-full before:absolute before:content-[''] before:inset-0 before:w-1/2 before:bg-(--primary-color) before:rounded-2xl" />
          </div>
          
          <button
              onClick={logout}
              type="button"
              className={`w-1/2 self-center mb-6 text-[#1d4ed8] border border-solid border-[#1d4ed8] rounded-[6px]  p-3 h-fit hover:scale-[1.08] hover:bg-[#1d4ed8] hover:text-white md:flex`}
            >
              Logout
            </button>
          <button className="w-5/6 self-center py-2.5 text-(--primary-color) border-3 border-(--primary-color) rounded-2xl cursor-pointer hover:text-white hover:bg-(--primary-color) hover:scale-[1.05] md:hidden ">Edit Profile</button>
        </section>

        {/* Tab Content */}
        <section className="flex-1 flex flex-col gap-12.25 order-1 md:order-2">
          {/* Navigation Tabs */}
          <nav className="w-full bg-[#F5F7F8] pl-12 rounded-[8px] flex items-start gap-14">
            <div
              onClick={() => setChangeTab(false)}
              className={`cursor-pointer py-6.25 ${
                !isChangeTab
                  ? "text-[#14142B] border-b-3 border-(--primary-color) font-bold"
                  : "text-(--secondary-color)"
              }`}
            >
              Account Settings
            </div>
            <div
              onClick={() => setChangeTab(true)}
              className={`cursor-pointer py-6.25 ${
                isChangeTab
                  ? "text-[#14142B] border-b-3 border-(--primary-color) font-bold"
                  : "text-(--secondary-color)"
              }`}
            >
              Order History
            </div>
          </nav>

          {/* Tab Content */}
          {isChangeTab ? <ProfileOrderHistory /> : <ProfileAccountSettings />}
        </section>
      </section>
    </main>
  );
}
