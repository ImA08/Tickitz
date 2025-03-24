import React, { useContext, useState } from "react";
import HambugerMenu from "../../assets/icon/hamburger-menu.svg";
import logo from "../../assets/svg/tickitz-1.svg";
import { Link } from "react-router";
import { userContext } from "../../contexts/userContext";
import { useNavigate } from "react-router";

export function AdminNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate()

  function logout() {
    setUser({
      email: "",
      password: "",
    });
  navigate("/auth")
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white z-[99]">
      <nav className="flex flex-col items-center py-[22px] px-[10%] border-b border-solid border-[#e8e8e8] md:items-center md:justify-between md:flex-row md:px-[5%] lg:px-[10%]">
        {/* Logo dan Hamburger Menu */}
        <div className="md:w-auto w-full flex items-center justify-between">
          <img src={logo} alt="Tickitz Logo" />
          <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
            <img src={HambugerMenu} alt="Menu" className="md:hidden" />
          </button>
        </div>
        {/* Navbar Links */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col text-center w-full mb-2.5 md:mb-0 md:w-75 md:flex md:items-center md:gap-6 md:flex-row `}
        >
          <Link
            to="/admin"
            className="text-gray-800 font-medium border-b border-(--secondary-color)  hover:text-[#1d4ed8]  py-2 lg:py-0 md:border-none"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/movie"
            className="text-gray-800 font-medium border-b border-(--secondary-color)  hover:text-[#1d4ed8]  py-2 lg:py-0 md:border-none"
          >
            Movie
          </Link>
          
        </div>
        {/* Navbar Buttons */}
        {user.email && user.password ? (
          <button
            onClick={logout}
            type="button"
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } text-[#1d4ed8] border border-solid border-[#1d4ed8] rounded-[6px]  p-3 h-fit hover:scale-[1.08] hover:bg-[#1d4ed8] hover:text-white md:flex`}
          >
            Logout
          </button>
        ) : (
          <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex md:items-center md:gap-4 flex-col md:flex-row gap-4 w-full md:w-auto`}
        >
          <Link
            to="/auth"
            className="bg-[#ffffff] text-[#1d4ed8] border border-solid border-[#1d4ed8] rounded-[6px] flex items-center justify-center w-full transition-all duration-200 ease-linear md:w-[86px] h-[48px] lg:w-auto lg:px-4 hover:bg-[#1d4ed8] hover:text-white"
          >
            Sign In
          </Link>
          <Link
            to="/auth/register"
            className="bg-[#1d4ed8] text-[#ffffff] border border-solid border-[#1d4ed8] rounded-[6px] flex items-center justify-center w-full transition-all duration-200 ease-linear md:w-[86px] h-[48px] lg:w-auto lg:px-4 hover:bg-white hover:text-[#1d4ed8]"
          >
            Sign Up
          </Link>
        </div>
        )}
        
        
      </nav>
    </header>
  );
};