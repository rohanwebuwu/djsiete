import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";


import { useState } from "react";
function Updatefield(props) {
  const [sap, setsap] = useState("")
  const [mem, setsmem] = useState("")

  async function updateData() {
    await updateDoc(doc(db, "membership", props.id), {
      sapid: "new sapid",
      membership: "new membership status",
    });
  }
  return (
    <>
      <div className=" flex flex-col gap-4 m-9">
        <Input type="text" placeholder="sapid" />
        <Input type="text" placeholder="membership status" />
        <Button>update data</Button>
      </div>
    </>
  );
}

export default Updatefield;
