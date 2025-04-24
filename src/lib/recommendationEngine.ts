
import { Career, careers } from '@/data/careerData';

interface UserProfile {
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
  if (userProfile.academicPerformance >= career.academicReqs.minGPA) {
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
