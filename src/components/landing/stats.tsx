"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: "5000+", label: "Active Students" },
  { value: "2916", label: "Courses Indexed" },
  { value: "12k+", label: "Verified Reviews" },
  { value: "4.8", label: "Average Platform Rating" },
];

export const Stats = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="stats" className="py-24 border-b-2 border-primary bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l-2 border-t-2 border-primary">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`p-8 lg:p-12 border-r-2 border-b-2 border-primary flex flex-col justify-end min-h-[250px] opacity-0 ${mounted ? 'animate-fadeIn' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-1" />
              <div>
                <span className="block text-5xl lg:text-6xl font-serif tracking-tight text-primary mb-4">
                  {stat.value}
                </span>
                <span className="block font-mono text-xs uppercase tracking-widest text-primary/70">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};