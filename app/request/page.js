"use client"
import PendingRequests from "@/components/Pendingreq";
import React from "react";
import { useSession } from "next-auth/react";
function page() {
  const { status } = useSession();
  const { data: session } = useSession();
  return (
    <>
    
    <div>
      {status === "authenticated"?(

        <PendingRequests />
      ):null
      }
    </div>
    </>
  );
}

export default page;
