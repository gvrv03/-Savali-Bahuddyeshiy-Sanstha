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
                  isActive && "bg-gray-200 text-black font-bold "
                } text-gray-500  px-5 py-2 flex gap-5    cursor-pointer  hover:bg-gray-200 hover:text-black hover:font-bold  `}
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
          className=" bg-red-800  rounded-full text-white font-bold p-2 w-[100%] "
          type="button"
        >
          Join Us
        </button>
        <button
        onClick={()=>{
          router.push("/DonateUs")
        }}
          className=" bg-red-800  rounded-full text-white font-bold p-2 w-[100%] "
          type="button"
        >
          Donate Us
        </button>
      </div>
    </Box>
  );

  return (
    <div>
      <Button
        className=" md:hidden visible text-white "
        onClick={toggleDrawer(true)}
      >
        <MenuIcon className="w-8  h-8" />
      </Button>
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
                isActive && " border-b-2 font-bold"
              } text-white px-5 py-2 flex gap-1  items-center   cursor-pointer    hover:border-b-2 hover:font-bold`}
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
