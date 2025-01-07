import Switch from "@/components/atoms/switch";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import Image from "next/image";

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const intl = await getDictionary(lang);

  return (
    <main className="p-8">
      <div className="mb-6">
        <p className="text-lg">{intl.get_started}&nbsp;</p>

        <div className="mt-6">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
              className="ml-2"
            />
          </a>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 border rounded hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">
            Docs <span className="text-blue-500">-&gt;</span>
          </h2>
          <p className="mt-2 text-gray-600">{intl.doc}</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 border rounded hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">
            Learn <span className="text-blue-500">-&gt;</span>
          </h2>
          <p className="mt-2 text-gray-600">{intl.learn}</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 border rounded hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">
            Templates <span className="text-blue-500">-&gt;</span>
          </h2>
          <p className="mt-2 text-gray-600">{intl.template}</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 border rounded hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">
            Deploy <span className="text-blue-500">-&gt;</span>
          </h2>
          <p className="mt-2 text-gray-600">{intl.deploy}</p>
        </a>
      </div>
    </main>
  );
}
