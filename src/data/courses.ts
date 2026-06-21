import { 
  Stethoscope, Monitor, HardHat, Briefcase, ChefHat, Wrench 
} from "lucide-react";

export interface Program {
  title: string;
  description: string;
  avgFee: string;
  duration: string;
  intakes: string;
  requirements: string;
  outcomes: string;
  stats: { label: string; value: string };
}

export interface CourseData {
  id: string;
  title: string;
  icon: any; // Lucide Icon component
  image: string;
  description: string;
  programs: Program[];
  universities: { name: string; logo: string; location: string }[];
  color: string;
  bgLight: string;
  borderLight: string;
}

export const detailedCourses: CourseData[] = [
  {
    id: "health",
    title: "Health & Science",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    description: "Australia's healthcare system is world-renowned. Studying health and medical sciences opens doors to highly respected, globally recognized qualifications with excellent employment prospects and clear migration pathways.",
    programs: [
      {
        title: "Bachelor of Nursing (Registered Nurse)",
        description: "A comprehensive program preparing you for registration as a nurse. Focuses on clinical practice, patient care, and modern healthcare technologies. Highly sought after for skilled migration.",
        avgFee: "$35,000 - $40,000 / year",
        duration: "3 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 7.0 (No band less than 7.0). Year 12 completion.",
        outcomes: "Registered Nurse in Hospitals, Aged Care, or Clinics.",
        stats: { label: "PR Demand", value: "Critical Shortage" }
      },
      {
        title: "Master of Public Health",
        description: "Equips graduates with the skills to address major global health challenges. You'll learn epidemiology, health policy, and biostatistics, preparing you for leadership roles in health organizations.",
        avgFee: "$38,000 - $45,000 / year",
        duration: "1.5 - 2 Years Full-Time",
        intakes: "February, July, November",
        requirements: "IELTS 6.5. Bachelor's degree in a related health field.",
        outcomes: "Public Health Officer, Health Promotion Manager.",
        stats: { label: "Graduate Salary", value: "$90k - $120k" }
      },
      {
        title: "Bachelor of Medical Science",
        description: "A foundational degree for careers in medical research, pathology, or as a pathway to graduate medicine. Focuses heavily on human anatomy, physiology, and molecular biology.",
        avgFee: "$32,000 - $38,000 / year",
        duration: "3 Years Full-Time",
        intakes: "February",
        requirements: "IELTS 6.5. Year 12 with strong Science/Math scores.",
        outcomes: "Medical Researcher, Laboratory Technician.",
        stats: { label: "Further Study", value: "Pathway to MD" }
      },
      {
        title: "Diploma of Healthcare",
        description: "An excellent entry-level qualification or pathway into a Bachelor's degree. Provides foundational knowledge in health sciences and basic clinical care.",
        avgFee: "$22,000 - $28,000 / year",
        duration: "1 Year Full-Time",
        intakes: "February, June, October",
        requirements: "IELTS 6.0. Year 11/12 completion.",
        outcomes: "Healthcare Assistant, Pathway to Bachelor of Nursing.",
        stats: { label: "Pathway Success", value: "95% Progression" }
      }
    ],
    universities: [
      { name: "University of Sydney", logo: "", location: "🇦🇺 Sydney, Australia" },
      { name: "Deakin University", logo: "", location: "🇦🇺 Melbourne, Australia" },
      { name: "King's College London", logo: "", location: "🇬🇧 London, UK" }
    ],
    color: "from-rose-400 to-red-600",
    bgLight: "bg-rose-50",
    borderLight: "border-rose-100",
  },
  {
    id: "it",
    title: "Information Technology (IT)",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    description: "The tech industry is booming globally. From cybersecurity to artificial intelligence, studying IT equips you with future-proof skills that are in critical shortage, making it a highly sought-after field for skilled migration.",
    programs: [
      {
        title: "Master of Data Science",
        description: "Dive deep into big data, machine learning, and statistical analysis. This advanced degree prepares you to extract actionable insights from complex datasets, a highly demanded skill across all sectors.",
        avgFee: "$36,000 - $48,000 / year",
        duration: "2 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 6.5. Bachelor's degree (Programming/Math background preferred).",
        outcomes: "Data Scientist, Machine Learning Engineer.",
        stats: { label: "Avg Starting Salary", value: "$100k - $140k" }
      },
      {
        title: "Bachelor of Cyber Security",
        description: "Learn to defend networks, systems, and data from digital attacks. With cyber threats escalating globally, graduates of this program face zero-unemployment rates and lucrative starting salaries.",
        avgFee: "$34,000 - $42,000 / year",
        duration: "3 Years Full-Time",
        intakes: "February, July, November",
        requirements: "IELTS 6.0 - 6.5. Year 12 completion.",
        outcomes: "Cyber Security Analyst, Security Consultant.",
        stats: { label: "Job Placement", value: "Zero Unemployment" }
      },
      {
        title: "Bachelor of Software Engineering",
        description: "Focuses on the systematic design, development, and maintenance of software systems. Learn modern programming languages, algorithms, and agile methodologies.",
        avgFee: "$35,000 - $45,000 / year",
        duration: "4 Years Full-Time (with Honours)",
        intakes: "February, July",
        requirements: "IELTS 6.5. Strong Mathematics in Year 12.",
        outcomes: "Software Engineer, Full Stack Developer.",
        stats: { label: "Global Demand", value: "Extremely High" }
      },
      {
        title: "Master of Information Technology",
        description: "A flexible postgraduate degree ideal for those looking to pivot into tech or upgrade their skills. Specializations often include AI, cloud computing, and enterprise systems.",
        avgFee: "$32,000 - $40,000 / year",
        duration: "1.5 - 2 Years Full-Time",
        intakes: "February, July, November",
        requirements: "IELTS 6.5. Any Bachelor's degree (for 2-year stream).",
        outcomes: "IT Consultant, Systems Analyst.",
        stats: { label: "Career Pivot", value: "No IT Background Needed" }
      }
    ],
    universities: [
      { name: "University of Melbourne", logo: "", location: "🇦🇺 Melbourne, Australia" },
      { name: "University of Toronto", logo: "", location: "🇨🇦 Toronto, Canada" },
      { name: "Deakin University", logo: "", location: "🇦🇺 Melbourne, Australia" }
    ],
    color: "from-blue-400 to-indigo-600",
    bgLight: "bg-blue-50",
    borderLight: "border-blue-100",
  },
  {
    id: "engineering",
    title: "Engineering",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    description: "Engineering degrees in our partner countries are globally accredited. Massive infrastructure and mining projects constantly demand qualified engineers across all major disciplines.",
    programs: [
      {
        title: "Bachelor of Civil Engineering",
        description: "Design, build, and maintain the infrastructure of the modern world. Covers structural analysis, fluid mechanics, and sustainable construction practices.",
        avgFee: "$38,000 - $48,000 / year",
        duration: "4 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 6.5. Year 12 Physics and advanced Mathematics.",
        outcomes: "Civil Engineer, Structural Engineer.",
        stats: { label: "Accreditation", value: "Washington Accord" }
      },
      {
        title: "Master of Engineering (Mechanical)",
        description: "Advanced study in thermodynamics, robotics, and manufacturing. Prepares graduates to innovate in automotive, aerospace, and energy sectors.",
        avgFee: "$40,000 - $50,000 / year",
        duration: "2 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 6.5. Bachelor of Mechanical Engineering.",
        outcomes: "Mechanical Engineer, Production Manager.",
        stats: { label: "Industry Growth", value: "Strong Demand" }
      },
      {
        title: "Bachelor of Electrical Engineering",
        description: "Focuses on electronics, power systems, and telecommunications. Essential for the ongoing transition to renewable energy and smart technologies.",
        avgFee: "$36,000 - $45,000 / year",
        duration: "4 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 6.5. Year 12 Physics and Mathematics.",
        outcomes: "Electrical Engineer, Network Engineer.",
        stats: { label: "Renewable Sector", value: "Massive Growth" }
      },
      {
        title: "Master of Professional Engineering",
        description: "Designed for graduates to achieve professional accreditation. Includes a mandatory industry placement to ensure you graduate job-ready.",
        avgFee: "$42,000 - $52,000 / year",
        duration: "2 - 3 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 6.5. Relevant Engineering or Science Bachelor's.",
        outcomes: "Accredited Professional Engineer.",
        stats: { label: "Industry Placement", value: "Mandatory 12 Weeks" }
      }
    ],
    universities: [
      { name: "University of Auckland", logo: "", location: "🇳🇿 Auckland, New Zealand" },
      { name: "University of Melbourne", logo: "", location: "🇦🇺 Melbourne, Australia" },
      { name: "University of Sydney", logo: "", location: "🇦🇺 Sydney, Australia" }
    ],
    color: "from-amber-400 to-orange-600",
    bgLight: "bg-amber-50",
    borderLight: "border-amber-100",
  },
  {
    id: "business",
    title: "Business & Management",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    description: "Equip yourself with versatile skills that apply to any industry. Business programs focus heavily on practical experience, networking, and modern management techniques for the global market.",
    programs: [
      {
        title: "Master of Business Administration (MBA)",
        description: "The premier business qualification for aspiring executives. Focuses on strategic leadership, corporate finance, and global business environments.",
        avgFee: "$45,000 - $80,000 / year",
        duration: "1.5 - 2 Years Full-Time",
        intakes: "Quarterly or Trimester Intakes",
        requirements: "IELTS 6.5 - 7.0. Bachelor's degree + 2-3 years work experience.",
        outcomes: "C-Suite Executive, Management Consultant.",
        stats: { label: "Salary Bump", value: "+40% Post-Graduation" }
      },
      {
        title: "Bachelor of Commerce (Accounting)",
        description: "Learn the language of business. Covers financial reporting, taxation, and auditing, providing a direct pathway to CPA or CA qualification.",
        avgFee: "$30,000 - $40,000 / year",
        duration: "3 Years Full-Time",
        intakes: "February, July, November",
        requirements: "IELTS 6.0. Year 12 completion.",
        outcomes: "Certified Accountant, Financial Auditor.",
        stats: { label: "Career Stability", value: "Very High" }
      },
      {
        title: "Master of Professional Accounting",
        description: "Ideal for non-accounting graduates looking to enter the profession. Fulfills the academic requirements for professional accounting bodies.",
        avgFee: "$35,000 - $45,000 / year",
        duration: "1.5 - 2 Years Full-Time",
        intakes: "February, July, November",
        requirements: "IELTS 6.5. Any Bachelor's degree.",
        outcomes: "Public Accountant, Tax Specialist.",
        stats: { label: "Accreditation", value: "CPA/CA Pathway" }
      },
      {
        title: "Bachelor of Marketing",
        description: "Focuses on consumer behavior, digital marketing, and brand strategy. Highly relevant in today's digital-first economy.",
        avgFee: "$28,000 - $38,000 / year",
        duration: "3 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 6.0. Year 12 completion.",
        outcomes: "Marketing Manager, Digital Strategist.",
        stats: { label: "Industry Demand", value: "Rapid Growth" }
      }
    ],
    universities: [
      { name: "King's College London", logo: "", location: "🇬🇧 London, UK" },
      { name: "University of Toronto", logo: "", location: "🇨🇦 Toronto, Canada" },
      { name: "University of Auckland", logo: "", location: "🇳🇿 Auckland, New Zealand" }
    ],
    color: "from-emerald-400 to-green-600",
    bgLight: "bg-emerald-50",
    borderLight: "border-emerald-100",
  },
  {
    id: "cookery",
    title: "Cookery & Hospitality",
    icon: ChefHat,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
    description: "The vibrant tourism and hospitality sector is constantly looking for skilled chefs and managers. These courses offer hands-on training and excellent employment opportunities immediately upon graduation.",
    programs: [
      {
        title: "Certificate IV in Commercial Cookery",
        description: "A hands-on program teaching foundational culinary skills, kitchen management, and food safety. Includes mandatory industry placements in top-tier restaurants.",
        avgFee: "$12,000 - $18,000 / year",
        duration: "1.5 - 2 Years Full-Time",
        intakes: "Monthly or Quarterly",
        requirements: "IELTS 5.5. Year 11 completion.",
        outcomes: "Qualified Chef, Sous Chef.",
        stats: { label: "PR Pathway", value: "Trade Occupation List" }
      },
      {
        title: "Diploma of Hospitality Management",
        description: "Focuses on the operational and managerial aspects of the hospitality industry. Covers customer service, budgeting, and staff leadership.",
        avgFee: "$14,000 - $20,000 / year",
        duration: "1 - 1.5 Years Full-Time",
        intakes: "Quarterly",
        requirements: "IELTS 5.5. Certificate IV completion preferred.",
        outcomes: "Restaurant Manager, Hotel Front Desk Manager.",
        stats: { label: "Industry Placement", value: "Hands-on Training" }
      },
      {
        title: "Bachelor of Tourism and Event Management",
        description: "Prepares you for a career managing large-scale events, festivals, and tourism operations. Emphasizes sustainability and global tourism trends.",
        avgFee: "$22,000 - $28,000 / year",
        duration: "3 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 6.0. Year 12 completion.",
        outcomes: "Event Coordinator, Tourism Manager.",
        stats: { label: "Global Opportunities", value: "High Mobility" }
      },
      {
        title: "Advanced Diploma of Hospitality",
        description: "Provides high-level management skills for those aiming to run their own restaurant, cafe, or hotel.",
        avgFee: "$15,000 - $22,000 / year",
        duration: "2 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 5.5 - 6.0. Relevant Diploma.",
        outcomes: "Operations Manager, Venue Manager.",
        stats: { label: "Entrepreneurship", value: "Business Focus" }
      }
    ],
    universities: [
      { name: "Le Cordon Bleu", logo: "", location: "🇦🇺 Sydney, Australia" },
      { name: "William Angliss Institute", logo: "", location: "🇦🇺 Melbourne, Australia" },
      { name: "TAFE NSW", logo: "", location: "🇦🇺 Sydney, Australia" }
    ],
    color: "from-purple-400 to-fuchsia-600",
    bgLight: "bg-purple-50",
    borderLight: "border-purple-100",
  },
  {
    id: "trade",
    title: "Trade Courses",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    description: "Trade professions are highly respected and well-paid. Due to massive skill shortages globally, studying a trade offers one of the most direct and reliable pathways to permanent residency.",
    programs: [
      {
        title: "Certificate III in Carpentry",
        description: "Learn the practical skills of building and construction. Highly physical and rewarding, this trade is currently in critical shortage.",
        avgFee: "$14,000 - $18,000 / year",
        duration: "2 Years Full-Time",
        intakes: "Monthly or Quarterly",
        requirements: "IELTS 5.5. Year 11 equivalent.",
        outcomes: "Qualified Carpenter, Builder.",
        stats: { label: "Skill Shortage", value: "Critical Priority" }
      },
      {
        title: "Certificate III in Light Vehicle Mechanical Technology",
        description: "Master automotive repair and diagnostics. Covers modern computer-controlled vehicle systems as well as traditional mechanics.",
        avgFee: "$12,000 - $16,000 / year",
        duration: "2 Years Full-Time",
        intakes: "Quarterly",
        requirements: "IELTS 5.5. Year 11 equivalent.",
        outcomes: "Automotive Mechanic.",
        stats: { label: "Employment Rate", value: "Near 100%" }
      },
      {
        title: "Certificate III in Electrotechnology Electrician",
        description: "A highly technical trade focusing on wiring, circuits, and safety. Essential for modern infrastructure and renewable energy installations.",
        avgFee: "$15,000 - $20,000 / year",
        duration: "2 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 5.5. Strong basic Mathematics.",
        outcomes: "Licensed Electrician.",
        stats: { label: "Income Potential", value: "Highest in Trades" }
      },
      {
        title: "Certificate III in Plumbing",
        description: "Learn vital sanitation, drainage, and gas-fitting skills. Plumbers are consistently among the highest-paid trades professionals.",
        avgFee: "$14,000 - $19,000 / year",
        duration: "2 Years Full-Time",
        intakes: "Quarterly",
        requirements: "IELTS 5.5. Year 11 equivalent.",
        outcomes: "Licensed Plumber, Gas Fitter.",
        stats: { label: "Business Opportunity", value: "High Self-Employment" }
      }
    ],
    universities: [
      { name: "TAFE Institutes", logo: "", location: "🇦🇺 Various, Australia" },
      { name: "Victoria University", logo: "", location: "🇦🇺 Melbourne, Australia" },
      { name: "SkillsTech", logo: "", location: "🇦🇺 Brisbane, Australia" }
    ],
    color: "from-slate-500 to-slate-700",
    bgLight: "bg-slate-50",
    borderLight: "border-slate-200",
  },
];
