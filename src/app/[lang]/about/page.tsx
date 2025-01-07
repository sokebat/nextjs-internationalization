import Switch from "@/components/switch";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import React from "react";

type Props = {
  params: {
    lang: Locale;
  };
};

const page = async ({ params: { lang } }: Props) => {
  const intl = await getDictionary(lang);

  return (
    <div className="mb-6">
      <p className="text-lg">
        {intl.get_started}&nbsp;
        <code className="bg-gray-100 px-2 py-1 rounded">src/app/page.tsx</code>
      </p>
      <Switch />
      <div className="mt-6">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        ></a>
      </div>
    </div>
  );
};

export default page;
