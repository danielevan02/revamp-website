import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  header,
  icon,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border overflow-hidden justify-between flex flex-col space-y-4",
        className
      )}
    >
      {
        id === 1 ?
        <Image
          src={header!}
          width={1000}
          height={1000}
          alt="logo"
          className="absolute w-96 object-cover -right-40 z-0"
        />
        :
        <Image
          src={header!}
          width={1000}
          height={1000}
          alt="logo"
          className="w-full max-h-40 object-cover"
        />
      }
      <div className={`group-hover/bento:translate-x-2 transition duration-200 z-10 ${id === 1 && 'flex flex-col h-full justify-center w-72'}`}>
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 ">
          {description}
        </div>
      </div>
    </div>
  );
};