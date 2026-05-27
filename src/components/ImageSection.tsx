"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ImageSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-[60vh] md:h-[80vh]">
          <motion.div
            style={{ y }}
            className="absolute inset-0 w-full h-[120%]"
          >
            <Image
              src="/empowerment.png"
              alt="Diverse women collaborating and feeling empowered in a community setting"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
          </motion.div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full z-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            >
              Together, we are unstoppable.
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-lg md:text-2xl max-w-2xl font-light"
            >
              Join a thriving network of women who uplift, inspire, and drive change in communities worldwide.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
