"use client";

import React from "react"
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "@/components/ui/accordion"

const FAQSection = () => {
  const faqItems = [
    {
      question: "What is RateMyANU?",
      answer: "RateMyANU is a social platform where Australian National University students can browse courses, read reviews, and share their own experiences through ratings and comments. It serves as an unfiltered syllabus for incoming students."
    },
    {
      question: "How do I rate a course?",
      answer: "You need to sign in with your Google account first. Once authenticated, you can rate courses on a scale of 1-5 stars across three dimensions: difficulty, workload, and teaching experience."
    },
    {
      question: "Can I edit or delete my reviews?",
      answer: "Yes, you can edit or delete your own reviews at any time after posting them. Integrity is critical, and we support revising opinions as courses change."
    },
    {
      question: "How are the overall ratings calculated?",
      answer: "The overall rating for each course is calculated as a composite average of the three primary rating categories: difficulty, workload, and teaching experience."
    },
    {
      question: "Can I remain anonymous?",
      answer: "Yes. While each review is nominally attached to an account to prevent spam, you can elect to submit your review anonymously to protect your academic standing."
    }
  ]

  return (
    <section id="faq" className="py-24 lg:py-32 border-b-2 border-primary bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">Frequently Asked <br/> Questions.</h2>
            <p className="font-mono text-sm text-foreground/60 uppercase tracking-widest max-w-sm">
              Answers to common inquiries regarding the usage of the RateMyANU platform.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t-2 border-primary">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b-2 border-primary">
                    <AccordionTrigger className="text-xl md:text-2xl font-serif py-6 hover:no-underline hover:text-primary/70 transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="text-lg font-serif text-foreground/80 leading-relaxed max-w-3xl">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FAQSection }
