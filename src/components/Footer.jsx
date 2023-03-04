import React from "react";
import logo from "../assets/react-logo.png";
import tailwind from "../assets/tailwind.svg";

export default function Footer() {
  return (
    <div className="w-full absolute bottom-2 text-center flex flex-col">
      <p className="flex items-center w-full justify-center gap-1">
        {" "}
        Made with <img src={logo} alt="" width={20} />{" "}
        <img src={tailwind} alt="" width={20} />
        and
        <span className="text-rose-500">&#x2764;</span> by{" "}
        <a
          href="https://shivakodes.me"
          className="no-underline hover:text-lime-400"
        >
          {" "}
          Shiva
        </a>
      </p>
    </div>
  );
}
