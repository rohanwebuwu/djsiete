'use client';
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

import { useSession } from "next-auth/react";
const Loginwithgoogle = () => {
  const { status } = useSession();
  
  return <Button onClick={()=>signIn("google")}>Log in with Google</Button>;
  
};

export default Loginwithgoogle; 
