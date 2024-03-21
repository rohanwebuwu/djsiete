"use client";
import { db } from "@/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
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
import { useState, useEffect, use } from "react";
import Link from "next/link";
import { Card } from "./ui/card";
import Updatefield from "./Updatefield";
import Sendreq from "./Sendreq";
import { get } from "react-hook-form";

const Statusdata = () => {
  const touter = useRouter();

  const { toast } = useToast();

  const { data: session } = useSession();
  const [membershipdata, setmembershipdata] = useState([]);

  useEffect(() => {
    onSnapshot(query(collection(db, "membership")), (snapshot) => {
      setmembershipdata(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);
  const [docId, setDocId] = useState(null);
  const getDocumentId = async () => {
    const q = query(collection(db, "membership"), where("email", "==", session.user.email));

    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      setDocId(doc.id);

    }
  }
  getDocumentId();
  


  async function deleteData(id) {
    deleteDoc(doc(db, "membership", id));
    console.log("deleted");
    toast({
      title: "Data Deleted",
    });
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
                <Sendreq id={item.id} userid={docId} name={session.user.name} />
                <Link
                  href={{
                    pathname: "/updatedata",
                    query: { id: item.id }, // the data
                  }}
                >
                  <Button variant="secondary">Edit</Button>
                </Link>
                <div></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Statusdata;
