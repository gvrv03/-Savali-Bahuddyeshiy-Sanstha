"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/Utility/ImageSlider";

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
        className="  conatiner m-auto    h-[100vh]"
        images={images}
      >
        <div className="z-50 bg-red-700 container m-auto " >
                
        </div>
      </ImagesSlider>
    </main>
  );
}
