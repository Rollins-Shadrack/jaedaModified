import './globals.css'
import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils'
import { Inter as FontSans } from "next/font/google"
import Footer from '@/components/Footer'
import Image from 'next/image'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased",fontSans.variable)}>
        <div className='wrapper flex flex-col h-screen'>
          <Navbar/>
          <main className='flex-1 flex flex-col justify-center'>
            {children}
          </main>
          <Footer/>
          <a href="https://wa.me/254702635434" target="_blank" className="fixed bottom-20 right-5  rounded-full">
          <Image src={"/images/whatsapp.svg"} width={70} height={70} />
        </a>
        </div>
        </body>
    </html>
  )
}
