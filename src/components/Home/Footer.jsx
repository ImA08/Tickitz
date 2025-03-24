import logo from "../../assets/svg/tickitz-1.svg";
import ebv from "../../assets/svg/ebv.id 2.svg"
import cineOne from "../../assets/svg/CineOne21 2.svg"
import hiFix from "../../assets/svg/hiflix 2.svg"
import logoFb from "../../assets/svg/eva_facebook-outline.svg"
import logoIg from "../../assets/svg/bx_bxl-instagram.svg"
import logoTw from "../../assets/svg/eva_twitter-outline.svg"
import logoYt from "../../assets/svg/feather_youtube.svg"


export function Footer() {
  return (
    <footer className="flex flex-col bg-white bottom-0 md:pb-11">
      <div className="flex flex-col justify-between gap-10 px-6 py-12 md:px-32.5 md:flex-row md:items-center">
        <div className="flex flex-col md:gap-4 w-71">
          <a href="">
            <img src={logo} alt="" />
          </a>
          <p>
            Stop waiting in line. Buy tickets conveniently, watch movies
            quietly.
          </p>
        </div>
        <div className="flex flex-col gap-3.5">
          <h2 className="py-2 text-[16px] font-semibold">Explore</h2>
          <div className="flex gap-4 md:flex-col">
            <a href="">Cinemas</a>
            <a href="">Movies List</a>
            <a href="">My Ticket</a>
            <a href="">Notification</a>
          </div>
        </div>
        <div>
          <h2 className="py-2 text-[16px] font-semibold">Our Sponsor</h2>
          <div className="flex gap-6 md:flex-col mt-2">
            <img src={ebv} alt="" width={96} height={96} />
            <img src={cineOne} alt="" width={120} height={120} />
            <img src={hiFix} alt="" width={96} height={96} />
          </div>
        </div>
        <div>
          <h2 className="py-2 text-[16px] font-semibold">Follow Us</h2>
          <div className="flex gap-6 md:flex-col mt-2">
            <a href="" className="md:flex md:gap-2">
              <img src={logoFb} alt="" />
              <span className="hidden md:block">Tickitz Cinema id</span>
            </a>
            <a href="" className="md:flex md:gap-2">
              <img src={logoIg} alt="" />
              <span className="hidden md:block">tickitz.id</span>
            </a>
            <a href="" className="md:flex md:gap-2">
              <img src={logoTw} alt="" />
              <span className="hidden md:block">tickitz.id</span>
            </a>
            <a href="" className="md:flex md:gap-2">
              <img src={logoYt} alt="" />
              <span className="hidden md:block">Tickitz Cinema id</span>
            </a>
          </div>
        </div>
      </div>
      <p className="self-center text-center px-5 w-full h-6">© 2020 Tickitz. All Rights Reserved.</p>
    </footer>
  );
}
