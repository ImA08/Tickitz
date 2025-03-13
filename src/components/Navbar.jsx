import logo from "../assets/svg/tickitz-1.svg";
import { useEffect } from "react";

export function Navbar() {
  useEffect(() => {
    const toggleMenu = document.querySelector("#toggleMenu");
    const sidebar = document.querySelector("#sidebar")
    if (toggleMenu) {
      toggleMenu.onclick = () => {
        toggleMenu.classList.toggle("hamburger-toggle");
        sidebar.classList.toggle("showNav");
        
      };
    }
  }, []);

  return (
    <header className="sticky flex flex-col min-h-[104px] border-b border-black/10 bg-white">
      <nav className="flex px-10 min-h-[104px] md:w-full md:px-24 justify-between items-center">
        <a href="./index.html">
          <img src={logo} alt="" />
        </a>
        <div className="hidden justify text-[#0f172a] md:flex md:justify-around md:gap-15">
          <a href="index.html">Home</a>
          <a href="./src/pages/movie-list.html">Movie</a>
          <a href="">Buy Ticket</a>
        </div>
        <div className="hidden md:flex md:gap-3 md:items-center md:justify-center ">
          <a
            className="md:w-23 md:h-12 md:rounded-md gap-3 md:p-3 border border-(--primary-color) text-(--primary-color) md:flex items-center justify-center hover:bg-(--primary-color) hover:text-white"
            href="./src/pages/signIn.html"
          >
            <div>SignIn</div>
          </a>
          <a
            className="md:w-23 md:h-12 md:rounded-md gap-3 md:p-3 border border-(--primary-color) text-(--primary-color) md:flex items-center justify-center hover:bg-(--primary-color) hover:text-white"
            href="./src/pages/register.html"
          >
            <div>Sign Up</div>
          </a>
        </div>
        <div id="toggleMenu" className="hidden  place-content-center w-20 h-20">
          <div className="md:hidden w-15 h-1.5 bg-black rounded-full transition-all duration-150 before:content-[''] before:absolute before:w-15 before:h-1.5 before:bg-black before:rounded-full before:transition-all before:duration-150 before:-translate-y-4 after:content-[''] after:absolute after:w-15 after:h-1.5 after:bg-black after:rounded-full after:transition-all after:duration-150 after:translate-y-4"></div>
        </div>

        

      </nav>
            <div id="sideBar" className="hidden">
                <ul className="flex flex-col gap-7 items-center py-2.5">
                    <li><a className="h-9 text-2xl" href="#">Home</a></li>
                    <li><a className="h-9 text-2xl" href="#">Movie</a></li>
                    <li><a className="h-9 text-2xl" href="#">Buy Ticket</a></li>
                </ul>
             </div>
    </header>
  );
}
