import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import { NetworkHologram } from "@/components/ui/NetworkHologram";
import { DirectionalSpotlight } from "@/components/ui/DirectionalSpotlight";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Professional Anti-Gravity Portfolio",
  description: "High-fidelity, hyper-modern, and strictly professional portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} antialiased`}>
      <body className="relative min-h-screen bg-obsidian text-foreground selection:bg-accent-glow selection:text-white">
        <ThemeProvider>
          <DirectionalSpotlight />
          <BackgroundCanvas />
          <NetworkHologram />
          <CustomCursor />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
