import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Schlag — Fast Desktop File Explorer for Windows",
  description:
    "Schlag is an open-source desktop file explorer for Windows with instant search, tabs, terminal integration, and zip browsing. Built with Tauri and Rust for power users.",
  icons: {
    icon: "/icons/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Schlag",
    "applicationCategory": "DesktopApplication",
    "operatingSystem": "Windows",
    "description": "Schlag is an open-source desktop file explorer for Windows with instant search, tabs, terminal integration, and zip browsing. Built with Tauri, React, and Rust for power users.",
    "url": "https://github.com/MelAlejandrino/Schlag",
    "license": "https://www.github.com/MelAlejandrino/Schlag/blob/main/LICENSE",
    "author": {
      "@type": "Organization",
      "name": "Schlag"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
