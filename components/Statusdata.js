"use client";
import { db } from "@/firebaseConfig";
import { doc, getDoc, deleteDoc } from "firebase/firestore";

import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
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
  Limit,
  orderBy,
  where,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Card } from "./ui/card";

const Statusdata = () => {
  const { data: session } = useSession();
  const [membershipdata, setmembershipdata] = useState([]);




  useEffect(() => {
    onSnapshot(query(collection(db, "membership")), (snapshot) => {
      setmembershipdata(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
    });

  }, []);

  async function deleteData(id) {
    deleteDoc(doc(db, "membership", id));
    console.log("deleted");
  }




  return (
    <>
      <div>
        new here?
        <Link href="/senddata">
          <Button variant="ghost">send data</Button>
        </Link>
        <br />
        {session.user.name} <br />
      </div>
      <div>
        <div className=" grid gap-4 md:grid-cols-4 m-4 ">
          {membershipdata.map((item) => (
            <Card key={item.id} className="">
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
              <div className=" flex m-4 gap-6">
                <Button
                  variant="destructive"
                  onClick={() => {
                    deleteData(item.id);
                  }}
                >
                  Delete
                </Button>
                <Button variant="secondary">Edit</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Statusdata;
