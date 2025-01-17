import React from "react";
import AuthForm from "./components/AuthForm";

const LoginPage = ({ searchParams }: { searchParams: { type: "login" | "signup" } }) => {
  return (
    <div className={"relative flex flex-col justify-center items-center md:h-screen"}>
      <div className="z-50 w-full my-10 md:my-0">
        <h1 
          className="font-bold text-3xl flex flex-col md:flex-row items-center justify-center text-neutral-950 text-center w-full gap-1" 
          aria-label={searchParams.type === 'signup' ? "Signup to Gabag Indonesia" : "Login to Gabag Indonesia"}
        >
          {searchParams.type === "signup" ? "Signup" : "Login"} to
          <span className="flex gap-1">
            <span className="text-blue-600">Gabag</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-200 to-white-200">
              Indonesia
            </span>
          </span>
        </h1>

        <h2 className="text-neutral-500 text-sm text-center max-w-96 mt-2 mb-2 dark:text-neutral-300 mx-auto ">
          E-Commerce khusus ibu menyusui dan ibu hamil terbaik di Indonesia.
        </h2>

        <div className="max-w-md w-full mx-auto rounded-lg md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <AuthForm type={searchParams.type ?? "login"} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
