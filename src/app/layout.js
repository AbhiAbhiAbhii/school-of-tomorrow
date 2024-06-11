import Footer from "./components/Footer"
import "./globals.css"
import { BethanyElingston } from "./utils/custom-font"
import { Manrope } from "next/font/google"


export const metadata = {
  title: "Schools of tomorrow",
  description: "Coming Soon",
  metaDatabase: new URL('https://schoolsoftomorrow.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Schools of Tomorrow',
    description: 'Coming Soon',
    images: '/opengraph-image.png'
  }
}

const ManRope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin']
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body 
        className={`${BethanyElingston.variable} ${ManRope.variable} bg-main flex flex-col items-center justify-center h-dvh overflow-hidden`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
