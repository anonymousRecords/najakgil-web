import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "나작길 블로그",
  description: "Welcome to Najakgil Blog",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body
        className="bg-[#2294FF]"
        style={{ height: "100%", overflow: "hidden" }}
      >
        <Navbar />
        <div
          className="mt-[120px]"
          style={{
            paddingTop: "20px",
            overflowY: "scroll",
            height: "calc(100% - 120px)",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
