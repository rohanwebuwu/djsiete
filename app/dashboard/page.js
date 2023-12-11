"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { db } from "@/firebaseConfig";
import { useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Statusdata from "@/components/Statusdata";

function page() {
  const [ismember, setismember] = useState("");
  const { status } = useSession();
  const { data: session } = useSession();

  const router = useRouter();
  async function adddata(name, email, membership) {
    try {
      const docref = await addDoc(collection(db, "users"), {
        name: session.user.name,
        email: session.user.email,
        membership: ismember,
      });
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <>
      <div>
        {status === "authenticated" ? (
          <div>
            <p className=" flex justify-center ">
              <Image
                src={session.user.image}
                className=" rounded-full"
                alt="Picture of the author"
                width={100}
                height={100}
              ></Image>
            </p>

            <p className=" flex justify-center text-3xl ">
              Welcome {session.user.name}
            </p>

     
            <Statusdata />
          </div>
        ) : (
<div>
  not authenticated
</div>
        )}
      </div>
    </>
  );
}

export default page;
