import React from 'react'
import AuthForm from './components/AuthForm';

const LoginPage = ({searchParams}: {searchParams: {type: 'login' | 'signup'}}) => {

  return (
    <div className={'relative flex flex-col justify-center items-center my-10'}>
      <div className='z-50 w-full'>
        <h2 className="font-bold text-3xl flex gap-1 flex-col md:flex-row items-center text-neutral-950 justify-center text-center">
          {searchParams.type === 'signup' ? "Signup" : "Login"} to 
          <div className='flex gap-1'>
            <span className='text-blue-600'>Gabag</span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-200 to-white-100'>Indonesia</span> 
          </div>
        </h2>

        <p className="text-neutral-500 text-sm text-center max-w-96 mt-2 mb-2 dark:text-neutral-300 mx-auto ">
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