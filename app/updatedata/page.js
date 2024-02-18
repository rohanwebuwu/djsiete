"use client";
import Updatefield from "@/components/Updatefield";
import React from "react";

function page({ searchParams }) {



  return (
    <>
      <div>i will update data here</div>
      <Updatefield id={searchParams.id} />
    </>
  );
}

export default page;
