
import { Career, careers } from '@/data/careerData';

interface UserProfile {
  name?: string;
  academicPerformance: number;
  skills: string[];
  interests: string[];
  academicSubjects: string[];
  personalValues?: string[];
}

// Calculate compatibility score between user profile and career
const calculateCompatibility = (
  userProfile: UserProfile,
  career: Career
): { score: number; reasons: string[] } => {
  let score = 0;
  const reasons: string[] = [];
  
  // Skills match (40% of score)
  const skillMatches = userProfile.skills.filter(skill => 
    career.skills.some(careerSkill => 
      careerSkill.toLowerCase().includes(skill.toLowerCase()) || 
      skill.toLowerCase().includes(careerSkill.toLowerCase())
    )
  );
  
  const skillScore = (skillMatches.length / Math.max(userProfile.skills.length, 1)) * 40;
  score += skillScore;
  
  if (skillMatches.length > 0) {
    reasons.push(`Your skills in ${skillMatches.slice(0, 3).join(', ')}${skillMatches.length > 3 ? ', etc.' : ''} align with this career.`);
  }
  
  // Interest match (30% of score)
  const interestMatches = userProfile.interests.filter(interest => 
    career.interests.some(careerInterest => 
      careerInterest.toLowerCase().includes(interest.toLowerCase()) || 
      interest.toLowerCase().includes(careerInterest.toLowerCase())
    )
  );
  
  const interestScore = (interestMatches.length / Math.max(userProfile.interests.length, 1)) * 30;
  score += interestScore;
  
  if (interestMatches.length > 0) {
    reasons.push(`Your interests in ${interestMatches.slice(0, 3).join(', ')}${interestMatches.length > 3 ? ', etc.' : ''} match well with this career.`);
  }
  
  // Academic match (20% of score)
  const academicSubjectMatches = userProfile.academicSubjects.filter(subject => 
    career.academicReqs.preferredSubjects.some(careerSubject => 
      careerSubject.toLowerCase().includes(subject.toLowerCase()) || 
      subject.toLowerCase().includes(careerSubject.toLowerCase())
    )
  );
  
  const academicSubjectScore = (academicSubjectMatches.length / Math.max(userProfile.academicSubjects.length, 1)) * 10;
  score += academicSubjectScore;
  
  if (academicSubjectMatches.length > 0) {
    reasons.push(`Your academic background in ${academicSubjectMatches.slice(0, 3).join(', ')} is beneficial for this role.`);
  }
  
  // GPA requirement (10% of score)
  // Note: adjusted for 10.0 scale
  const normalizedGPA = (userProfile.academicPerformance / 10) * 4; // Convert 10.0 scale to 4.0 scale
  if (normalizedGPA >= career.academicReqs.minGPA) {
    score += 10;
    reasons.push(`Your academic performance meets or exceeds the typical requirements for this career.`);
  } else {
    reasons.push(`This career typically requires a stronger academic performance, but other factors may compensate.`);
  }
  
  return { score, reasons };
};

// Get career recommendations based on user profile
export const getCareerRecommendations = (userProfile: UserProfile) => {
  // Calculate compatibility for each career
  const recommendations = careers.map(career => {
    const { score, reasons } = calculateCompatibility(userProfile, career);
    return {
      career,
      compatibilityScore: Math.round(score),
      reasons
    };
  });
  
  // Sort by compatibility score (descending)
  return recommendations.sort((a, b) => b.compatibilityScore - a.compatibilityScore);
};

// Get career category analysis
export const getCareerCategoryAnalysis = (recommendations: ReturnType<typeof getCareerRecommendations>) => {
  // Define career categories based on titles or other attributes
  const categories = [
    { name: "Technology", keywords: ["software", "data", "cybersecurity", "engineer", "developer"] },
    { name: "Business", keywords: ["marketing", "financial", "product", "manager", "business"] },
    { name: "Healthcare", keywords: ["healthcare", "medical", "health", "clinical"] },
    { name: "Creative", keywords: ["design", "ux", "ui", "creative", "artist"] },
    { name: "Sciences", keywords: ["scientist", "research", "environmental", "biology", "chemistry"] }
  ];
  
  // Calculate scores for each category
  const categoryScores = categories.map(category => {
    const relevantCareers = recommendations.filter(rec => 
      category.keywords.some(keyword => 
        rec.career.title.toLowerCase().includes(keyword.toLowerCase())
      )
    );
    
    const avgScore = relevantCareers.length > 0 
      ? relevantCareers.reduce((sum, rec) => sum + rec.compatibilityScore, 0) / relevantCareers.length 
      : 0;
    
    return {
      category: category.name,
      score: Math.round(avgScore)
    };
  });
  
  return categoryScores.sort((a, b) => b.score - a.score);
};

// Generate additional career insights
export const generateCareerInsights = (recommendations: ReturnType<typeof getCareerRecommendations>) => {
  const topSkills = new Map<string, number>();
  
  // Count skill occurrences in top recommendations
  recommendations.slice(0, 5).forEach(rec => {
    rec.career.skills.forEach(skill => {
      topSkills.set(skill, (topSkills.get(skill) || 0) + 1);
    });
  });
  
  // Convert to array and sort by frequency
  const skillsArray = Array.from(topSkills.entries())
    .map(([skill, count]) => ({ skill, count }))
    .sort((a, b) => b.count - a.count);
  
  return {
    topSkillsToFocus: skillsArray.slice(0, 5).map(item => item.skill),
    growthOutlook: recommendations[0]?.career.growthOutlook || "Moderate",
    workEnvironmentTypes: [...new Set(recommendations.slice(0, 3).flatMap(rec => rec.career.workEnvironment))]
  };
};

// Analyze skill gaps for a career recommendation
export const analyzeSkillGaps = (recommendation: ReturnType<typeof getCareerRecommendations>[0]) => {
  // Essential skills for the career
  const essentialSkills = recommendation.career.skills;
  
  // Extract the user's skills from the recommendation reasons
  const userSkillText = recommendation.reasons.find(r => r.includes("Your skills in"))?.replace("Your skills in ", "").replace(" align with this career.", "");
  const userSkills = userSkillText ? userSkillText.split(', ').filter(s => !s.includes('etc.')) : [];
  
  // Find missing skills
  const missingSkills = essentialSkills.filter(skill => 
    !userSkills.some(userSkill => 
      skill.toLowerCase().includes(userSkill.toLowerCase()) || 
      userSkill.toLowerCase().includes(skill.toLowerCase())
    )
  );
  
  // Calculate skill gap score (percentage of missing skills)
  const skillGapScore = Math.round((missingSkills.length / essentialSkills.length) * 100);
  
  return {
    missingSkills: missingSkills.slice(0, 6), // Limit to top 6 missing skills
    skillGapScore
  };
};

// Generate learning roadmap for a career recommendation
export const generateLearningRoadmap = (recommendation: ReturnType<typeof getCareerRecommendations>[0]) => {
  // Get the career and skill gaps
  const career = recommendation.career;
  const skillGaps = analyzeSkillGaps(recommendation);
  
  // Common learning activities by time frame
  const shortTermActivities = [
    `Complete an online course on ${skillGaps.missingSkills[0] || career.skills[0]}`,
    `Start a personal project using ${career.skills[1] || 'relevant skills'}`,
    `Join communities related to ${career.title}`,
    `Read books or articles about ${career.interests[0]}`,
    `Attend webinars on ${career.skills[2] || 'industry trends'}`
  ];
  
  const mediumTermActivities = [
    `Get certified in ${skillGaps.missingSkills[1] || career.skills[0]}`,
    `Contribute to open-source projects related to ${career.skills[1]}`,
    `Take advanced courses on ${skillGaps.missingSkills[0] || career.skills[2]}`,
    `Build a portfolio showcasing your ${career.skills[0]} skills`,
    `Network with professionals in the ${career.title} field`
  ];
  
  const longTermActivities = [
    `Pursue a specialized degree or certification in ${career.interests[0]}`,
    `Gain hands-on experience through internships or entry-level positions`,
    `Mentor others in ${career.skills[0]}`,
    `Develop expertise in ${skillGaps.missingSkills[2] || 'advanced areas'} of ${career.title}`,
    `Stay updated with emerging trends and technologies in ${career.title}`
  ];
  
  return {
    shortTerm: shortTermActivities,
    mediumTerm: mediumTermActivities,
    longTerm: longTermActivities
  };
};
