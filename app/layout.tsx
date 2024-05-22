import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "najakgil blog",
  description: "Welcome to Najakgil Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[##2294FF]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
