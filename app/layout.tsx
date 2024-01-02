import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dominykas Sueris webpage",
  description: "Dominykas Sueris portofolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#e8e9f7] h-screen w-screen overflow-hidden font-mono">
        {children}
      </body>
    </html>
  );
}
