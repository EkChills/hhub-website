import React from 'react'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import Navbar from '@/components/navbar'
import { Montserrat } from "next/font/google"
import { cn } from '@/lib/utils';
import "./globals.css";
import Footer from '@/components/Footer';
import { ReactQueryProvider } from '@/components/providers/react-query-provider';


const monsterrat = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function layout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={cn(monsterrat.className)}>
        <ReactQueryProvider>
        <MaxWidthWrapper>
          <Navbar />

        </MaxWidthWrapper>
        {children}
        <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  )
}
