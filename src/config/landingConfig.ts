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
    showImage?: boolean;
    imageHeight?: number;
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
    title: "Learn Something New Every Day",
    subtitle: "Bite-sized learning experiences delivered daily to help you grow consistently",
    image: "/hero-image.png",
    showImage: true,
    imageHeight: 200
  },
  
  features: {
    sectionTitle: "Why MicroLearn?",
    description: "Experience a new way of learning that fits your busy lifestyle",
    items: [
      {
        title: "Daily Micro-Lessons",
        description: "5-minute lessons designed to fit into your daily routine, making learning a consistent habit",
        icon: "timer"
      },
      {
        title: "AI-Powered Learning",
        description: "Smart content adaptation based on your progress and learning style",
        icon: "psychology"
      },
      {
        title: "Progress Tracking",
        description: "Visual insights into your learning journey with detailed analytics",
        icon: "trending_up"
      }
    ]
  },

  about: {
    title: "About MicroLearn",
    content: "We believe learning shouldn't be overwhelming. Our platform delivers bite-sized, engaging content that helps you build knowledge and skills consistently, one day at a time.",
    stats: [
      { value: "500K+", label: "Active Learners" },
      { value: "1000+", label: "Daily Lessons" },
      { value: "15+", label: "Subject Areas" }
    ]
  },

  testimonials: {
    sectionTitle: "Success Stories",
    items: [
      {
        name: "Alex Chen",
        role: "Software Developer",
        content: "MicroLearn's daily Python lessons helped me transition into tech. Just 5 minutes a day, and after 6 months, I landed my dream job!",
        avatar: "/person2.png"
      },
      {
        name: "Sarah Miller",
        role: "Digital Marketing Manager",
        content: "I love how MicroLearn fits into my morning routine. The bite-sized SEO lessons have dramatically improved our website's performance.",
        avatar: "/person1.png"
      }
    ]
  },

  contactAndDownload: {
    sectionTitle: "Start Learning Today",
    description: "Download MicroLearn and unlock your daily learning potential",
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
      email: "help@microlearn.app",
      phone: "+1 (888) LEARN-24",
      supportHours: "24/7 Learning Support"
    }
  },

  footer: {
    companyName: "MicroLearn",
    description: "Empowering daily growth through bite-sized learning",
    socialLinks: [
      {
        platform: "Twitter",
        url: "https://twitter.com/microlearn",
        icon: "twitter"
      },
      {
        platform: "Instagram",
        url: "https://instagram.com/microlearn",
        icon: "instagram"
      }
    ],
    links: [
      {
        title: "Learn",
        items: [
          { label: "Courses", href: "#courses" },
          { label: "How It Works", href: "#features" },
          { label: "Success Stories", href: "#testimonials" }
        ]
      },
      {
        title: "Company",
        items: [
          { label: "About Us", href: "#about" },
          { label: "Blog", href: "/blog" },
          { label: "Support", href: "/support" }
        ]
      }
    ]
  }
};

export default defaultConfig;
