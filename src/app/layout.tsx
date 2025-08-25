import type { Metadata } from "next";
import { Geist, Geist_Mono, Courier_Prime } from "next/font/google";
import "./globals.css";
import Header from "./_components/base/header";
import Footer from "./_components/base/footer";
import { ToastProvider } from "./_components/sections/toasters";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YourWebsiteLoft | Fast, Affordable & Professional Websites",
  description:
    "YourWebsiteLoft builds modern, responsive, and affordable websites tailored for small businesses, startups, and personal brands. We help you stand out online with sleek design, speed, and reliability.",
  keywords: [
    "web design agency",
    "affordable websites",
    "small business websites",
    "responsive website design",
    "professional web development",
    "digital agency",
    "YourWebsiteLoft",
  ],
  openGraph: {
    title: "YourWebsiteLoft | Web Design Agency",
    description:
      "Fast, affordable, and professional websites to grow your brand and business online.",
    url: "https://www.yourwebsiteloft.com",
    siteName: "YourWebsiteLoft",
    images: [
      {
        url: "https://www.yourwebsiteloft.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "YourWebsiteLoft - Web Design Agency",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastProvider>
          <Header />
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
