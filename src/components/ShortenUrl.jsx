import React from "react";

export default function ShortenUrl({ loading, shortUrl, copyToClipboard }) {
  return (
    shortUrl !== "" && (
      <div className="w-11/12 bg-rose-600 border h-10 my-5 text-slate-900 text-center  font-semibold flex justify-between items-center pl-10 border-none rounded-sm">
        {loading ? <p className="text-black">Loading...</p> : shortUrl}
        <button
          className=" h-full w-fit hover:bg-rose-400 px-2  rounded-sm "
          onClick={() => copyToClipboard()}
        >
          Copy
        </button>
      </div>
    )
  );
}
