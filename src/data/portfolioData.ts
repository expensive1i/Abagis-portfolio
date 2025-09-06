export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  impact: string;
  tags: string[];
  link: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Follow the Money Campaign",
    category: "Social Impact",
    description: "Spearheaded the renowned 'Follow the Money' campaign at Connected Development (CODE), securing funding for social impact programs across nine African countries, benefiting approximately four million rural lives. Work was backed by leading global foundations such as OSIWA, Conrad N. Hilton Foundation, MacArthur Foundation, Ford Foundation, USAID, and others.",
    image: "/images/LucysGallery(8).jpg",
    year: "2018-2023",
    impact: "4M+ Lives Impacted",
    tags: ["Transparency", "Accountability", "Rural Development", "Funding"],
    link: "#"
  },
  {
    id: 2,
    title: "Public and Private Development Centre (PPDC)",
    category: "Leadership",
    description: "Currently serving as CEO of PPDC, leading strategic initiatives in governance, transparency, and social impact across Africa. Under her leadership, PPDC has become a leading voice in promoting good governance and citizen engagement.",
    image: "/images/LucysGallery(17).jpg",
    year: "2023-Present",
    impact: "Strategic Leadership",
    tags: ["Governance", "Leadership", "Strategic Planning", "Impact"],
    link: "#"
  },
  {
    id: 3,
    title: "Connected Development (CODE) Leadership",
    category: "Innovation",
    description: "Led CODE as Executive Director, transforming it into one of Africa's most influential transparency and accountability organizations. Pioneered innovative approaches to citizen engagement and government accountability.",
    image: "/images/LucysGallery(30).jpg",
    year: "2018-2023",
    impact: "Organizational Growth",
    tags: ["Innovation", "Transparency", "Citizen Engagement", "Growth"],
    link: "#"
  },
  {
    id: 4,
    title: "Open Data Initiatives",
    category: "Innovation",
    description: "Championed open data policies and implementation across multiple African countries, making government information more accessible to citizens and enabling data-driven decision making for social development.",
    image: "/images/LucysGallery(42).jpg",
    year: "2016-2023",
    impact: "Data Accessibility",
    tags: ["Open Data", "Policy", "Transparency", "Technology"],
    link: "#"
  },
  {
    id: 5,
    title: "Access to Justice Programs",
    category: "Justice Reform",
    description: "Developed and implemented comprehensive access to justice programs that have helped thousands of citizens navigate legal systems and access their rights, particularly focusing on marginalized communities.",
    image: "/images/LucysGallery(55).jpg",
    year: "2015-2023",
    impact: "10K+ Citizens Helped",
    tags: ["Justice", "Legal Aid", "Rights", "Community"],
    link: "#"
  },
  {
    id: 6,
    title: "International Recognition & Awards",
    category: "Recognition",
    description: "Received numerous international awards and recognition for outstanding contributions to governance, transparency, and social impact, including recognition from the United Nations and various international development organizations.",
    image: "/images/LucysGallery(68).jpg",
    year: "2015-2023",
    impact: "Global Recognition",
    tags: ["Awards", "Recognition", "International", "Excellence"],
    link: "#"
  },
  {
    id: 7,
    title: "Youth Empowerment Programs",
    category: "Advocacy",
    description: "Established comprehensive youth empowerment programs that have trained and mentored thousands of young leaders across Africa, equipping them with skills in governance, advocacy, and social change.",
    image: "/images/LucysGallery(75).jpg",
    year: "2014-2023",
    impact: "5K+ Youth Trained",
    tags: ["Youth", "Leadership", "Training", "Empowerment"],
    link: "#"
  },
  {
    id: 8,
    title: "Policy Advocacy & Reform",
    category: "Advocacy",
    description: "Led successful policy advocacy campaigns that have influenced governance reforms in multiple African countries, working closely with governments, civil society, and international partners to promote transparency and accountability.",
    image: "/images/LucysGallery(82).jpg",
    year: "2013-2023",
    impact: "Policy Influence",
    tags: ["Policy", "Advocacy", "Reform", "Governance"],
    link: "#"
  }
];

export const categories = ['All', 'Social Impact', 'Innovation', 'Justice Reform', 'Advocacy', 'Leadership', 'Recognition'];
