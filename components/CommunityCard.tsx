/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import Image from "next/image";

export function CommunityCard() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row gap-4 items-center justify-center dark:bg-black w-full mx-auto px-8">
        <Card
          title="Tumbuh Kembang"
          img="/community/tumbang.jpg"
          member={2164}
          icon={<CardTitle title="Tumbuh Kembang" />}
        >
          <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-black-100" colors={[[203, 172, 250]]} />
        </Card>
        <Card title="Bumil" img="/community/bumil.jpg" member={1294} icon={<CardTitle title="Bumil" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Busui" img="/community/busui.jpg" member={2417} icon={<CardTitle title="Busui" />}>
          <CanvasRevealEffect animationSpeed={3} containerClassName="bg-black" colors={[[255, 163, 166]]} />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  img,
  member,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  img: string;
  member: number;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col w-52 gap-5 justify-between items-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          <Image src={img} width={1000} height={1000} alt="community" className="w-40 h-40 rounded-3xl" />
          <h2 className="dark:text-white text-xl text-white mt-4 text-center font-bold ">Member {title}</h2>
          <span>{member.toLocaleString()} Member</span>
          <button className="shadow-[inset_0_0_0_2px_#616467] text-white px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
            join now
          </button>
        </div>
      </div>
    </div>
  );
};

const CardTitle = ({ title }: { title: string }) => {
  return (
    <div className="cursor-default relative inline-flex h-12 overflow-hidden rounded-full p-[1px] min-w-60">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex w-full h-full line-clamp-1 items-center justify-center rounded-full bg-white text-xl uppercase px-3 font-extrabold text-[#cbacfa] backdrop-blur-3xl">
        {title}
      </span>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
