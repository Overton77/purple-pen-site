'use client';

import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { CombinationPriceCard } from '@/prisma/priceCards';

interface CombinationPriceCardsProps {
  cards: CombinationPriceCard[];
}

export function CombinationPriceCards({ cards }: CombinationPriceCardsProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Complete Solution Packages</h2>
          <p className="text-muted-foreground">Choose a comprehensive package for your business</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.tier}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  'relative overflow-hidden transition-all hover:shadow-lg',
                  index === 1 && 'border-primary shadow-md'
                )}
              >
                {index === 1 && <Badge className="absolute right-4 top-4">Popular</Badge>}

                <CardHeader>
                  <CardTitle className="text-2xl">{card.tier}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      {Array.isArray(card.price)
                        ? `$${card.price[0]}-${card.price[1]}`
                        : `$${card.price}`}
                    </span>
                    <span className="text-muted-foreground">/package</span>
                  </div>

                  {Object.entries(card.features).map(([service, features]) => (
                    <div key={service} className="mb-4">
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
                </CardContent>

                <CardFooter>
                  <Button className="w-full" variant={index === 1 ? 'default' : 'outline'}>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
