"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hero from "@/components/Hero";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const { status } = useSession();
  return (
    <>
      <div >
        {/* want to send data ?
        <br />
        <Link href="/senddata">
        <Button >click here</Button>
      </Link> */}
{status === "authenticated" ? (
  router.push("/dashboard")
  ) : (
    
    <Hero />
)}
</div>
</>
);
}
