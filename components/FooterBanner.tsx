"use client";
import React from "react";
import { Boxes } from "./ui/BackgroundBoxes";
import { cn } from "@/lib/utils";
import { IconBrandInstagram } from "@tabler/icons-react";
import Image from "next/image";

export function FooterBanner() {
  return (
    <div className="h-80 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="flex flex-col justify-center items-center" >
        <IconBrandInstagram className="text-white z-30 relative w-32 h-32"/>
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>Follow @gabagindonesia</h1>
      </div>
      <a href="https://www.instagram.com/gabagindonesia/" className="text-center mt-7 border text-neutral-300 uppercase py-2 px-5 hover:bg-pink-500 duration-200 relative z-10">Visit Instagram</a>
      <div className="w-full h-full">
        <Image src='/footer/f1.jpg' width={1000} height={1000} alt="footer-img" className="w-56 h-56 object-cover absolute top-10 left-28 -rotate-12 -skew-y-12"/>
        <Image src='/footer/f2.jpg' width={1000} height={1000} alt="footer-img" className="w-56 h-56 object-cover absolute top-10 left-[22rem] -translate-y-32 rotate-45 skew-x-[20deg]" />
        <Image src='/footer/f3.jpg' width={1000} height={1000} alt="footer-img" className="w-56 h-56 object-cover absolute bottom-10 right-[10rem] rotate-[25deg] skew-x-[20deg]" />
      </div>
    </div>
  );
}
