import React from "react";
import { Link } from "react-router";
import iconEye from "../assets/svg/eye 1.svg";
import logoGoogle from "../assets/svg/flat-color-icons_google.svg";
import logoFb from "../assets/svg/bx_bxl-facebook-circle.svg";

export function LogIn() {
  return (
    <>
      <div>
        <h1 className="mb-3 text-3xl">Welcome Back👋</h1>
        <p className="mb-3">Sign in with your data that you entered during your registration</p>
      </div>
      <form className="flex flex-col">
        <label htmlFor="email" className="mb-3">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Write your email"
          className="border-2 border-black px-2 h-14 rounded-[5px] mb-2"
        />

        <p className=" hidden invalid-email italic text-red-700 font-light">
          Email tidak valid!
        </p>

        <label htmlFor="password" className="mb-3">
          Password
        </label>
        <div className="flex border-2 border-black w-full px-2 h-14 rounded-[5px] items-center justify-between relative">
          <input
            type="password"
            id="password"
            placeholder="Write your password"
            className="outline-none w-full"
          />
          <img
            src={iconEye}
            height={22}
            width={24}
            alt="show password"
            className="absolute right-6 cursor-pointer"
          />
        </div>
        <p className=" hidden invalid-pwd italic text-red-700 font-light my-2">
          Password harus mengandung: "Aa", "0-9", "$/_/@", !
        </p>

        <div className="agreement flex items-center gap-1.5">
          <input
            type="checkbox"
            name="term-conditions"
            id="term-conditions"
            className="h-4 w-4"
          />
          <label htmlFor="term-conditions">I agree to terms & conditions</label>
        </div>
        <p className=" hidden not-checked italic text-red-700 font-light">Required!</p>

        <button
          type="submit"
          className="w-full h-14 bg-(--primary-color) text-white border border-(--primary-color) rounded-[5px] mt-5 cursor-pointer"
        >
          Join for free
        </button>
      </form>
      <section className="my-2 flex flex-col">
        <Link className="text-blue-900 font-semibold self-end">
          Forgot your password?
        </Link>
        <div className="flex justify-evenly items-center my-6.5">
          <div className="h-px w-25 border-b border-(--secondary-color)/50 md:w-40"></div>
          <p>or</p>
          <div className="h-px w-25 border-b border-(--secondary-color)/50 md:w-40"></div>
        </div>
        <div className="login-option items-center justify-center gap-8 flex md:gap-9">
          <div className="w-16 h-16 flex justify-center items-center border border-white rounded-[5px] shadow-[0_4px_10px_0_rgba(0,0,0,0.08)] md:w-46 md:h-15.5 md:justify-evenly">
            <img src={logoGoogle} alt="Logo Google" />
            <p className="hidden md:block">Google</p>
          </div>
          <div className="w-16 h-16 flex justify-center items-center border border-white rounded-[5px] shadow-[0_4px_10px_0_rgba(0,0,0,0.08)] md:w-46 md:h-15.5 md:justify-evenly">
            <img src={logoFb} alt="Logo Facebook" />
            <p className="hidden md:block">Facebook</p>
          </div>
        </div>
      </section>
    </>
  );
}
