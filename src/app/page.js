import About from "@/Components/Home/About";
import Activities from "@/Components/Home/Activities";
import ContactForm from "@/Components/Home/ContactForm";
import Features from "@/Components/Home/Features";
import FundSupport from "@/Components/Home/FundSupport";
import JoinJourney from "@/Components/Home/JoinJourney";
import LandingPage from "@/Components/Home/LandingPage";
import Members from "@/Components/Home/Members";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <About />
      <Features />
      <Activities />
      <JoinJourney />
      <Members />
      <ContactForm/>
      <FundSupport/>
    </main>
  );
}
