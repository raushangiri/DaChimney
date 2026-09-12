import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/layout/Newsletter";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { StickyBookBar } from "@/components/layout/StickyBookBar";
import { ExitIntentPopup } from "@/components/layout/ExitIntentPopup";
import { RecentActivity } from "@/components/layout/RecentActivity";
import { Analytics } from "@/components/shared/Analytics";
import { SchemaJsonLd } from "@/components/shared/SchemaJsonLd";
import { hotelSchema, localBusinessSchema, websiteSchema, organizationSchema } from "@/lib/schema";
import { defaultMetadata } from "@/lib/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <SchemaJsonLd
          data={[hotelSchema(), localBusinessSchema(), websiteSchema(), organizationSchema()]}
        />
        <Navbar />
        <main>{children}</main>
        <Newsletter />
        <Footer />
        <StickyBookBar />
        <WhatsAppFloat />
        <RecentActivity />
        <ExitIntentPopup />
        <Analytics />
      </body>
    </html>
  );
}