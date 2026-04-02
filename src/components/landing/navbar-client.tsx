"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function NavbarClient({ items }: { items: { name: string; link: string }[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md border-b-2 border-primary' : 'bg-transparent border-b border-border/40'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter uppercase">
              <span className="font-serif">RateMy</span>
              <span className="font-mono text-primary">ANU</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex flex-1 items-center justify-center space-x-12">
            {items.map((item, i) => (
              <a 
                key={i}
                href={item.link} 
                className="text-sm font-medium hover:text-primary transition-colors tracking-wide underline-offset-4 hover:underline"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-sm font-mono tracking-tight uppercase hover:underline">
              [ Subscribe ]
            </Link>
            <Link 
              href="/login" 
              className="text-sm font-semibold uppercase tracking-widest bg-primary text-primary-foreground px-5 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              Sign In
            </Link>
          </div>

          <button 
            className="md:hidden flex items-center" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b-2 border-primary w-full shadow-lg">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {items.map((item, i) => (
              <a 
                key={i}
                href={item.link} 
                className="text-lg font-serif border-b border-border/50 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
               <Link 
                href="/login" 
                className="text-center font-bold uppercase tracking-widest bg-primary text-primary-foreground px-5 py-3 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
