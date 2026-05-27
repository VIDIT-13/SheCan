"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "The mentorship program completely changed the trajectory of my career. I now have the confidence to lead my own team.",
    author: "Sarah Jenkins",
    role: "Software Engineer",
  },
  {
    id: 2,
    content: "She Can Foundation provided the scholarship I needed to finish my degree. Their support goes beyond financial—it's a true community.",
    author: "Maria Gonzalez",
    role: "Medical Student",
  },
  {
    id: 3,
    content: "The workshops helped me build essential skills to launch my startup. I couldn't have done it without this network.",
    author: "Aisha Patel",
    role: "Entrepreneur",
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute -left-40 top-20 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Stories of Impact</h2>
          <p className="text-3xl md:text-4xl text-foreground font-semibold">Voices from our community.</p>
        </div>

        <div className="relative bg-card border border-border rounded-3xl p-8 md:p-16 shadow-xl">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
          
          <div className="h-48 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <p className="text-xl md:text-2xl italic text-foreground font-medium mb-8 leading-relaxed">
                  "{testimonials[current].content}"
                </p>
                <div>
                  <h4 className="text-lg font-bold text-primary">{testimonials[current].author}</h4>
                  <span className="text-muted-foreground text-sm">{testimonials[current].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-white transition-colors" aria-label="Previous Testimonial">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="p-3 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-white transition-colors" aria-label="Next Testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
