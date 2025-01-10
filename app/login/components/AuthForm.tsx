"use client";

import React, { useEffect, useState } from "react";
import { Label } from "@/components/form-components/Label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconArrowRight, IconBrandFacebook, IconBrandGoogle, IconChevronLeft, IconHome } from "@tabler/icons-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/models";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface AuthFormProps {
  type: 'login' | 'signup'
}

export type LoginType = z.infer<typeof loginSchema>;

const AuthForm: React.FC<AuthFormProps> = ({type}) => {
  const [authType, setAuthType] = useState(type)
  const [passType, setPassType] = useState('password')
  const router = useRouter()
  const { 
    register, 
    handleSubmit,
    formState: {errors}
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      password: "",
      confirmPass: "",
      address: "",
      email: "",
      phone: "",
    },
    resolver: zodResolver(loginSchema),
  });

  useEffect(()=>{
    router.replace(`/login?type=${authType}`)
  }, [authType, router])


  const onSubmit: SubmitHandler<LoginType> = (data) => {
    console.log(data)
  };
  return (
    <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
      <Link href='/' className="flex bg-blue-500 w-fit rounded-md p-1 hover:bg-blue-400 transition-all items-center gap-1 text-sm mb-4 text-white">
        <IconChevronLeft className="h-5 w-5"/>
        Back to home
        <IconHome className="h-5 w-5"/>
      </Link>
      <div className="max-h-72 mb-2 overflow-scroll scrollbar px-1">
        <div className={cn("flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4", authType === 'login' && 'hidden')}>
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" {...register('firstName')} errors={errors.firstName?.message} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" {...register('lastName')} errors={errors.lastName?.message} />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" {...register('email')} errors={errors.email?.message} />
        </LabelInputContainer>
        <LabelInputContainer className={cn("mb-4", authType === 'login' && 'hidden')} >
          <Label htmlFor="address">Address</Label>
          <Input id="address" placeholder="projectmayhem@fc.com" type="textarea" {...register('address')} errors={errors.address?.message} />
        </LabelInputContainer>
        <LabelInputContainer className={cn("mb-4", authType === 'login' && 'hidden')}>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="08**********" type="text" {...register('phone')} errors={errors.phone?.message} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type={passType} setType={setPassType} {...register('password')} errors={errors.password?.message}/>
        </LabelInputContainer>
        <LabelInputContainer className={cn("mb-8", authType === 'login' && 'hidden')}>
          <Label htmlFor="confirmPass">Confirm password</Label>
          <Input id="confirmPass" placeholder="••••••••" type="password" {...register('confirmPass')} errors={errors.confirmPass?.message} />
        </LabelInputContainer>
      </div>

      <button
        className="hover:bg-neutral-800 bg-black active:scale-95 transition-all relative group/btn flex gap-2 items-center justify-center w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        {authType === 'login' ? 'Login':'Sign Up'}
        <IconArrowRight size={15} className="opacity-0 group-hover/btn:opacity-100 -translate-x-2 group-hover/btn:translate-x-0 transition-all"/>
      </button>

      <div className="mt-3">
        {authType === 'login'
          ? <span className="flex gap-1 text-sm" onClick={() => setAuthType('signup')}>
              Don&apos;t have an account?
              <span className="text-blue-600 underline hover:font-extrabold transition-all cursor-pointer">Sign Up</span>
            </span>
          : <span className="flex gap-1 text-sm" onClick={()=>setAuthType('login')}>
              Already have an account?
              <span className="text-blue-600 underline hover:font-extrabold transition-all cursor-pointer">Login</span>
            </span>
        }
      </div>

      <div className="bg-gradient-to-r relative from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full">
        <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white text-center w-7 text-neutral-500">or</span>
      </div>

      <div className="flex flex-col space-y-4">
        <button
          className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          
        >
          <IconBrandFacebook className="h-6 w-6 text-white rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-white-200" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">Facebook</span>
          <BottomGradient />
        </button>
        <button
          className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        >
          <IconBrandGoogle className="h-6 w-6 text-white dark:text-neutral-300 bg-gradient-to-r from-yellow-500 via-green-600 to-blue-500 rounded-full" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">Google</span>
          <BottomGradient />
        </button>
      </div>
    </form>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

export default AuthForm;
