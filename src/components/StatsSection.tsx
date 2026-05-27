"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const endVal = end;
      const incrementTime = (duration * 1000) / endVal;
      
      // Simple counting logic, adjusted for performance if number is large
      const stepTime = Math.max(incrementTime, 16); // at least 1 frame (16ms)
      const steps = Math.floor((duration * 1000) / stepTime);
      const stepValue = endVal / steps;
      
      let current = 0;
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= endVal) {
          setCount(endVal);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    { id: 1, label: "Women Supported", value: 1000, suffix: "+" },
    { id: 2, label: "Communities Reached", value: 50, suffix: "+" },
    { id: 3, label: "Volunteers", value: 100, suffix: "+" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="impact" className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {stats.map((stat) => (
            <motion.div key={stat.id} variants={itemVariants} className="flex flex-col items-center">
              <div className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 drop-shadow-sm">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xl font-medium text-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
