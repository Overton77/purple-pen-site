import {
  featureToMilestoneMap,
  combinationTierFeatureMilestoneMap
} from '.././prisma/featureMilestoneMap';

export enum OneServiceTier {
  Store_Basic = 'Store_Basic',
  Store_Standard = 'Store_Standard',
  Store_Advanced = 'Store_Advanced',
  Digital_Marketing_Basic = 'Digital_Marketing_Basic',
  Digital_Marketing_Standard = 'Digital_Marketing_Standard',
  Digital_Marketing_Advanced = 'Digital_Marketing_Advanced',
  AI_Agent_Basic = 'AI_Agent_Basic',
  AI_Agent_Standard = 'AI_Agent_Standard',
  AI_Agent_Advanced = 'AI_Agent_Advanced'
}

// Interface for a single feature in the OneService Price Card
export interface OneServicePriceCardFeature {
  serviceTier: OneServiceTier; // The tier of service (e.g., "Store_Basic", "AI_Agent_Advanced")
  name: string; // Name of the feature (e.g., "Domain Configuration")
  description: string; // Brief description of the feature
}

// Interface for the OneService Price Card
export interface OneServicePriceCard {
  serviceName: string; // Name of the service (e.g., "Store")
  tier: OneServiceTier; // Tier level from OneServiceTier
  price: number | [number, number]; // Price in dollars (single value or range)
  description: string; // Overview of the tier's offering
  features: OneServicePriceCardFeature[]; // List of features included in the tier
  images: string[]; // Array of image paths or URLs
}

const getFeatures = (tier: OneServiceTier): OneServicePriceCardFeature[] => {
  const tierData = featureToMilestoneMap[tier];
  if (!tierData) throw new Error(`Tier '${tier}' not found in featureToMilestoneMap`);

  console.log(tierData);

  return Object.entries(tierData).map(([name, milestones]) => ({
    serviceTier: tier,
    name,
    description: milestones[0] || `${name} feature` // Provide a fallback string
  }));
};

export const storePriceCards: OneServicePriceCard[] = [
  {
    serviceName: 'Store',
    tier: OneServiceTier.Store_Basic,
    price: [1000, 2500],
    description:
      'A foundational e-commerce solution to get your store online quickly and effectively.',
    features: getFeatures(OneServiceTier.Store_Basic),
    images: ['basic-store.png', 'theme-icon.png']
  },
  {
    serviceName: 'Store',
    tier: OneServiceTier.Store_Standard,
    price: [3000, 5000],
    description: 'An enhanced store solution with advanced customization and integrations.',
    features: getFeatures(OneServiceTier.Store_Standard),
    images: ['standard-store.png', 'customization-icon.png']
  },
  {
    serviceName: 'Store',
    tier: OneServiceTier.Store_Advanced,
    price: 5000,
    description: 'A fully customized e-commerce experience tailored to your business needs.',
    features: getFeatures(OneServiceTier.Store_Advanced),
    images: ['advanced-store.png', 'crm-icon.png']
  }
];

export const digitalMarketingPriceCards: OneServicePriceCard[] = [
  {
    serviceName: 'Digital Marketing',
    tier: OneServiceTier.Digital_Marketing_Basic,
    price: [500, 1000],
    description: 'Essential digital marketing setup to establish your online presence.',
    features: getFeatures(OneServiceTier.Digital_Marketing_Basic),
    images: ['basic-marketing.png', 'analytics-icon.png']
  },
  {
    serviceName: 'Digital Marketing',
    tier: OneServiceTier.Digital_Marketing_Standard,
    price: [1500, 3000],
    description: 'Comprehensive marketing strategy with advanced campaign management.',
    features: getFeatures(OneServiceTier.Digital_Marketing_Standard),
    images: ['standard-marketing.png', 'campaign-icon.png']
  },
  {
    serviceName: 'Digital Marketing',
    tier: OneServiceTier.Digital_Marketing_Advanced,
    price: [3500, 7000],
    description: 'Full-scale digital marketing suite with custom strategy and analytics.',
    features: getFeatures(OneServiceTier.Digital_Marketing_Advanced),
    images: ['advanced-marketing.png', 'strategy-icon.png']
  }
];

export const aiAgentPriceCards: OneServicePriceCard[] = [
  {
    serviceName: 'AI Agent',
    tier: OneServiceTier.AI_Agent_Basic,
    price: [1000, 2000],
    description: 'Basic AI chatbot with FAQ answering capabilities.',
    features: getFeatures(OneServiceTier.AI_Agent_Basic),
    images: ['basic-ai.png', 'chatbot-icon.png']
  },
  {
    serviceName: 'AI Agent',
    tier: OneServiceTier.AI_Agent_Standard,
    price: [2500, 4000],
    description: 'Advanced AI agent with data integration and dynamic responses.',
    features: getFeatures(OneServiceTier.AI_Agent_Standard),
    images: ['standard-ai.png', 'integration-icon.png']
  },
  {
    serviceName: 'AI Agent',
    tier: OneServiceTier.AI_Agent_Advanced,
    price: [5000, 10000],
    description: 'Custom AI solution with advanced integration and analytics.',
    features: getFeatures(OneServiceTier.AI_Agent_Advanced),
    images: ['advanced-ai.png', 'custom-ai-icon.png']
  }
];

export enum CombinationTier {
  Essential = 'Essential',
  Growth = 'Growth',
  Enterprise = 'Enterprise'
}

// Interface for combination price cards
export interface CombinationPriceCard {
  tier: CombinationTier;
  price: number | [number, number];
  description: string;
  features: {
    // Changed from 'services' to 'features'
    store: string[];
    digitalMarketing: string[];
    aiAgent: string[];
  };
  images: string[];
}

// Helper function to get features from combinationTierFeatureMilestoneMap
function getCombinationFeatures(tier: string): {
  store: string[];
  digitalMarketing: string[];
  aiAgent: string[];
} {
  const tierFeatures = combinationTierFeatureMilestoneMap[tier];
  if (!tierFeatures) {
    return { store: [], digitalMarketing: [], aiAgent: [] };
  }

  return {
    store: Object.keys(tierFeatures.Store || {}),
    digitalMarketing: Object.keys(tierFeatures.Digital_Marketing || {}),
    aiAgent: Object.keys(tierFeatures.AI_Agent || {})
  };
}

export const combinationPriceCards: CombinationPriceCard[] = [
  {
    tier: CombinationTier.Essential,
    price: [2500, 5000],
    description: 'Essential package combining basic store setup, marketing, and AI capabilities.',
    features: getCombinationFeatures(CombinationTier.Essential), // Now returns a flat array of features
    images: ['essential-package.png', 'starter-icon.png']
  },
  {
    tier: CombinationTier.Growth,
    price: [5000, 10000],
    description: 'Growth-focused package with advanced features across all services.',
    features: getCombinationFeatures(CombinationTier.Growth),
    images: ['growth-package.png', 'growth-icon.png']
  },
  {
    tier: CombinationTier.Enterprise,
    price: [10000, 20000],
    description: 'Full enterprise solution with custom development and advanced integrations.',
    features: getCombinationFeatures(CombinationTier.Enterprise),
    images: ['enterprise-package.png', 'enterprise-icon.png']
  }
];

// Update allPriceCards to include combination cards
export const allPriceCards = {
  store: storePriceCards,
  digitalMarketing: digitalMarketingPriceCards,
  aiAgent: aiAgentPriceCards,
  combination: combinationPriceCards
};

// Export all price cards together if needed
