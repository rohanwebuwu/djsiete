import React from "react";
import { Button } from "./ui/button";
import { collection, addDoc ,serverTimestamp} from "firebase/firestore";
import { db } from "@/firebaseConfig";
import "firebase/firestore";

function Sendreq(props) {
async function handleFollowRequest() {

    console.log('props.id', props.id)
    console.log("userid", props.userid)
    try {
        await addDoc(collection(db, "JoinTeamRequest"), {
          senderId: props.userid,
          recipientId: props.id,
          timestamp: serverTimestamp(),
          name: props.name,

        });
        console.log("Follow request sent!");
      } catch (e) {
        console.error("Error sending follow request: ", e);
      }
}


 

  return (
    <div>
      <Button onClick={handleFollowRequest} >
Join
      </Button>
    </div>
  );
}

export default Sendreq;
