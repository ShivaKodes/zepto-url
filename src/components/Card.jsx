import React, { useState, useEffect } from "react";
import ExternalLinks from "./ExternalLinks";
import ShortenUrl from "./ShortenUrl";
import Footer from "./Footer";
import axios from "axios";

export default function Card() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${longUrl}`
      );
      console.log(res.data.result);
      setShortUrl(res.data.result.full_short_link);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (longUrl !== "") {
      fetchData();
    }
  }, [longUrl]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(longUrl);
    setLongUrl(url);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(shortUrl);
  }

  return (
    <div className="w-full h-screen bg-slate-800 flex items-center justify-center ">
      <div className="formcontainer min-w-[400px] h-3/4 md:h-1/2 flex flex-col  text-white  items-center justify-center relative">
        <h1 className="text-6xl flex flex-col items-center gap-1 text-slate-900 font-bold drop-shadow-xl mb-10">
          Zepto-URL{" "}
          <span className="text-lg text-slate-500 font-semibold">
            URL Shortner
          </span>{" "}
        </h1>
        <form
          onSubmit={handleSubmit}
          className=" w-full h-1/2 text-white flex flex-col justify-center items-center"
        >
          <input
            type="text"
            name="url"
            id="url"
            value={url}
            placeholder={"Enter a URL"}
            onChange={(event) => setUrl(event.target.value)}
            className="w-11/12 h-8 rounded-sm px-2 text-base text-black mb-4"
          />
          <button
            type="submit"
            className="w-11/12 h-9 rounded-sm bg-rose-400 hover:bg-rose-600 transition-colors duration-500  border"
            onClick={handleSubmit}
          >
            Submit
          </button>

          <ShortenUrl
            loading={loading}
            shortUrl={shortUrl}
            copyToClipboard={copyToClipboard}
          />
        </form>
        <ExternalLinks />
        <Footer />
      </div>
    </div>
  );
}
