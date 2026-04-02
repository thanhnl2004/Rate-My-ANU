"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowDownRight } from "lucide-react";

export const LandingHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return ( 
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 border-b-2 border-primary">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-8">
              <div 
                className={`opacity-0 ${mounted ? 'animate-fadeInUp' : ''}`}
                style={{ animationDelay: "0.1s" }}
              >
                <div className="inline-block border border-primary px-3 py-1 mb-6">
                  <p className="font-mono text-xs uppercase tracking-widest">Vol. 1 — The Student Truth</p>
                </div>
                
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-normal tracking-tight leading-[0.95] text-primary">
                  The <br/> Unvarnished <br/> Syllabus.
                </h1>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8 pb-4">
            <div className={`opacity-0 ${mounted ? 'animate-fadeInLeft' : ''}`} style={{ animationDelay: "0.3s" }}>
              <p className="text-xl lg:text-2xl font-serif leading-relaxed text-foreground/80 border-l-2 border-primary pl-6">
                Discover the reality behind course outlines. Real reviews, from real ANU students. Avoid the traps and take the classes that actually matter.
              </p>
            </div>

            <div className={`opacity-0 ${mounted ? 'animate-fadeInUp' : ''}`} style={{ animationDelay: "0.5s" }}>
               <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/login" className="flex-1">
                  <button className="w-full flex items-center justify-between group relative overflow-hidden bg-primary text-primary-foreground text-lg py-4 px-6 border-2 border-primary hover:bg-transparent hover:text-primary transition-colors">
                    <span className="font-serif italic font-semibold">Read Reviews</span>
                    <ArrowDownRight className="transition-transform group-hover:rotate-[-45deg]" />
                  </button>
                </Link>
                
                <Link href="/courses" className="flex-1">
                  <button className="w-full py-4 px-6 border-2 border-black dark:border-white text-lg font-mono uppercase tracking-widest hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                    Index
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}; 