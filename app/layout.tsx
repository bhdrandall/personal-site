import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Personal Site",
  description: "A clean, modern personal website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-sky-200 via-white to-indigo-200 transition-colors duration-700`}> 
        <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur shadow-md border-b border-indigo-100 transition-shadow duration-300">
          <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
            <Link href="/" className={`${montserrat.className} text-2xl font-extrabold tracking-tight text-indigo-700 drop-shadow-sm select-none hover:text-indigo-900 transition-colors duration-200`} aria-label="Home">MySite</Link>
            <ul className="flex gap-6 text-base font-medium">
              <li><Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-all duration-200 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300">About</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-all duration-200 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex flex-col items-center justify-center min-h-[80vh] px-2 sm:px-4 w-full transition-all duration-500">
          {children}
        </main>
        <footer className="w-full bg-white/70 backdrop-blur border-t border-indigo-100 py-4 text-center text-sm text-gray-500 font-semibold tracking-wide shadow-inner sticky bottom-0 z-10">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
