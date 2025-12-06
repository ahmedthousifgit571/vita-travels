export const DESTINATIONS = [
  {
    id: 1,
    title: "Mystic Mountain Retreat in Romania",
    location: "Gura Humorului, Romania",
    price: 1000,
    duration: "7 days",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800",
    rating: 5,
    reviews: 190,
    category: "Mountain"
  },
  {
    id: 2,
    title: "Yoga & Outdoor Retreat in Tuscany",
    location: "Tuscany, Italy",
    price: 1328,
    duration: "6 days",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    rating: 5,
    reviews: 125,
    category: "Yoga"
  },
  {
    id: 3,
    title: "Photography Tour in Magical Morocco",
    location: "Marrakesh, Morocco",
    price: 5575,
    duration: "15 days",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800",
    rating: 5,
    reviews: 312,
    category: "Tour"
  },
  {
    id: 4,
    title: "Desert Moon Holiday",
    location: "Merzouga, Morocco",
    price: 3829,
    duration: "8 days",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=800",
    rating: 5,
    reviews: 412,
    category: "Adventure"
  },
  {
    id: 5,
    title: "Bali Spiritual Awakening",
    location: "Ubud, Bali",
    price: 2450,
    duration: "10 days",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviews: 85,
    category: "Spiritual"
  },
  {
    id: 6,
    title: "Northern Lights Expedition",
    location: "Tromsø, Norway",
    price: 4200,
    duration: "5 days",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=800",
    rating: 5,
    reviews: 204,
    category: "Adventure"
  }
];

export const CATEGORIES = [
  {
    title: "Introvert Retreats",
    count: "78+",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Yoga Retreats",
    count: "89+", 
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Detox Programs",
    count: "56+",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Meditation",
    count: "100+",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Solo Traveler",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    quote: "The most transformative week of my life. I found peace I didn't know I was looking for."
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Photographer",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    quote: "Every detail was curated perfectly. The locations were distinct and the guides were incredibly knowledgeable."
  },
  {
    id: 3,
    name: "Emma Watson",
    role: "Yoga Instructor",
    image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    quote: "A seamless booking experience that led to a life-changing retreat. Highly recommended."
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Adventure Seeker",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024a",
    quote: "From the mountain peaks to the desert sands, every moment was pure magic. This is travel reimagined."
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Wellness Coach",
    image: "https://i.pravatar.cc/150?u=a04258114e29026302b",
    quote: "The perfect blend of adventure and relaxation. The team's attention to wellness needs is exceptional."
  },
  {
    id: 6,
    name: "James Morrison",
    role: "Digital Nomad",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704c",
    quote: "Best investment in myself I've made this year. The connections I made and the experiences will stay with me forever."
  }
];

export const PLANS = [
  {
    name: "EXPLORER",
    price: "0",
    yearlyPrice: "0",
    period: "per month",
    features: [
      "Access to all retreat listings",
      "Community forum access",
      "Newsletter updates",
      "Basic travel guides",
      "Email support"
    ],
    description: "Perfect for discovering your next adventure",
    buttonText: "Get Started Free",
    href: "#",
    isPopular: false
  },
  {
    name: "NOMAD",
    price: "29",
    yearlyPrice: "23",
    period: "per month",
    features: [
      "Priority booking access",
      "Exclusive discounts (5-10%)",
      "Dedicated travel concierge",
      "Offline maps & guides",
      "24/7 customer support",
      "Early bird notifications",
      "Community events access"
    ],
    description: "Ideal for frequent travelers and retreat enthusiasts",
    buttonText: "Start Your Journey",
    href: "#",
    isPopular: true
  },
  {
    name: "GLOBETROTTER",
    price: "59",
    yearlyPrice: "47",
    period: "per month",
    features: [
      "All Nomad features included",
      "Exclusive discounts (15-20%)",
      "Private airport transfers",
      "Comprehensive travel insurance",
      "Personal trip planning",
      "VIP retreat access",
      "Concierge service 24/7",
      "Premium partner benefits"
    ],
    description: "For adventurers who want the ultimate travel experience",
    buttonText: "Go Premium",
    href: "#",
    isPopular: false
  }
];
