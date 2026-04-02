"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export const CallToAction = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-24 lg:py-40 bg-foreground text-background border-b-2 border-primary">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
        <div className={`opacity-0 ${mounted ? 'animate-fadeInUp' : ''}`}>
           <h2 className="text-5xl md:text-8xl font-serif font-normal leading-none tracking-tight mb-8">
             End the <br/> Guesswork.
           </h2>
           
           <p className="text-xl md:text-2xl font-serif text-background/80 max-w-2xl mx-auto mb-16">
             The course syllabus won't tell you the truth. Your peers will. Subscribe to the essential registry of ANU academics.
           </p>

           <Link href="/login" className="inline-block group">
             <button className="flex items-center gap-4 bg-background text-foreground py-5 px-8 hover:bg-primary hover:text-primary-foreground transition-colors overflow-hidden">
               <span className="font-mono uppercase tracking-widest text-lg font-bold">Sign In & Access Index</span>
               <ArrowRight className="transition-transform group-hover:translate-x-2" />
             </button>
           </Link>
        </div>
      </div>
    </section>
  );
};