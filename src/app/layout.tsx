import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  display: 'swap',
  subsets: ["latin"],
  variable: '--font-montserrat',

})

export const metadata: Metadata = {
  title: "Chem Week",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Chem Week</title>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
