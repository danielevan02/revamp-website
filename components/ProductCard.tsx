import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ name, photo, category, price, id }: { name: string; photo: string; price: number; category: string; id: number; }) => {
  return (
    <div className="col-span-1 relative w-full h-[30rem] flex flex-col bg-white p-5 border rounded-lg group/product gap-5 transition-all duration-200 hover:shadow-lg">
      <picture className="overflow-hidden rounded-lg w-full h-full bg-red-300">
        <Image src={photo} width={1000} height={1000} alt={name} className="w-full h-full object-cover group-hover/product:scale-125 transition-all duration-200" />
      </picture>
      <div className="flex flex-col text-black-200/70">
        <h1 className="font-light">{category}</h1>
        <h1 className="font-bold line-clamp-1 mb-5">{name}</h1>
        <span className="text-xl font-extrabold">Rp{price.toLocaleString()}</span>
      </div>
      <Link href={`/product/${id}`} className="flex items-center justify-center gap-1 absolute bottom-2 right-2 border text-green-600 bg-green-200 rounded-full py-2 px-4 transition-all duration-200 hover:shadow-sm hover:shadow-green-400">
        <IconShoppingCart/>
        <span className="font-bold">Buy</span>
      </Link>
    </div>
  );
};

export default ProductCard;
