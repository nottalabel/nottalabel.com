import type { Metadata } from "next";
import { Radio_Canada } from "next/font/google";
import "./globals.css";

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
        className={`${radioCanada.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
