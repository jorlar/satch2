"use client";

import RegisterForm from "@/app/components/RegisterForm";
import dynamic from "next/dynamic";

// import { DynamicMap } from "@/app/components/Map";

const ValdressMap = dynamic(() => import("../../components/ValdressMap"), {
  ssr: false,
});

export default async function Contact() {
  return (
    <div className='max-w-full flex flex-col gap-y-8'>
      <RegisterForm />
      <ValdressMap />
    </div>
  );
}
