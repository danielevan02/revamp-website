"use client";

import { Category, Variant } from "@prisma/client";
import { IconShoppingCart } from "@tabler/icons-react";
import { animate, motion, stagger } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  categories?: Category[];
  photo: string;
  variants?: Variant[];
  id: string;
  price: number | null;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, categories, photo, variants, id, price }) => {
  const variantPrices = variants?.map((variant) => variant.price);
  const maxPrice = Math.max(...(variantPrices || []));
  const minPrice = Math.min(...(variantPrices || []));
  const discount = categories?.reduce((sum, category) => sum + (category.discount || 0), 0);
  const finalPrice = price ?? maxPrice;
  const priceAfterDisc = Math.round(finalPrice - finalPrice * (discount! / 100));

  useEffect(() => {
    animate(
      ".productCard",
      { opacity: 1, y: 0 },
      {
        delay: stagger(0.1),
        duration: 0.2,
      }
    );
  }, []);

  return (
    <motion.div
      className="productCard relative min-w-[280px] md:min-w-[340px] flex-1 min-h-52 max-w-md max-h-[30rem] flex flex-col bg-white p-5 border rounded-lg group/product transition-all duration-200 hover:shadow-lg"
      style={{
        opacity: 0,
        y: 10,
        transition: "all",
      }}
    >
      <picture className="overflow-hidden rounded-lg w-full">
        <Image
          src={photo}
          width={1000}
          height={1000}
          alt={name}
          className="object-cover object-center max-h-56 md:max-h-72 group-hover/product:scale-125 transition-all duration-200"
        />
      </picture>
      <div className="flex flex-col text-black-200/70 mt-3">
        <h3 className="font-light capitalize">{categories![0].name}</h3>
        <h2 className="font-bold line-clamp-1 mb-5 capitalize">{name}</h2>
        {price || maxPrice === minPrice ? (
          <div className="flex flex-col">
            {discount! > 0 && (
              <Badge className="w-fit" variant="destructive">
                -{discount}%
              </Badge>
            )}
            <div className="flex gap-2 items-center">
              <h4 className={cn("text-lg font-bold", discount && "line-through text-sm font-light")}>
                Rp{[price ?? maxPrice].toLocaleString()}
              </h4>
              {discount! > 0 && <h4 className="text-xl font-bold text-red-400">Rp{priceAfterDisc.toLocaleString()}</h4>}
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            {discount! > 0 && (
              <Badge className="w-fit" variant="destructive">
                -{discount}%
              </Badge>
            )}
            <h4
              className={cn(
                "text-xl md:text-base xl:text-lg font-extrabold xl:w-full line-clamp-1",
                discount! > 0 && "text-red-400"
              )}
            >
              Rp{minPrice.toLocaleString()} - Rp{maxPrice.toLocaleString()}
            </h4>
          </div>
        )}
      </div>
      <Link
        href={`/product/${id}`}
        className="flex items-center justify-center gap-1 absolute bottom-2 right-2 border text-green-600 bg-green-200 rounded-full p-3 lg:px-4 transition-all duration-200 hover:shadow-sm hover:shadow-green-400"
      >
        <IconShoppingCart className="h-8 w-8 md:h-4 md:w-4" />
        <span className="font-bold hidden lg:flex text-sm">Buy</span>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
