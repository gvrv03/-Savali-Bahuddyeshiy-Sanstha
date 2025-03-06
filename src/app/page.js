"use client";
import ContactForm from "@/components/Home/ContactForm";
import FundSupport from "@/components/Home/FundSupport";
import JoinJourney from "@/components/Home/JoinJourney";
import Members from "@/components/Home/Members";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/Utility/NewImageSlider";
import AboutSection from "@/components/Home/About";
import VisionMission from "@/components/Home/Features";
import CoreActivities from "@/components/Home/Activities";
import FullScreenSpinner from "./loading";
// import NewImageSlider from "@/Components/Utility/NewImageSlider";
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
    <main className="pattern">
      <Hero />
      <AboutSection />
      <VisionMission />
      <CoreActivities />
      <JoinJourney />
      <FundSupport />
      <ContactForm />
      <Members />
    </main>
  );
}
