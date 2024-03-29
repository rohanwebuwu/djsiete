import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { doc, setDoc,updateDoc } from "firebase/firestore"; 
import { db } from "@/firebaseConfig";
import { useRouter } from "next/navigation";

import { useState } from "react";
function Updatefield(props) {
  const router = useRouter()
  const [sap, setsap] = useState()
  const [mem, setmem] = useState()

  async function updateData() {
    try {
      await updateDoc(doc(db, "membership", props.id), {
        Sapid: sap,
        membership: mem,
  
  
      });
      router.push("/dashboard")
      
    } catch (error) {
      console.error("Error updating document: ", error);
      router.push("/dashboard")

      
    }
    


  }
  return (
    <>
      <div className=" flex flex-col gap-4 m-9">
        <Input type="text" placeholder="sapid" onChange={(e)=>setsap(e.target.value)} />
        <Input type="text" placeholder="membership status" onChange={(e)=>setmem(e.target.value)} />
        <Button onClick={()=>updateData()}>Update Data</Button>
      </div>
    </>
  );
}

export default Updatefield;
