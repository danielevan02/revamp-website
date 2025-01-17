'use client'

import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IconShoppingBag } from "@tabler/icons-react";
import { useShoppingCart } from "@/lib/store";
import Image from "next/image";
import { Button } from "./ui/Button";

const ShoppingCart = () => {
  const products = useShoppingCart((state)=>state.product)

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <div className="relative cursor-pointer hover:bg-neutral-200 rounded-full">
          <IconShoppingBag className="w-8 h-8 text-neutral-600" stroke={1} />
          <div className="bg-red-400 text-white text-xs px-[3px] rounded-full absolute top-0 right-0">{products.length}</div>
        </div>
      </DrawerTrigger>
      <DrawerContent className="p-5 min-w-96 h-screen min-h-screen">
        <div className="absolute h-20 w-1 rounded-full bg-neutral-400 top-1/2 left-2 -translate-y-1/2" />
        <DrawerHeader>
          <DrawerTitle>Shopping Cart</DrawerTitle>
          <DrawerDescription>All of items that you have been add to cart are listed here.</DrawerDescription>
        </DrawerHeader>

        <div className="w-full max-h-full overflow-y-scroll">
          <ul className="flex flex-col gap-2">
            {products.map((product) => (
              <li key={product.id} className="border border-neutral-300 w-full flex p-3 gap-3 rounded-lg">
                <Image
                  width={100}
                  height={100}
                  alt={product.name}
                  src={product.photo}
                  className="rounded-lg"
                  priority
                />
                <div className="flex flex-col">
                  <h2 className="capitalize">{product.name}</h2>
                  
                </div>
              </li>
            ))}
          </ul>
        </div>

        <DrawerFooter>
          <Button>
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ShoppingCart;
