'use client';

import { useState } from 'react';
import { ShoppingBag, BarChart, Brain, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CombinationPriceCard, OneServicePriceCard } from '@/prisma/priceCards';

interface PriceCardsProps {
  combinationCards: CombinationPriceCard[];
  storeCards: OneServicePriceCard[];
  digitalMarketingCards: OneServicePriceCard[];
  aiAgentCards: OneServicePriceCard[];
}

export default function PriceCards({
  combinationCards,
  storeCards,
  digitalMarketingCards,
  aiAgentCards
}: PriceCardsProps) {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const allTiers = [
    {
      serviceName: 'Store',
      cards: storeCards,
      description:
        'Custom e-commerce solutions tailored to your business needs, from basic setups to advanced platforms.',
      icon: <ShoppingBag className="h-6 w-6 text-primary" />
    },
    {
      serviceName: 'Digital Marketing',
      cards: digitalMarketingCards,
      description:
        'Comprehensive marketing strategies to boost your online presence and drive growth.',
      icon: <BarChart className="h-6 w-6 text-primary" />
    },
    {
      serviceName: 'AI Agent',
      cards: aiAgentCards,
      description: 'Intelligent AI solutions to automate and enhance your customer interactions.',
      icon: <Brain className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <section className="bg-gradient-to-b from-background to-secondary/5 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">
            Complete Solutions
          </Badge>
          <h1 className="mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-4xl font-bold text-transparent">
            Transform Your Business with Our All-in-One Solutions
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose from our carefully crafted packages that combine our best services. Perfect for
            businesses looking for comprehensive digital transformation.
          </p>
        </div>

        {/* Combination Cards */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Complete Solution Packages</h2>
          <p className="text-muted-foreground">Choose a comprehensive package for your business</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {combinationCards.map((card, index) => (
            <motion.div
              key={card.tier}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-lg border p-6 shadow-md hover:shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{card.tier}</h3>
                  {index === 1 && <Badge variant="default">Popular</Badge>}
                </div>
                <p className="mb-6 text-muted-foreground">{card.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    {Array.isArray(card.price)
                      ? `$${card.price[0]}-${card.price[1]}`
                      : `$${card.price}`}
                  </span>
                  <span className="text-muted-foreground">/package</span>
                </div>
                <div className="space-y-4">
                  {Object.entries(card.features).map(([service, features]) => (
                    <div key={service}>
                      <h4 className="mb-2 font-semibold">{service}</h4>
                      <ul className="space-y-2">
                        {features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <Button variant="default" className="mt-4 w-full">
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Individual Service Tiers */}
        <div className="mt-24">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              Individual Services
            </Badge>
            <h2 className="mb-4 text-3xl font-bold">Looking for Specific Solutions?</h2>
            <p className="text-muted-foreground">
              Explore our individual service offerings tailored to your specific needs
            </p>
          </div>

          {allTiers.map(({ serviceName, cards, description, icon }) => (
            <div key={serviceName} className="mb-8 rounded-lg border bg-card p-2">
              <div
                role="button"
                aria-expanded={expandedService === serviceName}
                tabIndex={0}
                onClick={() =>
                  setExpandedService(expandedService === serviceName ? null : serviceName)
                }
                onKeyPress={(e) =>
                  e.key === 'Enter' &&
                  setExpandedService(expandedService === serviceName ? null : serviceName)
                }
                className="flex cursor-pointer items-center justify-between rounded-md p-4 transition-colors hover:bg-accent"
              >
                <div className="flex items-center gap-4">
                  {icon}
                  <div>
                    <h3 className="text-xl font-bold">{serviceName}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {expandedService === serviceName ? 'Show Less' : 'View Plans'}
                  </span>
                  {expandedService === serviceName ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </div>
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  expandedService === serviceName
                    ? { height: 'auto', opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 grid gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
                  {cards.map((card) => (
                    <div
                      key={card.tier}
                      className="relative overflow-hidden rounded-lg border p-6 shadow-md hover:shadow-lg"
                    >
                      <h4 className="mb-4 text-xl font-bold">
                        {card.serviceName} - {card.tier}
                      </h4>
                      <p className="mb-4 text-muted-foreground">{card.description}</p>
                      <ul className="mb-4 space-y-2">
                        {card.features.map((feature) => (
                          <li key={feature.name} className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-primary" />
                            <span>{feature.name}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mb-4 text-4xl font-bold">
                        {Array.isArray(card.price)
                          ? `$${card.price[0]}-${card.price[1]}`
                          : `$${card.price}`}
                        <span className="text-sm text-muted-foreground">/project</span>
                      </div>
                      <Button variant="outline" className="w-full">
                        Select Plan
                      </Button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
