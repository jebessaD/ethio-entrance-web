import type { Metadata } from "next";
import { Outfit, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: site.name,
    description: site.description,
    images: ["/feature.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-ee-ink">{children}</body>
    </html>
  );
}
