import React from "react";

export default function ShortenUrl({ loading, shortUrl, copyToClipboard }) {
  return (
    shortUrl !== "" && (
      <div className="w-11/12 bg-rose-600 border h-7 my-5 text-white text-center  font-semibold flex justify-between pl-10 border-none">
        {loading ? <p className="text-black">Loading...</p> : shortUrl}
        <button
          className=" h-full w-fit hover:bg-rose-400 px-2 border rounded-sm border-black"
          onClick={() => copyToClipboard()}
        >
          Copy
        </button>
      </div>
    )
  );
}
