"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Whatsapp = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("https://wa.me/9067050941");
      }}
      className=" fixed flex items-center justify-center text-2xl md:text-3xl z-50 rounded-full right-9 bottom-28 uil uil-whatsapp text-white bg-green-500 p-5 w-14 h-14 md:w-14 md:h-14"
    />
  );
};

export default Whatsapp;
