/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { animate, inView, motion, stagger } from "framer-motion";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <motion.div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "card rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 min-w-80 transition-all duration-300 ease-out snap-start",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
      style={{
        y: 50,
        opacity: 0,
      }}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div className="absolute z-10 bg-black-200/50 w-full h-full"/>
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-center justify-center text-center uppercase py-8 px-4 transition-all duration-300 z-20",
          hovered === index ? "opacity-100 !font-extrabold" : "opacity-50 font-light"
        )}
      >
        <div className="text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 px-2">
          {card.title}
        </div>
      </div>
    </motion.div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(()=>{
    inView(".cardContainer", () => {
      animate(
        ".card", 
        {opacity: 1, y: 0}, 
        {delay: stagger(0.1), duration: 0.5}
      )
    })
  }, [])

  return (
    <motion.div className="cardContainer flex gap-2 hide-scrollbar overflow-scroll w-full snap-x">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </motion.div>
  );
}
