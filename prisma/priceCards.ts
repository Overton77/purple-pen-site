import { featureToMilestoneMap } from '.././prisma/featureMilestoneMap';

export enum OneServiceTier {
  Store_Basic = 'Store_Basic',
  Store_Standard = 'Store_Standard',
  Store_Advanced = 'Store_Advanced',
  Digital_Marketing_Basic = 'Digital_Marketing_Basic',
  Digital_Marketing_Standard = 'Digital_Marketing_Standard',
  Digital_Marketing_Advanced = 'Digital_Marketing_Advanced',
  AI_Agent_Basic = 'AI_Agent_Basic',
  AI_Agent_Intermediate = 'AI_Agent_Intermediate',
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
