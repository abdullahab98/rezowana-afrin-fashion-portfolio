export interface PortfolioItem {
  id: string;
  title: string;
  category: "Haute Couture" | "Bridal & Heritage" | "Contemporary Draping" | "Avant-Garde & Textures" | "Sketches & Craft";
  collection: string;
  src: string;
  thumbnail: string;
  gallery: string[]; // Exactly 5 curated angles & detail shots for each dress
  description: string;
  materials: string[];
  palette: string[];
  silhouette: string;
  isFeatured?: boolean;
}

export interface CollectionMeta {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  coverImage: string;
  accentColor: string;
}

export interface PersonalInfo {
  name: string;
  preferredName: string;
  title: string;
  tagline: string;
  bio: string;
  statement: string;
  fatherName: string;
  motherName: string;
  presentAddress: string;
  permanentAddress: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  nationality: string;
  religion: string;
  bloodGroup: string;
  email: string;
  driveFolderUrl: string;
  videoShowreelUrl: string;
  education: {
    level: string;
    institution: string;
    group: string;
    result: string;
    year: string;
    highlights: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  designPhilosophy: {
    headline: string;
    subheadline: string;
    pillars: {
      number: string;
      title: string;
      description: string;
    }[];
  };
}

export const PERSONAL_INFO: PersonalInfo = {
  name: "Rezowana Afrin",
  preferredName: "Lisa",
  title: "Haute Couture & Textile Art Designer",
  tagline: "Sculpting emotion through artisanal textiles, draped silhouettes, and timeless South Asian aesthetics.",
  bio: "Rezowana Afrin is an avant-garde fashion designer and visual artist whose work harmonizes intricate heritage craftsmanship with contemporary architectural draping. Raised with a reverence for artisanal textiles and bold structural silhouettes, she conceptualizes couture collections as tactile art boards—where hand-embellished textures, organic dyes, and fluid fabrics converse with modernity.",
  statement: "Fashion is not merely what is worn; it is an intimate canvas painted with thread, movement, and identity. Every seam holds a memory, and every drape celebrates the body as living sculpture.",
  fatherName: "Md. Lokman Hossain",
  motherName: "Zakia",
  presentAddress: "Mollartek, Jashimuddin, Uttara, Dhaka, Bangladesh",
  permanentAddress: "Chakgopal, Dinajpur, Bangladesh",
  dateOfBirth: "25 April, 2003",
  gender: "Female",
  maritalStatus: "Married",
  nationality: "Bangladeshi",
  religion: "Islam",
  bloodGroup: "O Positive (O+)",
  email: "afrinlisa2k3@gmail.com",
  driveFolderUrl: "https://drive.google.com/drive/folders/16FnMnNGz04LbEQeHiHep6L26nSRbICRZ",
  videoShowreelUrl: "https://drive.google.com/file/d/1rusu3pPgcr37gUaam-kXynzof94OBIjC/view?usp=drive_link",
  education: [
    {
      level: "Higher Secondary Certificate (HSC)",
      institution: "Millennium Scholastic School & College",
      group: "Science",
      result: "GPA 5.00 / 5.00",
      year: "2020",
      highlights: "Analytical rigor, pattern drafting geometry, structural material science, and color theory foundation."
    },
    {
      level: "Secondary School Certificate (SSC)",
      institution: "Millennium Scholastic School & College",
      group: "Science",
      result: "GPA 5.00 / 5.00",
      year: "2018",
      highlights: "Merit distinction, fine arts studio exploration, and illustrative anatomy drafting."
    }
  ],
  skills: [
    {
      category: "Couture & Construction",
      items: ["Haute Couture Tailoring", "Architectural Draping", "Pattern Drafting & Grading", "Corsetry & Boning", "Garment Finishing"]
    },
    {
      category: "Textile Art & Ornamentation",
      items: ["Zardozi & Kantha Embroidery", "Hand-beading & Sequins", "Fabric Manipulation", "Botanical Dyeing", "Handloom & Jacquard Curation"]
    },
    {
      category: "Artistic Direction & Creative",
      items: ["Art Board Conceptualization", "Runway Styling & Direction", "Color Harmonies & Swatches", "Lookbook Curation", "Fashion Illustration & CAD"]
    }
  ],
  designPhilosophy: {
    headline: "The Art Board as a Living Narrative",
    subheadline: "Where textile experimentation meets organic structure",
    pillars: [
      {
        number: "01",
        title: "Artisanal Tactility",
        description: "Honoring ancient South Asian hand-embroidery and weaving traditions, elevated with contemporary micro-pleating and raw textured surfaces."
      },
      {
        number: "02",
        title: "Sculptural Proportion",
        description: "Balancing diaphanous drape with structured corsetry, allowing the garment to respond fluidly to the wearer's anatomy and motion."
      },
      {
        number: "03",
        title: "Conscious Permanence",
        description: "Rejecting fast trends in favor of archival heirloom pieces crafted with enduring textiles, meticulous finishes, and emotional resonance."
      }
    ]
  }
};

export const COLLECTIONS: CollectionMeta[] = [
  {
    title: "Alabaster Plissé",
    slug: "alabaster-plisse",
    subtitle: "Atelier Signature White Couture",
    description: "One-shoulder architectural draping, delicate fan-folded plissé bodice, and serene ivory silhouette celebrating pure sculpted form.",
    coverImage: "/portfolio/MHP00075.jpg",
    accentColor: "#3a2620"
  },
  {
    title: "Nocturne & Opulence",
    slug: "nocturne-opulence",
    subtitle: "Autumn / Winter Velvet Couture",
    description: "Deep velvets, metallic threads, and midnight drapery inspired by romantic gothic undertones and royal evening opulence.",
    coverImage: "/portfolio/MHP00149.jpg",
    accentColor: "#8c5344"
  },
  {
    title: "Heritage Reimagined",
    slug: "heritage-reimagined",
    subtitle: "Artisanal Festive & Bridal",
    description: "Intricate filigree embroidery, heirloom zardozi borders, and majestic crimson silhouettes infused with modern ergonomic cuts.",
    coverImage: "/portfolio/MHP00164.jpg",
    accentColor: "#7c2227"
  },
  {
    title: "Golden Hour Drapery",
    slug: "golden-hour",
    subtitle: "Spring / Summer Editorial",
    description: "Fluid metallic sheer fabrics, flowing sunlit folds, and experimental bias-cut draping that captures light in motion.",
    coverImage: "/portfolio/MHP00276.jpg",
    accentColor: "#594d46"
  }
];

// Exactly 6 curated dresses, each having exactly 5 photos (1 primary + 4 alternate angles/details)
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "dress-01",
    title: "Alabaster Sculpted One-Shoulder Plissé Gown",
    category: "Haute Couture",
    collection: "Alabaster Plissé",
    src: "/portfolio/MHP00075.jpg",
    thumbnail: "/portfolio/MHP00075.jpg",
    gallery: [
      "/portfolio/MHP00075.jpg",
      "/portfolio/MHP00082.jpg",
      "/portfolio/MHP00090.jpg",
      "/portfolio/MHP00093.jpg",
      "/portfolio/MHP00097.jpg"
    ],
    description: "Signature haute couture gown featuring an architectural fan-folded plissé bodice, one-shoulder asymmetrical neckline, and clean flowing column drape crafted in raw textured cotton-silk.",
    materials: ["Handloom Cotton-Silk Blend", "Structured Crinoline Webbing", "Organic Textured Weave"],
    palette: ["#ffffff", "#f4eee3", "#c5bba8"],
    silhouette: "Asymmetrical One-Shoulder Column Gown",
    isFeatured: true
  },
  {
    id: "dress-02",
    title: "Contemporary Minimalist Tailored Evening Silhouette",
    category: "Contemporary Draping",
    collection: "Alabaster Plissé",
    src: "/portfolio/MHP00110.jpg",
    thumbnail: "/portfolio/MHP00110.jpg",
    gallery: [
      "/portfolio/MHP00110.jpg",
      "/portfolio/MHP00111.jpg",
      "/portfolio/MHP00118.jpg",
      "/portfolio/MHP00122.jpg",
      "/portfolio/MHP00125.jpg"
    ],
    description: "A dialogue between sharp ergonomic cuts and fluid organic draping. Engineered with micro-pleats that flex with bodily movement while preserving architectural clarity.",
    materials: ["Heavyweight Matte Crepe", "Mulberry Silk Lining", "Hand-stitched Hems"],
    palette: ["#ece5d8", "#8e867b", "#2c2825"],
    silhouette: "Architectural Shift with Kinetic Drapes",
    isFeatured: true
  },
  {
    id: "dress-03",
    title: "Crimson Royal Heritage Zari Embellished Ensemble",
    category: "Bridal & Heritage",
    collection: "Heritage Reimagined",
    src: "/portfolio/MHP00149.jpg",
    thumbnail: "/portfolio/MHP00149.jpg",
    gallery: [
      "/portfolio/MHP00149.jpg",
      "/portfolio/MHP00156.jpg",
      "/portfolio/MHP00164.jpg",
      "/portfolio/MHP00170.jpg",
      "/portfolio/MHP00184.jpg"
    ],
    description: "Grand bridal couture masterpiece incorporating heirloom South Asian zardozi embroidery, intricate metal bullion border work, and opulent flared drape.",
    materials: ["Silk Velvet", "Tissue Silk", "Authentic Zari Bullion", "Glass Micro-beads"],
    palette: ["#540b0e", "#9e2a2b", "#e09f3e"],
    silhouette: "Regal Flared Heritage Silhouette",
    isFeatured: true
  },
  {
    id: "dress-04",
    title: "Nocturne Emerald Velvet Tailored Couture Coat",
    category: "Avant-Garde & Textures",
    collection: "Nocturne & Opulence",
    src: "/portfolio/MHP00191.jpg",
    thumbnail: "/portfolio/MHP00191.jpg",
    gallery: [
      "/portfolio/MHP00191.jpg",
      "/portfolio/MHP00211.jpg",
      "/portfolio/MHP00237.jpg",
      "/portfolio/MHP00241.jpg",
      "/portfolio/MHP00262.jpg"
    ],
    description: "Floor-length sculptural coat crafted with weighted velvet pile, hand-knotted passementerie frog closures, and exaggerated wide-cut architectural collar.",
    materials: ["Cotton-Silk Velvet", "Braided Gimp Cord", "Handloom Habotai Silk"],
    palette: ["#1e2d24", "#3d405a", "#d4af37"],
    silhouette: "Dramatic Floor-sweeping Military Trench",
    isFeatured: true
  },
  {
    id: "dress-05",
    title: "Gilded Saffron Draped Evening Cocktail Silhouette",
    category: "Haute Couture",
    collection: "Golden Hour Drapery",
    src: "/portfolio/MHP00276.jpg",
    thumbnail: "/portfolio/MHP00276.jpg",
    gallery: [
      "/portfolio/MHP00276.jpg",
      "/portfolio/MHP00277.jpg",
      "/portfolio/MHP00286.jpg",
      "/portfolio/MHP00292.jpg",
      "/portfolio/MHP00302.jpg"
    ],
    description: "Ethereal metallic sunset-toned drape engineered with delicate gathers over a boned internal corset, producing continuous liquid shimmer under ambient lighting.",
    materials: ["Metallic Lurex Georgette", "Silk Organza", "Internal Steel Boning"],
    palette: ["#c59b27", "#f3dfa2", "#7c4a03"],
    silhouette: "Cinched Asymmetrical Cowl Draped Gown",
    isFeatured: true
  },
  {
    id: "dress-06",
    title: "Baroque Filigree Embroidered Atelier Corset Ensemble",
    category: "Sketches & Craft",
    collection: "Heritage Reimagined",
    src: "/portfolio/MHP00305.jpg",
    thumbnail: "/portfolio/MHP00305.jpg",
    gallery: [
      "/portfolio/MHP00305.jpg",
      "/portfolio/MHP00316.jpg",
      "/portfolio/MHP00319.jpg",
      "/portfolio/MHP00323.jpg",
      "/portfolio/MHP00331.jpg"
    ],
    description: "Intricately drafted Victorian corset bodice elevated with ancestral South Asian cord embroidery, hand-beaded lace appliques, and sculpted hip contouring.",
    materials: ["Raw Silk Brocade", "Vintage Glass Crystal Clusters", "Fine Gold Cord"],
    palette: ["#2b2d42", "#8d99ae", "#d4af37"],
    silhouette: "Hourglass Corsetry with Fluted Peplum",
    isFeatured: false
  }
];

export const TESTIMONIALS = [
  {
    quote: "Rezowana's ability to translate complex emotions into architectural drapes is extraordinary. Wearing her pieces feels like stepping into a living painting.",
    author: "Nabila Rahman",
    role: "Editorial Stylist, Canvas Magazine",
    location: "Dhaka"
  },
  {
    quote: "Her bridal couture seamlessly blends timeless South Asian craftsmanship with a modern, effortless silhouette. Meticulous in every stitch.",
    author: "Samira Chowdhury",
    role: "Bride & Art Curator",
    location: "London / Dhaka"
  },
  {
    quote: "Lisa understands fabric weight, gravity, and anatomy like an architect understands stone. A visionary emerging talent in contemporary haute couture.",
    author: "Farhan Kabir",
    role: "Creative Director, Studio Atelier",
    location: "Dhaka"
  }
];
