import * as dotenv from "dotenv";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity.utils";
import Image from "next/image";

const headerImageLink = "/Satch.png";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Satch Valdres",
  description: "Generated by Jotun Utvikling",
};

const Navbar = async () => {
  const pages = await getPages();
  const sortedPages = pages.sort((a, b) => (a.id < b.id ? 1 : -1));
  return (
    <header className='flex items-center justify-between -bg-green-600 p-0 m-0 md:p-4'>
      <Link href='/' className='-bg-pink-500'>
        <Image
          className='max-w-[75px] md:max-w-auto p-2 md:p-0'
          src={headerImageLink}
          alt=''
          width={100}
          height={100}
        />
      </Link>
      <div className='flex flex-1 items-center justify-end h-full p-4 md:p-0 gap-3 text-xl -bg-red-700 text-gray-600'>
        {sortedPages.map((page, idx) => (
          <Link
            key={idx}
            href={`/${page.slug}`}
            className='hover:scale-105 transition'>
            {page.title}
          </Link>
        ))}
        <Link href={"/kontakt-oss"} className='hover:scale-105 transition'>
          Ta Kontakt
        </Link>
        <Link
          href={"https://bestill.timma.no/valdreshundesalong"}
          target='no_refferer'>
          <button className='bg-green-200 rounded-full p-1 hover:scale-105 hover:bg-green-100 transition'>
            Book time
          </button>
        </Link>
      </div>
    </header>
  );
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get Pages
  const pages = await getPages();
  return (
    <html lang='en'>
      <body className='max-w-3xl -bg-green-400 mx-auto md:py-10'>
        <Navbar />

        <main className='py-20 p-4 md:p-0 -bg-blue-400 '>{children}</main>
      </body>
    </html>
  );
}
