import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import iconEye from "../../assets/svg/eye 1.svg";
import logoGoogle from "../../assets/svg/flat-color-icons_google.svg";
import logoFb from "../../assets/svg/bx_bxl-facebook-circle.svg";
import { userContext } from "../../contexts/userContext";
import { useEffect, useContext } from "react";

export function LogIn() {
  const { user, setUser } = useContext(userContext);
  // const [email, setEmail] = useState("");
  const location = useLocation();

  // const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState({
  //   invalidEmail: false,
  //   invalidPwd: false,
  // });
  const navigate = useNavigate();

  useEffect(() => {
    // IIFE => Immediately Invoked Function Expression
    (function () {
      console.log(user, location);
      if (user.email && user.password) {
        if (
          location.state &&
          Object.prototype.hasOwnProperty.call(location.state, "from")
        )
          return navigate(location.state.from);
        navigate("/");
      }
    })();
  }, [user]);

  const login = (e) => {
    e.preventDefault();
    

    console.log(e.target.email.value);
    console.log(e.target.pwd.value);
    const form = new FormData();
    form.append("email", e.target.email.value);
    form.append("password", e.target.pwd.value);
    const submittedUser = {};
    form.forEach((value, key) => {
      Object.assign(submittedUser, { [key]: value });
    });
    setUser(submittedUser);

    navigate("/");

    // const savedData = localStorage.getItem("signUpData");
    // console.log(savedData);
    // // if (!savedData) {
    // //   alert("Belum ada akun yang terdaftar!");
    // //   return;
    // // }

    // const userData = JSON.parse(savedData);
    // const email = document.getElementById("email").value;
    // const password = document.getElementById("password").value;

    // if (email === userData.email && password === userData.pwdInput) {
    //   alert("Login berhasil! Selamat datang, ");
    //   navigate("home");
    // } else if (email === "" || password === "") {
    //   alert("Isi Inputan!");
    // } else {
    //   alert("Email atau password salah!");
    //   return;
    // }
  };

  return (
    <>
      <div>
        <h1 className="mb-3 text-3xl">Welcome Back👋</h1>
        <p className="mb-3">
          Sign in with your data that you entered during your registration
        </p>
      </div>
      <form className="flex flex-col" onSubmit={login}>
        <label htmlFor="email" className="mb-3">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Write your email"
          className="border-2 border-black px-2 h-14 rounded-[5px] mb-2"
          name="email"
          // value={email}
          //   onChange={(e) => setEmail(e.target.value)}
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
            id="pwd"
            name="pwd"
            placeholder="Write your password"
            className="outline-none w-full"
            // value={password}
            //   onChange={(e) => setPassword(e.target.value)}
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

        <button
          type="submit"
          className="w-full h-14 bg-(--primary-color) text-white border border-(--primary-color) rounded-[5px] mt-5 cursor-pointer"
        >
          Log In
        </button>
      </form>
      <section className="my-2 flex flex-col">
        <Link className="text-blue-900 font-semibold self-end">
          Forgot your password?
        </Link>
        <p className="font-semibold self-end">
          Not have an account?{" "}
          <Link to="register" className="text-blue-900 font-semibold">
            SignUp
          </Link>
        </p>
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
