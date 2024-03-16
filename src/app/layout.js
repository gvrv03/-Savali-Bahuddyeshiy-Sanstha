import ScrollTop from "@/Components/ChildComponents/ScrollTop";
import Whatsapp from "@/Components/Home/Whatsapp";
import Footer from "@/Components/Utility/Footer";
import Navbar from "@/Components/Utility/Navbar";
import PreLoader from "@/Components/Utility/PreLoader";
import { Toaster } from "react-hot-toast";
import "./globals.css";
export const metadata = {
  title: " Savali Bahuddyeshiy Sanstha",
  description:
    "Savli Multipurpose Society is a registered, non-profit, secular, voluntary organization. Which is working for rural and urban development. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="">
        <Whatsapp />
        <Toaster position="top-center" />
        <ScrollTop />
        <PreLoader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
