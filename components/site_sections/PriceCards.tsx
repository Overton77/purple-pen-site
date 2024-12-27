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
import { OneServicePriceCard } from '@/prisma/priceCards';

interface PriceCardsProps {
  cards: OneServicePriceCard[];
}

export default function PriceCards({ cards }: PriceCardsProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Choose Your Plan</h2>
          <p className="text-muted-foreground">
            Select the perfect solution for your business needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  index === 1 && 'border-primary shadow-md' // Highlight middle card
                )}
              >
                {index === 1 && (
                  <Badge className="absolute right-4 top-4" variant="default">
                    Popular
                  </Badge>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl">
                    {card.serviceName} - {card.tier.split('_').pop()}
                  </CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      {Array.isArray(card.price)
                        ? `$${card.price[0]}-${card.price[1]}`
                        : `$${card.price}`}
                    </span>
                    <span className="text-muted-foreground">/project</span>
                  </div>

                  <ul className="space-y-3">
                    {card.features.map((feature) => (
                      <li key={feature.name} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
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
