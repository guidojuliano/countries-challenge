import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "app/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Challenge TOTS NEXTjs",
  description:
    "Challenge que consiste en una aplicación web utilizando React con el framework Next.js",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="app-container">
          {children}
          <Footer />
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
