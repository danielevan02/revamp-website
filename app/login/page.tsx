import React from 'react'
import AuthForm from './components/AuthForm';
import { Boxes } from '@/components/ui/BackgroundBoxes';

const LoginPage = ({searchParams}: {searchParams: {type: 'login' | 'signup'}}) => {

  return (
    <div className={'relative flex flex-col justify-center items-center h-[800px] md:h-screen overflow-hidden bg-slate-900'}>
      <Boxes/>
      <div className='z-50 absolute w-full md:w-fit'>
        <h2 className="font-bold text-3xl flex gap-1 flex-col md:flex-row items-center text-white justify-center text-center">
          {searchParams.type === 'signup' ? "Signup" : "Login"} to 
          <div className='flex gap-1'>
            <span className='text-blue-600'>Gabag</span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-100 to-white'>Indonesia</span> 
          </div>
        </h2>

        <p className="text-white text-sm text-center max-w-96 mt-2 mb-2 dark:text-neutral-300 mx-auto ">
          E-Commerce khusus ibu menyusui dan ibu hamil terbaik di Indonesia.
        </p>

        <div className="max-w-md w-full mx-auto rounded-lg md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <AuthForm type={searchParams.type ?? 'login'} />
        </div>
      </div>

    </div>
  );
}

export default LoginPage