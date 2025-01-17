"use client";

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Session } from "next-auth";
import { IconLogout, IconSettings } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { signOut } from "next-auth/react";

interface ProfileUserProps {
  data: Session
}

const ProfileUser: React.FC<ProfileUserProps> = ({data}) => {
  const getInitials = (name: string) => {
      return name
        .split(" ") // Pecah nama menjadi array berdasarkan spasi
        .map(word => word.charAt(0).toUpperCase()) // Ambil huruf pertama dari setiap kata, ubah jadi huruf besar
        .join(""); // Gabungkan huruf-huruf pertama
    }  

  const menus = [
    {label: 'Settings', Icon: IconSettings, link: '/profile'}
  ]
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer hover:shadow-xl transition-all rounded-full">
          <Avatar className="flex justify-center items-center">
            <AvatarImage />
            <AvatarFallback className="bg-blue-500 text-white">{getInitials(data.user!.name!)}</AvatarFallback>
          </Avatar>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-52 z-[999]">
        <div className="flex w-full justify-between items-center">
          <span className="font-semibold capitalize text-sm text-neutral-500">Welcome back, <br/> {data.user!.name}!</span>
          <Avatar className="flex justify-center items-center">
            <AvatarImage />
            <AvatarFallback className="bg-blue-500 text-white">{getInitials(data.user!.name!)}</AvatarFallback>
          </Avatar>
        </div>
        <ul className="mt-3">
          {menus.map(({Icon, label, link}, idx) => (
            <li key={idx}>
              <Link href={link} className="flex w-full justify-between items-center text-sm text-neutral-600 rounded-md hover:bg-neutral-200 transition-all p-1">
                {label}
                <Icon className="w-5 h-5"/>
              </Link>
            </li>
          ))}
          <Button  
            size='sm' 
            variant='destructive' 
            className="w-full flex justify-between mt-3 bg-red-100 text-red-500 hover:text-white focus-visible:ring-0"
            onClick={()=>signOut()}
          >
            <span className="text-sm">Log Out</span>
            <IconLogout className="w-5 h-5"/>
          </Button>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default ProfileUser;
