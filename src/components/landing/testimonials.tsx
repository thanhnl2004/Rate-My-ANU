"use client";

import { useState, useEffect } from "react";

const reviews = [
  {
    quote: "RateMyANU saved me from taking a soul-crushing elective. The workload warnings were brutally accurate.",
    author: "Alice M.",
    context: "3rd Year, Computer Science"
  },
  {
    quote: "Finally, a place where people don't sugarcoat the difficulty of higher-level math courses. It's essential reading.",
    author: "David L.",
    context: "2nd Year, Actuarial Studies"
  },
  {
    quote: "You shouldn't enroll without checking here first. I found the best tutors and the most engaging subjects purely through these reviews.",
    author: "Sarah J.",
    context: "4th Year, Law / Arts"
  }
];

export const Testimonials = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="testimonials" className="py-24 lg:py-32 border-b-2 border-primary bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col gap-24">
          <div className="text-center md:text-left">
            <h2 className={`text-4xl md:text-6xl font-serif font-normal opacity-0 ${mounted ? 'animate-fadeIn' : ''}`}>
               Voices on Campus.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className={`flex flex-col justify-between h-full opacity-0 ${mounted ? 'animate-fadeInUp' : ''}`}
                style={{ animationDelay: `${0.2 + index * 0.2}s` }}
              >
                <div>
                  <span className="font-serif text-6xl leading-none text-primary-foreground/30 inline-block mb-4">“</span>
                  <p className="text-xl lg:text-2xl font-serif leading-relaxed mb-8 -mt-6">
                    {review.quote}
                  </p>
                </div>
                
                <div className="mt-8 border-t border-primary-foreground/20 pt-6">
                  <p className="font-mono text-sm uppercase tracking-widest font-bold mb-1">{review.author}</p>
                  <p className="font-mono text-xs text-primary-foreground/60 tracking-wider">{review.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
