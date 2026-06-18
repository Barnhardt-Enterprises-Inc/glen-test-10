"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInSlideUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            {...fadeInSlideUp}
            className="text-4xl md:text-6xl font-bold tracking-tight text-violet-700 dark:text-violet-400 mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p 
            {...fadeInSlideUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            Founded with a vision to redefine how users interact with digital experiences, 
            Quetrex began as a small collective of designers and engineers obsessed with 
            precision, elegance, and performance.
          </motion.p>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 dark:opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-violet-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-400 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 px-6 bg-violet-50 dark:bg-violet-950/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            {...fadeInSlideUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-violet-800 dark:text-violet-300">
              Our Mission
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              We strive to build tools that empower creativity and streamline complex 
              workflows. Our mission is to bridge the gap between powerful functionality 
              and intuitive design, making professional-grade software accessible to all.
            </p>
            <div className="grid grid-cols-1 gap-4 pt-4">
              {[
                { title: "Innovation", desc: "Pushing boundaries of what's possible." },
                { title: "Integrity", desc: "Transparent, ethical, and user-centric." },
                { title: "Excellence", desc: "Uncompromising quality in every pixel." },
              ].map((value, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-white dark:bg-slate-900 shadow-sm border border-violet-100 dark:border-violet-900"
                >
                  <div className="mt-1 w-2 h-2 rounded-full bg-violet-500 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-violet-900 dark:text-violet-200">{value.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            {...fadeInSlideUp}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-violet-600/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Call to Action / Final Note */}
      <section className="py-20 px-6 text-center">
        <motion.div 
          {...fadeInSlideUp}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            Join Our Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            We are always looking for passionate individuals to join our team and 
            help us shape the future of digital interaction.
          </p>
          <button className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-full transition-colors shadow-lg shadow-violet-500/25">
            Get in Touch
          </button>
        </motion.div>
      </section>
    </main>
  );
}
