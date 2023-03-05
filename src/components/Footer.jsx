import React from "react";
import logo from "../assets/react-logo.png";
import tailwind from "../assets/tailwind.svg";
import { BsArrowUpRight } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <div className="w-full mt-4 text-center flex flex-col">
      <p className="flex items-center w-full justify-center gap-2">
        {" "}
        Made with{" "}
        <a
          href="http://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-spin-slow"
        >
          {" "}
          <img src={logo} alt="" width={20} />
        </a>{" "}
        <a
          href="http://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-bounce"
        >
          {" "}
          <img src={tailwind} alt="" width={20} />
        </a>
        and
        <span className="text-[#ba662a] text-xl">&#x2615;</span> by{" "}
        <a
          href="https://shivakodes.me"
          className="no-underline hover:text-lime-400 flex items-center gap-1 group "
        >
          {" "}
          Shiva{" "}
          <span className="group-hover:scale-150">
            <BsArrowUpRight size={10} />
          </span>
        </a>
      </p>
    </div>
  );
}
