"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { Slide, SlideshowRef } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const NewImageSlider = () => {
  const slideRef = useRef();
  const images = [
    "/Slideshow/img (1).jpg",
    "/Slideshow/img (2).jpg",
    "/Slideshow/img (3).jpg",
    "/Slideshow/img (5).jpg",
    "/Slideshow/img (6).jpg",
    "/Slideshow/img (7).jpg",
    "/Slideshow/img (8).jpg",
    "/Slideshow/img (9).jpg",
  ];
  const router = useRouter();

  return (
    <>
      <div className="bgGround   md:p-0 px-5 mt-[110px] h-[80vh] md:mt-[130px]">
        <div className="container m-auto">
          <div className="" >
            <Slide
              arrows={false}
              indicators={true}
              duration="500"
              ref={slideRef}
            >
              {images?.map((item, index) => {
                return (
                  <>
                    <img
                      src={item}
                      alt={item}
                      key={index}
                      className="w-full h-[200px] md:h-[500px]  "
                    />
                  </>
                );
              })}
            </Slide>
          </div>
          <h4 className="text-2xl text-center py-3 font-mono text-gray-400">
            Welcome to
          </h4>
          <div className="flex items-center justify-center md:hidden">
            <img src="/logo.svg" alt="logo" className="w-32" />
          </div>{" "}
          <div className="flex justify-between   md:flex-row flex-col gap-10 items-center  ">
            <h2 className="text-2xl md:text-4xl my-2 font-bold text-center md:text-left ">
              Savali <span className="text-red-500">Bahuddyeshiy</span> Sanstha,
              Kalamb
            </h2>
            <div className="flex gap-5  md:w-auto w-full   flex-col md:flex-row">
              <button
                onClick={() => {
                  router.push("ContactUs");
                }}
                className="py-3 w-full items-center justify-center md:w-auto border  flex gap-5 md:rounded-full px-10 uppercase bg-red-500 text-white font-semibold  "
              >
                <i className="uil uil-phone text-xl " />
                <span>Contact Us</span>
              </button>
              <button
                onClick={() => {
                  router.push("DonateUs");
                }}
                className="py-3 w-full md:w-auto flex items-center justify-center gap-5   border md:rounded-full px-10 uppercase font-semibold  "
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/external-vectorslab-flat-vectorslab/53/external-Donation-business-and-finance-vectorslab-flat-vectorslab-2.png"
                />
                <span>Donate Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewImageSlider;
