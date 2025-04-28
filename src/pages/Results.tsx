
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareerCard from '@/components/CareerCard';
import CategoryChart from '@/components/CategoryChart';
import CareerInsights from '@/components/CareerInsights';
import AlternativeCareerOptions from '@/components/AlternativeCareerOptions';
import LearningRoadmap from '@/components/LearningRoadmap';
import SkillGapAnalysis from '@/components/SkillGapAnalysis';
import { Button } from '@/components/ui/button';
import { getCareerCategoryAnalysis, generateCareerInsights, analyzeSkillGaps, generateLearningRoadmap } from '@/lib/recommendationEngine';
import { Career } from '@/data/careerData';
import { MessageCircle } from 'lucide-react';

// Type for recommendation items
interface Recommendation {
  career: Career;
  compatibilityScore: number;
  reasons: string[];
}

// Motivational quotes by career category
const careerQuotes = {
  "Technology": "The technology you use impresses no one. The experience you create with it is everything.",
  "Business": "Success in business requires training, discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were.",
  "Healthcare": "The art of medicine consists of amusing the patient while nature cures the disease.",
  "Creative": "Creativity is intelligence having fun.",
  "Sciences": "The science of today is the technology of tomorrow."
};

const Results = () => {
  const navigate = useNavigate();
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [categoryAnalysis, setCategoryAnalysis] = useState<Array<{category: string, score: number}>>([]);
  const [insights, setInsights] = useState<{
    topSkillsToFocus: string[];
    growthOutlook: string;
    workEnvironmentTypes: string[];
  } | null>(null);
  const [skillGaps, setSkillGaps] = useState<{
    missingSkills: string[];
    skillGapScore: number;
  } | null>(null);
  const [learningRoadmap, setLearningRoadmap] = useState<{
    shortTerm: string[];
    mediumTerm: string[];
    longTerm: string[];
  } | null>(null);
  const [motivationalQuote, setMotivationalQuote] = useState<string>("");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Retrieve recommendations from session storage
    const storedRecommendations = sessionStorage.getItem('careerRecommendations');
    
    if (storedRecommendations) {
      const parsedRecommendations: Recommendation[] = JSON.parse(storedRecommendations);
      setRecommendations(parsedRecommendations);
      
      // Generate additional insights
      const categoryAnalysisData = getCareerCategoryAnalysis(parsedRecommendations);
      setCategoryAnalysis(categoryAnalysisData);
      
      setInsights(generateCareerInsights(parsedRecommendations));
      
      // Get skill gaps analysis
      const skillGapsAnalysis = analyzeSkillGaps(parsedRecommendations[0]);
      setSkillGaps(skillGapsAnalysis);
      
      // Generate learning roadmap
      const roadmap = generateLearningRoadmap(parsedRecommendations[0]);
      setLearningRoadmap(roadmap);
      
      // Set motivational quote based on top category
      const topCategory = categoryAnalysisData[0]?.category || "Technology";
      setMotivationalQuote(careerQuotes[topCategory as keyof typeof careerQuotes] || 
        "The future depends on what you do today.");
    } else {
      // If no recommendations found, redirect to home
      navigate('/');
    }
    
    setLoading(false);
  }, [navigate]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-career-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your career profile...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-career-background">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          {/* Results Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-career-indigo mb-4">
              Your Career Match Results
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Based on your profile, here are your top career recommendations with compatibility scores.
            </p>
          </div>
          
          {/* Motivational Quote */}
          <div className="bg-career-light-blue bg-opacity-10 rounded-lg p-4 mb-12 text-center">
            <div className="flex items-center justify-center mb-2">
              <MessageCircle className="text-career-blue mr-2" size={20} />
              <h3 className="text-lg font-semibold text-career-blue">Career Inspiration</h3>
            </div>
            <p className="text-career-indigo italic">"{motivationalQuote}"</p>
          </div>
          
          {/* Top Career Matches */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-career-blue mb-6">
              Top Career Matches
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.slice(0, 3).map((rec, index) => (
                <CareerCard 
                  key={rec.career.id}
                  career={rec.career}
                  compatibilityScore={rec.compatibilityScore}
                  reasons={rec.reasons}
                  rank={index + 1}
                />
              ))}
            </div>
          </div>
          
          {/* Analytics and Insights */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Category Analysis Chart */}
            <div>
              <h2 className="text-2xl font-bold text-career-blue mb-6">
                Career Category Analysis
              </h2>
              <CategoryChart data={categoryAnalysis} />
            </div>
            
            {/* Career Insights */}
            <div>
              <h2 className="text-2xl font-bold text-career-blue mb-6">
                Career Insights & Next Steps
              </h2>
              {insights && (
                <CareerInsights 
                  topSkills={insights.topSkillsToFocus}
                  growthOutlook={insights.growthOutlook}
                  workEnvironments={insights.workEnvironmentTypes}
                />
              )}
            </div>
          </div>
          
          {/* Skill Gap Analysis */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-career-blue mb-6">
              Skill Gap Analysis
            </h2>
            {skillGaps && <SkillGapAnalysis skillGaps={skillGaps} />}
          </div>
          
          {/* Learning Roadmap */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-career-blue mb-6">
              Personalized Learning Roadmap
            </h2>
            {learningRoadmap && <LearningRoadmap roadmap={learningRoadmap} />}
          </div>
          
          {/* Alternative Career Options */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-career-blue mb-6">
              Alternative Career Paths
            </h2>
            <AlternativeCareerOptions careers={recommendations.slice(3, 6)} />
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <Button 
              onClick={() => navigate('/')} 
              className="bg-career-indigo hover:bg-career-blue text-white px-6 py-2 rounded-lg transition-colors mr-4"
            >
              Start Over
            </Button>
            <Button 
              onClick={() => navigate('/resources')} 
              className="bg-career-purple hover:bg-career-pink text-white px-6 py-2 rounded-lg transition-colors"
            >
              Explore Resources
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
