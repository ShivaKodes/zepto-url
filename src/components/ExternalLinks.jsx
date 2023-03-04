import React from "react";

export default function ExternalLinks() {
  return (
    <span className="flex gap-3">
      <a
        href="https://good-password.netlify.app"
        target={"_blank"}
        className="link hover:text-rose-400"
      >
        Generate Password
      </a>
      <a
        href="https://generatesqrcode.netlify.app"
        target={"_blank"}
        className="link hover:text-rose-400"
      >
        Generate QR Code
      </a>
    </span>
  );
}
