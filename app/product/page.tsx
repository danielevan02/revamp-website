import ProductCard from "@/components/ProductCard";
import { Checkbox } from "@/components/ui/checkbox";
import { createClient } from "@/supabase/client";
import React from "react";

export const revalidate = 1

const Product = async () => {
  const supabase = createClient();
  const { data: categories } = await supabase.from("sub_categories").select();
  const { data: products } = await supabase
  .from('product')
  .select(`
    id,
    product_name,
    photo,
    sub_categories (sub_name),
    price
  `)
  return (
    <div className={`flex relative min-h-screen max-h-screen overflow-y-scroll`}>
      <div className="flex flex-col p-10 shadow-lg sticky top-0 left-0 w-[30%]">
        <h1 className="uppercase font-extrabold text-lg text-black-200 mb-4">category</h1>
        <div className="flex flex-col h-full justify-between ml-3 py-8">
          {categories?.map((category) => (
            <div className="flex items-center gap-3 text-black-200" key={category.id}>
              <Checkbox />
              <span>{category.sub_name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 grid grid-cols-3 gap-3 w-full">
        {products?.map((product) => (
          <ProductCard 
            id={product.id}
            photo={product.photo[0]} 
            name={product.product_name} 
            category={product.sub_categories?.sub_name!} 
            price={product.price}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
