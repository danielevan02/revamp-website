"use client";

import React, { useState } from "react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger} from "./ui/AnimatedModal";
import { IconFilter } from "@tabler/icons-react";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Category } from "@prisma/client";

const FilterButton = ({categories}: {categories: Category[]}) => {
  const [minimum, setMinimum] = useState('')
  const [maximum, setMaximum] = useState('')

  const formatNumber = (num: string) => {
    // Remove any non-digit characters
    const cleanNum = num.replace(/\D/g, '')
    // Format the number with commas
    return cleanNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const handleMinimum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const formattedValue = formatNumber(inputValue)
    setMinimum(formattedValue)
  }
  const handleMaximum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const formattedValue = formatNumber(inputValue)
    setMaximum(formattedValue)
  }

  return (
    <div className="fixed bottom-10 left-10 z-50 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-blue-400 shadow-md dark:bg-white dark:text-black text-white flex justify-center group/modal-btn animate-bounce">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Filter Products
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <IconFilter />
          </div>
        </ModalTrigger>
        <ModalBody className="min-w-[50rem]">
          <ModalContent>
            <div className="flex flex-1 w-[40rem] justify-between">
              <div className="flex flex-col gap-5">
                <h1 className="text-xl text-black-200 font-bold">Categories</h1>
                <div className="flex flex-col flex-wrap text-black-200 max-h-80 gap-4">
                  {categories?.map((category) => (
                    <div className="flex gap-2 items-center" key={category.id}>
                      <Checkbox />
                      <span className="capitalize">{category.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"/>
              <div className="flex flex-col gap-5">
                <h1 className="text-xl text-black-200 font-bold">Price Range</h1>
                <div className="relative">
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-black-200">Rp</span>
                  <Input className="pl-8" placeholder="Minimum price" type="text" inputMode="numeric" value={minimum} onChange={handleMinimum} />
                </div>
                <div className="relative">
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-black-200">Rp</span>
                  <Input className="pl-8" placeholder="Maximum price" type="text" inputMode="numeric" value={maximum} onChange={handleMaximum} />
                </div>
              </div>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Apply Filter
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default FilterButton;
