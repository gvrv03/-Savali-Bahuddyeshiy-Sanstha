"use client";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Whatsapp = () => {
  return (
    <Link
      href="https://wa.me/919067050941"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6  right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </Link>
  );
};

export default Whatsapp;
