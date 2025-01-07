import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organization/nav-bar";
import Footer from "@/components/organization/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beauty Garder",
  description: "Beauty Gardern is best beauty Parlour in the city",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[1400px] mx-auto`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
