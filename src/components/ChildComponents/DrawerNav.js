"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { TopNav } from "@/JSONData/Navitem";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
export default function DrawerNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const router = useRouter();
  const DrawerList = (
    <Box
      sx={{ width: 300 }}
      className="flex flex-col p-2 justify-between h-full"
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div>
        <div className=" py-2 flex items-center justify-center  mb-2">
          <Image
            src="/logo.svg"
            height={60}
            width={60}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1 ">
          {TopNav?.map((item, index) => {
            const isActive = pathname === item?.location;
            return (
              <div
                key={index}
                onClick={() => {
                  router.push(item.location);
                }}
                className={`${
                  isActive && "bg-red-50 text-black font-bold "
                }   px-5 py-2 flex gap-5    cursor-pointer  hover:bg-red-100 hover:text-black hover:font-bold  `}
              >
                <i className={`${item?.icon} text-xl `} />
                <button className="   font-semibold text-left  ">
                  {item?.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-col flex gap-2 ">
        <button
          onClick={() => {
            router.push("/DonateUs");
          }}
          className="py-3 w-full md:w-auto flex items-center justify-center gap-5   border md:rounded-full px-10 uppercase font-semibold  "
        >
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/external-vectorslab-flat-vectorslab/53/external-Donation-business-and-finance-vectorslab-flat-vectorslab-2.png"
          />
          <span>Donate Us</span>
        </button>
      </div>
    </Box>
  );

  return (
    <div>
      <button
        className=" md:hidden  text-red-500 "
        onClick={toggleDrawer(true)}
      >
        <MenuIcon className="w-8  h-8" />
      </button>
      <div className="hidden md:flex  gap-1 ">
        {TopNav?.map((item, index) => {
          const isActive = pathname === item?.location;
          return (
            <div
              onClick={() => {
                router.push(item.location);
              }}
              key={index}
              className={`${
                isActive && " border-b-2 text-red-500 border-red-500 font-bold"
              }  px-5 py-2 flex gap-1   items-center text-black   cursor-pointer    hover:border-b-2 hover:text-red-500 hover:border-red-500 hover:font-bold`}
            >
              <i className={`${item?.icon} text-sm `} />
              <button className=" text-sm   text-left  ">{item?.name}</button>
            </div>
          );
        })}
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
