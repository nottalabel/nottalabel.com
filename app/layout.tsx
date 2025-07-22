import type { Metadata } from "next";
import { Radio_Canada } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const radioCanada = Radio_Canada({
  variable: "--font-radio-canada",
  subsets: ["latin"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "nottalabel",
  description: "We're a crew, nottalabel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${radioCanada.variable} antialiased flex flex-col items-center`}
      >
        <div className="flex flex-col">
            <Image 
                src="/logo-white.svg"
                alt="nottalabel"
                width={256}
                height={256}
            />
            <p className="flex">Coming soon...&trade;</p>
        </div>
        {children}
      </body>
    </html>
  );
}
