import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Poppins, Dancing_Script } from "next/font/google";

import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import BackgroundEffects from "@/components/BackgroundEffects";
import SmoothScroll from "@/components/SmoothScroll";
import PageBack from "@/components/PageBack";
import PageNext from "@/components/PageNext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Birthday My Love | A Cinematic Journey",
  description: "A premium interactive love story and birthday celebration.",
};

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${poppins.variable} ${dancingScript.variable} font-sans antialiased bg-background text-foreground`}
      >
        <SmoothScroll>
          <BackgroundEffects />
          <CustomCursor />
          <PageBack />
          <PageNext />
          {children}
        </SmoothScroll>

      </body>
    </html>
  );
}





