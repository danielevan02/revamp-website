"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { name: "Blog", href: "/blog" },
  { name: "Event & Campaign", href: "/events" },
  { name: "Join Reseller", href: "/reseller" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Gabag", href: "/about" },
];

const LoginButton = ({ className = "" }) => (
  <button className={`px-6 py-2 rounded-xl border flex justify-center items-center font-semibold border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 ${className}`}>
    Login
  </button>
);

const SignInButton = ({ className = "" }) => (
  <button className={`inline-flex py-2 px-5 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}>
    Sign In
  </button>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isLandingPage = useMemo(() => pathname === "/", [pathname]);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollThreshold = pageHeight * 0.1; // 10% of the page height

    if (scrollPosition > scrollThreshold && !isVisible) {
      setIsVisible(true);
    } else if (scrollPosition <= scrollThreshold && isVisible) {
      setIsVisible(false);
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isLandingPage) {
      setIsVisible(true);
      return;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLandingPage, handleScroll]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {(isVisible || !isLandingPage) && (
        <motion.nav
          className={`${isLandingPage ? 'fixed':'sticky'} top-0 left-0 right-0  bg-white md:bg-white/90 shadow-md z-50 backdrop-blur-sm`}
          initial={isLandingPage ? { y: "-100%" } : { y: 0 }}
          animate={{ y: 0 }}
          exit={isLandingPage ? { y: "-100%" } : {}}
          transition={{ duration: 0.3 }}
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-1 flex items-center w-28 md:w-40 ">
                  <Image src="/logo.png" alt="Gabag logo" width={1000} height={1000} className="w-full h-full" />
                </Link>
              </div>
              <div className="hidden sm:ml-6 md:flex sm:space-x-8 items-center">
                {menuItems.map((item) => (
                  <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="hidden md:flex sm:items-center gap-3">
                <LoginButton />
                <SignInButton />
              </div>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded={isOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={mobileMenuRef}
                className="md:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                      aria-current={pathname === item.href ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex items-center px-5 gap-3">
                    <LoginButton className="relative w-full inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" />
                    <SignInButton className="h-12 w-full" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}