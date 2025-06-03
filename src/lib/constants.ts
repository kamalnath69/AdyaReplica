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
} from "lucide-react";

// Import SVG icons
import m1 from "@/assets/svg/m1.svg";
import m2 from "@/assets/svg/m2.svg";
import m3 from "@/assets/svg/m3.svg";
import m4 from "@/assets/svg/m4.svg";
import m5 from "@/assets/svg/m5.svg";

// Import company logos
import bobbleaiLogo from "@/assets/svg/bobbleai-DzyI-Tjc.svg";
import canaraLogo from "@/assets/svg/canara-CU76cxyE.svg";
import ekstepLogo from "@/assets/svg/ekstep-CiwVnEvb.svg";
import followgLogo from "@/assets/svg/followg-Cccx8t7f.svg";
import indipe from "@/assets/svg/indipe.svg";
import ondcLogo from "@/assets/svg/ondc-BDAWJRzp.svg";
import onediosLogo from "@/assets/svg/onedios-6hC2oeQE.svg";
import onestLogo from "@/assets/svg/onest-BLWW-qL9.svg";
import paynearbyLogo from "@/assets/svg/paynearby-CVfbNARI.svg";
import rapidoLogo from "@/assets/svg/rapido-DFPZ4Ror.svg";
import salescodeLogo from "@/assets/svg/salescode-Cr4Aqqxi.svg";
import skillsetuLogo from "@/assets/svg/skillsetu-Bn1rMW9t.svg";
import venkoLogo from "@/assets/svg/venko-k0rnpXZ4.svg";
import zionmartLogo from "@/assets/svg/zionmart-Lm9NxsRr.svg";

// Import investor logos
import ivyCapVenLogo from "@/assets/svg/ivy-cap-ven-NxizkdLZ.svg";
import indianAngelNetLogo from "@/assets/svg/indian-angel-net-GtEv6KL_.svg";

export const NAV_ITEMS = {
  platform: [
    { 
      title: "Agent Studio",
      description: "Turn enterprise workflows into AI-powered agents and copilots.",
      href: "#",
      icon: m1
    },
    { 
      title: "App Studio",
      description: "Ideas to Applications in Minutes. Deploy Anywhere. No Code Needed.",
      href: "#",
      icon: m2
    },
    { 
      title: "Model Studio",
      description: "Build, fine-tune, and scale LLMs - elegantly tailored to your business.",
      href: "#",
      icon: m3
    },
    { 
      title: "Cloud Studio",
      description: "Flexible AI deployment - optimized to scale on any cloud or on-premises.",
      href: "#",
      icon: m4
    },
    { 
      title: "AI Marketplace",
      description: "Your AI destination for enterprise-ready solutions, deployed in minutes.",
      href: "#",
      icon: m5
    }
  ],
  products: [
    { title: "Vanij", href: "#", icon: m1 },
    { title: "Vanij AI", href: "#", icon: m2 },
    { title: "Vanij Cloud", href: "#", icon: m3 },
    { title: "AI Agents", href: "#", icon: m4 },
    { title: "Smart Search", href: "#", icon: m5 },
  ],
  industries: [
    { title: "Financial Services", href: "#", icon: m1 },
    { title: "Healthcare", href: "#", icon: m2 },
    { title: "Retail", href: "#", icon: m3 },
    { title: "Technology", href: "#", icon: m4 },
    { title: "Manufacturing", href: "#", icon: m5 },
  ],
  company: [
    { title: "About Us", href: "#", icon: m1 },
    { title: "Leadership", href: "#", icon: m2 },
    { title: "Careers", href: "#", icon: m3 },
    { title: "Contact", href: "#", icon: m4 },
    { title: "Blog", href: "#", icon: m5 },
  ],
};

export const TRUSTED_COMPANIES = {
  firstRow: [bobbleaiLogo, ekstepLogo, followgLogo, indipe],
  secondRow: [ondcLogo, onediosLogo, onestLogo, paynearbyLogo, salescodeLogo],
  thirdRow: [rapidoLogo, skillsetuLogo, venkoLogo, zionmartLogo, canaraLogo],
};

export const INVESTORS = [
  { name: "Ivy Cap Ventures", logo: ivyCapVenLogo },
  { name: "Indian Angel Network", logo: indianAngelNetLogo }
];

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/adyadotai/",
    icon: "linkedin"
  },
  {
    name: "Facebook", 
    href: "https://www.facebook.com/adyaai",
    icon: "facebook"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/adya_ai?igsh=MWgya3VldjR4bmlmcw==",
    icon: "instagram"
  }
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