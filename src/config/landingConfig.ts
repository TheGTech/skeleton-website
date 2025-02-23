export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface AppDownload {
  platform: 'ios' | 'android';
  url: string;
  buttonText: string;
  icon: string;
}

export interface LandingPageConfig {
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    image?: string;
  };
  
  // Features Section
  features: {
    sectionTitle: string;
    description: string;
    items: Feature[];
  };

  // About Section
  about: {
    title: string;
    content: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };

  // Testimonials Section
  testimonials: {
    sectionTitle: string;
    items: Testimonial[];
  };

  // Contact & Download Section
  contactAndDownload: {
    sectionTitle: string;
    description: string;
    downloads: AppDownload[];
    contactInfo: {
      email: string;
      phone?: string;
      address?: string;
      supportHours?: string;
    };
  };

  // Footer
  footer: {
    companyName: string;
    description: string;
    socialLinks: SocialLink[];
    links: Array<{
      title: string;
      items: Array<{
        label: string;
        href: string;
      }>;
    }>;
  };
}

const defaultConfig: LandingPageConfig = {
  hero: {
    title: "Transform Your Ideas into Reality",
    subtitle: "Launch your next project with our powerful and flexible landing page template",
    image: "/hero-image.png"
  },
  
  features: {
    sectionTitle: "Features",
    description: "Everything you need to launch your next project",
    items: [
      {
        title: "Easy Customization",
        description: "Customize every aspect of your landing page through a simple configuration file",
        icon: "settings"
      },
      {
        title: "Responsive Design",
        description: "Your landing page looks great on any device, from mobile to desktop",
        icon: "devices"
      },
      {
        title: "Fast Performance",
        description: "Optimized for speed and performance out of the box",
        icon: "speed"
      }
    ]
  },

  about: {
    title: "About Us",
    content: "We're passionate about helping businesses and individuals launch their projects quickly and efficiently. Our template provides everything you need to get started.",
    stats: [
      { value: "50+", label: "Projects Launched" },      { value: "50+", label: "Templates" },
      { value: "24/7", label: "Support" }
    ]
  },

  testimonials: {
    sectionTitle: "What Our Users Say",
    items: [
      {
        name: "John Doe",
        role: "Founder, TechStart",
        content: "This template helped us launch our landing page in record time. The customization options are fantastic!",
        avatar: "/person1.png"
      },
      {
        name: "Jane Smith",
        role: "CEO, DesignCo",
        content: "The best landing page template we've used. Clean, modern, and highly customizable.",
        avatar: "/person2.png"
      }
    ]
  },

  contactAndDownload: {
    sectionTitle: "Download & Get in Touch",
    description: "Get our app on your favorite platform or reach out to us",
    downloads: [
      {
        platform: "ios",
        url: "https://apps.apple.com/app",
        buttonText: "Download on the App Store",
        icon: "apple"
      },
      {
        platform: "android",
        url: "https://play.google.com/store/apps",
        buttonText: "Get it on Google Play",
        icon: "android"
      }
    ],
    contactInfo: {
      email: "support@example.com",
      phone: "+1 (555) 123-4567",
      supportHours: "24/7 Support"
    }
  },

  footer: {
    companyName: "Your Company",
    description: "Building the future of web applications",
    socialLinks: [
      {
        platform: "Twitter",
        url: "https://twitter.com",
        icon: "twitter"
      },
      {
        platform: "GitHub",
        url: "https://github.com",
        icon: "github"
      }
    ],
    links: [
      {
        title: "Product",
        items: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" }
        ]
      },
      {
        title: "Company",
        items: [
          { label: "About", href: "#about" },
          { label: "Contact", href: "/contact" }
        ]
      }
    ]
  }
};

export default defaultConfig;
