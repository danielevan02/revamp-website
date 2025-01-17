import { z } from 'zod'

const validPrefixes = [
  "0852", "0853", "0811", "0812", "0813", "0821", "0822", "0851", 
  "0857", "0856", "0896", "0895", "0897", "0898", "0899", "0817", 
  "0818", "0819", "0859", "0877", "0878", "0832", "0833", "0838", 
  "0881", "0882", "0883", "0884", "0885", "0886", "0887", "0888", 
  "0889"
];

export const signUpSchema = z.object({
  firstName: z.string().min(1, 'Please enter your first name!'),
  lastName: z.string().min(1, 'Please enter your last name!'),
  password: z.string({message: 'Please enter your password!'}).min(8, 'Password length must be greater than 8 characters'),
  confirmPass: z.string(),
  username: z.string().min(1, 'Please enter your username'),
  address: z.string().optional(),
  phone: z.string().min(10, 'Enter a valid phone number!').max(14, 'Enter a valid phone number!').refine((val) => validPrefixes.some((prefix) => val.startsWith(prefix)), 'Enter a valid phone number!')
}).refine((data) => data.password === data.confirmPass, {message: 'Confirm Password does not match', path: ['confirmPass']})

export const loginSchema = z.object({
  username: z.string().min(1, 'Please enter your username'),
  password: z.string({message: 'Please enter your password!'}).min(8, 'Password length must be greater than 8 characters'),
})