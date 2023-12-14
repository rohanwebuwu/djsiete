"use client";
import * as React from "react";
import { db } from "@/firebaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useToast } from "@/components/ui/use-toast";
export function CardWithForm() {
  const { toast } = useToast();
  const router = useRouter();
  const { data: session } = useSession();
  const [membership, setmembership] = useState("");
  const [sapid, setsapid] = useState(60002210091);
  const [namee, setname] = useState(session?.user?.name);
  const [mail, setmail] = useState(session?.user?.email);

  async function adddata(sapid, membership) {
    try {
      const docRef = await addDoc(collection(db, "membership"), {
        name: namee,
        email: mail,
        Sapid: sapid,
        membership: membership,
      });
      router.push("/dashboard");

      toast({
        title: session?.user?.name + " has been registered",
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
    <div className=" w-full h-full flex justify-center items-center my-10">



      <Card className="w-[350px] ">
        <CardHeader>
          <CardTitle>Give your details</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">SAP ID</Label>
                <Input
                  id="number"
                  placeholder="6000221XXXX"
                  onChange={(event1) => setsapid(event1.target.value)}
                />
                <Label htmlFor="name">membership?</Label>
                <Input
                  id="text"
                  placeholder="yes or no"
                  onChange={(event) => setmembership(event.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5"></div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => adddata(sapid, membership)}>SUBMIT</Button>
        </CardFooter>
      </Card>
      </div>
    </>
  );
}
export default CardWithForm;
