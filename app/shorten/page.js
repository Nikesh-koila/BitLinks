"use client";

import React from "react";
import { useState ,useRef} from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [inError, setInError] = useState(false);
const UrlRef = useRef();
const ShorturlRef = useRef();

  const handleGenerate = async () => {
  if(!url){
    UrlRef.current.focus();
    UrlRef.current.style.outline='2px solid red';
    return;
  }
  if(!shortUrl){
    ShorturlRef.current.focus();
    ShorturlRef.current.style.outline='2px solid red';
    return;
  }
    
    setGenerated("");
    const raw = JSON.stringify({
      url,
      shortUrl,
    });

    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw,
    };

    const data = await fetch("/api/generate", reqOptions);
    let res = await data.json();

    if (res.success) {
      setGenerated(shortUrl);
      setShortUrl("");
      setUrl("");
      toast.success(res.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      if(res.invalidUrl){
        UrlRef.current.focus();
      }
      else{
        ShorturlRef.current.focus();
      }
      toast.error(res.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
 
    <div className="pt-10 text-black" >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      
      <div className="max-w-xl mx-2 sm:mx-auto bg-cyan-100 flex flex-col gap-8 px-6 py-10 sm:px-10 rounded-lg ">
        <h2 className="text-3xl  font-bold ">Generate short URLs</h2>
        <div className="flex flex-col gap-3">
          <input
          ref={UrlRef}
            className={`px-2 py-3 outline-cyan-500 rounded-md border-2 ${!url && inError ? 'border-red-500  shake' : ''} `}
            type="text"
            placeholder="Enter your URL"
            value={url}
            onChange={(e) => {
              UrlRef.current.style.outline='';
              setUrl(e.target.value);
            }}
          />
          <input
           className={`px-2 py-3 outline-cyan-500 rounded-md `}
           ref={ShorturlRef}
            type="text"
            value={shortUrl}
            placeholder="Enter preferred short URL text"
            onChange={(e) => {
              ShorturlRef.current.style.outline='';
              setShortUrl(e.target.value);
            }}
          />
        </div>
        <button
          className="py-3 px-8 rounded-lg bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-cyan-300 text-white  "
          onClick={handleGenerate}
        >
          Generate
        </button>

        {generated && (
          <>
            <h3 className="text-xl font-semibold mt-2">Your Shorted URL</h3>
            <div className="flex gap-4 ">
            <code >
              <Link 
              target="_blank"  href={`${process.env.NEXT_PUBLIC_HOSTURL}/${generated}`}
              >{`${process.env.NEXT_PUBLIC_HOSTURL}/${generated}`}</Link>
              
            </code>
            <Image
                             alt="image of copy"
                             src={"/copy.png"}
                             width={24}
                             height={24}
                           />
            </div>
            
          </>
        )}
      </div>
      </div>
   
  );
};

export default Shorten;
