import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProgressBar } from "@/components/progress-bar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anjali Pal",
  description: "Dolami Assesmemt Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ProgressBar className="fixed top-0 h-1 bg-foreground z-[100]">
          {children}
        </ProgressBar>
      </body>
    </html>
  );
}
