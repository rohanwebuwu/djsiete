"use client";
import React from "react";
import { Button } from "./ui/button.tsx";
import { useTheme } from "next-themes";
import Link from "next/link";

import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Moon, Sun, Equal, User } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ModeToggle from "./Toggle.js";

function Navbar() {
  let router = useRouter();
  const { theme, setTheme } = useTheme();
  const { status, data: session } = useSession();
  let logo = theme === "dark" ? "1.svg" : "2.svg";
  const [position, setPosition] = React.useState("bottom");

  return (
    <>
      <div
        className="  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 fixed top-0 h-[5rem] w-full"
        suppressHydrationWarning={true}
      >
        <div className=" grid grid-cols-3 md:grid-cols-12 justify-around">
          <div className=" flex justify-around gap-3 col-span-1 md:col-span-3">
            <Link href="/">
              <Image
                priority={true}
                placeholder="empty"
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
              <Link href="/">
                <ul>HOME</ul>
              </Link>
              <ul>ABOUT US</ul>
              <ul>TEAM</ul>
              <ul>EVENTS</ul>
            </nav>
          </div>
          <div className=" flex justify-end content-center m-5 col-span-2 md:col-span-3 gap-3 ">
            {status === "authenticated" ? (
              <Button onClick={() => signOut("google")}>
                {router.push("/")}
                sign out
              </Button>
            ) : (
              <Button onClick={() => signIn("google")}>
                {router.push("/dashboard")}
                <User />
              </Button>
            )}

            <ModeToggle />

            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Equal />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                  >
                    <DropdownMenuRadioItem>HOME</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem>EVENTS</DropdownMenuRadioItem>

                    <DropdownMenuRadioItem>TEAM</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem>EVENTS</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
