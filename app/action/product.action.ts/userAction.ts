'use server'

import { LoginType } from "@/app/login/components/AuthForm"
import prisma from "@/lib/prismadb"
import bcrypt from 'bcrypt'

export const createUser = async (data: LoginType) => {
  try {
    const {email, firstName, lastName, password, phone, address} = data
    const name = `${firstName.toLowerCase()} ${lastName.toLowerCase}`

    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma.user.create({
      data: {
        role: 'customer',
        name,
        email,
        phone,
        address,
        hashedPassword
      }
    })
  } catch (error) {
    console.log("ERROR_CREATING_USER: ", error)
  }
}