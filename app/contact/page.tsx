import Link from 'next/link';
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function Contact() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16">
      <div className="group bg-white/90 shadow-xl rounded-3xl p-10 max-w-md w-full flex flex-col items-center gap-6 border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
  <div className="pointer-events-none absolute inset-0 rounded-3xl before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-tr before:from-sky-400 before:via-indigo-300 before:to-sky-200 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-40" style={{zIndex:0}} />
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-sky-500 via-indigo-400 to-sky-300 flex items-center justify-center mb-2 shadow-lg ring-4 ring-sky-100 animate-pulse-slow">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="text-white"><path d="M21 8V7l-3 2.29V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.29L21 17v-1l-3-2.29V15a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1.29L21 7v1z" fill="currentColor"/></svg>
        </div>
        <h1 className={`${montserrat.className} text-2xl font-extrabold text-indigo-700 text-center drop-shadow-sm`}>Contact</h1>
        <p className="text-base text-gray-600 text-center mb-2">Feel free to reach out via email:</p>
        <a href="mailto:your@email.com" className="text-sky-600 font-semibold hover:underline">your@email.com</a>
        <div className="flex gap-4 mt-4 w-full justify-center z-10 relative">
          <Link href="/" className="relative z-10 px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200">Home</Link>
          <Link href="/about" className="relative z-10 px-5 py-2 rounded-full bg-sky-500 text-white font-semibold shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-200">About</Link>
        </div>
      </div>
    </section>
  );
}
