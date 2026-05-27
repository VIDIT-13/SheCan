"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Lightbulb, HeartHandshake, ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Education & Literacy",
      desc: "Providing access to quality learning resources and scholarships for underprivileged girls globally.",
      colSpan: "md:col-span-2",
      bgClass: "bg-gradient-to-br from-primary/10 to-transparent",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-secondary" />,
      title: "Skill Development",
      desc: "Workshops and hands-on training to build professional competencies for the modern workforce.",
      colSpan: "md:col-span-1",
      bgClass: "bg-background",
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Mentorship",
      desc: "Connecting emerging leaders with experienced professionals for guidance.",
      colSpan: "md:col-span-1",
      bgClass: "bg-background",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      title: "Community Support",
      desc: "Fostering a safe space for collaboration, networking, and mutual growth among women.",
      colSpan: "md:col-span-2",
      bgClass: "bg-gradient-to-br from-secondary/10 to-transparent",
    }
  ];

  return (
    <section id="about" className="py-24 bg-card/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Our Core Initiatives</h2>
          <p className="text-3xl md:text-4xl text-foreground font-semibold leading-tight">
            Building a foundation for success through targeted programs.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`glass rounded-3xl p-8 border border-border/50 hover:border-primary/50 transition-all group flex flex-col justify-between ${feature.colSpan} ${feature.bgClass}`}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-background shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{feature.desc}</p>
              </div>
              
              <div className="mt-8 flex justify-end">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors cursor-pointer">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
