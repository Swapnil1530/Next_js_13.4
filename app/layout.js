import Header from "@/app/header";
import '../styles/globals.css'
 export const metadata = {
    title:'About',
     description:'Welcome to Next.ja',
 };

export default function RootLayout({ children }) {
 return (
    <html lang="en">

      <body>
      < Header />
      {children}
      </body>
    </html>
  )
}
