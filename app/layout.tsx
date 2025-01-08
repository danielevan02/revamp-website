import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import { Outfit } from "next/font/google";
import { CustomerServiceButton } from "@/components/CustomerServiceButton";
import FooterContent from "@/components/FooterContent";
const inter = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GabaG Indonesia - Perlengkapan Ibu Hamil dan Ibu Menyusui",
  description: "Breastfeeding lifestyle solutions: Perlengkapan Ibu Menyusui dan Ibu Hamil",
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
          <CustomerServiceButton />
          <FooterContent />
        </ThemeProvider>
      </body>
    </html>
  );
}
