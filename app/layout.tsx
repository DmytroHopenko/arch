import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arch Studio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} relative`}>
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
