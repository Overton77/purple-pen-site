// Interface for Service Subsection
interface ServiceSubsection {
  title: string; // Title of the service subsection (e.g., "ECommerce Store Development")
  features: string[]; // List of features under the subsection
  description: string; // Description of the service subsection
  subsectionMedia: string;
}

// Interface for the Call-to-Action (CTA) button
export interface CTAButton {
  text: string;
  link: string;
  variant?: 'default' | 'outline' | 'link' | 'destructive' | 'secondary' | 'ghost';
}

// Interface for Services Overview Section
interface ServicesOverview {
  mainTitle: string; // Main title for the services overview section
  subsections: ServiceSubsection[]; // Array of service subsections
  mainMedia?: string;
}

// Data structure for Services Overview
export const servicesOverview: ServicesOverview = {
  mainTitle: 'Our Expertise in Building Tailored Solutions',
  mainMedia: '/images/IMG_5550.jpeg',
  subsections: [
    {
      title: 'ECommerce Store Development',
      description:
        'We create bespoke eCommerce solutions that drive conversions and enhance customer experience.',
      features: [
        'Custom design & development',
        'Performance optimization',
        'Maintenance & support',
        'App & API integrations',
        'Event tracking and feedback loops',
        'User story strategy'
      ],
      subsectionMedia: '/images/IMG_5550.jpeg'
    },
    {
      title: 'Digital Marketing',
      description: "Leverage data-driven strategies to maximize your brand's reach and engagement.",
      features: [
        'Paid ad campaigns (Google, Social Media)',
        'Content creation & automation',
        'Analytics & strategy',
        'Keyword research and optimization'
      ],
      subsectionMedia: '/images/IMG_5550.jpeg'
    },
    {
      title: 'AI Integration',
      description:
        'Revolutionize your operations with cutting-edge AI solutions tailored to your needs.',
      features: [
        'Chatbots & virtual assistants',
        'Business task automation',
        'Custom AI agents for niche needs'
      ],
      subsectionMedia: 'path/to/subsection-media'
    }
  ]
};

export interface NavigationItem {
  label: string;
  link: string;
  submenu?: NavigationItem[];
}

export interface UserProfile {
  loggedIn: boolean;
  menuItems: NavigationItem[];
  avatarUrl?: string;
}

export interface NavigationBar {
  logo: string;
  items: NavigationItem[];
  ctaButton?: {
    text: string;
    link: string;
  };
  userProfile: UserProfile;
}

// Data structure for Navigation Bar
export const navigationBar: NavigationBar = {
  logo: '/images/IMG_5550.jpeg',
  items: [
    {
      label: 'Services',
      link: '/services',
      submenu: [
        { label: 'ECommerce Development', link: '/services/ecommerce' },
        { label: 'Digital Marketing', link: '/services/marketing' },
        { label: 'AI Integration', link: '/services/ai' }
      ]
    },
    {
      label: 'Resources',
      link: '/resources',
      submenu: [
        { label: 'Blog', link: '/resources/blog' },
        { label: 'Case Studies', link: '/resources/case-studies' },
        { label: 'Knowledge Base', link: '/resources/knowledge-base' }
      ]
    },
    { label: 'Portfolio', link: '/portfolio' },
    { label: 'Pricing', link: '/pricing' }
  ],
  ctaButton: {
    text: 'Start Your Journey',
    link: '/onboarding'
  },
  userProfile: {
    loggedIn: false,
    menuItems: [
      { label: 'Dashboard', link: '/dashboard' },
      { label: 'Settings', link: '/settings' },
      { label: 'Logout', link: '/logout' }
    ]
  }
};

interface ValuePropositionItem {
  header: string; // Header of the value proposition (e.g., "Dedicated Teams")
  subheader?: string; // Optional subheader for further emphasis
  description: string; // Detailed description of the proposition
  graphic?: string; // Optional graphic or icon path
  animationStyle?: string; // Optional animation style for the item
}

// Interface for Value Propositions Section
interface ValuePropositions {
  title: string; // Main title for the section
  items: ValuePropositionItem[]; // Array of value proposition items
  layoutStyle?: string; // Optional layout style (e.g., "split-screen")
}

// Data structure for Value Propositions
export const valuePropositions: ValuePropositions = {
  title: 'What Sets Purple Pen Apart',
  items: [
    {
      header: 'Dedicated Teams',
      subheader: 'Personalized Attention for Every Project',
      description:
        'Our team of experts ensures a tailored approach to meet your unique business needs, offering dedicated resources throughout your project lifecycle.',
      graphic: 'path/to/dedicated-teams-graphic.png',
      animationStyle: 'slide-in-left'
    },
    {
      header: 'Solution-Driven Approach',
      subheader: 'Tailored Strategies for Maximum Impact',
      description:
        'We identify and address specific challenges with innovative strategies, ensuring your business achieves its goals effectively.',
      graphic: 'path/to/solution-driven-graphic.png',
      animationStyle: 'fade-in'
    },
    {
      header: 'Advanced Integrations',
      subheader: 'Leveraging Cutting-Edge Technologies',
      description:
        'From AI and automation to rapid prototyping, we integrate advanced tools and methodologies to deliver transformative results.',
      graphic: 'path/to/advanced-integrations-graphic.png',
      animationStyle: 'zoom-in'
    }
  ],
  layoutStyle: 'split-screen'
};
