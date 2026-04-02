"use client";

import Link from "next/link";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-b-2 border-primary py-12">
          
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block">
                <span className="text-3xl font-bold tracking-tighter uppercase">
                  <span className="font-serif">RateMy</span>
                  <span className="font-mono text-primary">ANU</span>
                </span>
              </Link>
              <p className="mt-6 text-2xl font-serif leading-snug max-w-md">
                The unofficial, unfiltered record of ANU academics.
              </p>
            </div>
            
            <div className="mt-12">
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                Printed in the digital realm.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="border-l-2 border-primary/20 pl-6">
              <h3 className="font-mono text-xs uppercase tracking-widest font-bold mb-6">Directory</h3>
              <ul className="space-y-3 font-serif text-lg">
                <li><Link href="/courses" className="hover:italic hover:text-primary transition-all">Syllabus Index</Link></li>
                <li><Link href="/about" className="hover:italic hover:text-primary transition-all">About the Staff</Link></li>
                <li><Link href="/faq" className="hover:italic hover:text-primary transition-all">FAQ</Link></li>
                <li><Link href="/contact" className="hover:italic hover:text-primary transition-all">Letters to Editor</Link></li>
              </ul>
            </div>
            
            <div className="border-l-2 border-primary/20 pl-6">
              <h3 className="font-mono text-xs uppercase tracking-widest font-bold mb-6">Colophon</h3>
              <ul className="space-y-3 font-serif text-lg">
                <li><Link href="/privacy" className="hover:italic hover:text-primary transition-all">Privacy Code</Link></li>
                <li><Link href="/terms" className="hover:italic hover:text-primary transition-all">Terms of Use</Link></li>
                <li><Link href="/cookie-policy" className="hover:italic hover:text-primary transition-all">Cookies</Link></li>
              </ul>
            </div>
            
            <div className="border-l-2 border-primary/20 pl-6 col-span-2 sm:col-span-1 mt-8 sm:mt-0">
               <h3 className="font-mono text-xs uppercase tracking-widest font-bold mb-6">Social</h3>
               <ul className="space-y-3 font-mono text-sm tracking-wide">
                 <li><a href="#" className="hover:underline hover:text-primary">Twitter (X)</a></li>
                 <li><a href="#" className="hover:underline hover:text-primary">Instagram</a></li>
                 <li><a href="#" className="hover:underline hover:text-primary">Source Code</a></li>
               </ul>
            </div>
          </div>

        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs uppercase tracking-widest opacity-70">
          <p>© {currentYear} RateMyANU. All rights reserved.</p>
          <p className="text-right">Not affiliated with the Australian National University.</p>
        </div>
        
      </div>
    </footer>
  );
};