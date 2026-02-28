import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "@/app/RootLayoutClient";
import content from "@/data/content.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: `${content.brand.name} | ${content.brand.tagline}`,
  description: content.brand.description,
  keywords: "Technology consulting, AI, ML, Cloud, AWS, Azure, Networking, CCIE, VMware, Digital Transformation, ERP, SAP HANA",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-100`}
      >
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
