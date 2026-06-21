import { 
  Users, Award, GraduationCap, HeartHandshake, Globe, Map as MapIcon, 
  Scale, FileCheck, MapPin, DollarSign, Briefcase 
} from "lucide-react";

export const heroDestinations = [
  { name: "Australia", image: "/images/destinations/australia.jpg" },
  { name: "UK", image: "/images/destinations/uk.jpg" },
  { name: "Canada", image: "/images/destinations/canada.jpg" },
  { name: "USA", image: "/images/destinations/usa.jpg" },
  { name: "Japan", image: "/images/destinations/japan.jpg" },
  { name: "South Korea", image: "/images/destinations/south_korea.jpg" },
  { name: "Europe", image: "/images/destinations/europe.jpg" },
];

export const trustStats = [
  { icon: Users, value: "10,000+", label: "Students Placed" },
  { icon: Award, value: "15+ Years", label: "Education Experts" },
  { icon: GraduationCap, value: "98%", label: "Admission Success" },
];

export const welcomeHighlights = [
  {
    icon: HeartHandshake,
    title: "Australia & Nepal Family Owned",
    description: "Built on family values, ensuring personal care and trust at every step of your journey.",
  },
  {
    icon: GraduationCap,
    title: "Direct Partnerships",
    description: "Strong ties with leading colleges and universities for seamless admission processes.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "A vast network of educational institutions across Australia, NZ, UK, Canada, and beyond.",
  },
  {
    icon: MapIcon,
    title: "Personalized Support",
    description: "One-on-one student guidance tailored to your unique goals and circumstances.",
  },
  {
    icon: Scale,
    title: "Migration Expertise",
    description: "Experienced migration agents who simplify complex visa and citizenship pathways.",
  },
  {
    icon: FileCheck,
    title: "End-to-End Assistance",
    description: "From initial counselling to final visa lodgement — we handle it all for you.",
  },
];

export const featuredDestinations = [
  {
    name: "Sydney",
    country: "Australia",
    universities: "UNSW, University of Sydney, UTS",
    costOfLiving: "AUD $2,200 – $2,800/mo",
    opportunities: "Finance, tech & healthcare hub.",
    image: "/images/destinations/sydney.jpg",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Auckland",
    country: "New Zealand",
    universities: "University of Auckland, AUT, Victoria",
    costOfLiving: "NZD $1,800 – $2,400/mo",
    opportunities: "Agriculture, IT & tourism.",
    image: "/images/destinations/auckland.jpg",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    name: "London",
    country: "United Kingdom",
    universities: "UCL, Imperial, King's College",
    costOfLiving: "GBP £1,800 – £2,500/mo",
    opportunities: "Finance, law & creative arts.",
    image: "/images/destinations/london.jpg",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Toronto",
    country: "Canada",
    universities: "University of Toronto, Ryerson, York",
    costOfLiving: "CAD $2,000 – $2,800/mo",
    opportunities: "Tech, finance & healthcare.",
    image: "/images/destinations/toronto.jpg",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Tokyo",
    country: "Japan",
    universities: "Waseda, Keio, University of Tokyo",
    costOfLiving: "JPY ¥120,000 – ¥180,000/mo",
    opportunities: "Engineering, robotics & culture.",
    image: "/images/destinations/tokyo.jpg",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Paris",
    country: "Europe",
    universities: "Sorbonne, Sciences Po, HEC Paris",
    costOfLiving: "EUR €1,500 – €2,200/mo",
    opportunities: "Fashion, business & research.",
    image: "/images/destinations/paris.jpg",
    gridClass: "md:col-span-1 md:row-span-1",
  },
];

export const testimonials = [
  {
    name: "Rajan Sharma",
    course: "MBA — University of Melbourne, AU",
    feedback:
      "Everest Education made my student visa process simple and stress-free. Their team guided me through every step — from university selection to visa lodgement. I couldn't have done it without their support.",
    rating: 5,
    flag: "🇦🇺",
    outcome: "Visa Granted in 14 Days",
    image: "/images/clients/client1.jpg"
  },
  {
    name: "Kajal Shahi",
    course: "MSc Data Science — University of Toronto, CA",
    feedback:
      "The entire process was smooth and professional. The counselling team was always available and made every step clear. I highly recommend Everest Education to anyone planning to study abroad.",
    rating: 5,
    flag: "🇨🇦",
    outcome: "Admitted with 20% Scholarship",
    image: "/images/clients/client2.jpg"
  },
  {
    name: "Nisha Baniya",
    course: "Master of IT — Deakin University, AU",
    feedback:
      "I'm glad I chose Everest Education for my studies. They fully assisted and guided me through the entire process. The support, the administration, and the welcoming office environment are all truly impressive.",
    rating: 5,
    flag: "🇦🇺",
    outcome: "Visa Granted (Subclass 500)",
  },
  {
    name: "Sanjeet Parajuli",
    course: "BSc Business — King's College London, UK",
    feedback:
      "I feel fortunate to be related with Everest Education and satisfied with their entire service. I am extremely grateful for their support in making my processing much more efficient than I expected.",
    rating: 5,
    flag: "🇬🇧",
    outcome: "Admitted & Visa Granted",
  },
];

export const activeBranches = [
  { id: 1, name: "Kathmandu Office", country: "Nepal", query: "Kathmandu, Nepal" },
  { id: 2, name: "Butwal Office", country: "Nepal", query: "Butwal, Nepal" },
  { id: 3, name: "Canberra Office", country: "Australia", query: "Canberra, Australia" },
  { id: 4, name: "Perth Office", country: "Australia", query: "Perth, Australia" },
];

export const futureBranches = [
  { id: 5, name: "USA Office", region: "North America" },
  { id: 6, name: "Japan Office", region: "Asia" },
];

export const associatedUniversities = [
  { name: "University of Sydney", location: "🇦🇺 Sydney, AU", ranking: "Top 20" },
  { name: "University of Toronto", location: "🇨🇦 Toronto, CA", ranking: "Top 25" },
  { name: "University College London", location: "🇬🇧 London, UK", ranking: "Top 10" },
  { name: "University of Auckland", location: "🇳🇿 Auckland, NZ", ranking: "Top 70" },
  { name: "University of Melbourne", location: "🇦🇺 Melbourne, AU", ranking: "Top 15" },
  { name: "King's College London", location: "🇬🇧 London, UK", ranking: "Top 40" },
];

export const latestArticles = [
  {
    id: 1,
    title: "Student Visa Changes 2026",
    date: "Jun 2026",
    description:
      "Important updates to student visa requirements, processing times and eligibility criteria across major study destinations.",
    href: "/blog/student-visa-changes-2026",
    tag: "Visa Update",
    accent: "from-blue-500 to-indigo-600",
    accentLight: "bg-blue-50 text-blue-700",
    featured: true,
  },
  {
    id: 2,
    title: "Scholarships for International Students",
    date: "May 2026",
    description:
      "Discover the latest fully-funded scholarships available at top-ranked global universities for 2026 intake.",
    href: "/blog/scholarships-international-students",
    tag: "Scholarships",
    accent: "from-amber-400 to-orange-500",
    accentLight: "bg-amber-50 text-amber-700",
    featured: false,
  },
  {
    id: 3,
    title: "Working Rights Abroad",
    date: "Apr 2026",
    description:
      "A comprehensive guide to working hours, conditions and legal rights for international students studying worldwide.",
    href: "/blog/working-rights-abroad",
    tag: "Work Rights",
    accent: "from-emerald-400 to-teal-600",
    accentLight: "bg-emerald-50 text-emerald-700",
    featured: false,
  },
];

export const teamMembers = [
  {
    name: "Laura Awasthi",
    phone: "+977 9801234567",
    role: "Senior Consultant",
    description:
      "Laura has 10+ years of experience in education consultancy and student migration services.",
    image: "/images/employees/sika.jpg",
  },
  {
    name: "Jane Smith",
    phone: "+977 9807654321",
    role: "Visa Expert",
    description:
      "Jane specializes in student visas and has helped thousands of students achieve their dreams of studying abroad.",
    image: "/images/employees/chika.jpg",
  },
  {
    name: "Emmy Johnson",
    phone: "+977 9812345678",
    role: "Migration Agent",
    description:
      "Emmy is an expert in migration laws and ensures smooth processes for students and families. She is also expert in IELTS training.",
    image: "/images/employees/gwife.jpg",
  },
  {
    name: "Sophia Williams",
    phone: "+977 9823456789",
    role: "Career Advisor",
    description:
      "Sophia guides students to make the best choices for their career goals and education abroad.",
    image: "/images/employees/golendra.jpg",
  },
];
