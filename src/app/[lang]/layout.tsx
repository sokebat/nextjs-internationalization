import Footer from "@/components/organization/footer";
import Navbar from "@/components/organization/nav-bar";
import { manrope } from "@/lib/font";
import type { Metadata } from "next";
import "./globals.css";

 
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
      <body className={`${manrope.className} max-w-[1400px] mx-auto`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
