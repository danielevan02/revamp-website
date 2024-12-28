"use client";

import { cn } from "@/lib/utils";
import { animate, inView, motion, stagger } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  useEffect(() => {
    inView("#bentoContainer", () => {
      animate(
        ".bentoChildren", 
        { opacity: 1, y: 0 }, 
        { 
          delay: stagger(0.2), 
          duration: 1,
        }
      );
    });
  }, []);
  return (
    <motion.div
      className={cn("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ", className)}
      id="bentoContainer"
    >
      {children}
    </motion.div>
  );
};

export const BentoGridItem = ({
  index,
  className,
  title,
  description,
  header,
  icon,
}: {
  index: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      className={cn(
        "bentoChildren relative row-span-1  rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border overflow-hidden justify-between flex flex-col space-y-4",
        className,
        index === 1 && 'col-span-2'
      )}
      style={{
        opacity: 0,
        y: 100,
        transition: 'all'
      }}
    >
      {index === 1 ? (
        <Image
          src={header!}
          width={1000}
          height={1000}
          alt="logo"
          className="absolute w-96 object-cover -right-40 z-0"
        />
      ) : (
        <Image src={header!} width={1000} height={1000} alt="logo" className="w-full max-h-40 object-cover" />
      )}
      <div
        className={`group-hover/bento:translate-x-2 transition duration-200 z-10 ${
          index === 1 && "flex flex-col h-full justify-center w-72"
        }`}
      >
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">{title}</div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 ">{description}</div>
      </div>
    </motion.div>
  );
};
