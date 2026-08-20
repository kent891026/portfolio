
import Link from "next/link";

export default function BackNav() {
  return (
    <nav className="fixed top-0 w-full p-8 z-50 mix-blend-difference">
      <Link 
        href="/" 
        className="text-white font-mono text-xs tracking-[0.2em] hover:text-[#4B88DF] transition-colors flex items-center gap-4"
      >
        <span className="text-lg">←</span> RETURN TO ARCHIVE
      </Link>
    </nav>
  );
}