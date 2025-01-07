"use client";
import { useRouter } from "next/navigation";
import { Locale } from "@/dictionaries/dictionaries";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/sheet";

const Switch = () => {
  const router = useRouter();
  const switchLang = (lang: Locale) => {
    console.log(lang);
    router.push(`/${lang}`);
  };
  return (
    <div>
      <Select onValueChange={(e) => switchLang(e as Locale)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="EN" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="np">NP</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Switch;
