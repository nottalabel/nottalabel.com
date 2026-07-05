import type { Metadata } from "next";
import { Radio_Canada } from "next/font/google";
import { Bluesky, Youtube, Instagram } from "./icons";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

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
        <div className="flex flex-col md:flex-row">
            <Link href="/">
                <Image 
                    src="/logo-white.svg"
                    alt="nottalabel"
                    width={256}
                    height={256}
                />
            </Link>
            <div className="flex flex-row m-auto md:pl-8">
                <Link className="m-auto p-2" href="/radio">Radio</Link>
                <Link className="m-auto p-2" href="/store">Store</Link>
                <Link className="m-auto p-2" href="/about">About Us</Link>
            </div>
        </div>
        
        {children}
        <div className="m-auto mt-16 flex flex-col">
            <div className="flex flex-row m-auto">
                <a target="_blank" href="https://bsky.app/profile/nottalabel.com">
                    <Bluesky className="m-auto" style={{ color: "#ededed" }} />
                </a>
                <a target="_blank" href="https://www.instagram.com/nottalabel">
                    <Instagram className="m-auto" style={{ color: "#ededed" }} />
                </a>
                <a target="_blank" href="https://www.youtube.com/@nottalabel">
                    <Youtube className="m-auto" style={{ color: "#ededed" }} />
                </a>
            </div>
            <p>Copyright &copy; MMXXVI nottalabel</p>
        </div>
      </body>
    </html>
  );
}
