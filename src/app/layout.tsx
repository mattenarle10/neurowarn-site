import type { Metadata } from "next";
import { gotham } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neurowarn - Enhancing Safety in EEG-Controlled Wheelchairs",
  description: "Enhancing Safety in EEG-Controlled Wheelchairs with an RNN-Based Warning System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gotham.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
