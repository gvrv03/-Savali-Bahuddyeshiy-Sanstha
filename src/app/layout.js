import ScrollTop from "@/components/ChildComponents/ScrollTop";
import Whatsapp from "@/components/Home/Whatsapp";
import Footer from "@/components/Utility/Footer";
import Navbar from "@/components/Utility/Navbar";
import PreLoader from "@/components/Utility/PreLoader";
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Savali Bahuddyeshiy Sanstha",
    alternateName: "Savali",
    url: "https://www.savali.org.in/",
    logo: "https://www.savali.org.in/logo.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "9067050941",
      contactType: "customer service",
      contactOption: "HearingImpairedSupported",
      areaServed: "IN",
      availableLanguage: "Hindi",
    },
    sameAs: "https://www.savali.org.in/",
    potentialAction: [
      {
        "@type": "SearchAction",
        target: "https://www.savali.org.in/AboutUs{search_term_string}",
        "query-input": "required name=search_term_string",
      },
      {
        "@type": "SearchAction",
        target: "https://www.savali.org.in/ContactUs{search_term_string}",
        "query-input": "required name=search_term_string",
      },
    ],
  };
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
        <meta property="og:url" content="https://www.savali.org.in" />
        <meta property="og:title" content=" Savali Bahuddyeshiy Sanstha" />
        <meta
          property="og:description"
          content="Savli Multipurpose Society is a registered, non-profit, secular, voluntary organization. Which is working for rural and urban development. "
        />
        <meta property="og:image" content="/logo.svg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.savali.org.in" />
        <meta property="twitter:title" content=" Savali Bahuddyeshiy Sanstha" />
        <meta
          property="twitter:description"
          content="Savli Multipurpose Society is a registered, non-profit, secular, voluntary organization. Which is working for rural and urban development. "
        />
        <meta property="twitter:image" content="/logo.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="">
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
