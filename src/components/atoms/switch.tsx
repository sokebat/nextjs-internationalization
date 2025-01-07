"use client";
import { Locale } from "@/dictionaries/dictionaries";
import { useRouter } from "next/navigation";


const Switch = () => {
  const router = useRouter();
  const switchLang = (lang: Locale) => {
    console.log(lang);
    router.push(`/${lang}`);
  };
  return (
    <div>
      <select onChange={(e) => switchLang(e.target.value as Locale)}>
        <option value="en">English</option>
        <option value="np">Nepal</option>
      </select>
    </div>
  );
};

export default Switch;
