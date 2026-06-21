import gardenHero from "./site-assets/garden-hero.webp";
import gardenFeature from "./site-assets/garden-feature.webp";
import gardenDetail from "./site-assets/garden-detail.webp";
import gardenSteps from "./site-assets/garden-steps.webp";
import gardenBorder from "./site-assets/garden-border.webp";
import logo from "./site-assets/logo.webp";
import tomPhoto from "./site-assets/tom.webp";

export type ContactMethod = {
  label: string;
  href: string;
  note: string;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
};

export type SiteContent = {
  businessName: string;
  tagline: string;
  siteUrl: string;
  siteTitle: string;
  siteDescription: string;
  location: string;
  heroTitle: string;
  heroIntro: string;
  heroImage: GalleryItem;
  logo: GalleryItem;
  aboutImage: GalleryItem;
  trustNote: string;
  services: ServiceItem[];
  testimonials: TestimonialItem[];
  gallery: GalleryItem[];
  contactMethods: ContactMethod[];
  contactDisclaimer: string;
};

export const siteContent: SiteContent = {
  businessName: "Garden Bud",
  tagline: "Professional Garden Care & Maintenance",
  siteUrl: "https://www.garden-bud.co.uk/",
  siteTitle: "Expert Gardener in Sheffield | Garden Maintenance & Care | Garden Bud",
  siteDescription:
    "Garden Bud provides reliable garden maintenance, lawn care, hedge trimming, pruning, and seasonal tidy-ups across Sheffield. Friendly, professional service using modern battery-powered equipment for a quieter, cleaner approach to garden care.",
  location: "Sheffield, UK",
  heroTitle:
    "Professional garden maintenance across Sheffield, helping you enjoy your outdoor space all year round.",
  heroIntro:
    "Whether you need regular garden maintenance, a one-off tidy-up, or help bringing an overgrown garden back under control, Garden Bud provides dependable, high-quality garden care tailored to your needs. We take pride in delivering tidy, professional results, clear communication, and a friendly service you can rely on.",
  heroImage: {
    src: gardenHero,
    alt: "A neat Sheffield garden with a striped lawn, flower beds, and patio seating."
  },
  logo: {
    src: logo,
    alt: "Garden Bud logo."
  },
  aboutImage: {
    src: tomPhoto,
    alt: "Tom from Garden Bud smiling in his work gear."
  },
  trustNote:
    "Garden Bud is run by Tom, offering reliable garden maintenance across Sheffield. Every job is approached with care and attention to detail, helping keep your garden healthy, tidy, and enjoyable throughout the year. Modern battery-powered equipment is used wherever possible for a quieter, cleaner service with less disruption.",
  services: [
    {
      title: "Lawn Care & Maintenance",
      description:
        "Regular mowing, edging, lawn treatments, scarifying, and seasonal care to keep your lawn healthy, tidy, and looking its best throughout the year."
    },
    {
      title: "Seasonal Tidy-Ups",
      description:
        "From spring refreshes to autumn leaf clearance, we can restore order to overgrown areas and prepare your garden for the season ahead."
    },
    {
      title: "Pruning & Hedge Cutting",
      description:
        "Careful pruning, shrub shaping, hedge trimming, and small tree maintenance to encourage healthy growth while keeping your garden neat and well presented."
    },
    {
      title: "Patios, Paths & Hard Surfaces",
      description:
        "Patio and pathway cleaning, weed control, moss removal, and repointing work to help keep outdoor surfaces safe, attractive, and well maintained."
    },
    {
      title: "Beds & Borders",
      description:
        "Weeding, planting, mulching, composting, and border maintenance to keep flower beds healthy, colourful, and well structured throughout the seasons."
    },
    {
      title: "Eco-Friendly Garden Care",
      description:
        "We use modern battery-powered equipment, reducing noise, avoiding petrol fumes, and providing a cleaner, more environmentally friendly service for you and your neighbours."
    }
  ],
  testimonials: [
    {
      quote:
        "Tom keeps our garden looking smart without making a fuss. It always feels easy to have him round.",
      name: "Placeholder review, S11 homeowner"
    },
    {
      quote:
        "We wanted someone reliable who would just get on with it, and Garden Bud has been exactly that.",
      name: "Placeholder review, Sheffield customer"
    },
    {
      quote:
        "The garden feels under control again, and the whole space looks brighter and better cared for.",
      name: "Placeholder review, retired couple in Sheffield"
    }
  ],
  gallery: [
    {
      src: gardenFeature,
      alt: "A landscaped garden with healthy shrubs and clean lawn edges."
    },
    {
      src: gardenDetail,
      alt: "A well-kept garden border and lawn in a private back garden."
    },
    {
      src: gardenSteps,
      alt: "Stone steps and planting in a tidy garden maintenance project."
    },
    {
      src: gardenBorder,
      alt: "A decorative garden scene with flowering planters and maintained greenery."
    }
  ],
  contactMethods: [
    {
      label: "Call Tom",
      href: "tel:07703382563",
      note: "Phone: 077033 82563"
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/447703382563",
      note: "WhatsApp: 077033 82563"
    }
  ],
  contactDisclaimer:
    "Get in touch to talk through regular garden maintenance, seasonal tidy-ups, or one-off garden care."
};
