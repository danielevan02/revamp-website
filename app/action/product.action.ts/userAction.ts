'use server'

import { signUpType } from "@/app/login/components/AuthForm"
import prisma from "@/lib/prismadb"
import bcrypt from 'bcrypt'

export const createUser = async (data: signUpType) => {
  try {
    const {username, firstName, lastName, password, phone, address} = data
    const name = `${firstName.toLowerCase()} ${lastName.toLowerCase()}`

    const existUser = await prisma.user.findUnique({
      where: {
        username
      }
    })

    if(existUser){
      return {message: 'This username already taken!', error: true}
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma.user.create({
      data: {
        role: 'customer',
        name,
        phone,
        address,
        hashedPassword,
        username
      }
    })

    return {message: 'Account created!'}
  } catch (error) {
    console.log("ERROR_CREATING_USER: ", error)
  }
}