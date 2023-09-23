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
import { ArrowRightToLine,Github} from "lucide-react";

function page() {
  return (
    <>
      <div className=" flex justify-center my-[100px] w-full h-full">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className=" text-center">Log in</CardTitle>
            <CardDescription className=" text-center">
              Log in to IETE-SF
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="name" placeholder="Enter your mail" />
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">
              <Link href="/">Cancel</Link>
            </Button>
            <Button>
              <ArrowRightToLine />
            </Button>
          </CardFooter>
          <div className=" flex justify-center">

          <Button variant="" >Log in with <span>
             <Github/> 
            </span>
             </Button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default page;
