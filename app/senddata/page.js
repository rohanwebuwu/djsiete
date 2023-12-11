"use client";
import React from "react";
import { db } from "@/firebaseConfig";
import { addDoc, collection,getDocs } from "firebase/firestore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
function page() {
  const { toast } = useToast();
  const [mail, setmail] = useState("");
  const [name, setname] = useState("");
  const adddata = () => {
    try {
      const docRef = addDoc(collection(db, "users"), {
        name: name,
        email: mail,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <>
      <div className=" my-[10vh] text-8xl">send data</div>
      <div className="m-3 ">
        <Input
          placeholder="Enter your name"
          onChange={(event) => setname(event.target.value)}
        />
        <Input
          placeholder="Enter your email"
          onChange={(event) => setmail(event.target.value)}
        />
        <Button onClick={adddata}>submit</Button>
      </div>
    </>
  );
}

export default page;
