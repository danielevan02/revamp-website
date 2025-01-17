"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.5),
      }
    );
  }, [animate, duration, filter]);

  const renderWords = () => {
    return (
      <motion.span ref={scope} className="flex flex-wrap gap-x-3 justify-center">
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${idx < 4 ? 'text-white':'text-purple'} opacity-0`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.span>
    );
  };

  return (
    <div className={cn("font-extrabold", className)}>
      <div className="mt-4">
        <h1 className="text-white text-3xl md:text-7xl tracking-wide max-w-[800px] text-center" aria-label="Breastfeeding Lifestyle Solution By GabaG Indonesia">
          {renderWords()}
        </h1>
      </div>
    </div>
  );
};
