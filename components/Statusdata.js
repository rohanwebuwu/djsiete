"use client";
import { db } from "@/firebaseConfig";
import React, { use } from "react";
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

const Statusdata = () => {
  const [membershipdata, setmembershipdata] = useState([]);
  useEffect(() => {
    onSnapshot(query(collection(db, "membership")), (snapshot) => {
      setmembershipdata(snapshot.docs);
    });
  }, []);

  console.log(membershipdata.map((doc) => doc.data()));

  const { data: session } = useSession();

  return (
    <div>
      new here?
      <Link href="/senddata">send data</Link>
      <br />
      {session.user.name} <br />
    </div>
  );
};

export default Statusdata;
