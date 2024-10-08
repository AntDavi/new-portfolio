import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from 'next/font/google'

// Components
import Header from "@/components/Header";
import PageTranstion from "@/components/PageTranstion";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono'
});

export const metadata: Metadata = {
  title: "Anthony Davi | Frontend Developer & UX Designer",
  description: "Portfolio of Anthony Davi, a frontend developer and UX designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={jetBrainsMono.variable}
      >
        <Header />
        <StairTransition/>
        <PageTranstion>
          {children}
        </PageTranstion>
      </body>
    </html>
  );
}
