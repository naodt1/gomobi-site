import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoMobi – Mobile MVP Agency",
  description: "GoMobi helps startups and founders launch fast, beautiful MVPs for mobile using cutting-edge tech and lean design.",
  openGraph: {
    title: "GoMobi – Mobile MVP Agency",
    description: "We build beautiful, blazing-fast MVPs for mobile. From idea to app store – GoMobi is your startup's technical partner.",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg", //TODO: replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "GoMobi Mobile App Development Agency",
      },
    ],
    type: "website",
    siteName: "GoMobi",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoMobi – Mobile MVP Agency",
    description: "Your partner in launching fast, stunning mobile MVPs.",
    images: ["https://your-domain.com/og-image.jpg"], // update accordingly
  },
  metadataBase: new URL("https://your-domain.com"), // replace with your domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
