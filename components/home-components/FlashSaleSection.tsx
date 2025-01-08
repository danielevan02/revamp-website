import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Category, Product, Variant } from "@prisma/client";
import ProductCard from "../ProductCard";
import { ClassNameValue } from "tailwind-merge";
import { CategoriesWithProduct } from "@/lib/types";
import { cn } from "@/lib/utils";

interface FlashSaleSectionProps {
  data: CategoriesWithProduct
  prevBtnStyle?: React.HTMLProps<HTMLElement>["className"]
  nextBtnStyle?: React.HTMLProps<HTMLElement>["className"]
}

const FlashSaleSection: React.FC<FlashSaleSectionProps> = ({data, prevBtnStyle, nextBtnStyle}) => {
  const title = data.name
  const products = data.products
  return (
    <div className="flex flex-col">
      <h1 
        className={
          cn(`relative 
              flex-col 
              md:flex-row 
              z-10 
              text-3xl 
              md:text-7xl 
              md:leading-tight 
              max-w-5xl 
              mx-auto 
              text-center 
              tracking-tight 
              font-extrabold 
              bg-clip-text 
              text-transparent 
              bg-gradient-to-r 
              from-green-500 
              via-white
              to-blue-600 
              flex 
              mb-5
              items-center 
              gap-2 
              capitalize
              md:gap-8`
          )}
      >
        <span>{title}</span>
      </h1>
      <Carousel className="w-full">
        <CarouselContent className="">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-1 basis-1 md:basis-1/2 lg:basis-1/4">
              <ProductCard
                {...product}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={prevBtnStyle} />
        <CarouselNext className={nextBtnStyle} />
      </Carousel>
    </div>
  );
};

export default FlashSaleSection;
