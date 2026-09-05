import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070709",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NOVA Studio — Digital Experiences for Ambitious Brands",
  description:
    "NOVA Studio creates premium digital experiences, websites, brand identities and digital products for ambitious brands.",
  keywords: [
    "Digital Agency",
    "UI/UX Design",
    "Spatial Computing",
    "Next.js Development",
    "Brand Identity",
    "WebGL",
  ],
  authors: [{ name: "NOVA Studio" }],
  openGraph: {
    title: "NOVA Studio — Digital Experiences for Ambitious Brands",
    description:
      "We combine strategy, design and technology to build digital experiences that make ambitious brands impossible to ignore.",
    url: "https://novastudio.design",
    siteName: "NOVA Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOVA Studio — Digital Experiences for Ambitious Brands",
    description:
      "We combine strategy, design and technology to build digital experiences that make ambitious brands impossible to ignore.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="bg-background text-zinc-100 antialiased min-h-screen flex flex-col selection:bg-nova-cyan selection:text-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
