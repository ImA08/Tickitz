import React, { useState } from "react";
import arrow1 from "../../assets/icon/arrow-reg-1.svg";
import arrow2 from "../../assets/icon/arrow-reg-2.svg";
import arrow3 from "../../assets/icon/arrow-reg-3.svg";
import iconEye from "../../assets/svg/eye 1.svg";
import logoGoogle from "../../assets/svg/flat-color-icons_google.svg";
import logoFb from "../../assets/svg/bx_bxl-facebook-circle.svg";
import { checkDuplikat, validateEmail, validatePwd } from "../../js/utils";
import { Link, useNavigate } from "react-router";

export function Register() {
  // State untuk input dan error
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termChecked, setTermChecked] = useState(false);
  const [errors, setErrors] = useState({
    invalidEmail: false,
    invalidPwd: false,
    notChecked: false,
    duplicate: false,
  });
  const navigate = useNavigate()
  // State untuk mengontrol pop-up jika duplikat email ditemukan
  const [showPopUp, setShowPopUp] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Reset error
    const newErrors = {
      invalidEmail: false,
      invalidPwd: false,
      notChecked: false,
      duplicate: false,
    };

    // Validasi checkbox term & conditions
    if (!termChecked) {
      newErrors.notChecked = true;
    }
    // Validasi email
    if (!validateEmail(email)) {
      newErrors.invalidEmail = true;
    }
    // Validasi password
    if (!validatePwd(password)) {
      newErrors.invalidPwd = true;
    }
    // Cek duplikat email
    if (!checkDuplikat(email)) {
      newErrors.duplicate = true;
      setShowPopUp(true);
    }

    setErrors(newErrors);

    // Jika terdapat error, hentikan eksekusi
    if (
      newErrors.invalidEmail ||
      newErrors.invalidPwd ||
      newErrors.notChecked ||
      newErrors.duplicate
    ) {
      return;
    } else {
      const userData = { email, password };
      localStorage.setItem("signUpData", JSON.stringify(userData));
      navigate("/auth");
    }

    // if (Object.values(newErrors).some((error) => error === true)) {
    //   return;
    // } else {
    //   const userData = { email, password };
    //   localStorage.setItem("signUpData", JSON.stringify(userData));
    //   navigate("/auth");
    // }

    // Jika valid, simpan data ke localStorage

    // Redirect ke halaman sign in
    // window.location.href = "../pages/signIn.html";
  };

  return (
    <>
      <div className="register">
        <section className="steps hidden md:flex md:justify-between md:items-center md:mb-6">
          <div className="flex flex-col items-center gap-2.5">
            <img src={arrow1} alt="" />
            <p className="text-[14px]">Fill Form</p>
          </div>
          <div className="h-px w-17.5 border border-dashed border-(--secondary-color)"></div>
          <div className="flex flex-col items-center gap-2.5">
            <img src={arrow2} alt="" />
            <p className="text-[14px] text-(--secondary-color)">Activate</p>
          </div>
          <div className="h-px w-17.5 border border-dashed border-(--secondary-color)"></div>
          <div className="flex flex-col items-center gap-2.5">
            <img src={arrow3} alt="" />
            <p className="text-[14px] text-(--secondary-color)">Done</p>
          </div>
        </section>
        <form className="flex flex-col" onSubmit={onSubmitHandler}>
          <label htmlFor="email" className="mb-3">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Write your email"
            className="border-2 border-black px-2 h-14 rounded-[5px] mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.invalidEmail && (
            <p className="invalid-email italic text-red-700 font-light">
              Email tidak valid!
            </p>
          )}

          <label htmlFor="password" className="mb-3">
            Password
          </label>
          <div className="flex border-2 border-black w-full px-2 h-14 rounded-[5px] items-center justify-between relative">
            <input
              type="password"
              id="password"
              placeholder="Write your password"
              className="outline-none w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={iconEye}
              height={22}
              width={24}
              alt="show password"
              className="absolute right-6 cursor-pointer"
            />
          </div>
          {errors.invalidPwd && (
            <p className="invalid-pwd italic text-red-700 font-light my-2">
              Password harus mengandung: "Aa", "0-9", "$/_/@", !
            </p>
          )}

          <div className="agreement flex items-center gap-1.5">
            <input
              type="checkbox"
              name="term-conditions"
              id="term-conditions"
              className="h-4 w-4"
              checked={termChecked}
              onChange={(e) => setTermChecked(e.target.checked)}
            />
            <label htmlFor="term-conditions">
              I agree to terms & conditions
            </label>
          </div>
          {errors.notChecked && (
            <p className="not-checked italic text-red-700 font-light">
              Required!
            </p>
          )}

          <button
            onClick={()=>{onSubmitHandler()}}
            className="w-full h-14 bg-(--primary-color) text-white border border-(--primary-color) rounded-[5px] mt-5 cursor-pointer"
          >
            Join for free
          </button>
        </form>
        <section className="my-2">
          <p>
            Already have an account?{" "}
            <Link to="/auth" className="text-blue-900 font-semibold underline">
              Log in
            </Link>
          </p>
          <div className="flex justify-evenly items-center my-6.5">
            <div className="h-px w-25 border-b border-(--secondary-color)/50 md:w-40"></div>
            <p>or</p>
            <div className="h-px w-25 border-b border-(--secondary-color)/50 md:w-40"></div>
          </div>
          <div className="login-option items-center justify-center gap-8 flex md:gap-9">
            <div className="w-16 h-14 flex justify-center items-center border border-white rounded-[5px] shadow-[0_4px_10px_0_rgba(0,0,0,0.08)] md:w-46 md:h-15.5 md:justify-evenly">
              <img src={logoGoogle} alt="Logo Google" />
              <p className="hidden md:block">Google</p>
            </div>
            <div className="w-16 h-14 flex justify-center items-center border border-white rounded-[5px] shadow-[0_4px_10px_0_rgba(0,0,0,0.08)] md:w-46 md:h-15.5 md:justify-evenly">
              <img src={logoFb} alt="Logo Facebook" />
              <p className="hidden md:block">Facebook</p>
            </div>
          </div>
        </section>

        {/* Komponen pop-up untuk duplikat email */}
        {showPopUp && (
          <section className="pop-up absolute inset-0 before:content-[''] before:absolute before:h-full before:w-full before:bg-black/50 before:z-10">
            <div className="pop-up-content">
              <p>Email sudah terdaftar!</p>
              <button onClick={() => setShowPopUp(false)}>Close</button>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
