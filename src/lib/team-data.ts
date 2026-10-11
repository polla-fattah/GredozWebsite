export interface TeamMemberData {
  slug: string
  aliases: string[]
  image: string
  github?: string
  linkedin?: string
  featured?: boolean
  technologies: string[]
  specialties: string[]
}

export const TEAM_MEMBERS_DATA: TeamMemberData[] = [
  {
    slug: "hassan_rohz",
    aliases: ["hassan-rohz", "hassan_rohz", "hassan"],
    image: "/images/team/hezhin.png",
    featured: true,
    specialties: [
      "Executive Leadership & Governance",
      "Strategic Product Vision",
      "Venture Architecture & Scaling",
      "Client Partnership Strategy",
      "Cross-Disciplinary Team Culture"
    ],
    technologies: [
      "Business Architecture",
      "Agile Strategy",
      "Enterprise Operations",
      "Product Management",
      "Digital Transformation"
    ]
  },
  {
    slug: "polla_fattah",
    aliases: ["polla-fattah", "polla_fattah", "polla"],
    image: "/images/team/polla-fattah.png",
    github: "https://github.com/polla-fattah",
    specialties: [
      "Data Mining & Pattern Discovery",
      "Statistical Modeling & Analytics",
      "Machine Learning Systems",
      "Database Architecture & Indexing",
      "Technical Feasibility Consulting"
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "SQL & NoSQL",
      "Data Mining",
      "Statistical Analysis",
      "Distributed Systems"
    ]
  },
  {
    slug: "harem_kerkuky",
    aliases: ["harem-kerkuky", "harem_kerkuky", "harem"],
    image: "/images/team/harem.png",
    specialties: [
      "Agile & Scrum Orchestration",
      "Scope & Risk Governance",
      "Cross-Functional Team Leadership",
      "Milestone Tracking & Sprint Audits",
      "Client Communication & Reporting"
    ],
    technologies: [
      "Jira",
      "Agile / Scrum",
      "Risk Modeling",
      "Kanban",
      "CI/CD Release Governance",
      "QA Frameworks"
    ]
  },
  {
    slug: "majeed_omar",
    aliases: ["majeed-omar", "majeed_omar", "majeed"],
    image: "/images/team/full.png",
    specialties: [
      "Full-Stack Web Architecture",
      "Cross-Platform Mobile Development",
      "API Gateway & Microservices Design",
      "Database Schema Optimization",
      "Modern Component-Driven UI"
    ],
    technologies: [
      "Laravel",
      "Vue.js",
      "Flutter",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "REST APIs"
    ]
  },
  {
    slug: "mustafa_abdo",
    aliases: ["mustafa-abdo", "mustafa_abdo", "mustafa"],
    image: "/images/team/mito.png",
    specialties: [
      "Deep Learning & Neural Architectures",
      "Natural Language Processing (NLP)",
      "Predictive Modeling & Inference",
      "Vector Search & Retrieval Systems",
      "Automated Data Pipelines"
    ],
    technologies: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "FastAPI",
      "Vector Databases",
      "Docker",
      "Scikit-Learn"
    ]
  },
  {
    slug: "yahya_meewan",
    aliases: ["yahya-meewan", "yahya_meewan", "yahya"],
    image: "/images/team/yahya.png",
    specialties: [
      "Design System Implementation",
      "Reactive Frontend Architecture",
      "Animation & Micro-Interactions",
      "Core Web Vitals & Speed Optimization",
      "Cross-Browser Accessibility"
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5 / CSS3",
      "Web Vitals"
    ]
  },
  {
    slug: "elaf_baban",
    aliases: ["elaf-baban", "elaf_baban", "elaf"],
    image: "/images/team/elaf.png",
    specialties: [
      "High-Concurrency Backend Architecture",
      "Enterprise Database Normalization",
      "Role-Based Access Control & Security",
      "Public Sector System Compliance",
      "Queue & Job Processing Pipelines"
    ],
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS"
    ]
  }
]

export function findTeamMember(slug: string): TeamMemberData | undefined {
  const normalized = slug.toLowerCase()
  return TEAM_MEMBERS_DATA.find(
    (m) => m.slug === normalized || m.aliases.includes(normalized)
  )
}
