import React from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";


function Navbar() {
  
  const { theme, setTheme } = useTheme();
  let logo = theme === "dark" ? "1.svg" : "2.svg";
  

  return (
    <>
      <div
        className="  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 fixed top-0 h-[5rem] w-full"
        suppressHydrationWarning={true}
      >
        <div className=" grid grid-cols-2 md:grid-cols-12 justify-around">
          <div className=" flex justify-around gap-3 col-span-1 md:col-span-3">
            <Link href="/">
              <Image 
                src={logo}
                width="150"
                height={150}
                alt="logo"
                className=" flex justify-center my-[-30px]"
              ></Image>
            </Link>
          </div>
          <div className=" hidden md:block  md:col-span-6 ">
          <nav className=" grid grid-flow-col gap-2 justify-around my-7 ">
            <ul>HOME</ul>
            <ul>ABOUT US</ul>
            <ul>TEAM</ul>
            <ul>EVENTS</ul>
          </nav>
          
          
          </div>
          <div className=" flex justify-end content-center m-5 col-span-1 md:col-span-3  ">
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
