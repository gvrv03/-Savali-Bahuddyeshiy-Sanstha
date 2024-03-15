import Footer from "@/Components/Utility/Footer";
import Navbar from "@/Components/Utility/Navbar";
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
