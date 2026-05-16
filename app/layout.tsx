import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "AgentClinic",
  description: "The world's first dedicated wellness platform for AI agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <header className="border-b px-6 py-4">
          <span className="text-lg font-semibold">AgentClinic</span>
        </header>
        {children}
      </body>
    </html>
  );
}
