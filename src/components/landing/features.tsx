"use client";

import { useState, useEffect } from "react";

const features = [
  {
    title: "Unfiltered Perspectives",
    description: "Get insights from real ANU students with detailed ratings and authentic reviews for every course. We prioritize transparency over generic course outlines.",
    items: [
      "Overall course quality score",
      "Actual difficulty level indicators",
      "Professor effectiveness",
      "True workload assessments"
    ]
  },
  {
    title: "Precision Indexing",
    description: "Find exactly what you're looking for with our powerful search and filtering system. Navigate the academic catalog with purpose.",
    items: [
      "Filter by subject, tier, and keywords",
      "Sort by student satisfaction or difficulty",
      "Compare multiple courses directly",
      "Bookmark your essential syllabus"
    ]
  },
  {
    title: "Active Discourse",
    description: "Connect with fellow ANU peers to ask questions and share hard-earned experiences. A forum dedicated to academic survival.",
    items: [
      "Course-specific discussion threads",
      "Anonymous candor",
      "Prerequisite navigation advice",
      "Shared study resources"
    ]
  },
];

export const Features = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="features" className="py-24 lg:py-32 border-b-2 border-primary bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4">
             <div className={`sticky top-24 opacity-0 ${mounted ? 'animate-fadeIn' : ''}`}>
               <h2 className="text-4xl md:text-6xl font-serif font-normal leading-none tracking-tight text-primary mb-6">
                The Index of Essentials.
               </h2>
               <p className="text-lg font-serif text-foreground/70 border-l-2 border-primary pl-4">
                 Our methodology is simple: gather the data, expose the truth, and equip you for the semester ahead.
               </p>
             </div>
          </div>

          <div className="lg:col-span-8 flex flex-col pt-8 lg:pt-0">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className={`flex flex-col md:flex-row gap-6 md:gap-12 py-12 border-t-2 border-primary/20 first:border-t-0 first:pt-0 last:pb-0 opacity-0 ${mounted ? 'animate-fadeInUp' : ''}`}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <div className="md:w-16 font-mono text-3xl font-bold text-primary/30 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-serif font-medium text-foreground">{feature.title}</h3>
                  <p className="text-lg text-foreground/70 leading-relaxed font-serif max-w-2xl">{feature.description}</p>
                  
                  {feature.items && (
                    <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {feature.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          <span className="font-mono text-sm tracking-tight text-foreground/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};