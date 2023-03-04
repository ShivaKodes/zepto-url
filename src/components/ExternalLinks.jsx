import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { IconContext } from "react-icons/lib/esm/iconContext";

export default function ExternalLinks() {
  return (
    <span className="flex gap-3">
      <a
        href="https://good-password.netlify.app"
        target={"_blank"}
        className="link hover:text-rose-400 flex items-center gap-1 group/link1"
      >
        Generate Password{" "}
        <span className="group-hover/link1:scale-150">
          {" "}
          <BsArrowUpRight size={10} color={"#fff"} />
        </span>
      </a>
      <a
        href="https://generatesqrcode.netlify.app"
        target={"_blank"}
        className="link hover:text-rose-400 flex items-center gap-1 group"
      >
        Generate QR Code
        <span className="group-hover:scale-150">
          <BsArrowUpRight size={10} color={"#fff"} />
        </span>
      </a>
    </span>
  );
}
