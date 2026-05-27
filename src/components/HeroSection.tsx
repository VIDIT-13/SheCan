"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

function MagneticButton({ children, className, href }: { children: React.ReactNode, className?: string, href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={ref} id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Ornaments with Parallax */}
      <motion.div style={{ y: blob1Y }} className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:mix-blend-screen"></motion.div>
      <motion.div style={{ y: blob2Y }} className="absolute top-40 right-10 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:mix-blend-screen"></motion.div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 dark:mix-blend-screen"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20 backdrop-blur-md">
            <Sparkles size={16} /> She Can Foundation
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-foreground leading-tight">
            Empowering Women, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Transforming Lives
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Creating boundless opportunities and building a brighter, more equitable future through education, support, and community.
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MagneticButton
              href="#join"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all group"
            >
              Join Our Mission
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </MagneticButton>
            <MagneticButton
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-foreground bg-card/50 backdrop-blur-md border border-border hover:bg-muted transition-all"
            >
              Learn More
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
