'use client'

import { FullProductType } from "@/lib/types";
import { IconShoppingCart } from "@tabler/icons-react";
import { animate, motion, stagger } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const ProductCard: React.FC<FullProductType> = ({name, categories, photo, variants, id, price}) => {
  const variantPrices = variants.map((variant) => variant.price)
  const maxPrice = Math.max(...variantPrices)
  const minPrice = Math.min(...variantPrices)

  useEffect(()=>{
    animate(".productCard", {opacity: 1, y: 0}, {delay: stagger(0.1), duration: 0.2})
  }, [])
  return (
    <motion.div 
      className="productCard col-span-1 relative w-full h-[30rem] flex flex-col bg-white p-5 border rounded-lg group/product gap-5 transition-all duration-200 hover:shadow-lg"
      style={{
        opacity: 0,
        y: 10,
        transition: 'all'
      }}
    >
      <picture className="overflow-hidden rounded-lg w-full h-full bg-red-300">
        <Image src={photo} width={1000} height={1000} alt={name} className="w-full h-full object-cover group-hover/product:scale-125 transition-all duration-200" />
      </picture>
      <div className="flex flex-col text-black-200/70">
        <h1 className="font-light capitalize">{categories[0].name}</h1>
        <h1 className="font-bold line-clamp-1 mb-5 capitalize">{name}</h1>
        {price || (maxPrice===minPrice)
          ? <span className="text-xl font-extrabold">Rp{[price ?? maxPrice].toLocaleString()}</span>
          : <span className="text-xl font-extrabold">Rp{minPrice.toLocaleString()} - Rp{maxPrice.toLocaleString()}</span>
        }
      </div>
      <Link href={`/product/${id}`} className="flex items-center justify-center gap-1 absolute bottom-2 right-2 border text-green-600 bg-green-200 rounded-full py-2 px-4 transition-all duration-200 hover:shadow-sm hover:shadow-green-400">
        <IconShoppingCart/>
        <span className="font-bold">Buy</span>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
