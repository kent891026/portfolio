
import Link from "next/link";

export default function BackNav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-4 md:py-8 bg-[#030712]/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-white/5 md:border-none pointer-events-auto">
      <Link
        href="/" 
        className="text-white font-mono text-xs tracking-[0.2em] hover:text-[#4B88DF] transition-colors flex items-center gap-4"
      >
        <span className="text-lg">←</span> RETURN TO ARCHIVE
      </Link>
    </nav>
  );
}