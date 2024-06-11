import Footer from "./components/Footer"
import "./globals.css"
import { BethanyElingston } from "./utils/custom-font"
import { Manrope } from "next/font/google"


export const metadata = {
  title: "Schools of tomorrow",
  description: "Coming Soon",
  metaDatabase: new URL('https://schoolsoftomorrow.vercel.app/'),
  openGraph: {
    title: 'Schools of Tomorrow',
    description: 'Coming Soon',
    images: '/meta_sot_logo.png'
  }
}

const ManRope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin']
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={`${BethanyElingston.variable} ${ManRope.variable} bg-main flex flex-col items-center justify-center h-dvh overflow-hidden`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
