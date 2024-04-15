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
  openGraph: {
    images: "/logo.svg",
    title: " Savali Bahuddyeshiy Sanstha",
    description:
      "Savli Multipurpose Society is a registered, non-profit, secular, voluntary organization. Which is working for rural and urban development. ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
        <link rel="icon" href="/favi.png" sizes="any" />
        {/* <!-- Primary Meta Tags --> */}
        <title> Savali Bahuddyeshiy Sanstha</title>
        <meta name="title" content=" Savali Bahuddyeshiy Sanstha" />
        <meta
          name="description"
          content="Savli Multipurpose Society is a registered, non-profit, secular, voluntary organization. Which is working for rural and urban development. "
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.savali.org.in"
        />
        <meta property="og:title" content=" Savali Bahuddyeshiy Sanstha" />
        <meta
          property="og:description"
          content="Savli Multipurpose Society is a registered, non-profit, secular, voluntary organization. Which is working for rural and urban development. "
        />
        <meta property="og:image" content="/logo.svg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.savali.org.in"
        />
        <meta property="twitter:title" content=" Savali Bahuddyeshiy Sanstha" />
        <meta
          property="twitter:description"
          content="Savli Multipurpose Society is a registered, non-profit, secular, voluntary organization. Which is working for rural and urban development. "
        />
        <meta property="twitter:image" content="/logo.svg" />
      </head>
      <body className="">
        <Whatsapp />
        <Toaster position="top-center" />
        <ScrollTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
