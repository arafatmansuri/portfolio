import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import "../styles/global.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Arafat",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script async src="https://cloud.umami.is/script.js"
          data-website-id="13b53d75-1d56-430c-92cc-88fc5470b2e1"></script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          <Sidebar />
          <div className="main-content">
            <Navbar />
            {children}
          </div>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
