import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/nav/Navbar";
// import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Noto_Naskh_Arabic } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const lexend = localFont({
  src: '../fonts/Lexend-VariableFont_wght.ttf',
  variable: '--font-lexend',
})

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
    <html lang="en" className={`${lexend.variable} ${notoNaskhArabic.variable}`}>
      <body>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
