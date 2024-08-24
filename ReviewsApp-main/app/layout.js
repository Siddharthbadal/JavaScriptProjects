import { Inter } from "next/font/google";
import "./globals.css"
import { exo_2, monospace } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
      default: "Reviews App",
      template: '%s | Reviews App',
  },
  description: "Product reviews with Experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${monospace.variable}, ${exo_2.variable}`}>

      <body className={inter.className}>
        
        <div className="flex flex-col px-4 py-2 min-h-screen bg-blue-50 leading-7">
        
        
        <header >
          <Navbar/>          
        </header>
        
        <main className="grow py-3 container mx-auto p-6">
          {children}
        </main>

        <Footer />
        
        </div>        
        </body>

    </html>
  );
}
