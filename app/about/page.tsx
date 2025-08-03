import Link from 'next/link';
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function About() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16">
      <div className="group bg-white/90 shadow-xl rounded-3xl p-10 max-w-md w-full flex flex-col items-center gap-6 border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
  <div className="pointer-events-none absolute inset-0 rounded-3xl before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-tr before:from-indigo-400 before:via-sky-300 before:to-indigo-200 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-40" style={{zIndex:0}} />
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-indigo-300 flex items-center justify-center mb-2 shadow-lg ring-4 ring-indigo-100 animate-pulse-slow">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="text-white"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/></svg>
        </div>
        <h1 className={`${montserrat.className} text-2xl font-extrabold text-indigo-700 text-center drop-shadow-sm`}>About Me</h1>
        <p className="text-base text-gray-600 text-center">I’m a passionate developer who enjoys building clean, modern web experiences. This site is built with Next.js, React, and TypeScript, styled using Tailwind CSS, and deployed to Netlify.</p>
        <div className="flex gap-4 mt-4 w-full justify-center z-10 relative">
          <Link href="/" className="relative z-10 px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200">Home</Link>
          <Link href="/contact" className="relative z-10 px-5 py-2 rounded-full bg-sky-500 text-white font-semibold shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-200">Contact</Link>
        </div>
      </div>
    </section>
  );
}
