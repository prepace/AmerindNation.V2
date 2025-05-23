import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amerind Nation",
  description: "Native-owned innovation meets modern enterprise with a full-spectrum support system built to preserve culture, enhance operations, and accelerate growth. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">

      <body
        className={`h-full flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
