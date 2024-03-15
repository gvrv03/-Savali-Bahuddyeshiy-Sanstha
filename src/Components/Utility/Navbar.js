import Image from "next/image";
import React from "react";
import DrawerNav from "../ChildComponents/DrawerNav";
const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50  text-white bg-red-700">
        <div className="bg-green-950  py-2 px-5  text-xs   w-full ">
          <div className="container m-auto">
            <div className="flex gap-5  items-center justify-center md:justify-start ">
              <div className="flex gap-2 items-center">
                <i className="uil uil-phone" />
                <span>+91 9067050941</span>
              </div>
              <div className="flex gap-2 items-center">
                <i className="uil uil-envelope-alt" />
                <span>shendes969@gmail.com</span>
              </div>

              <div className="flex gap-2 items-center">
                <i className="uil uil-facebook" />
                <i className="uil uil-instagram" />
                <i className="uil uil-youtube" />
              </div>
            </div>
          </div>
        </div>
        <div className="container  m-auto">
          <div className=" flex  px-5 md:px-0  py-2 justify-between items-center">
           <Image src="/logo.svg" height={40} width={40} className="rounded-full"   />
            <DrawerNav />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
