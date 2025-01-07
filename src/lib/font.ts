import { Manrope, Playfair } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export { manrope, playfair };
