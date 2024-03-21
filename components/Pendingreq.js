"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { db } from "@/firebaseConfig";
import { collection, query, where, getDocs, limit,deleteDoc,doc } from "firebase/firestore";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import { useState } from "react";
function Pendingreq() {
  const { data: session } = useSession();
  const [docId, setDocId] = useState("");
  const [namereq, setnamereq] = useState("no one");
  const [idreq, setidreq] = useState("");

  async function fetchMembershipData() {
    const q = query(
      collection(db, "membership"),
      where("email", "==", session.user.email),
      limit(1)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setDocId(doc.id);
    });
  }
  fetchMembershipData();

  const getDocumentIdofrequests = async () => {
    const q = query(
      collection(db, "JoinTeamRequest"),
      where("recipientId", "==", docId),
      limit(1)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data().name);
      setnamereq(doc.data().name);
      setidreq(doc.id);
    });
  };
  getDocumentIdofrequests();

  async function deleteRequest(id) {
    deleteDoc(doc(db, "JoinTeamRequest", id));
    console.log("deleted");
  }

  return (
    <>
     <Card>
  <CardHeader>
    <CardTitle>Requests</CardTitle>
    <CardDescription></CardDescription>
  </CardHeader>
  <CardContent>you have a request from {namereq}</CardContent>
  <CardFooter className=" flex gap-4">
    {namereq !== "no one" ? (
      <>
        <Button>Accept</Button>
        <Button onClick={() => deleteRequest(idreq)}>Reject</Button>
      </>
    ) : null}
  </CardFooter>
</Card>
    </>
  );
}

export default Pendingreq;
