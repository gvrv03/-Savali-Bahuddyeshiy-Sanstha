"use client";
import About from "@/Components/Home/About";
import Activities from "@/Components/Home/Activities";
import ContactForm from "@/Components/Home/ContactForm";
import Features from "@/Components/Home/Features";
import FundSupport from "@/Components/Home/FundSupport";
import JoinJourney from "@/Components/Home/JoinJourney";
import LandingPage from "@/Components/Home/LandingPage";
import Members from "@/Components/Home/Members";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NewImageSlider from "@/Components/Utility/NewImageSlider";
export default function Home() {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS
      // You can customize various options here
      duration: 500,
      easing: "ease-in-out",
      once: false, // Set to true if you want the animation to only occur once
    });
  }, []);
  return (
    <main>
      <NewImageSlider/>
      {/* <LandingPage /> */}
      <About />
      <Features />
      <Activities />
      <JoinJourney />
      <FundSupport />
      <ContactForm />
      <Members />
    </main>
  );
}
