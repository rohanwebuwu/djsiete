"use client";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRightToLine } from "lucide-react";
import { useState } from "react";
import { app } from "../../../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Loginwithgoogle from "@/components/Loginwithgoogle";

export function Page() {
  const auth = getAuth();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();
  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
      console.log('response.user', response.user)
      
      router.push("/");
    })
    
  };
  return (
    <>
      <div className=" flex justify-center my-[100px] w-full h-full">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className=" text-center">Create account</CardTitle>
            <CardDescription className=" text-center">
              Sign in to IETE-SF
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                  <Label htmlFor="sap" typeof="number">
                    Sap ID
                  </Label>
                  <Input id="number" placeholder="Enter your SAP" />
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    placeholder="Enter your mail"
                    onChange={(event) => setemail(event.target.value)}
                    value={email}
                  />
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    onChange={(event) => setpassword(event.target.value)}
                    value={password}
                  />
                  {/* <Label htmlFor="password">Password</Label>
                  <Input
                    id="password2"
                    placeholder="Re enter your password"
                    type="password"
                  /> */}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">
              <Link href="/">Cancel</Link>
            </Button>
            {/* <Button onClick={signup}>
              <ArrowRightToLine />
            </Button> */}
<Loginwithgoogle/>
          </CardFooter>
          <div className=" text-center">
            Already have an account?{" "}
            <Link href="/auth/login" className=" hover:text-cyan-300">
              login here
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
}
export default Page;