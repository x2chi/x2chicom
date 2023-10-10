"use client"

//import './globals.css'
import './CSS/index.css';
import './CSS/header.css';
import './CSS/Contents.css';
import './CSS/Footer.css';
import './CSS/Modal.css';

import Header from './component/Header';
import Contents from './component/Contents';
import Footer from './component/Footer';


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Header />
        <Contents />
        <Footer />
      </body>
    </html>
  )
}
