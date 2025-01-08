"use client";

import { Variant } from "@prisma/client";
import React, { useMemo, useState } from "react";
import { Badge } from "../ui/badge";
import { isNumber } from "lodash";
import { cn } from "@/lib/utils";

interface VariantSelectorProps {
  discount: number;
  variants: Variant[];
  productPrice?: number | null;
}

const VariantSelector: React.FC<VariantSelectorProps> = ({ discount, variants, productPrice }) => {
  const computedPrice = useMemo(() => {
    if (productPrice) {
      return productPrice;
    } else {
      const maxPrice = Math.max(...variants.map((variant) => variant.price));
      const minPrice = Math.min(...variants.map((variant) => variant.price));
      return maxPrice === minPrice ? maxPrice : { maxPrice, minPrice };
    }
  }, [productPrice, variants]);

  const [price, setPrice] = useState(computedPrice);
  const [selectedVariant, setSelectedVariant] = useState('')
  const discountedPrice = isNumber(price) && price-price*discount || undefined

  const handleVariant = (id: string, price: number) => {
    if(selectedVariant === id) {
      setSelectedVariant('')
      setPrice(computedPrice)
    } else {
      setSelectedVariant(id)
      setPrice(price)
    }
  }
  return (
    <>
      <div className="flex flex-col mt-5">
        {discount !== 0 && (
          <Badge className="w-fit" variant={"destructive"}>
            {Math.round(discount * 100)}% off
          </Badge>
        )}
        <div className="flex items-center gap-3">
          {isNumber(price)
            ? (
                <>
                  {discount !== 0 && <span className="line-through text-neutral-400">Rp{price.toLocaleString()}</span>}
                  <span className={cn("text-4xl font-bold", discount && 'text-red-500')}>
                    Rp{[discountedPrice ?? price].toLocaleString()}
                  </span>
                </>
              )
            : (
                <span className={cn("text-4xl font-bold", discount && 'text-red-500')}>
                  Rp{price.minPrice.toLocaleString()} - Rp{price.maxPrice.toLocaleString()}
                </span>
              )
            }
        </div>
      </div>
      <div className={cn("mt-10", variants.length < 2 && 'hidden')}>
        <span className="text-neutral-600 text-xl">Select Variant</span>
        <div className="flex flex-wrap gap-2 w-full mt-3 md:mt-5">
          {variants.map((variant, idx) => (
            <div 
              className={cn("px-4 py-2 border border-neutral-500 hover:bg-neutral-300 transition-all rounded-md capitalize text-neutral-600 cursor-pointer text-sm",
                selectedVariant === variant.id && 'bg-neutral-300 '
              )} 
              key={idx}
              onClick={() => handleVariant(variant.id, variant.price)}
            >
              {variant.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VariantSelector;
