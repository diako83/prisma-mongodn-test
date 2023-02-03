import Footer from './footer'
import Header from './header'
import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">    
      <head />
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
