import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { brand } from "@/config/brand";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: `${brand.name} | Websites, Design, Content & Digital Marketing`, template: `%s | ${brand.name}` },
  description: "Friendly web design, content, branding and digital marketing for small and growing businesses. Start with what you need and grow from there.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { type: "website", locale: "en_IN", siteName: brand.name, title: `${brand.name} | Big digital help for small businesses`, description: "Websites, content, design and digital marketing made simple for businesses that want to grow." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={jakarta.variable}>{children}</body></html>;
}
