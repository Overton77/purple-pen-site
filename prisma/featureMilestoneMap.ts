export const featureToMilestoneMap: Record<string, Record<string, string[]>> = {
  Store_Basic: {
    'Domain Configuration': [
      'Set up and verify your store’s custom or Shopify-provided domain.',
      'Ensure your domain is accessible and ready for customers.'
    ],
    'Theme Installation': [
      'Install a professional Shopify theme tailored to your brand.',
      'Validate your theme’s responsiveness across all devices.'
    ],
    'Logo and Branding Setup': [
      'Upload your logo and integrate it seamlessly into your store.',
      'Apply branding elements to the header and footer for a polished look.'
    ],
    'UI and UX Property Choices': [
      'Choose and apply a professional typography and color palette.',
      'Ensure your store layout is visually balanced and user-friendly.',
      'Incorporate your preferences or create new content for an engaging design.'
    ],
    'Basic Header and Footer Setup': [
      'Customize the header with navigation links and your brand logo.',
      'Add footer links to essential pages like legal policies and social media.',
      'Ensure consistent design and functionality across all pages.'
    ],
    'Navigation Menu Setup': [
      'Create an intuitive navigation menu for easy browsing.',
      'Link menu items to key pages and test their functionality.'
    ],
    'Product Catalog Creation': [
      'Add up to 10 products with detailed descriptions and high-quality images.',
      'Verify product listings for accuracy and availability.'
    ],
    'Payment Gateway Integration': [
      'Set up and configure a secure payment gateway like Shopify Payments.',
      'Run test transactions to ensure seamless payment processing.'
    ],
    'Basic Shipping Setup': [
      'Define shipping zones and set up flat-rate or calculated shipping.',
      'Test shipping options during checkout to ensure accuracy.'
    ],
    'Legal/Policy Pages Setup': [
      'Create essential legal pages like Privacy Policy and Terms of Service.',
      'Link these pages in the footer for easy customer access.'
    ],
    'Utilize Client or Chosen Media': [
      'Incorporate media provided by the client or selected content from available resources.',
      'Optimize media (e.g., images, videos) for performance and compatibility with the store theme.',
      'Ensure media aligns with branding and enhances visual appeal.'
    ],
    'Basic SEO Configuration': [
      'Optimize key pages with meta titles, descriptions, and alt text for images.',
      'Ensure your store is SEO-ready with Shopify’s built-in analytics.'
    ],
    'Checkout Process Configuration': [
      'Customize your checkout settings, including shipping and payment options.',
      'Test the checkout flow to ensure a seamless customer experience.'
    ],
    'Mobile-Responsiveness': ['Ensure your store looks and works great on all mobile devices.'],

    'Contact Information Setup': [
      'Add and verify a functional contact form for customer inquiries.'
    ],
    'Basic Analytics Setup': [
      'Enable Shopify’s analytics to track your sales and website traffic.',
      'Verify data collection for insights into your store’s performance.'
    ],

    'Inventory Management Setup': ['Enable inventory tracking to monitor product availability.'],

    'Basic Social Media Linking': [
      'Connect your store to your social media profiles.',
      'Verify links to ensure customers can access your social platforms.'
    ]
  },

  Store_Standard: {
    'Custom Code for Pages or Features': [
      'Identify up to 3 pages or features requiring custom code',
      'Implement and test custom code or layouts',
      'Verify custom functionality and ensure responsiveness'
    ],
    'Integration of One App': [
      'Select an app from the Shopify App Store',
      'Install and configure the app',
      'Verify app functionality within the store'
    ],
    'Enhanced Product Variations': [
      'Add support for up to 3 product variation options (e.g., size, color, material)',
      'Test variation display and functionality'
    ],
    'Bulk Product Uploads': [
      'Prepare and validate CSV for bulk upload',
      'Upload up to 50 products via CSV',
      'Verify successful bulk upload and product visibility'
    ],
    'Product Filtering': [
      'Enable filtering options on product listing pages',
      'Configure filters (e.g., by price, category, or tags)',
      'Test filter functionality'
    ],
    'Customer Accounts': [
      'Enable customer accounts for faster checkout and order tracking',
      'Test customer account creation and login functionality'
    ],
    'Wishlist Functionality': [
      'Add wishlist functionality to the store',
      'Verify wishlist visibility and saving behavior'
    ],
    'Customizable Checkout Options': [
      'Add up to 2 custom fields in the checkout process',

      'Verify custom fields functionality during checkout'
    ],
    'Advanced Shipping Configuration': [
      'Set up regional shipping rules and tiered rates',
      'Add a secondary shipping carrier (e.g., USPS, DHL)',
      'Test shipping calculations for configured regions'
    ],
    'Minimal SEO (Organic Search) Configuration': [
      'Optimize meta tags for collections and categories',
      'Add structured data for improved search visibility'
    ],

    'Basic Social Media Integration': [
      'Connect the store to one social media shop (e.g., Instagram or Facebook)',
      'Verify product sync and shop functionality'
    ]
  },
  Store_Advanced: {
    'Fully Custom Web App Integration': [
      'Develop a custom web app using Vercel and Next.js',
      'Integrate the app with Shopify store functionality',
      'Test and deploy the web app'
    ],
    'Full Custom Theme Development': [
      'Create a fully custom Shopify theme using the Theme Development Framework',
      'Develop templates for homepage, product pages, collection pages, and checkout',
      'Test and validate theme functionality'
    ],
    'Custom Code for Multiple Features': [
      'Identify up to 10 components requiring custom code',
      'Implement and test custom functionality',
      'Ensure compatibility and responsiveness'
    ],
    'Admin UI Extension': [
      'Develop and integrate one Shopify Admin UI extension',
      'Test and validate backend functionality'
    ],
    'Advanced Search and Filtering': [
      'Integrate advanced search with predictive capabilities',
      'Add multi-attribute filtering options (e.g., price, tags, availability)',
      'Test search and filtering functionality'
    ],
    'Multi-Language Support': [
      'Configure multiple languages for international customers',
      'Provide translated versions of key pages and product descriptions',
      'Validate language switching functionality'
    ],
    'Multi-Currency Support': [
      'Enable currency switching for global customers',
      'Show localized prices based on customer location',
      'Test multi-currency support during checkout'
    ],
    'Enhanced Wishlist Functionality': [
      'Allow customers to create and manage multiple wishlists',
      'Enable social sharing of wishlists',
      'Test wishlist functionality across devices'
    ],
    'Customizable Product Bundles': [
      'Create bundle offers for customers to build their own packages',
      'Test and validate bundle functionality'
    ],
    'Subscription or Membership Features': [
      'Enable recurring payments for subscription-based products',
      'Test subscription functionality and customer notifications'
    ],
    'Advanced Inventory Management': [
      'Integrate third-party inventory management apps (e.g., Stocky, TradeGecko)',
      'Set up low-stock and back-in-stock notifications for customers',
      'Test inventory synchronization and notifications'
    ],
    'Product Upselling and Cross-Selling': [
      "Add 'Customers also bought sections to product pages'",
      'Enable cross-selling functionality during checkout',
      'Test and validate upsell recommendations'
    ],
    'Product Compare Feature': [
      'Allow customers to compare products side-by-side',
      'Test comparison functionality for various attributes'
    ],
    'Advanced Checkout Customization': [
      'Add custom fields and dynamic offers to the checkout process',
      'Enable post-purchase upsell capabilities',
      'Test and validate custom checkout flows'
    ],
    'Partial Payments or Deposits': [
      'Enable partial payment options for products',
      'Configure deposit thresholds and rules',
      'Test partial payment functionality'
    ],

    'Email Automation and Marketing Integration': [
      'Integrate email automation tools (e.g., Klaviyo, Mailchimp)',
      'Set up automated email sequences for cart recovery, recommendations, and re-engagement',
      'Test email triggers and content delivery'
    ],
    'CRM Integration': [
      'Sync the store with a CRM system (e.g., HubSpot, Salesforce)',
      'Enable customer segmentation and data tracking',
      'Test CRM synchronization and workflows'
    ],
    'Advanced Reporting and Dashboards': [
      'Integrate advanced reporting tools (e.g., Data Studio, Shopify Reports)',
      'Set up dashboards for sales trends and customer behavior',
      'Test and validate reporting accuracy'
    ],
    'Advanced App Integrations': [
      'Integrate up to 2 apps with advanced functionality',
      'Test app compatibility and functionality within the store'
    ],
    'Social Proof Widgets': [
      'Add widgets displaying live sales, product popularity, or recent reviews',
      'Test widget display and functionality'
    ]
  },
  Digital_Marketing_Basic: {
    'Google Ads Setup': [
      'Create up to 2 basic Google Ads campaigns (e.g., search ads, display ads)',
      'Set up keyword targeting and ad copy creation',
      'Launch and verify campaign functionality'
    ],
    'Basic Google Analytics Integration': [
      'Connect Google Analytics to the website',
      'Set up traffic and conversion tracking',
      'Verify data collection and reporting'
    ],
    'Event Tracking Implementation': [
      'Set up Google Tag Manager on the website',
      'Define and implement basic event tracking (e.g., button clicks, form submissions)',
      'Test and validate event triggers and reporting'
    ],
    'Social Media Linking': [
      'Connect the website to up to 2 social media platforms (e.g., Facebook, Instagram)',
      'Verify social media links functionality and visibility'
    ],
    'Monthly Performance Report': [
      'Generate a simple monthly performance report',
      'Highlight impressions, clicks, and basic conversions',
      'Provide recommendations for next steps'
    ],
    'SEO Setup for Key Pages': [
      'Optimize meta titles and descriptions for up to 5 key pages',
      'Add basic alt text to images',
      'Ensure keyword placement for on-page optimization'
    ],
    'Email Capture Setup': [
      'Add an email subscription form to the website',
      'Test email form submission functionality',
      'Ensure proper storage of collected email addresses'
    ]
  },
  Digital_Marketing_Standard: {
    'Advanced Google Ads Campaigns': [
      'Set up and manage up to 5 Google Ads campaigns (e.g., remarketing, conversion-focused)',
      'Include basic audience segmentation for improved targeting',
      'Launch campaigns and verify performance'
    ],
    'Google Analytics Advanced Setup': [
      'Configure goals for conversion tracking',
      'Set up funnel tracking for user journeys',
      'Enable and test e-commerce tracking (if applicable)'
    ],
    'Social Media Marketing': [
      'Set up and manage ad campaigns on up to 3 platforms (e.g., Facebook, Instagram, LinkedIn)',
      'Boost posts with basic audience targeting',
      'Verify ad performance and engagement'
    ],
    'Keyword Research and Content Suggestions': [
      'Conduct keyword research for content strategy',
      'Provide a list of targeted blog topics or content areas',
      'Ensure alignment with SEO and audience interests'
    ],
    'Organic SEO Enhancements': [
      'Optimize on-page SEO for up to 10 pages (e.g., meta titles, descriptions, and alt text)',
      'Suggest internal linking strategies for better navigation',
      'Provide recommendations for off-page SEO best practices'
    ]
  },
  Digital_Marketing_Advanced: {
    'SEO and Ad Strategy': [
      "Conduct in-depth keyword research tailored to the client's industry and audience",
      'Perform competitor analysis to identify gaps and opportunities',
      'Develop a custom ad and search strategy based on keyword and competitor insights',
      'Optimize on-page SEO for up to 15 pages (e.g., meta titles, descriptions, alt text)',
      'Suggest internal linking strategies to improve navigation and SEO value',
      'Deliver a 6-month roadmap with actionable SEO and ad recommendations'
    ],
    'Custom Content Development': [
      'Produce up to 3 pieces of custom content per month (e.g., blog posts, infographics, or videos)',
      'Optimize content for SEO and audience engagement',
      'Track and analyze content performance metrics',
      'Refine content strategy based on performance insights'
    ],
    'Social Media Campaigns (2 Platforms)': [
      'Run advanced ad campaigns on up to 2 platforms (e.g., Facebook, Instagram)',
      'Include carousel ads, video ads, or boosted posts',
      'Analyze engagement metrics and optimize campaigns for better results'
    ],
    'Data Analysis and Customer Insights': [
      'Analyze user behavior using tools like Google Analytics or client-selected platforms (e.g., Hotjar)',
      'Segment customers based on behavior and demographics',
      'Provide actionable insights for improving customer targeting and experience'
    ],
    'Marketing Automation Tools Integration': [
      'Integrate tools like HubSpot, Semrush, or a platform chosen by the client',
      'Set up workflows for lead management and engagement',
      'Test and validate automation workflows for accuracy and efficiency'
    ]
  },
  AI_Agent_Basic: {
    'FAQ Answering Chatbot': [
      'Install and verify chatbot widget on the client’s website',
      'Configure chatbot with a dynamic FAQ answering capability',
      'Perform Basic Prompt and Rule Engineering to handle varied customer queries',
      'Set up and test basic analytics for chatbot interactions (e.g., usage and query resolution rates)'
    ],
    'Basic Prompt and Rule Engineering': [
      'Define rules and guidelines for chatbot interactions',
      'Test and refine prompts for varied FAQ responses',
      'Ensure chatbot behavior aligns with predefined rules and scenarios'
    ]
  },
  AI_Agent_Standard: {
    'Retrieval-Augmented Chatbot': [
      'Integrate chatbot with proprietary, website, or customer data sources',
      'Set up vector store(s) and retrieval engine',
      'Enable retrieval-augmented generation (RAG) for dynamic query handling',
      'Perform Advanced and Dynamic Prompt Engineering for contextual and personalized responses',
      'Test and validate chatbot interactions with live data'
    ],
    'Set up Vector Store(s) and Retrieval Engine': [
      'Install and configure vector storage for knowledge base retrieval',
      'Link retrieval engine to chatbot for real-time responses',
      'Test and optimize vector-based query responses'
    ],
    'Advanced and Dynamic Prompt Engineering': [
      'Design advanced prompts for contextual understanding',
      'Incorporate dynamic variables into prompt generation',
      'Test and refine prompts for complex, multi-turn conversations'
    ]
  },
  AI_Agent_Advanced: {
    'Custom AI Agent': [
      'Define use case and specific objectives for the AI agent',
      'Determine custom architecture, training data, and model requirements',
      'Determine if fine-tuning and or RAG is required',
      "Integrate and test AI agent functionality within the client's ecosystem",
      'Deploy the solution and deliver advanced analytics for performance monitoring'
    ],
    'Determine Architecture and Requirements': [
      'Assess client needs and system architecture requirements',
      'Identify necessary data sources and integration points',
      'Draft a blueprint for custom AI agent implementation'
    ],
    'Fine-Tuning or RAG Assessment': [
      'Analyze use case requirements for fine-tuning or retrieval-augmented generation',
      'Prepare training data for fine-tuning (if needed)',
      'Test RAG integration for accuracy and responsiveness'
    ],
    'Integration and Deployment': [
      'Connect the AI agent to client systems and test interactions',
      'Ensure compatibility with existing platforms and workflows',
      'Deploy the agent and monitor initial performance'
    ],
    'Advanced Performance Analytics': [
      'Set up dashboards for monitoring AI agent interactions',
      'Analyze performance metrics such as response accuracy and user satisfaction',
      'Provide recommendations for continuous improvement'
    ]
  }
};

export const combinationTierFeatureMilestoneMap: Record<
  string,
  Record<string, Record<string, string[]>>
> = {
  Essential: {
    Store: {
      'Shopify Store Setup': [
        'Set up Shopify subdomain or configure a custom domain',
        'Install and verify a prebuilt Shopify theme with minor adjustments (e.g., colors, fonts)',
        'Configure typography, color palette, as well as UI and UX considerations',
        'Add up to 10 products with descriptions and images',
        'Set up basic payment gateway and shipping options',
        'Create legal pages (e.g., privacy policy, terms of service)'
      ]
    },
    Digital_Marketing: {
      'Basic Digital Marketing': [
        'Integrate Google Tag Manager for basic event tracking (e.g., page views, add-to-cart)',
        'Set up and verify Google Analytics tracking',
        'Optimize meta titles and descriptions for up to 5 core pages',
        'Create a basic SEO-optimized blog post'
      ]
    },
    AI_Agent: {
      'FAQ Answering Chatbot': [
        'Install and verify a dynamic FAQ Answering Chatbot',
        'Perform Basic Prompt and Rule Engineering for handling common customer queries',
        'Set up and test basic analytics for chatbot interactions (e.g., usage and query resolution rates)'
      ]
    }
  },
  Growth: {
    Store: {
      'Essential Features Added': ['Essential package parts complete'],
      'Shopify Store Customization': [
        'Customize Shopify theme with layout changes and brand adjustments',
        'Set up product categories and collections',
        'Install and configure up to 3 Shopify apps (e.g., reviews, email marketing)',
        'Configure advanced shipping zones and tax settings',
        'Enable and test Google Analytics enhanced e-commerce tracking'
      ]
    },
    Digital_Marketing: {
      'Essential Features Added': ['Essential package parts complete'],
      'Intermediate Digital Marketing': [
        'Manage up to 3 Google Ads campaigns, including remarketing ads',
        'Run social media ad campaigns on up to 2 platforms (e.g., Facebook, Instagram)',
        'Optimize on-page SEO for up to 10 pages',
        'Conduct keyword research and suggest 3 content topics for blogs or landing pages'
      ]
    },
    AI_Agent: {
      'Essential Features Added': ['Essential package parts complete'],
      'Retrieval-Augmented Chatbot': [
        'Integrate a Retrieval-Augmented Chatbot with proprietary or customer data sources',
        'Set up vector store(s) and retrieval engine for knowledge-based responses',
        'Perform Advanced and Dynamic Prompt Engineering for personalized and contextual interactions',
        'Test and validate chatbot interactions with live data'
      ]
    }
  },
  Enterprise: {
    Store: {
      'Growth Features Added': ['Growth package parts complete'],
      'Fully Customized Shopify Web App': [
        'Develop or significantly customize a Shopify web app for unique business needs',
        'Integrate APIs for external systems (e.g., CRM, ERP)',
        'Enable multi-language and multi-currency support for international customers',
        'Optimize metadata, URLs, and schema for advanced SEO',
        'Test and validate performance under high-traffic conditions'
      ]
    },
    Digital_Marketing: {
      'Growth Features Added': ['Growth package parts complete'],
      'Advanced Digital Marketing Suite': [
        'Launch up to 5 advanced Google Ads campaigns',
        'Design and implement custom landing pages optimized for conversions',
        'Set up email marketing automation workflows (e.g., cart recovery, promotions)',
        'Deliver a 6-month SEO roadmap with actionable steps and strategies',
        'Generate detailed analytics reports with actionable insights'
      ]
    },
    AI_Agent: {
      'Growth Features Added': ['Growth package parts complete'],
      'Custom AI Agent': [
        'Define use case and specific objectives for a Custom AI Agent',
        'Determine architecture, training data, and model requirements',
        'Enable multi-modal support for text, voice, and image inputs',
        'Integrate the AI agent with CRM systems for personalized interactions',
        'Deploy the solution and deliver advanced performance analytics and sentiment analysis'
      ]
    }
  }
};
