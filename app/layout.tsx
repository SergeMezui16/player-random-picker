import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context";
import { Header } from "@/components/organism";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Player Picker",
  description: "Fifa | FC24 Player Picker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
