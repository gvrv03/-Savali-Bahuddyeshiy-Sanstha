"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/Components/Utility/ImageSlider";

export default function LandingPage() {
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
  return (
    <main>
      <ImagesSlider
        className=" md:mt-[0px] mt-[92px]  h-[100vh]"
        images={images}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >

          <div>
            <img src="/logo.svg" alt="logo"  className=" w-20 md:w-60 rounded-full" />
          </div>
          <motion.p className="font-bold text-xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Savali Bahuddyeshiy Sanstha
          </motion.p>
          <motion.p className="font-bold text-base md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b text-gray-400 py-4">
            Savali Bahuddyeshiy Sanstha
          </motion.p>
          <div className="flex gap-5">
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Join now →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Donate Us→</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </div>
        </motion.div>
      </ImagesSlider>
    </main>
  );
}
