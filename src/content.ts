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
  tagline: "Garden Care & Maintenance",
  siteUrl: "https://www.garden-bud.co.uk/",
  siteTitle: "Gardener in Sheffield | Garden Maintenance & Care | Garden Bud",
  siteDescription:
    "Garden Bud provides reliable garden maintenance, pruning, tidy-ups, and general garden care for homes across Sheffield.",
  location: "Sheffield, UK",
  heroTitle: "Reliable garden care for tidy, welcoming homes across Sheffield.",
  heroIntro:
    "Garden Bud helps Sheffield homeowners keep their gardens cared for, manageable, and enjoyable all year round. Clear communication, dependable visits, and respectful work are the focus.",
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
    "This first build uses temporary quotes and placeholder contact details until Tom confirms the final launch copy.",
  services: [
    {
      title: "Regular garden maintenance",
      description:
        "Routine visits to keep lawns, beds, borders, and paths looking tidy without the hassle of organising multiple trades."
    },
    {
      title: "Seasonal tidy-ups",
      description:
        "One-off or occasional help for overgrown patches, post-winter cleanups, and preparing the garden for spring or summer."
    },
    {
      title: "Pruning and shaping",
      description:
        "Careful trimming of shrubs, hedges, and small garden features to keep the space neat, balanced, and easy to maintain."
    },
    {
      title: "General garden care",
      description:
        "Weeding, edging, leaf clearing, and practical upkeep for homeowners who want their garden looked after properly."
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
      href: "tel:01140000000",
      note: "Placeholder phone: 0114 000 0000"
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/447700900000",
      note: "Placeholder WhatsApp: 07700 900000"
    }
  ],
  contactDisclaimer:
    "Replace the phone and WhatsApp details with Tom's real contact information before publishing."
};
