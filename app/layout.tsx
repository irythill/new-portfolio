import type { Metadata } from "next";
import { Exo_2, Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "dxt.tsx | Henrique Souza - Front-end Developer",
  description:
    "Portfolio of Henrique Souza - Front-end Developer & IT Student. React, Next.js, TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${orbitron.variable} ${shareTechMono.variable} ${exo2.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
