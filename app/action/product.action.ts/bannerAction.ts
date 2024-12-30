'use server'

import prisma from "@/lib/prismadb"

export const getAllBanners = async () => {
  try {
    const banners = await prisma.banner.findMany()

    return banners
  } catch (error) {
    console.log("ERROR_GET_ALL_BANNER", error)
    return []
  }
}