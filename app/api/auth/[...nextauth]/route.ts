import bcrypt from 'bcrypt'
import NextAuth, {AuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@/lib/prismadb'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {label: 'Username', type: 'text'},
        password: {label: 'Password', type: 'password'},
      },
      async authorize(credentials) {
        if(!credentials?.username || !credentials?.password){
          throw new Error('Invalid Credentials')
        }

        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username
          }
        })

        if(!user || !user.hashedPassword) throw new Error('Invalid Credentials')

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        )

        if(!isCorrectPassword) throw new Error('Invalid Credentials')

        return user
      },
    })
  ],
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub
      },
    }),
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    maxAge: 60 * 60 * 24
  }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}