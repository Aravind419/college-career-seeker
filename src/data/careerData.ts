
// Career data model types
export interface Career {
  id: string;
  title: string;
  description: string;
  skills: string[];
  interests: string[];
  academicReqs: {
    minGPA: number;
    preferredSubjects: string[];
  };
  salaryRange: string;
  growthOutlook: string;
  workEnvironment: string[];
}

// Mock data for career recommendations
export const careers: Career[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    description: "Design, develop, and maintain software systems and applications.",
    skills: ["Programming", "Problem Solving", "Algorithms", "Data Structures", "Software Design"],
    interests: ["Technology", "Coding", "Innovation", "Mathematics"],
    academicReqs: {
      minGPA: 3.0,
      preferredSubjects: ["Computer Science", "Software Engineering", "Mathematics"]
    },
    salaryRange: "$70,000 - $150,000",
    growthOutlook: "Very High",
    workEnvironment: ["Tech Companies", "Startups", "Remote Work"]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analyze and interpret complex data to help organizations make better decisions.",
    skills: ["Statistics", "Machine Learning", "Data Analysis", "Programming", "Mathematics"],
    interests: ["Data", "Analytics", "Research", "Technology", "Mathematics"],
    academicReqs: {
      minGPA: 3.2,
      preferredSubjects: ["Statistics", "Mathematics", "Computer Science", "Data Science"]
    },
    salaryRange: "$85,000 - $165,000",
    growthOutlook: "High",
    workEnvironment: ["Tech Companies", "Research Organizations", "Consulting Firms"]
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    description: "Design user experiences that are intuitive, accessible, and enjoyable.",
    skills: ["UI Design", "User Research", "Prototyping", "Wireframing", "Visual Design"],
    interests: ["Design", "Creativity", "User Psychology", "Technology"],
    academicReqs: {
      minGPA: 2.8,
      preferredSubjects: ["Design", "Psychology", "Human-Computer Interaction"]
    },
    salaryRange: "$65,000 - $130,000",
    growthOutlook: "High",
    workEnvironment: ["Design Agencies", "Tech Companies", "Freelance"]
  },
  {
    id: "marketing-manager",
    title: "Marketing Manager",
    description: "Develop and execute marketing strategies to promote products and services.",
    skills: ["Marketing Strategy", "Communication", "Project Management", "Analytics", "Creativity"],
    interests: ["Marketing", "Business", "Communication", "Social Media"],
    academicReqs: {
      minGPA: 2.7,
      preferredSubjects: ["Marketing", "Business", "Communications"]
    },
    salaryRange: "$60,000 - $140,000",
    growthOutlook: "Moderate",
    workEnvironment: ["Corporations", "Marketing Agencies", "Startups"]
  },
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    description: "Analyze financial data and provide insights for investment decisions.",
    skills: ["Financial Analysis", "Data Analysis", "Research", "Modeling", "Reporting"],
    interests: ["Finance", "Economics", "Business", "Mathematics"],
    academicReqs: {
      minGPA: 3.2,
      preferredSubjects: ["Finance", "Economics", "Accounting", "Mathematics"]
    },
    salaryRange: "$65,000 - $125,000",
    growthOutlook: "Moderate",
    workEnvironment: ["Banks", "Investment Firms", "Corporations"]
  },
  {
    id: "healthcare-administrator",
    title: "Healthcare Administrator",
    description: "Manage healthcare facilities, services, and staff to ensure quality patient care.",
    skills: ["Leadership", "Healthcare Knowledge", "Organization", "Communication", "Policy"],
    interests: ["Healthcare", "Management", "Policy", "Public Service"],
    academicReqs: {
      minGPA: 3.0,
      preferredSubjects: ["Healthcare Administration", "Business", "Public Health"]
    },
    salaryRange: "$70,000 - $120,000",
    growthOutlook: "High",
    workEnvironment: ["Hospitals", "Clinics", "Healthcare Organizations"]
  },
  {
    id: "product-manager",
    title: "Product Manager",
    description: "Lead the development of products from conception to launch and beyond.",
    skills: ["Product Strategy", "Leadership", "Analysis", "Communication", "Technical Knowledge"],
    interests: ["Business", "Technology", "Innovation", "Strategy"],
    academicReqs: {
      minGPA: 3.0,
      preferredSubjects: ["Business", "Computer Science", "Engineering", "Economics"]
    },
    salaryRange: "$80,000 - $160,000",
    growthOutlook: "High",
    workEnvironment: ["Tech Companies", "Startups", "Product Companies"]
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    description: "Protect computer systems and networks from cyber threats and security breaches.",
    skills: ["Network Security", "Security Tools", "Risk Assessment", "Problem Solving", "Programming"],
    interests: ["Cybersecurity", "Technology", "Problem Solving", "Risk Management"],
    academicReqs: {
      minGPA: 3.0,
      preferredSubjects: ["Cybersecurity", "Computer Science", "IT"]
    },
    salaryRange: "$75,000 - $140,000",
    growthOutlook: "Very High",
    workEnvironment: ["Tech Companies", "Government", "Consulting Firms"]
  },
  {
    id: "hr-specialist",
    title: "HR Specialist",
    description: "Manage human resources functions including recruiting, employee relations, and policy development.",
    skills: ["People Management", "Communication", "Organization", "Policy Knowledge", "Conflict Resolution"],
    interests: ["Human Resources", "Psychology", "Business", "People"],
    academicReqs: {
      minGPA: 2.7,
      preferredSubjects: ["Human Resources", "Psychology", "Business"]
    },
    salaryRange: "$50,000 - $95,000",
    growthOutlook: "Moderate",
    workEnvironment: ["Corporations", "HR Firms", "Government"]
  },
  {
    id: "environmental-scientist",
    title: "Environmental Scientist",
    description: "Study environmental problems and develop solutions to protect the environment.",
    skills: ["Scientific Research", "Data Analysis", "Environmental Knowledge", "Field Work", "Reporting"],
    interests: ["Environment", "Science", "Research", "Sustainability"],
    academicReqs: {
      minGPA: 3.0,
      preferredSubjects: ["Environmental Science", "Biology", "Chemistry", "Earth Sciences"]
    },
    salaryRange: "$55,000 - $100,000",
    growthOutlook: "Moderate",
    workEnvironment: ["Government Agencies", "Research Organizations", "Consulting Firms"]
  }
];

// List of skills for the form
export const skillsList = [
  "Programming",
  "Data Analysis",
  "Communication",
  "Problem Solving",
  "Design",
  "Marketing",
  "Leadership",
  "Project Management",
  "Research",
  "Technical Writing",
  "Mathematics",
  "Statistics",
  "Financial Analysis",
  "Critical Thinking",
  "Teamwork",
  "Public Speaking",
  "Creativity",
  "Organization",
  "Customer Service",
  "Strategic Planning"
];

// List of interests for the form
export const interestsList = [
  "Technology",
  "Business",
  "Science",
  "Art & Design",
  "Healthcare",
  "Finance",
  "Education",
  "Environment",
  "Media & Communication",
  "Social Impact",
  "Engineering",
  "Mathematics",
  "Research",
  "Innovation",
  "Marketing",
  "Data",
  "Psychology",
  "Policy & Government",
  "Writing",
  "Entertainment"
];

// List of academic subjects for the form
export const academicSubjects = [
  "Computer Science",
  "Business",
  "Engineering",
  "Mathematics",
  "Statistics",
  "Psychology",
  "Biology",
  "Chemistry",
  "Economics",
  "Communications",
  "Design",
  "Education",
  "Environmental Science",
  "Finance",
  "Healthcare",
  "History",
  "Literature",
  "Marketing",
  "Physics",
  "Political Science"
];
