import './globals.css'
import localFont from  '@next/font/local';
import { Navbar } from '@/components';

const myFont = localFont({
  src: '../../public/inter-roman-latin-var.woff2',
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={myFont.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`container ${myFont.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
