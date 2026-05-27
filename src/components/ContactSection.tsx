"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="join" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to make a difference?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you want to volunteer, become a mentor, or simply stay updated with our initiatives, we'd love to hear from you. Join our mission today.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                <p className="text-lg font-medium">Fill out the form with your details.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">2</div>
                <p className="text-lg font-medium">Our team will reach out within 48 hours.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">3</div>
                <p className="text-lg font-medium">Start changing lives together.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold mb-8">Get Involved</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="relative">
                <input type="text" id="name" required className="block w-full px-4 py-4 text-foreground bg-transparent border-b-2 border-border focus:border-primary focus:outline-none transition-colors peer placeholder-transparent" placeholder="Name" />
                <label htmlFor="name" className="absolute left-4 top-4 text-muted-foreground transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-3 peer-valid:text-xs pointer-events-none font-medium">Full Name</label>
              </div>
              
              <div className="relative">
                <input type="email" id="email" required className="block w-full px-4 py-4 text-foreground bg-transparent border-b-2 border-border focus:border-primary focus:outline-none transition-colors peer placeholder-transparent" placeholder="Email" />
                <label htmlFor="email" className="absolute left-4 top-4 text-muted-foreground transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-3 peer-valid:text-xs pointer-events-none font-medium">Email Address</label>
              </div>
              
              <div className="relative pt-4">
                <select id="interest" required className="block w-full px-4 py-4 text-foreground bg-transparent border-b-2 border-border focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer">
                  <option value="" disabled selected className="text-muted-foreground">I am interested in...</option>
                  <option value="volunteer" className="text-foreground bg-card">Volunteering</option>
                  <option value="mentor" className="text-foreground bg-card">Mentorship</option>
                  <option value="donate" className="text-foreground bg-card">Donating</option>
                  <option value="other" className="text-foreground bg-card">Other</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || submitted}
                className="w-full py-4 mt-8 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : submitted ? (
                  <span>Message Sent!</span>
                ) : (
                  <>Submit <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
