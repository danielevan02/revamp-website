import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { CustomerServiceButton } from "@/components/CustomerServiceButton";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GabaG Indonesia",
  description: "Breastfeeding lifestyle solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased hide-scrollbar bg-[#f9f9f9]`}>
        <ThemeProvider defaultTheme="light">
          <Navbar />
          {children}
          <CustomerServiceButton/>
        </ThemeProvider>
      </body>
    </html>
  );
}
