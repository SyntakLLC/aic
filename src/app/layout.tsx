import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/nav/Navbar";
// import { Inter } from 'next/font/google'
import { Noto_Naskh_Arabic } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const notoNaskhArabic = Noto_Naskh_Arabic({ 
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-arabic',
})

export const metadata: Metadata = {
  title: "Andover Islamic Center",
  description: "Welcome to Andover Islamic Center",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${notoNaskhArabic.variable}`}>
      <body>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
