"use client";

import { IconAdjustmentsSearch, IconFilter, IconSearch } from "@tabler/icons-react";
import { SidebarBody, Sidebar } from "./ui/sidebar";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Category } from "@prisma/client";
import { Checkbox } from "./ui/checkbox";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Button } from "./ui/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { debounce } from "lodash";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const ProductSidebar = ({ categories }: { categories: Category[] }) => {
  const [open, setOpen] = useState(false);
  const [minimum, setMinimum] = useState("");
  const [maximum, setMaximum] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(()=>{
    const categoriesQuery = searchParams.get('categories');
    if (categoriesQuery) {
      setSelectedCategories(categoriesQuery.split(','));
    }
  }, [searchParams])

  const updateQueryParams = (
    newParams: Record<string, string | undefined>,
    currentParams: URLSearchParams,
    router: AppRouterInstance
  ) => {
    const updatedParams = new URLSearchParams(currentParams.toString());
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        updatedParams.set(key, value);
      } else {
        updatedParams.delete(key);
      }
    });

    const queryString = updatedParams.toString();
    router.replace(queryString ? `?${queryString}` : "/product");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((val: string) => {
      updateQueryParams({ search: val || undefined }, searchParams, router);
    }),
    [searchParams, router]
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    debouncedSearch(search);
  };

  const formatNumber = (num: string) => {
    const cleanNum = num.replace(/\D/g, "");
    return cleanNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleMinimum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedValue = formatNumber(inputValue);
    setMinimum(formattedValue);
  };

  const handleMaximum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toString();
    const formattedValue = formatNumber(inputValue);
    setMaximum(formattedValue);
  };

  const handlePrice = () => {
    const newMinimum = minimum.replace(/,/g, "")
    const newMaximum = maximum.replace(/,/g, "")
    updateQueryParams({maxPrice: newMaximum, minPrice: newMinimum}, searchParams, router)
  }

  const handleCheckboxChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);

    const queryValue = updatedCategories.length > 0 ? updatedCategories.join(",") : undefined;
    updateQueryParams({ categories: queryValue }, searchParams, router);
  };

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10 border-r-2 border-black-500 shadow-xl bg-white md:pt-32">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden scrollbar">
          {open ? (
            <div className="flex gap-2 items-center">
              <IconFilter className="flex-shrink-0" />
              <span className="line-clamp-1 uppercase text-sm font-bold">Filter Product</span>
            </div>
          ) : (
            <div className="bg-black text-white rounded-md p-1 w-fit">
              <IconFilter />
            </div>
          )}

          <IconAdjustmentsSearch
            className={cn(
              "absolute top-1/2 -translate-y-1/2 text-white rounded-lg bg-black/20 cursor-pointer",
              open && "hidden"
            )}
            size={30}
          />

          <div className={cn("p-1 relative", open ? 'block' : 'hidden')}>
            <div className="relative w-full flex items-center mt-5">
              <IconSearch className="absolute text-gray-500 left-3" />
              <Input
                className="rounded-full pl-12"
                placeholder="Search products..."
                onChange={(e) => handleSearch(e)}
              />
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <span className="uppercase font-bold text-neutral-500 flex">Categories</span>
              <div className="gap-3 flex flex-col max-h-80 overflow-scroll scrollbar">
                {categories.map((category) => (
                  <div key={category.id} className="gap-2 items-center capitalize flex">
                    <Checkbox 
                      value={category.id} 
                      onCheckedChange={() => handleCheckboxChange(category.id)} 
                      checked={selectedCategories.includes(category.id)}
                    />
                    <span className="line-clamp-1 text-neutral-600">{category.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <span className="uppercase font-bold text-neutral-500 line-clamp-1">Price Range</span>
              <div className="flex flex-col gap-3 mt-3 mx-1">
                <div className="relative">
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-black-200">Rp</span>
                  <Input className="pl-8" placeholder="Minimum price" value={minimum} onChange={handleMinimum} />
                </div>
                <div className="relative">
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-black-200">Rp</span>
                  <Input className="pl-8" placeholder="Maximum price" value={maximum} onChange={handleMaximum} />
                </div>
              </div>
              <Button className="mt-3" onClick={handlePrice}>Apply Price</Button>
            </div>
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
};

export default ProductSidebar;
