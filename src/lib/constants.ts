import { 
  BarChart4, 
  Code, 
  Database, 
  Globe, 
  Layers, 
  LineChart, 
  Monitor, 
  Shield, 
  Smartphone, 
  Users, 
  Zap,
  AppWindow,
  Brain,
  Cloud,
  Store
} from "lucide-react";

export const NAV_ITEMS = {
  platform: [
    { 
      title: "Agent Studio",
      description: "Turn enterprise workflows into AI-powered agents and copilots.",
      href: "#",
      icon: Users
    },
    { 
      title: "App Studio",
      description: "Ideas to Applications in Minutes. Deploy Anywhere. No Code Needed.",
      href: "#",
      icon: AppWindow
    },
    { 
      title: "Model Studio",
      description: "Build, fine-tune, and scale LLMs - elegantly tailored to your business.",
      href: "#",
      icon: Brain
    },
    { 
      title: "Cloud Studio",
      description: "Flexible AI deployment - optimized to scale on any cloud or on-premises.",
      href: "#",
      icon: Cloud
    },
    { 
      title: "AI Marketplace",
      description: "Your AI destination for enterprise-ready solutions, deployed in minutes.",
      href: "#",
      icon: Store
    }
  ],
  products: [
    { title: "Vanij", href: "#" },
    { title: "AI Agents", href: "#" },
    { title: "Smart Search", href: "#" },
    { title: "Industry Solutions", href: "#" },
  ],
  industries: [
    { title: "Financial Services", href: "#" },
    { title: "Healthcare", href: "#" },
    { title: "Retail", href: "#" },
    { title: "Technology", href: "#" },
    { title: "Manufacturing", href: "#" },
  ],
  company: [
    { title: "About Us", href: "#" },
    { title: "Leadership", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Contact", href: "#" },
    { title: "Blog", href: "#" },
  ],
};

export const TRUSTED_COMPANIES = [
  "TCS", "EY", "Cognizant", "Infosys", "Wipro", "Deloitte"
];

export const FEATURES = [
  {
    title: "Designed for rapid scalability",
    description: "and easy integration",
    icon: Zap,
  },
  {
    title: "Connect multiple LLMs",
    description: "seamlessly",
    icon: Database,
  },
  {
    title: "Automated infrastructure",
    description: "provisioning",
    icon: Monitor,
  },
  {
    title: "Multimodal workflows",
    description: "across domains",
    icon: Globe,
  },
];

export const SOLUTIONS = [
  {
    title: "Issues & Grievances Agent",
    description: "Automate customer support with AI that understands and resolves issues",
    icon: Smartphone,
  },
  {
    title: "Smart Search Agent",
    description: "Enhanced search capability across your enterprise data",
    icon: LineChart,
  },
  {
    title: "Delivery Management Agent",
    description: "Optimize logistics and delivery processes with AI",
    icon: BarChart4,
  },
  {
    title: "Smart Suggestions Agent",
    description: "Provide intelligent recommendations based on user behavior",
    icon: Users,
  },
  {
    title: "Master Retail Agent",
    description: "Comprehensive AI solution for retail operations",
    icon: Shield,
    highlighted: true,
  },
  {
    title: "Reconciliation Agent",
    description: "Automate financial reconciliation with precision",
    icon: Layers,
  },
];

export const FOOTER_LINKS = {
  products: [
    { title: "AI Orchestration", href: "#" },
    { title: "Enterprise Search", href: "#" },
    { title: "Smart Agents", href: "#" },
    { title: "Industry Solutions", href: "#" },
  ],
  resources: [
    { title: "Documentation", href: "#" },
    { title: "API Reference", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Case Studies", href: "#" },
  ],
  company: [
    { title: "About Us", href: "#" },
    { title: "Leadership", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Contact", href: "#" },
    { title: "Privacy Policy", href: "#" },
  ],
};