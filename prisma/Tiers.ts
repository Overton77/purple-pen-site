import { combinationTierFeatureMilestoneMap, featureToMilestoneMap } from './featureMilestoneMap';

class CombinationFeature {
  name: string;
  description: string;
  milestones: string[];

  constructor(tierName: string, featureName: string) {
    this.name = featureName;
    this.milestones = Object.values(combinationTierFeatureMilestoneMap[tierName] || {}).flatMap(
      (serviceFeatures) => serviceFeatures[featureName] || []
    );
    this.description = this.generateDescription(tierName);
  }

  private generateDescription(tierName: string): string {
    return `Feature: ${this.name}, Tier: ${tierName}`;
  }
}

class CombinationServiceTier {
  name: string;
  features: CombinationFeature[];

  constructor(name: string) {
    this.name = name;
    this.features = this.initializeFeatures(name);
  }

  private initializeFeatures(tierName: string): CombinationFeature[] {
    const tierData = combinationTierFeatureMilestoneMap[tierName];
    if (!tierData) {
      throw new Error(`Tier '${tierName}' not found in combinationTierFeatureMilestoneMap`);
    }

    const allFeatures = Object.values(tierData).flatMap((serviceFeatures) =>
      Object.keys(serviceFeatures)
    );

    const uniqueFeatures = Array.from(new Set(allFeatures));

    return uniqueFeatures.map((featureName) => new CombinationFeature(tierName, featureName));
  }
}

class CombinationService {
  name: string;
  tier: CombinationServiceTier;

  constructor(name: string, tierName: string) {
    this.name = name;
    this.tier = new CombinationServiceTier(tierName);
  }

  getMilestones(): string[] {
    const allMilestones = this.tier.features.flatMap((feature) => feature.milestones);
    return Array.from(new Set(allMilestones));
  }
}

class OneServiceTier {
  name: string;
  features: Feature[];

  constructor(name: string, features: Feature[]) {
    this.name = name;
    this.features = features;
  }
}

class Feature {
  tierName: string;
  name: string;
  description: string;
  milestones?: string[];

  constructor(tierName: string, name: string, description: string) {
    this.tierName = tierName;
    this.name = name;
    this.description = description;
    this.milestones = featureToMilestoneMap[tierName]?.[name] || [];
  }
}

// Base Service class
class Service {
  name: string;
  basicTier: OneServiceTier;
  standardTier: OneServiceTier;
  advancedTier: OneServiceTier;

  constructor(name: string) {
    this.name = name;
    this.basicTier = new OneServiceTier('Basic', []);
    this.standardTier = new OneServiceTier('Standard', []);
    this.advancedTier = new OneServiceTier('Advanced', []);
  }

  protected retrieveMilestones(features: Feature[]): string[] {
    return features.flatMap((feature) => feature.milestones || []);
  }

  getFeatures(tier: OneServiceTier): Feature[] {
    return tier.features;
  }

  getMilestones(tier: OneServiceTier): string[] {
    return this.retrieveMilestones(tier.features);
  }
}

class StoreService extends Service {
  constructor() {
    super('Store');
    this.basicTier = this.initializeBasicTier();
    this.standardTier = this.initializeStandardTier();
    this.advancedTier = this.initializeAdvancedTier();
  }

  private initializeBasicTier(): OneServiceTier {
    const tierName = 'Store_Basic'; // Tier key for featureToMilestoneMap
    const basicFeatures = [
      new Feature(
        tierName,
        'Domain Configuration',
        'Connect a custom domain or choose a Shopify subdomain.'
      ),
      new Feature(tierName, 'Theme Installation', 'Install a pre-designed Shopify theme.'),
      new Feature(
        tierName,
        'UI and UX property choices',
        'Install, connect, and architect typography, colors, and whitespace'
      ),
      new Feature(
        tierName,
        'Logo and Branding Setup',
        'Upload store logo and define branding elements.'
      ),
      new Feature(tierName, 'Navigation Menu Setup', 'Create and organize a navigation menu.'),
      new Feature(
        tierName,
        'Product Catalog Creation',
        'Add up to 10 products with descriptions and images.'
      ),
      new Feature(
        tierName,
        'Payment Gateway Integration',
        'Configure Shopify Payments or a third-party gateway.'
      ),
      new Feature(
        tierName,
        'Basic Shipping Setup',
        'Set up flat-rate shipping or simple delivery options.'
      ),
      new Feature(
        tierName,
        'Legal Pages Setup',
        'Create and link Privacy Policy, Terms, Refund Policy.'
      ),
      new Feature(
        tierName,
        'Basic SEO Configuration',
        'Add meta titles, descriptions, and alt text.'
      ),
      new Feature(tierName, 'Checkout Process Configuration', 'Enable a basic checkout flow.'),
      new Feature(
        tierName,
        'Mobile-Responsive Design Validation',
        'Ensure functionality on all devices.'
      ),
      new Feature(tierName, 'Store Launch Settings', 'Set up timezone, currency, and language.'),
      new Feature(
        tierName,
        'Contact Information Setup',
        'Add contact details to the footer or contact page.'
      ),
      new Feature(tierName, 'Basic Analytics Setup', "Enable Shopify's built-in analytics."),
      new Feature(tierName, 'Tax Configuration', 'Set up basic tax calculations.'),
      new Feature(tierName, 'Inventory Management Setup', 'Enable inventory tracking.'),
      new Feature(tierName, 'Newsletter Subscription Form', 'Add an email subscription form.'),
      new Feature(tierName, 'Basic Header and Footer Setup', 'Customize the header and footer.'),
      new Feature(tierName, 'Single Language Support', 'Configure the default language.'),
      new Feature(tierName, 'Basic Social Media Linking', 'Add social media links.')
    ];

    return new OneServiceTier('Basic', basicFeatures);
  }
  private initializeStandardTier(): OneServiceTier {
    const tierName = 'Store_Standard'; // Tier key for featureToMilestoneMap
    const standardFeatures = [
      ...this.basicTier.features,
      new Feature(
        tierName,
        'Custom Code for Pages or Features',
        'Limited custom coding for up to 3 pages or specific features.'
      ),
      new Feature(
        tierName,
        'Integration of One App',
        'Integrate one app from the Shopify App Store.'
      ),
      new Feature(
        tierName,
        'Enhanced Product Variations',
        'Add support for advanced product variations with up to 3 options (e.g., size, color, material).'
      ),
      new Feature(
        tierName,
        'Bulk Product Uploads',
        'Upload and manage up to 50 products, including bulk imports via CSV.'
      ),
      new Feature(
        tierName,
        'Product Filtering',
        'Enable filtering options on product listing pages (e.g., by price, category, or tags).'
      ),
      new Feature(
        tierName,
        'Customer Accounts',
        'Enable optional customer accounts for faster checkout and order tracking.'
      ),
      new Feature(
        tierName,
        'Wishlist Functionality',
        'Allow customers to save products for later purchases.'
      ),
      new Feature(
        tierName,
        'Customizable Checkout Options',
        'Add up to 2 custom fields in the checkout process.'
      ),
      new Feature(
        tierName,
        'Advanced Shipping Configuration',
        'Configure regional shipping rules and tiered rates.'
      ),
      new Feature(
        tierName,
        'Minimal SEO (Organic Search) Configuration',
        'Optimize meta tags for collections and categories.'
      ),
      new Feature(
        tierName,
        'Basic Google Analytics Integration',
        'Integrate Google Analytics to track customer behavior and traffic sources.'
      ),
      new Feature(
        tierName,
        'Basic Social Media Integration',
        'Connect the store with one social media shop (e.g., Instagram or Facebook).'
      )
    ];

    return new OneServiceTier('Standard', standardFeatures);
  }

  private initializeAdvancedTier(): OneServiceTier {
    const tierName = 'Store_Advanced'; // Tier key for featureToMilestoneMap

    const advancedFeatures = [
      ...this.basicTier.features, // Include all Basic Tier features
      ...this.standardTier.features, // Include all Standard Tier features
      new Feature(
        tierName,
        'Fully Custom Web App Integration',
        'Integrate a fully custom web app built with Vercel and Next.js for extended functionality.'
      ),
      new Feature(
        tierName,
        'Full Custom Theme Development',
        'Develop a fully custom Shopify theme using the Theme Development Framework.'
      ),
      new Feature(
        tierName,
        'Custom Code for Multiple Features',
        'Add custom functionality or design for up to 10 components (e.g., mega menus, carousels).'
      ),
      new Feature(
        tierName,
        'Admin UI Extension',
        'Build and integrate one Shopify Admin UI extension for backend functionality.'
      ),
      new Feature(
        tierName,
        'Advanced Search and Filtering',
        'Integrate advanced search with predictive capabilities and multi-attribute filtering.'
      ),
      new Feature(
        tierName,
        'Multi-Language Support',
        'Configure multiple languages and provide translated content for international customers.'
      ),
      new Feature(
        tierName,
        'Multi-Currency Support',
        'Enable currency switching and localized pricing for global customers.'
      ),
      new Feature(
        tierName,
        'Enhanced Wishlist Functionality',
        'Allow customers to create multiple wishlists and share them with others.'
      ),
      new Feature(
        tierName,
        'Customizable Product Bundles',
        'Enable customers to build their own product bundles with flexible options.'
      ),
      new Feature(
        tierName,
        'Subscription or Membership Features',
        'Add recurring payment options for subscription-based products or memberships.'
      ),
      new Feature(
        tierName,
        'Advanced Inventory Management',
        'Integrate third-party inventory management apps and enable low-stock notifications.'
      ),
      new Feature(
        tierName,
        'Product Upselling and Cross-Selling',
        'Implement features like "Customers also bought" and cross-selling during checkout.'
      ),
      new Feature(
        tierName,
        'Product Compare Feature',
        'Allow customers to compare products side-by-side for easier decision-making.'
      ),
      new Feature(
        tierName,
        'Advanced Checkout Customization',
        'Add custom fields, dynamic offers, and post-purchase upsell capabilities to checkout.'
      ),
      new Feature(
        tierName,
        'Partial Payments or Deposits',
        'Enable customers to pay a percentage upfront and complete payment later.'
      ),
      new Feature(
        tierName,
        'Email Automation and Marketing Integration',
        'Integrate email automation tools and set up automated campaigns for cart recovery and re-engagement.'
      ),
      new Feature(
        tierName,
        'CRM Integration',
        'Sync the store with a CRM system for customer segmentation and data tracking.'
      ),
      new Feature(
        tierName,
        'Advanced Reporting and Dashboards',
        'Provide dashboards for sales trends, product performance, and customer behavior.'
      ),
      new Feature(
        tierName,
        'Advanced App Integrations',
        'Integrate up to 2 apps with advanced functionality and validate their compatibility.'
      ),
      new Feature(
        tierName,
        'Social Proof Widgets',
        'Add live sales, product popularity, or recent reviews widgets to boost customer trust.'
      )
    ];

    return new OneServiceTier('Advanced', advancedFeatures);
  }
}

class DigitalMarketingService extends Service {
  constructor() {
    super('Digital_Marketing');
    this.basicTier = this.initializeBasicTier();
    this.standardTier = this.initializeStandardTier();
    this.advancedTier = this.initializeAdvancedTier();
  }

  private initializeBasicTier(): OneServiceTier {
    const tierName = 'Digital_Marketing_Basic'; // Tier key for featureToMilestoneMap
    const basicFeatures = [
      new Feature(
        tierName,
        'Google Ads Setup',
        'Create up to 2 basic Google Ads campaigns (e.g., search ads, display ads).'
      ),
      new Feature(
        tierName,
        'Basic Google Analytics Integration',
        'Connect Google Analytics to the website and set up traffic tracking.'
      ),
      new Feature(
        tierName,
        'Event Tracking Implementation',
        'Set up Google Tag Manager to track events like button clicks and form submissions.'
      ),
      new Feature(
        tierName,
        'Social Media Linking',
        'Connect the website to up to 2 social media platforms (e.g., Facebook, Instagram).'
      ),
      new Feature(
        tierName,
        'Monthly Performance Report',
        'Generate a simple monthly report highlighting impressions, clicks, and conversions.'
      ),
      new Feature(
        tierName,
        'SEO Setup for Key Pages',
        'Optimize meta titles, descriptions, and alt text for up to 5 key pages.'
      ),
      new Feature(
        tierName,
        'Email Capture Setup',
        'Add an email subscription form to the website and test its functionality.'
      )
    ];

    return new OneServiceTier('Basic', basicFeatures);
  }

  private initializeStandardTier(): OneServiceTier {
    const tierName = 'Digital_Marketing_Standard'; // Tier key for featureToMilestoneMap
    const standardFeatures = [
      ...this.basicTier.features, // Include all Basic Tier features
      new Feature(
        tierName,
        'Advanced Google Ads Campaigns',
        'Manage up to 5 campaigns, including remarketing and conversion-focused ads.'
      ),
      new Feature(
        tierName,
        'Google Analytics Advanced Setup',
        'Configure goals, funnel tracking, and e-commerce tracking.'
      ),
      new Feature(
        tierName,
        'Social Media Marketing',
        'Set up and manage ad campaigns on up to 3 platforms with boosted posts.'
      ),
      new Feature(
        tierName,
        'Keyword Research and Content Suggestions',
        'Conduct keyword research and provide blog topic suggestions.'
      ),
      new Feature(
        tierName,
        'Organic SEO Enhancements',
        'Optimize on-page SEO for up to 10 pages and provide internal linking suggestions.'
      )
    ];

    return new OneServiceTier('Standard', standardFeatures);
  }

  private initializeAdvancedTier(): OneServiceTier {
    const tierName = 'Digital_Marketing_Advanced'; // Tier key for featureToMilestoneMap
    const advancedFeatures = [
      ...this.basicTier.features, // Include all Basic Tier features
      ...this.standardTier.features, // Include all Standard Tier features
      new Feature(
        tierName,
        'SEO and Ad Strategy',
        'Develop a custom ad and search strategy with keyword research and SEO optimization.'
      ),
      new Feature(
        tierName,
        'Custom Content Development',
        'Produce up to 3 pieces of custom content per month (e.g., blogs, infographics).'
      ),
      new Feature(
        tierName,
        'Social Media Campaigns (2 Platforms)',
        'Run advanced campaigns on up to 2 platforms with carousel or video ads.'
      ),
      new Feature(
        tierName,
        'Data Analysis and Customer Insights',
        'Analyze user behavior and segment customers based on demographics and behavior.'
      ),
      new Feature(
        tierName,
        'Marketing Automation Tools Integration',
        'Integrate tools like HubSpot or Semrush and set up automation workflows.'
      )
    ];

    return new OneServiceTier('Advanced', advancedFeatures);
  }
}

class AIAgentService extends Service {
  constructor() {
    super('AI_Agent');
    this.basicTier = this.initializeBasicTier();
    this.standardTier = this.initializeIntermediateTier();
    this.advancedTier = this.initializeAdvancedTier();
  }

  private initializeBasicTier(): OneServiceTier {
    const tierName = 'AI_Agent_Basic'; // Tier key for featureToMilestoneMap
    const basicFeatures = [
      new Feature(
        tierName,
        'FAQ Answering Chatbot',
        'Install a dynamic FAQ chatbot with the ability to answer common customer queries.'
      ),
      new Feature(
        tierName,
        'Basic Prompt and Rule Engineering',
        'Set up foundational prompt and rule engineering for robust query handling.'
      )
    ];

    return new OneServiceTier('Basic', basicFeatures);
  }

  private initializeIntermediateTier(): OneServiceTier {
    const tierName = 'AI_Agent_Intermediate'; // Tier key for featureToMilestoneMap
    const intermediateFeatures = [
      ...this.basicTier.features, // Include all Basic Tier features
      new Feature(
        tierName,
        'Retrieval-Augmented Chatbot',
        'Integrate chatbot with proprietary, website, or customer data sources for dynamic interactions.'
      ),
      new Feature(
        tierName,
        'Set up Vector Store(s) and Retrieval Engine',
        'Configure vector storage and retrieval engine for dynamic data-driven responses.'
      ),
      new Feature(
        tierName,
        'Advanced and Dynamic Prompt Engineering',
        'Develop advanced and dynamic prompt engineering for contextual and personalized responses.'
      )
    ];

    return new OneServiceTier('Intermediate', intermediateFeatures);
  }

  private initializeAdvancedTier(): OneServiceTier {
    const tierName = 'AI_Agent_Advanced'; // Tier key for featureToMilestoneMap
    const advancedFeatures = [
      new Feature(
        tierName,
        'Custom AI Agent',
        "Define a custom AI agent tailored to the client's use case, including architecture and training requirements."
      ),
      new Feature(
        tierName,
        'Determine Architecture and Requirements',
        'Identify architecture, training data, and model requirements based on the specific use case.'
      ),
      new Feature(
        tierName,
        'Fine-Tuning or RAG Assessment',
        'Determine if fine-tuning or Retrieval-Augmented Generation (RAG) is required for the solution.'
      ),
      new Feature(
        tierName,
        'Integration and Deployment',
        "Integrate the AI agent into the client's ecosystem and deploy the solution."
      ),
      new Feature(
        tierName,
        'Advanced Performance Analytics',
        "Deliver advanced analytics to monitor the AI agent's performance and customer interactions."
      )
    ];

    return new OneServiceTier('Advanced', advancedFeatures);
  }
}

const aiAgentService = new AIAgentService();

export const digitalMarketingService = new DigitalMarketingService();

export const shopifyService = new StoreService();

const essentialCombinationService = new CombinationService('Combination Service', 'Essential');
const growthCombinationService = new CombinationService('Combination Service', 'Growth');
const enterpriseCombinationService = new CombinationService('Combination Service', 'Enterprise');

function logAllMilestonesWithGroups() {
  console.group('AI Agent Service');
  console.group('Basic Tier');
  console.log(aiAgentService.getMilestones(aiAgentService.basicTier));
  console.groupEnd();

  console.group('Intermediate Tier');
  console.log(aiAgentService.getMilestones(aiAgentService.standardTier));
  console.groupEnd();

  console.group('Advanced Tier');
  console.log(aiAgentService.getMilestones(aiAgentService.advancedTier));
  console.groupEnd();
  console.groupEnd();

  console.group('Shopify Service');
  console.group('Basic Tier');
  console.log(shopifyService.getMilestones(shopifyService.basicTier));
  console.groupEnd();

  console.group('Standard Tier');
  console.log(shopifyService.getMilestones(shopifyService.standardTier));
  console.groupEnd();

  console.group('Advanced Tier');
  console.log(shopifyService.getMilestones(shopifyService.advancedTier));
  console.groupEnd();
  console.groupEnd();

  console.group('Digital Marketing Service');
  console.group('Basic Tier');
  console.log(digitalMarketingService.getMilestones(digitalMarketingService.basicTier));
  console.groupEnd();

  console.group('Standard Tier');
  console.log(digitalMarketingService.getMilestones(digitalMarketingService.standardTier));
  console.groupEnd();

  console.group('Advanced Tier');
  console.log(digitalMarketingService.getMilestones(digitalMarketingService.advancedTier));
  console.groupEnd();
  console.groupEnd();
}

// Call the function
// logAllMilestonesWithGroups();

function logAllCombinationMilestonesWithGroups() {
  console.group('Combination Service milestones');
  console.log('Essential Service Milestones:', essentialCombinationService.getMilestones());
  console.log('Growth Service Milestones:', growthCombinationService.getMilestones());
  console.log('Enterprise Service Milestones:', enterpriseCombinationService.getMilestones());
  console.groupEnd();
}

logAllCombinationMilestonesWithGroups();
