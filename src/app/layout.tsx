import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "IOV",
  description:
    "Claim IOV, Swap IOV, Live Carlive Chain (IOV) Price, Historical Chart & Carlive Chain Market Cap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-bgBlue text-sm text-textWhite ${roboto.className}`}>
        {children}
        <Toaster richColors position="top-center" closeButton/>
      </body>
    </html>
  );
}
