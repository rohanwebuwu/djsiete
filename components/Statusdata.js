"use client";
import { db } from "@/firebaseConfig";
import React, { use } from "react";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  getDocs,
  collection,
  getFirestore,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Card } from "./ui/card";

const Statusdata = () => {
  const [membershipdata, setmembershipdata] = useState([]);
  useEffect(() => {
    onSnapshot(query(collection(db, "membership")), (snapshot) => {
      setmembershipdata(snapshot.docs);
    });
  }, []);

  const dataa = membershipdata.map((doc) => doc.data());
  console.log("dataa", dataa);

  const { data: session } = useSession();

  return (
    <>
      <div>
        new here?
        <Link href="/senddata">send data</Link>
        <br />
        {session.user.name} <br />
      </div>
      <div>
        <div className=" grid gap-4 grid-cols-4 ">
          {dataa.map((item) => (
            <Card key={item.Sapid} className="">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>Student Data</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Sap Id:{item.Sapid}</p>
              </CardContent>
              <CardContent>
                <p>Is Member:{item.membership}</p>
              </CardContent>
              <CardContent>
                <p>Sap Id:{item.Sapid}</p>
              </CardContent>
              <CardFooter>
    <p>{item.email}</p>
  </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Statusdata;
