import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Link from "next/link";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='max-w-3xl mx-auto py-10'>
        <header>
          <Link
            href='/'
            className='bg-gradient-to-r from-slate-400 via-gray-50 to-slate-300 bg-clip-text text-transparent text-lg font-bold'>
            SATCH
          </Link>
        </header>
        <main className='py-20'>{children}</main>
      </body>
    </html>
  );
}
