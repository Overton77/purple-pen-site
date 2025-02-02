import Footer from 'components/layout/footer';
import { Navbar } from 'components/site_sections/SiteNavbar';
import { navigationBar } from '@/prisma/sectionContent';
import PriceCards from 'components/site_sections/CompletePriceCards';
import {
  storePriceCards,
  digitalMarketingPriceCards,
  aiAgentPriceCards,
  combinationPriceCards
} from '@/prisma/priceCards';

import HeroSection from 'components/site_sections/Hero';

export const metadata = {
  description: 'A e-commerce store building platform hosted on shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Navbar navigationBar={navigationBar} />
      <HeroSection />
      <PriceCards
        combinationCards={combinationPriceCards}
        storeCards={storePriceCards}
        digitalMarketingCards={digitalMarketingPriceCards}
        aiAgentCards={aiAgentPriceCards}
      />
    </>
  );
}
