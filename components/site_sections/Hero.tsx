'use client';

import React, { useState } from 'react';
import { Brain, Rocket, ShoppingCart, BarChart, Zap, PieChart, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const heroSectionData = {
  headline: 'Elevate Your Digital Presence with Purple Pen',
  subheadline:
    'Innovative solutions in web development, digital marketing, and AI integration to propel your business forward.',
  backgroundMedia: '/images/IMG_5550.jpeg',
  rotatingHighlights: [
    {
      text: 'Custom AI Agents',
      icon: Brain,
      color: 'text-primary',
      description: 'Tailor-made AI solutions to automate and enhance your business processes.'
    },
    {
      text: 'Rapid Prototyping',
      icon: Rocket,
      color: 'text-chart-1',
      description: 'Quick iteration and development of your ideas into functional prototypes.'
    },
    {
      text: 'Scalable Stores',
      icon: ShoppingCart,
      color: 'text-chart-2',
      description: 'E-commerce solutions that grow with your business needs.'
    },
    {
      text: 'Data-Driven Marketing',
      icon: BarChart,
      color: 'text-chart-3',
      description: 'Marketing strategies backed by robust data analysis and insights.'
    },
    {
      text: 'Advanced Automation',
      icon: Zap,
      color: 'text-chart-4',
      description: 'Streamline your operations with cutting-edge automation tools.'
    },
    {
      text: 'Comprehensive Analytics',
      icon: PieChart,
      color: 'text-chart-5',
      description: 'In-depth analysis and reporting to drive informed decision-making.'
    }
  ],
  ctaButton: { text: 'Start Your Journey', link: '/onboarding', variant: 'default' as const },
  secondaryCTA: { text: 'Learn More', link: '/services', variant: 'outline' as const },
  gradientOverlay: 'bg-gradient-to-r from-primary/80 to-background/80'
};

const HeroSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-20">
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900/50 via-purple-800/30 to-background"
        aria-hidden="true"
      />
      <div className={`absolute inset-0 z-10 ${heroSectionData.gradientOverlay}`} />

      <div className="container relative z-20 mx-auto px-4 text-white">
        <motion.h1
          className="mb-4 text-center text-4xl font-bold md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {heroSectionData.headline}
        </motion.h1>

        <motion.p
          className="mb-12 text-center text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {heroSectionData.subheadline}
        </motion.p>

        <motion.div
          className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {heroSectionData.rotatingHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1, ease: 'easeOut' }}
            >
              <div
                className="group flex h-[200px] w-full cursor-pointer flex-col items-center rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm transition-all hover:bg-white/20"
                onClick={() => toggleExpand(index)}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
                  <highlight.icon className={`h-8 w-8 ${highlight.color}`} />
                </div>
                <span className="text-xl font-semibold">{highlight.text}</span>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-auto"
                >
                  <ChevronRight className="h-6 w-6" />
                </motion.div>
              </div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{
                      duration: 0.3,
                      height: { duration: 0.4 },
                      opacity: { duration: 0.25 }
                    }}
                    className="mt-4 w-full overflow-hidden rounded-lg bg-white/5 p-4 text-center backdrop-blur-sm"
                  >
                    {highlight.description}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6 + heroSectionData.rotatingHighlights.length * 0.1
          }}
        >
          <Button variant={heroSectionData.ctaButton.variant} size="lg" asChild>
            <a href={heroSectionData.ctaButton.link}>{heroSectionData.ctaButton.text}</a>
          </Button>
          {heroSectionData.secondaryCTA && (
            <Button variant={heroSectionData.secondaryCTA.variant} size="lg" asChild>
              <a href={heroSectionData.secondaryCTA.link}>{heroSectionData.secondaryCTA.text}</a>
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
